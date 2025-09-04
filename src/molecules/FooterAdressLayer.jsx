import FooterText from "../atom/FooterText";
import FooterTitle from "../atom/FooterTitle";
import SocialIconButton from "../atom/SocialIconButton";

const FooterAdressLayer = () => {
  return (
    <div className="md:w-[735px]">
      <div className="w-full flex flex-col gap-5 items-start">
        <FooterTitle content={"(주)쏘카"} />
        <div className="flex flex-col gap-2">
          <FooterText
            content={
              "제주특별자치도 제주시 연미길 42 (오라삼동) | TEL : 1661-3315 | FAX : 02-6969-9333"
            }
          />
          <FooterText content={"통신판매업 사업자정보 확인"} />
          <FooterText
            content={
              "신고번호 : 2019-제주오라-3호 | 사업자등록번호 : 616-81-90529 | 대표자 : 박재욱"
            }
          />
        </div>
      </div>
      <div className="w-full flex gap-7 py-14">
        <FooterText content={"개인정보처리방침"} />
        <FooterText content={"위치정보 이용약관"} />
        <FooterText content={"차량손해면책제도"} />
      </div>
      <div className="w-full flex gap-2">
        <SocialIconButton iconName={"Instagram"} />
        <SocialIconButton iconName={"Facebook"} />
        <SocialIconButton iconName={"Play"} />
      </div>
    </div>
  );
};

export default FooterAdressLayer;
