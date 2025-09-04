import FooterText from "../atom/FooterText";
import FooterTitle from "../atom/FooterTitle";
const FooterCaption = () => {
  return (
    <>
      <div className="flex ">
        <div className="flex justify-start gap-24">
          <div className="flex flex-col gap-3">
            <FooterTitle content={"회사"} />
            <FooterText content={"회사 소개"} />
            <FooterText content={"채용 공고"} />
          </div>
          <div className="flex flex-col gap-3">
            <FooterTitle content={"쏘카"} />
            <FooterText content={"이용 안내"} />
            <FooterText content={"요금 안내"} />
            <FooterText content={"혜택 안내"} />
            <FooterText content={"이용약관"} />
          </div>
          <div className="flex flex-col gap-3">
            <FooterTitle content={"문의"} />
            <FooterText content={"자주 하는 질문"} />
            <FooterText content={"제휴 문의"} />
          </div>
          <div className="flex flex-col gap-3">
            <FooterTitle content={"관련 웹사이트"} />
            <FooterText content={"(주)쏘카"} />
            <FooterText content={"쏘카플랜"} />
            <FooterText content={"모두의주차장"} />
            <FooterText content={"쏘카 엔터프라이즈"} />
            <FooterText content={"쏘카일레클"} />
            <FooterText content={"쏘카 항공권"} />
            <FooterText content={"쏘카 숙박"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCaption;
