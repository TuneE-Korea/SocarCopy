import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CaptionSlide = () => {
  // const container = {
  //   hidden: {},
  //   visible: {
  //     transition: {
  //       staggerChildren: 2, // 2초 간격으로 순차 실행
  //       delayChildren: 0.5,
  //     },
  //   },
  //   exit: {},
  // };
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
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {/*img태그가 아니라 background-url을 써야할 것 같다..*/}
        <SwiperSlide className="h-full rounded-md bg-center bg-cover bg-slideImg1">
          {/* div 태그 안에 width, height 설정 안해주면 배경이미지의 크기만큼 나타나지 않음(컨텐츠만큼만 보임)...ㅎㅎ */}
          <div className="flex justify-center items-center w-[1024px] h-[495px] text-red-500 text-7xl"></div>
        </SwiperSlide>
        <SwiperSlide className="h-full rounded-md bg-center bg-cover bg-slideImg2">
          <div className="flex justify-center items-center w-[1024px] h-[495px] text-red-500 text-7xl"></div>
        </SwiperSlide>
        <SwiperSlide className="h-full rounded-md bg-center bg-cover bg-slideImg3">
          <div className="flex justify-center items-center w-[1024px] h-[495px] text-red-500 text-7xl"></div>
        </SwiperSlide>
        <SwiperSlide className="h-full rounded-md bg-center bg-cover bg-slideImg4">
          <div className="flex justify-center items-center w-[1024px] h-[495px] text-red-500 text-7xl"></div>
        </SwiperSlide>
      </Swiper>
      {/* <motion.section
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative w-full h-96 overflow-hidden rounded-md"
      > */}
      {/* 진행 표시 점들 */}
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
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
      </motion.section> */}
    </>
  );
};

export default CaptionSlide;
