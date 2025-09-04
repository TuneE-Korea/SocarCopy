import { ArrowDownToLine } from "lucide-react";
const InstallButton = () => {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=socar.Socar"
      target="_blank"
    >
      <button className="bg-InstallationC w-fit rounded-xl px-8 py-6">
        <div className="flex justify-center items-center gap-1">
          <ArrowDownToLine color="white" />
          <span className="text-white font-bold text-lg">쏘카 앱 다운로드</span>
        </div>
      </button>
    </a>
  );
};

export default InstallButton;
