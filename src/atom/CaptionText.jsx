import { motion } from "framer-motion";
const CaptionText = ({ init, ani, content, fontStyle }) => {
  return (
    <>
      <motion.div
        initial={init}
        whileInView={{ ...ani, transition: { duration: 0.6 } }}
        viewport={{ amount: "all", once: true }}
        className={`w-fit p-2 text-white text-3xl ${fontStyle}`}
      >
        {content}
      </motion.div>
    </>
  );
};

export default CaptionText;
