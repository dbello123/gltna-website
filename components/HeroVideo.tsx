export default function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        src="/video/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
      />
      {/* Dark green overlay for text legibility */}
      <div className="absolute inset-0 bg-green-950/70" />
    </div>
  );
}
