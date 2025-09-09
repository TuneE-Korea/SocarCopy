        첫 번째 이미지
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
