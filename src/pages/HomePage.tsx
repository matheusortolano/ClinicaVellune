import {
  siteContent as s,
  treatments,
  technologies,
  results,
  testimonials,
} from "../data/siteContent";
import {
  Container,
  SectionHeader,
  CTASection,
  Button,
} from "../components/Primitives";
import { HeroVideo } from "../components/HeroVideo";
import {
  TreatmentCard,
  TechnologyCard,
  ResultCard,
  TestimonialCard,
} from "../components/Cards";
import { LocationSection } from "../components/LocationSection";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";

function Hook() {
  return (
    <section className="hook-video-section">
      <video
        className="hook-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="/videos/essencia-vellune.mp4"
          type="video/mp4"
        />
      </video>
    </section>
  );
}
function Care() {
  return (
    <section className="section care-section">
      <Container>
        <SectionHeader {...s.care} />
        <div className="care-grid">
          {s.care.items.map(([title, text], i) => (
            <article key={title}>
              <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default function HomePage() {
  return (
    <>
      <Seo {...s.seo.home} />
      <HeroVideo />
      <Hook />
      <Care />
      <section className="section">
        <Container>
          <SectionHeader {...s.sections.treatments} />
          <div className="grid grid--three">
            {treatments.map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </div>
          <p className="small section-note">{s.ui.priceNote}</p>
        </Container>
      </section>
      <section className="section secondary">
        <Container>
          <SectionHeader {...s.sections.technologies} />
          <div className="grid grid--three">
            {technologies.map((t) => (
              <TechnologyCard key={t.slug} technology={t} />
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionHeader {...s.sections.results} />
          <div className="grid grid--three">
            {results.slice(0, 3).map((r) => (
              <ResultCard key={r.id} result={r} />
            ))}
          </div>
          <div className="section-action">
            <Button to="/resultados" variant="outline">
              {s.ctas.allResults}
            </Button>
          </div>
        </Container>
      </section>
      <section className="section secondary">
        <Container>
          <SectionHeader {...s.sections.testimonials} />
          <div className="grid grid--three">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
      <LocationSection />
      <ContactForm />
    </>
  );
}
