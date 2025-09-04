import { Instagram, Facebook, Play } from "lucide-react";
const icons = {
  Instagram,
  Facebook,
  Play,
};

const SocialIconButton = ({ iconName }) => {
  const IconComponent = icons[iconName];
  return (
    <>
      <button className="flex justify-center items-center rounded-full text-black bg-white p-2">
        <IconComponent />
      </button>
    </>
  );
};

export default SocialIconButton;
