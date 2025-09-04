import AsideButton from "../atom/AsideButton";
const AsideFooter = ({ source }) => {
  return (
    <section
      style={{ backgroundImage: `url(${source})` }}
      className="w-full h-[250px] min-h-[150px] bg-center "
    >
      <div className={`h-full w-full`}>
        <div className="h-full flex gap-5 flex-col justify-center items-center text-white text-3xl font-bold">
          <div>쏘카가 새롭게 그려나가는 자유로운 이동</div>
          <AsideButton content={"브랜드 센터 바로가기"} />
        </div>
      </div>
    </section>
  );
};

export default AsideFooter;
