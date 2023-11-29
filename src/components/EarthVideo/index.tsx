function EarthVideo () {
  return (
    <video
      className="h-[100vh] w-full object-cover animate-clip-from-top-animation"
      autoPlay
      muted
      loop
    >
      <source src="./movies/earth-video2.webm" type="video/webm" />
      <source src="./movies/earth-video.mp4" type="video/mp4" />
    </video>
  )
}
  
export default EarthVideo