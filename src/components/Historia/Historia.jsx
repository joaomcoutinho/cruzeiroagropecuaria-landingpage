import { IMG_ACUDE, IMG_PASTANDO, IMG_HERO, IMG_CAMPO } from '../../assets/imagesData';
import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './Historia.module.css';

function TinyLeaf() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3C7 7 4 12 4 17c0 2 1 3 3 3 5 0 10-3 14-8-5-1-9-4-9-9z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

const blocks = [
  {
    label: 'Raízes',
    title: 'Tudo começa com uma porção de terra',
    body:
      'A história da Cruzeiro nasce no chão: água, cerca e respeito ao tempo do rebanho. Cada decisão no campo vem de quem vive o dia a dia da pecuária.',
    img: IMG_ACUDE,
    cap: 'Açude e cerca — Fazenda Bom Retiro',
  },
  {
    label: 'Crescimento',
    title: 'O rebanho cresceu. A responsabilidade, também.',
    body:
      'Com o rebanho, veio a exigência de manejo, nutrição e genética. Hoje integramos cria, recria e engorda com o mesmo cuidado de sempre.',
    img: IMG_PASTANDO,
    cap: 'Nelore em pasto aberto',
  },
  {
    label: 'Hoje',
    title: 'Três fazendas. Uma única identidade.',
    body:
      'São Mateus, Engenho Cruzeiro e Bom Retiro trabalham em conjunto — da cria ao melhoramento genético — com negociação direta com o proprietário.',
    img: IMG_HERO,
    cap: 'Rebanho ao entardecer',
  },
];

function TimelineRow({ block, index }) {
  const ref = useFadeIn(index * 100);
  const alt = index % 2 === 1;

  return (
    <article
      ref={ref}
      className={`fade-in ${styles.row} ${alt ? styles.rowAlt : ''}`}
    >
      <figure className={styles.figure}>
        <img src={block.img} alt="" />
        <div className={styles.figOverlay} />
        <figcaption className={styles.caption}>{block.cap}</figcaption>
      </figure>
      <div className={styles.copy}>
        <div className={styles.marker}>
          <span className={styles.dot} />
          <span className={styles.label}>{block.label}</span>
        </div>
        <h3 className={styles.h3}>{block.title}</h3>
        <p className={styles.body}>{block.body}</p>
        <div className={styles.iconRow}>
          <TinyLeaf />
          <TinyLeaf />
        </div>
      </div>
    </article>
  );
}

export default function Historia() {
  const rIntro = useFadeIn(0);
  const rQuote = useFadeIn(0);
  const bg = `url(${IMG_CAMPO})`;

  return (
    <section
      id="sobre"
      className={styles.section}
      style={{ '--hist-bg': bg }}
    >
      <div className={styles.inner}>
        <div ref={rIntro} className={`fade-in ${styles.intro}`}>
          <p className={styles.eyebrow}>História das fazendas</p>
          <h2 className={styles.h2}>
            Raízes profundas, <em>visão de futuro</em>
          </h2>
          <p className={styles.lead}>
            Somos uma operação familiar que cresceu com o campo: três propriedades, uma equipe enxuta
            e a convicção de que genética e tradição caminham juntas.
          </p>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden />
          {blocks.map((b, i) => (
            <TimelineRow key={b.label} block={b} index={i} />
          ))}
        </div>

        <blockquote ref={rQuote} className={`fade-in ${styles.quote}`}>
          <div className={styles.quoteLine} aria-hidden />
          <p className={styles.quoteText}>
            “O campo não perdoa pressa. Mas recompensa generosamente quem respeita o seu tempo.”
          </p>
          <div className={styles.quoteLine} aria-hidden />
        </blockquote>
      </div>
    </section>
  );
}
