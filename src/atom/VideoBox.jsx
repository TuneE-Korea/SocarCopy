const VideoBox = () => {
  return (
    <>
      <video autoPlay loop muted playsInline>
        <source src="/video/MainVideo.mp4" type="video/mp4"></source>
      </video>
    </>
  );
};

export default VideoBox;
