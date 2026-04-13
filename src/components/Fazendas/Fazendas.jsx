import { IMG_CAMPO, IMG_PASTANDO } from '../../data/imagesData';
import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './Fazendas.module.css';

const IMG_BOM_RETIRO = `${import.meta.env.BASE_URL}fazenda-bom-retiro.png`;

const farms = [
  {
    n: '01',
    name: 'Faz. São Mateus',
    tag: 'Cria & Recria',
    img: IMG_CAMPO,
    desc: 'Pastagens nativas e manejo extensivo, com foco em desenvolvimento do plantel e bem-estar animal.',
  },
  {
    n: '02',
    name: 'Engenho Cruzeiro',
    tag: 'Engorda',
    img: IMG_PASTANDO,
    desc: 'Confinamento e semi-confinamento para acabamento, com nutrição planejada e acompanhamento próximo.',
  },
  {
    n: '03',
    name: 'Faz. Bom Retiro',
    tag: 'Melhoramento Genético',
    img: IMG_BOM_RETIRO,
    imgPosition: 'center 42%',
    desc: 'Plantel de reprodução e seleção — incluindo linhagens REM Dulldog entre as mais bem avaliadas.',
  },
];

function FarmCard({ farm, fadeDelay }) {
  const ref = useFadeIn(fadeDelay);
  return (
    <article ref={ref} className={`fade-in ${styles.card}`}>
      <img
        src={farm.img}
        alt=""
        style={farm.imgPosition ? { objectPosition: farm.imgPosition } : undefined}
      />
      <div className={styles.overlay} aria-hidden />
      <div className={styles.bottom}>
        <div className={styles.num}>{farm.n}</div>
        <h3 className={styles.name}>{farm.name}</h3>
        <p className={styles.tag}>{farm.tag}</p>
        <p className={styles.desc}>{farm.desc}</p>
      </div>
    </article>
  );
}

export default function Fazendas() {
  const rHead = useFadeIn(0);

  return (
    <section id="fazendas" className={styles.section}>
      <div className={styles.inner}>
        <header ref={rHead} className={`fade-in ${styles.head}`}>
          <p className={styles.eyebrow}>Onde operamos</p>
          <h2 className={styles.h2}>
            Três fazendas, <em>um só propósito</em>
          </h2>
        </header>
        <div className={styles.grid}>
          {farms.map((f, i) => (
            <FarmCard key={f.n} farm={f} fadeDelay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
