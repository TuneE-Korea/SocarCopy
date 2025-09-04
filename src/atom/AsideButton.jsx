import { MoveRight } from "lucide-react";
const AsideButton = ({ content }) => {
  return (
    <>
      <button className="flex items-center gap-7 bg-transparent border-2 px-7 py-5 rounded-xl">
        <span className="text-lg font-bold">{content}</span>
        {<MoveRight color="currentColor" strokeWidth={1} size={30} />}
      </button>
    </>
  );
};

export default AsideButton;
