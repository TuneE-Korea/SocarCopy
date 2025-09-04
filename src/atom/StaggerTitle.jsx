import { motion, stagger } from "framer-motion";
const StaggerTitle = ({ content1, content2, size1, size2 }) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(0.4, { start: 0 }),
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      className="absolute top-64 flex flex-col gap-3 justify-center items-center"
    >
      <motion.h1
        variants={item}
        // md:text-5xl
        className={`text-white sm:text-4xl ${size1} lg:text-8xl font-semibold`}
      >
        {content1}
      </motion.h1>
      <motion.h1
        variants={item}
        // md:text-2xl
        className={`mt-5 text-white sm:text-xs ${size2} lg:text-4xl font-bold`}
      >
        {content2}
      </motion.h1>
    </motion.section>
  );
};
export default StaggerTitle;
