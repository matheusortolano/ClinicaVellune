import { siteContent as s } from "../data/siteContent";
import { Button, Container } from "./Primitives";

export function HeroVideo() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url("${s.hero.backgroundImage}")`,
      }}
    >
      <div className="hero-overlay" />

      <Container>
        <div className="hero-copy">
          <h1>{s.hero.headline}</h1>

          <p className="hero-description">
            {s.hero.text}
          </p>

          <div className="button-row">
            <Button
              to="/contato#avaliacao"
              variant="light"
            >
              {s.ctas.hero}
            </Button>

            <Button
              to="/tratamentos"
              variant="outline"
            >
              {s.ctas.treatments}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}