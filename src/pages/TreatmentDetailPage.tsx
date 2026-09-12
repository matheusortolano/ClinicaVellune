import { useParams, Link } from "react-router-dom";
import { siteContent as s, treatments } from "../data/siteContent";
import { formatPrice } from "../data/siteContent";
import {
  Container,
  SectionHeader,
  Breadcrumb,
  ImagePlaceholder,
  Button,
} from "../components/Primitives";
import { TreatmentCard } from "../components/Cards";
import { Seo } from "../components/Seo";
import { NotFoundPage } from "./InfoPages";
export default function TreatmentDetailPage() {
  const { slug } = useParams();
  const t = treatments.find((x) => x.slug === slug && x.detail);
  if (!t) return <NotFoundPage />;
  return (
    <>
      <Seo title={t.name} description={t.longDescription} />
      <section className="detail-hero">
        <Container>
          <Breadcrumb
            items={[
              { label: s.nav[1].label, to: "/tratamentos" },
              { label: t.name },
            ]}
          />
          <div className="detail-hero-grid">
            <div>
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.headline}</h1>
              <p>{t.longDescription}</p>
              <Button to={`/contato?tratamento=${t.slug}#avaliacao`}>
                {t.cta}
              </Button>
            </div>
            <ImagePlaceholder media={t.image} ratio="4 / 5" />
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="detail-body">
          <div>
            <SectionHeader title={s.ui.indications} />
            <ul className="indications">
              {t.indications.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <SectionHeader title={s.ui.how} description={t.howItWorks} />
            <ul className="benefits">
              {t.benefits.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <SectionHeader title={s.ui.techniques} />
            <div className="tags">
              {t.technologies.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
            <SectionHeader title={s.ui.audience} description={t.audience} />
          </div>
          <aside className="investment">
            <p className="eyebrow">{s.ui.investment}</p>
            <h2>{t.name}</h2>
            <p className="price">{formatPrice(t.price)}</p>
            <p className="small">{s.ui.priceNote}</p>
            <Button to={`/contato?tratamento=${t.slug}#avaliacao`}>
              {t.cta}
            </Button>
          </aside>
        </Container>
      </section>
      {t.gallery.length > 0 && (
        <section className="section">
          <Container>
            <SectionHeader title={s.ui.gallery} />
            <div className="grid grid--three">
              {t.gallery.map((media, i) => (
                <ImagePlaceholder key={i} media={media} />
              ))}
            </div>
          </Container>
        </section>
      )}
      <section className="section secondary">
        <Container>
          <SectionHeader title={s.ui.others} />
          <div className="grid grid--three">
            {treatments
              .filter((x) => x.detail && x.slug !== slug)
              .slice(0, 3)
              .map((x) => (
                <TreatmentCard key={x.slug} treatment={x} />
              ))}
          </div>
          <Link className="text-link section-action" to="/tratamentos">
            {s.ctas.treatments} ↗
          </Link>
        </Container>
      </section>
    </>
  );
}
