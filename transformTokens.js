const fs = require('fs');
const path = require('path');
const { transformTokens } = require('token-transformer');

const tokensPath = path.resolve(__dirname, 'src/styles/tokens.json');
const cssOutputPath = path.resolve(__dirname, 'src/styles/tokens.css');
const tailwindOutputPath = path.resolve(__dirname, 'tailwind-tokens.js');

// Helper to set nested value
function setNestedValue(obj, path, value) {
  let current = obj;
  for (let i = 0; i < path.length; i++) {
    const key = path[i];
    if (i === path.length - 1) {
      current[key] = value;
    } else {
      current[key] = current[key] || {};
      current = current[key];
    }
  }
}

async function main() {
  try {
    const rawTokens = JSON.parse(fs.readFileSync(tokensPath, 'utf8'));

    // Transform tokens from 'core' to resolve aliases correctly
    const resolvedTokens = transformTokens(rawTokens.core, undefined, undefined, {
      expandTypography: true,
      expandShadow: true,
      expandComposition: true,
      preserveRawValue: false,
    });

    let cssVariables = [':root {'];
    let tailwindConfig = {
      colors: {},
      spacing: {},
      fontSize: {},
      borderRadius: {},
      lineHeight: {},
      boxShadow: {},
      opacity: {},
      fontFamily: {},
      fontWeight: {},
    };

    function processTokens(obj, prefix = []) {
      for (const key in obj) {
        if (key === '$value' || key === '$type' || key === '$description') continue;

        const token = obj[key];
        const currentPath = [...prefix, key];
        const cssVarName = `--${currentPath.join('-')}`;

        if (token && typeof token === 'object' && token.hasOwnProperty('$value')) {
          let value = token.$value;
          if (typeof value === 'object' && value !== null && value.hasOwnProperty('value')) {
            value = value.value;
          }

          // Skip if value is still an object (e.g. composite token that wasn't expanded into leaf values we can use directly in CSS var)
          // Actually, for typography, the value IS an object. We might want to skip adding it to CSS vars as a single string,
          // or we rely on the expanded properties if they exist.
          // token-transformer with expandTypography should have created sibling tokens?
          // No, debug output showed H1 has $value as object.
          // But we also have atomic tokens like h1, h2 in fontSizes.
          // Let's only add to CSS variables if value is string or number.
          if (typeof value === 'string' || typeof value === 'number') {
            cssVariables.push(`  ${cssVarName}: ${value};`);
          }

          let type = token.$type;
          if (typeof type === 'object' && type !== null && type.hasOwnProperty('value')) {
            type = type.value;
          }

          if (type === 'color') {
            setNestedValue(tailwindConfig.colors, currentPath, `var(${cssVarName})`);
          } else if (type === 'spacing' || type === 'dimension') {
            setNestedValue(tailwindConfig.spacing, currentPath, `var(${cssVarName})`);
          } else if (type === 'borderRadius') {
            setNestedValue(tailwindConfig.borderRadius, currentPath, `var(${cssVarName})`);
          } else if (type === 'fontSizes') {
            setNestedValue(tailwindConfig.fontSize, currentPath, `var(${cssVarName})`);
          } else if (type === 'lineHeights') {
            setNestedValue(tailwindConfig.lineHeight, currentPath, `var(${cssVarName})`);
          } else if (type === 'boxShadow' || type === 'dropShadow' || type === 'innerShadow') {
            // Shadows might be complex objects, skipping for now unless value is string
            if (typeof value === 'string') {
              setNestedValue(tailwindConfig.boxShadow, currentPath, `var(${cssVarName})`);
            }
          } else if (type === 'opacity') {
            setNestedValue(tailwindConfig.opacity, currentPath, `var(${cssVarName})`);
          } else if (type === 'fontFamilies') {
            setNestedValue(tailwindConfig.fontFamily, currentPath, `var(${cssVarName})`);
          } else if (type === 'fontWeights') {
            setNestedValue(tailwindConfig.fontWeight, currentPath, `var(${cssVarName})`);
          }
        } else if (token && typeof token === 'object') {
          processTokens(token, currentPath);
        }
      }
    }

    processTokens(resolvedTokens);

    cssVariables.push('}');

    // Write CSS
    fs.writeFileSync(cssOutputPath, cssVariables.join('\n'));
    console.log(`CSS variables written to ${cssOutputPath}`);

    // Write Tailwind Config
    const jsContent = `module.exports = ${JSON.stringify(tailwindConfig, null, 2)};`;
    fs.writeFileSync(tailwindOutputPath, jsContent);
    console.log(`Tailwind tokens written to ${tailwindOutputPath}`);
  } catch (error) {
    console.error('Error transforming tokens:', error);
    process.exit(1);
  }
}

main();
