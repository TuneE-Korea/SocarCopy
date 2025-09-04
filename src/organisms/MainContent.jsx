import TitleLayer from "../molecules/TitleLayer";
import CaptionLayer from "../molecules/CaptionLayer";
import ServieceLayer from "../molecules/ServiceLayer";

const MainContent = () => {
  const hidden = { opacity: 0, y: 50 };
  const show = { opacity: 1, y: 0 };
  return (
    <>
      <TitleLayer before={hidden} after={show} />
      <CaptionLayer />
      <ServieceLayer before={hidden} after={show} />
    </>
  );
};

export default MainContent;
