const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');
const enDir = path.join(outDir, 'en');

// Function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Ensure "en" folder exists before copying
if (fs.existsSync(enDir)) {
  console.log('Copying English build output to root for "as-needed" routing...');
  copyDir(enDir, outDir);
  console.log('Copy complete.');
} else {
  console.warn('Warning: "out/en" directory not found. Skipping copy step.');
}
