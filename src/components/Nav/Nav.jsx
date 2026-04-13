import { useEffect, useState } from 'react';
import { LOGO } from '../../data/imagesData';
import { PHONE_DISPLAY, WHATSAPP_URL } from '../../constants/contact';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}
    >
      <a className={styles.brand} href="#topo" aria-label="Cruzeiro Agropecuária — início">
        <img className={styles.logo} src={LOGO} alt="" />
      </a>
      <div className={styles.cluster}>
        <nav className={styles.mid} aria-label="Seções">
          <a className={styles.link} href="#sobre">Sobre</a>
          <a className={styles.link} href="#fazendas">Fazendas</a>
          <a className={styles.link} href="#animais">Animais</a>
        </nav>
        <a
          className={styles.cta}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          title={`WhatsApp ${PHONE_DISPLAY}`}
        >
          Entrar em contato
        </a>
      </div>
    </header>
  );
}
