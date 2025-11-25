import imgImage from "figma:asset/01f807914ab75166a10a72c83778aeef4c8d04e7.png";

export default function Container() {
  return (
    <div className="content-stretch flex flex-col items-center relative size-full" data-name="Container">
      <div className="h-[349.967px] relative shrink-0 w-[1200px]" data-name="Image">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[162.15%] left-0 max-w-none top-[-60.39%] w-full" src={imgImage} />
        </div>
      </div>
    </div>
  );
}