import LogoBox from "../atom/LogoBox";
import MenuButton from "../atom/MenuButton";

const HeaderLayer = () => {
  return (
    <>
      <div className="flex justify-between w-11/12">
        <LogoBox />
        <MenuButton></MenuButton>
      </div>
    </>
  );
};

export default HeaderLayer;
