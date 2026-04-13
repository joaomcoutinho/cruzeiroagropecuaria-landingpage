import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './Hero.module.css';

const HERO_IMAGE = `${import.meta.env.BASE_URL}hero-principal.png`;

export default function Hero() {
  const rEyebrow = useFadeIn(0);
  const rRule = useFadeIn(55);
  const rTitle = useFadeIn(110);
  const rLead = useFadeIn(175);
  const rCtas = useFadeIn(240);

  return (
    <section id="topo" className={styles.hero}>
      <div className={styles.left}>
        <p ref={rEyebrow} className={`fade-in ${styles.eyebrow}`}>
          Tradição que atravessa gerações
        </p>
        <div ref={rRule} className={`fade-in ${styles.titleRule}`} aria-hidden />
        <h1 ref={rTitle} className={`fade-in ${styles.title}`}>
          Tradição e <em className={styles.em}>genética</em> que geram resultado
        </h1>
        <p ref={rLead} className={`fade-in ${styles.lead}`}>
          Cria, recria e engorda com foco em genética.
          <br />
          Três fazendas integradas e negociação direta com quem vive o campo.
        </p>
        <div ref={rCtas} className={`fade-in ${styles.ctas}`}>
          <a className={styles.btnPrimary} href="#fazendas">
            Conheça nossas fazendas
          </a>
          <a className={styles.linkSec} href="#contato">Fale com a gente →</a>
        </div>
      </div>

      <div className={styles.bg} aria-hidden>
        <div className={styles.imgKen}>
          <img
            className={styles.img}
            src={HERO_IMAGE}
            alt="Rebanho Nelore ao pôr do sol em pastagem verde"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className={styles.overlayBlend} />
        <div className={styles.overlayMist} />
        <div className={styles.overlayWarm} />
      </div>
    </section>
  );
}
