import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteContent as s, contact } from "../data/siteContent";
import { Button, Container } from "./Primitives";
export function Logo() {
  return (
    <Link className="logo" to="/" aria-label={s.brand.fullName}>
      <span>{s.brand.name}</span>
      <small>{s.brand.descriptor}</small>
    </Link>
  );
}
export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (open) {
      d?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      d?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <dialog
      ref={ref}
      id="mobile-menu"
      className="mobile-menu"
      aria-label={s.ui.menu}
      onCancel={onClose}
    >
      <div className="mobile-menu-top">
        <Logo />
        <button
          className="menu-toggle"
          onClick={onClose}
          aria-label={s.ui.closeMenu}
        >
          ×
        </button>
      </div>
      <nav>
        {s.nav.map((item, i) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            onClick={onClose}
          >
            <span className="small">0{i + 1}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Button to="/contato#avaliacao">{s.ctas.schedule}</Button>
      <p className="eyebrow">{s.brand.location}</p>
    </dialog>
  );
}
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(window.scrollY > 32);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">
        {s.ui.skip}
      </a>
      <header
        className={`site-header ${location.pathname === "/" && !scrolled ? "transparent" : ""}`}
      >
        <Container>
          <Logo />
          <nav className="desktop-nav" aria-label={s.ui.menu}>
            {s.nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <Button to="/contato#avaliacao">{s.ctas.schedule}</Button>
            <button
              className="menu-toggle"
              aria-label={s.ui.openMenu}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <div>
            <Logo />
            <p className="footer-slogan">{s.brand.slogan}</p>
          </div>
          <nav aria-label={s.brand.descriptor}>
            {s.nav.slice(1).map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div>
            <p className="eyebrow">{s.ui.contact}</p>
            <p>{contact.whatsapp}</p>
            <p>{contact.address[2]}</p>
            <p className="eyebrow">{s.ui.social}</p>
            <p>{contact.instagram}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{s.brand.portfolio}</span>
          <span>{s.brand.credit}</span>
        </div>
      </Container>
    </footer>
  );
}
