import { useEffect, useRef, useState } from "react";
import { siteContent as s } from "../data/siteContent";
import { Button, Container } from "./Primitives";
export function HeroVideo({
  src = s.hero.videoSrc,
  poster = s.hero.poster,
}: {
  src?: string;
  poster?: string;
}) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    if (src && !window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      void video.current?.play().catch(() => {});
  }, [src]);
  return (
    <section className="hero">
      {src && (
        <video
          ref={video}
          src={src}
          poster={poster || undefined}
          muted
          loop
          playsInline
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          aria-label={s.hero.caption}
        />
      )}
      <div className="hero-overlay" />
      <Container>
        <div className="hero-copy">
          <p className="eyebrow">{s.hero.eyebrow}</p>
          <h1>{s.hero.headline}</h1>
          <p className="hero-description">{s.hero.text}</p>
          <div className="button-row">
            <Button to="/contato#avaliacao" variant="light">
              {s.ctas.hero}
            </Button>
            <Button to="/tratamentos" variant="outline">
              {s.ctas.treatments}
            </Button>
          </div>
        </div>
        <div className="hero-bottom">
          <span>{s.brand.location}</span>
          {src ? (
            <button
              className="video-control"
              onClick={() =>
                playing
                  ? video.current?.pause()
                  : void video.current?.play().catch(() => {})
              }
            >
              {playing ? s.hero.pause : s.hero.play}
            </button>
          ) : (
            <span className="video-label">
              <span aria-hidden="true">▷</span>
              {s.hero.placeholder}
            </span>
          )}
        </div>
      </Container>
    </section>
  );
}
