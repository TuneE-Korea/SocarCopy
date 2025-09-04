import { motion } from "framer-motion";

const StaggerCaption = ({ content1, content2, fontStyle1, fontStyle2 }) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
        delayChilderen: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.8, once: true }}
      className="w-full flex flex-col items-start py-20"
    >
      <motion.div
        variants={item}
        onViewportEnter={() => console.log("애니메이션 시작!")} // 디버깅용
        className={`w-fit p-2 text-white text-3xl ${fontStyle1}`}
      >
        {content1}
      </motion.div>
      <motion.div
        variants={item}
        onViewportEnter={() => console.log("애니메이션 시작!")} // 디버깅용
        className={`w-fit p-2 text-white text-3xl ${fontStyle2}`}
      >
        {content2}
      </motion.div>
    </motion.section>
  );
};

export default StaggerCaption;
