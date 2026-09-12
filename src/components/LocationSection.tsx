import { contact, siteContent as s } from "../data/siteContent";
import { Container, SectionHeader } from "./Primitives";
export function ContactDetails({ full = false }: { full?: boolean }) {
  return (
    <div className="contact-details">
      <address>
        <strong>{s.brand.fullName}</strong>
        {contact.address.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </address>
      <p className="small">{contact.addressNote}</p>
      <h3>{s.ui.hours}</h3>
      <dl className="hours">
        {contact.hours.map((x) => (
          <div key={x.day}>
            <dt>{x.day}</dt>
            <dd>{x.time}</dd>
          </div>
        ))}
      </dl>
      {full && (
        <>
          <dl className="contact-channels">
            {[
              [s.ui.phone, contact.phone],
              [s.ui.whatsapp, contact.whatsapp],
              [s.ui.instagram, contact.instagram],
            ].map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="small">{s.ui.pendingContact}</p>
        </>
      )}
    </div>
  );
}
export function MapPlaceholder() {
  return (
    <div className="map-placeholder" role="img" aria-label={s.ui.map}>
      <span className="map-pin" aria-hidden="true">
        V
      </span>
      <p>{s.ui.map}</p>
      <span className="small">{s.ui.mapSub}</span>
    </div>
  );
}
export function LocationSection({ full = false }: { full?: boolean }) {
  return (
    <section className="section">
      <Container>
        <SectionHeader {...s.sections.location} />
        <div className="location-grid">
          <ContactDetails full={full} />
          <MapPlaceholder />
        </div>
      </Container>
    </section>
  );
}
