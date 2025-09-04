import { easeIn, easeOut, motion, stagger } from "framer-motion";
const CaptionModal = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 2, // 2초 간격으로 순차 실행
        delayChildren: 0.5,
      },
    },
    exit: {},
  };
  //fds
  // const item = {
  //   hidden: { opacity: 0, x: "100%" }, // 오른쪽에서 시작
  //   visible: {
  //     opacity: 1,
  //     x: "0%", // 중앙으로 이동
  //     transition: { duration: 0.6, ease: easeOut },
  //   },
  //   exit: {
  //     opacity: 0,
  //     x: "-100%", // 왼쪽으로 퇴장
  //     transition: { duration: 0.6, ease: easeIn },
  //   },
  // };

  return (
    <>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative w-full h-96 overflow-hidden rounded-md"
      >
        {/* 첫 번째 이미지 */}
        <motion.div
          className="absolute inset-0 bg-[url('/image/photo7.jpg')] bg-cover bg-center rounded-md"
          initial={{ x: "100%", opacity: 0 }}
          animate={{
            x: "0%",
            opacity: 1,
            transition: { delay: 0.5, duration: 0.6, ease: easeOut },
          }}
          style={{ zIndex: 4 }}
        />

        {/* 두 번째 이미지 */}
        <motion.div
          className="absolute inset-0 bg-[url('/image/photo8.jpg')] bg-cover bg-center rounded-md"
          initial={{ x: "100%", opacity: 0 }}
          animate={{
            x: ["100%", "0%", "-100%"],
            opacity: [0, 1, 1, 0],
            transition: {
              delay: 2.5,
              duration: 2.6,
              times: [0, 0.23, 0.77, 1], // 애니메이션 타이밍 조절
              ease: easeOut,
            },
          }}
          style={{ zIndex: 3 }}
        />

        {/* 세 번째 이미지 */}
        <motion.div
          className="absolute inset-0 bg-[url('/image/photo9.jpg')] bg-cover bg-center rounded-md"
          initial={{ x: "100%", opacity: 0 }}
          animate={{
            x: ["100%", "0%", "-100%"],
            opacity: [0, 1, 1, 0],
            transition: {
              delay: 4.5,
              duration: 2.6,
              times: [0, 0.23, 0.77, 1],
              ease: easeOut,
            },
          }}
          style={{ zIndex: 2 }}
        />

        {/* 네 번째 이미지 */}
        <motion.div
          className="absolute inset-0 bg-[url('/image/photo10.jpg')] bg-cover bg-center rounded-md"
          initial={{ x: "100%", opacity: 0 }}
          animate={{
            x: ["100%", "0%"],
            opacity: [0, 1],
            transition: {
              delay: 6.5,
              duration: 0.6,
              ease: easeOut,
            },
          }}
          style={{ zIndex: 1 }}
        />

        {/* 진행 표시 점들 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          <motion.div
            className="w-2 h-2 bg-white bg-opacity-50 rounded-full"
            animate={{
              backgroundColor: [
                "rgba(255,255,255,0.5)",
                "rgba(255,255,255,1)",
                "rgba(255,255,255,0.5)",
              ],
              transition: { duration: 2, delay: 0.5 },
            }}
          />
          <motion.div
            className="w-2 h-2 bg-white bg-opacity-50 rounded-full"
            animate={{
              backgroundColor: [
                "rgba(255,255,255,0.5)",
                "rgba(255,255,255,1)",
                "rgba(255,255,255,0.5)",
              ],
              transition: { duration: 2, delay: 2.5 },
            }}
          />
          <motion.div
            className="w-2 h-2 bg-white bg-opacity-50 rounded-full"
            animate={{
              backgroundColor: [
                "rgba(255,255,255,0.5)",
                "rgba(255,255,255,1)",
                "rgba(255,255,255,0.5)",
              ],
              transition: { duration: 2, delay: 4.5 },
            }}
          />
          <motion.div
            className="w-2 h-2 bg-white bg-opacity-50 rounded-full"
            animate={{
              backgroundColor: ["rgba(255,255,255,0.5)", "rgba(255,255,255,1)"],
              transition: { duration: 1, delay: 6.5 },
            }}
          />
        </div>
      </motion.section>
    </>
  );
};

export default CaptionModal;
