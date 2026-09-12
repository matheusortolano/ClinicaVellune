import { useState } from "react";
import { Link } from "react-router-dom";
import {
  siteContent as s,
  treatments,
  technologies,
  results,
} from "../data/siteContent";
import {
  Container,
  SectionHeader,
  InternalHero,
  CTASection,
  ImagePlaceholder,
  Button,
} from "../components/Primitives";
import { TreatmentCard, ResultCard } from "../components/Cards";
import { FAQAccordion } from "../components/FAQAccordion";
import { LocationSection } from "../components/LocationSection";
import { ContactForm } from "../components/ContactForm";
import { Seo } from "../components/Seo";
export function TreatmentsPage() {
  const p = s.pages.treatments;
  return (
    <>
      <Seo {...p} />
      <InternalHero {...p} eyebrow={s.nav[1].label} />
      <section className="section">
        <Container>
          <div className="grid grid--three">
            {treatments
              .filter((t) => t.detail)
              .map((t) => (
                <TreatmentCard key={t.slug} treatment={t} />
              ))}
          </div>
          <p className="small section-note">{s.ui.priceNote}</p>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
export function TechnologiesPage() {
  const p = s.pages.technologies;
  return (
    <>
      <Seo {...p} />
      <InternalHero {...p} eyebrow={s.nav[2].label} />
      {technologies.map((t, i) => (
        <section
          className={`section technology-detail ${i % 2 ? "secondary" : ""}`}
          key={t.slug}
          id={t.slug}
        >
          <Container className="technology-detail-grid">
            <ImagePlaceholder media={t.image} ratio="4 / 5" />
            <div>
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <SectionHeader title={t.name} description={t.description} />
              <h3>{s.ui.applications}</h3>
              <ul className="indications">
                {t.applications.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <h3>{s.ui.related}</h3>
              <div className="related-links">
                {t.related.map((slug) => (
                  <Link
                    className="text-link"
                    key={slug}
                    to={`/tratamentos/${slug}`}
                  >
                    {treatments.find((x) => x.slug === slug)?.name} ↗
                  </Link>
                ))}
              </div>
              <Button to="/contato#avaliacao">{s.ctas.schedule}</Button>
            </div>
          </Container>
        </section>
      ))}
      <CTASection />
    </>
  );
}
export function ResultsPage() {
  const [filter, setFilter] = useState(s.ui.all);
  const p = s.pages.results;
  const categories = [s.ui.all, ...new Set(results.map((r) => r.category))];
  const visible = results.filter(
    (r) => filter === s.ui.all || r.category === filter,
  );
  return (
    <>
      <Seo {...p} />
      <InternalHero {...p} eyebrow={s.nav[3].label} />
      <section className="section">
        <Container>
          <div className="filters" role="group" aria-label={s.nav[1].label}>
            {categories.map((c) => (
              <button
                key={c}
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="grid grid--three" aria-live="polite">
            {visible.map((r) => (
              <ResultCard key={r.id} result={r} />
            ))}
          </div>
          <p className="disclaimer">{p.disclaimer}</p>
        </Container>
      </section>
      <CTASection />
    </>
  );
}
export function FAQPage() {
  const p = s.pages.faq;
  return (
    <>
      <Seo {...p} />
      <InternalHero {...p} eyebrow={s.nav[4].label} />
      <section className="section">
        <Container className="faq-container">
          <FAQAccordion />
        </Container>
      </section>
      <CTASection />
    </>
  );
}
export function ContactPage() {
  const p = s.pages.contact;
  return (
    <>
      <Seo {...p} />
      <InternalHero {...p} eyebrow={s.nav[5].label} />
      <LocationSection full />
      <ContactForm />
    </>
  );
}
export function NotFoundPage() {
  const p = s.pages.notFound;
  return (
    <>
      <Seo {...p} />
      <InternalHero {...p} eyebrow="404" />
      <section className="section">
        <Container>
          <Button to="/">{s.ctas.back}</Button>
        </Container>
      </section>
    </>
  );
}
