export default function MultilineText({
  text,
  className,
  lineClassNames,
}: {
  text: string;
  className?: string;
  /** Extra classes per line index, e.g. to override spacing on a specific line. */
  lineClassNames?: string[];
}) {
  return (
    <>
      {text.split('\n').map((line, idx) => (
        <span key={idx} className={['block', className, lineClassNames?.[idx]].filter(Boolean).join(' ')}>
          {line}
        </span>
      ))}
    </>
  );
}
