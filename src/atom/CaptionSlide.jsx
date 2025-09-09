import { easeIn, easeOut, motion, stagger } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Fullscreen } from "lucide-react";

const CaptionSlide = () => {
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
  const item = {
    hidden: { opacity: 0, x: "100%" }, // 오른쪽에서 시작
    visible: {
      opacity: 1,
      x: "0%", // 중앙으로 이동
      transition: { duration: 0.6, ease: easeOut },
    },
    exit: {
      opacity: 0,
      x: "-100%", // 왼쪽으로 퇴장
      transition: { duration: 0.6, ease: easeIn },
    },
  };

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/*img태그가 아니라 background-url을 써야할 것 같다..*/}
        <SwiperSlide className="absolute inset-0 bg-cover bg-center">
          <img
            className="w-full h-full rounded-md"
            src="/image/photo7.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="absolute inset-0 bg-cover bg-center">
          <img
            className="w-full h-full rounded-md"
            src="/image/photo8.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="absolute inset-0 bg-cover bg-center">
          <img
            className="w-full h-full rounded-md"
            src="/image/photo9.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="absolute inset-0 bg-cover bg-center">
          <img
            className="w-full h-full rounded-md"
            src="/image/photo10.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
      <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative w-full h-96 overflow-hidden rounded-md"
      >
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

export default CaptionSlide;
