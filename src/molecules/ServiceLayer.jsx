import CaptionText from "../atom/CaptionText";
import ServiceCard from "../atom/ServiceCard";
const ServiceLayer = ({ before, after }) => {
  return (
    <>
      <section className="w-full h-fit bg-SecondSectionC flex justify-center items-center gap-0">
        <div className="w-full max-w-5xl max-md:px-4 flex flex-col items-start">
          <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col items-start ml-0 mt-32 pb-20">
              <CaptionText
                init={before}
                ani={after}
                content={"끊임없이 확장되는 이동 경험"}
                fontStyle={"font-medium"}
              />
              <CaptionText
                init={before}
                ani={after}
                content={"쏘카의 다양한 서비스"}
                fontStyle={"font-bold"}
              />
            </div>
            <div className="grid grid-cols-2 gap-y-10 w-full pb-20">
              <div className="group">
                <ServiceCard
                  title={"쏘카플랜"}
                  content1={"한 달 이상 원하는 만큼 내 차처럼 이용하는"}
                  content2={"중장기 차량 대여 서비스"}
                  source={"/image/photo1.jpg"}
                  color={"text-white"}
                  className={"group"}
                ></ServiceCard>
              </div>
              <div className="group">
                <ServiceCard
                  title={"모두의 주차장"}
                  content1={"주차장 정보부터 할인까지 한번에 받는"}
                  content2={"주차장 연계 서비스"}
                  source={"/image/photo2.jpg"}
                  color={"text-white"}
                  className={"group"}
                ></ServiceCard>
              </div>
              <div className="group">
                <ServiceCard
                  title={"쏘카 엔터프라이즈"}
                  content1={"쏘카의 이동상품을 맞춤 제공하는"}
                  content2={"기업 전용 서비스"}
                  source={"/image/photo3.jpg"}
                  color={"text-white"}
                ></ServiceCard>
              </div>
              <div className="group">
                <ServiceCard
                  title={"쏘카일레클"}
                  content1={"라스트마일 이동을 책임지는"}
                  content2={"전기자전거 공유 서비스"}
                  source={"/image/photo4.jpg"}
                  color={"text-black"}
                ></ServiceCard>
              </div>
              <div className="group">
                <ServiceCard
                  title={"쏘카항공권"}
                  content1={"국내 항공이동을 가장 합리적으로"}
                  content2={"항공 연계 서비스"}
                  source={"/image/photo5.jpg"}
                  color={"text-white"}
                ></ServiceCard>
              </div>
              <div className="group">
                <ServiceCard
                  title={"쏘카 숙박"}
                  content1={"숙박 예약하면 카셰어링 쿠폰을 주는"}
                  content2={"숙박 연계 서비스"}
                  source={"/image/photo6.jpg"}
                  color={"text-white"}
                ></ServiceCard>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceLayer;
