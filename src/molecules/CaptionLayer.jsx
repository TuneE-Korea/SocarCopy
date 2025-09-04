import StaggerCaption from "../atom/StaggerCaption";
const CaptionLayer = () => {
  return (
    <>
      <section className="w-full h-screen bg-SecondSectionC flex justify-center items-center gap-0">
        <div className="w-full max-w-5xl max-md:px-4 flex flex-col items-start">
          <div className="w-full flex flex-col items-center">
            <div className="w-full h-fit flex flex-col items-start">
              <StaggerCaption
                content1={"차가 필요한 모든 순간"}
                fontStyle1={"font-medium"}
                content2={"쏘카 카셰어링"}
                fontStyle2={"font-bold"}
              />
              <div className="w-full">
                {/* <CaptionModal></CaptionModal> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaptionLayer;
