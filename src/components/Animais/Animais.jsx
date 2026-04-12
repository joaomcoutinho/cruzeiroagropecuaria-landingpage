import { IMG_HERO } from '../../assets/imagesData';
import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './Animais.module.css';

const base = import.meta.env.BASE_URL;
const IMG_QUARTO_MILHA = `${base}animal-quarto-de-milha.png`;
const IMG_REM_DULLDOG = `${base}animal-rem-dulldog.png`;

function AnimalCard({ animal, index }) {
  const ref = useFadeIn(index * 90);
  return (
    <article
      ref={ref}
      className={`fade-in ${styles.card} ${index === 1 ? styles.cardCenter : ''}`}
    >
      <div className={styles.imgWrap}>
        <span className={`${styles.selo} ${animal.seloClass}`}>{animal.selo}</span>
        <img
          src={animal.img}
          alt=""
          style={
            animal.imgPosition
              ? { objectPosition: animal.imgPosition }
              : index === 1
                ? { objectPosition: 'center 40%' }
                : undefined
          }
        />
        <div className={styles.imgVin} aria-hidden />
      </div>
      <div className={styles.body}>
        <div className={styles.num}>{animal.n}</div>
        <h3 className={styles.race}>{animal.race}</h3>
        <p className={styles.origin}>{animal.origin}</p>
        <div className={styles.divider} aria-hidden />
        <p className={styles.desc}>{animal.desc}</p>
        <ul className={styles.attrs}>
          {animal.attrs.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <div className={styles.foot}>
          <span className={styles.farm}>{animal.farm}</span>
          <a className={styles.link} href="#contato">Consultar →</a>
        </div>
      </div>
    </article>
  );
}

const animals = [
  {
    n: '01',
    race: 'Nelore',
    selo: 'Gado de Corte',
    seloClass: styles.seloCorte,
    origin: 'Brasil · seleção de matrizes e reprodutores',
    farm: 'Faz. São Mateus',
    img: IMG_HERO,
    desc: 'Rebanho selecionado para rusticidade e ganho de peso em pasto, com foco em conformação e docilidade.',
    attrs: ['Adaptação a pastagens nativas', 'Uniformidade de pelagem', 'Manejo em grupo'],
  },
  {
    n: '02',
    race: 'Quarto de Milha',
    selo: 'Equino',
    seloClass: styles.seloEq,
    origin: 'Linha esportiva · performance e temperamento',
    farm: 'Engenho Cruzeiro',
    img: IMG_QUARTO_MILHA,
    imgPosition: 'center 42%',
    desc: 'Animais para provas e lazer, acompanhados de perto em treino e manejo no campo.',
    attrs: ['Mobilidade e equilíbrio', 'Acompanhamento veterinário', 'Ambiente controlado'],
  },
  {
    n: '03',
    race: 'Nelore var. REM Dulldog',
    selo: 'Genética Elite',
    seloClass: styles.seloGen,
    origin: 'Top 0,5% ANCP · melhoramento contínuo',
    farm: 'Faz. Bom Retiro',
    img: IMG_REM_DULLDOG,
    imgPosition: 'center 45%',
    desc: 'Plantel de elite com rastreabilidade e índices entre os mais altos do programa.',
    attrs: ['DEPs de referência', 'Programa de fertilidade', 'Seleção assistida'],
  },
];

export default function Animais() {
  const rHead = useFadeIn(0);

  return (
    <section id="animais" className={styles.section}>
      <div className={styles.inner}>
        <header ref={rHead} className={`fade-in ${styles.header}`}>
          <div className={styles.rule} aria-hidden />
          <div className={styles.headMid}>
            <p className={styles.eyebrow}>Catálogo</p>
            <h2 className={styles.h2}>Raças & Genética</h2>
          </div>
          <div className={styles.rule} aria-hidden />
        </header>

        <div className={styles.grid}>
          {animals.map((a, i) => (
            <AnimalCard key={a.n} animal={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
