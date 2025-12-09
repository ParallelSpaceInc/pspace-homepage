interface TitleProps {
  title: string;
}

function Title({ title }: TitleProps) {
  return (
    <div className='title_container flex flex-col items-center'>
      <h2 className='title text-[#00274a] text-center font-bold text-xl md:text-3xl'>{title}</h2>
      <div
        className='underline mt-2'
        style={{
          width: '100%',
          height: '0.25rem',
          background: 'linear-gradient(90deg, #04b2d9 0%, #023859 100%)',
        }}
      ></div>
    </div>
  );
}

export default Title;
