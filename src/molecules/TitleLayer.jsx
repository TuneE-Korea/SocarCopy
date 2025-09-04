import VideoBox from "../atom/VideoBox";
import InstallButton from "../atom/InstllButton";
import StaggerTitle from "../atom/StaggerTitle";
const TitleLayer = () => {
  return (
    <>
      <section className="h-max relative bg-transparent flex flex-col justify-center items-center gap-2">
        <div className="relative flex justify-center items-center">
          <VideoBox className="absolute top-0 left-0 w-full h-full object-cover" />
          <StaggerTitle
            content1={"Lifetime Mobility"}
            size1={"md:text-5xl"}
            content2={"라이프타임 모빌리티 플랫폼, 쏘카"}
            size2={"md:text-2xl"}
          />
          <div className="absolute right-14 bottom-52">
            <InstallButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default TitleLayer;
