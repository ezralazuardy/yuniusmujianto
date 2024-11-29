export default function Video() {
  return (
    <div className="relative min-h-screen video-background">
      <div className="absolute z-10 top-0 start-0 h-full w-full">
        <video autoPlay loop muted className="video-background">
          <source src="videos/home.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute z-20 top-0 start-0 h-full w-full bg-black/60"></div>
    </div>
  );
}
