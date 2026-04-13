import { useState } from 'react';
import { IMG_HERO } from '../../data/imagesData';
import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './Animais.module.css';

const base = import.meta.env.BASE_URL;
const IMG_ANGUS = `${base}img/animal-angus.png`;
const IMG_QUARTO_MILHA = `${base}img/animal-quarto-de-milha.png`;
const IMG_REM_DULLDOG = `${base}img/animal-rem-dulldog.png`;

const breeds = [
  {
    id: 'nelore',
    tabLabel: 'Nelore',
    race: 'Nelore',
    subtitle: 'Brasil · seleção de matrizes e reprodutores',
    farm: 'Faz. São Mateus',
    img: IMG_HERO,
    imgPosition: 'center 42%',
    desc: 'Rebanho selecionado para rusticidade e ganho de peso em pasto, com foco em conformação e docilidade.',
    attrs: ['Adaptação a pastagens nativas', 'Uniformidade de pelagem', 'Manejo em grupo'],
  },
  {
    id: 'angus',
    tabLabel: 'Angus',
    race: 'Angus',
    subtitle: 'Escócia · precoce, produtivo e adaptável',
    farm: 'Engenho Cruzeiro',
    img: IMG_ANGUS,
    imgPosition: 'center 42%',
    desc:
      'O Angus é uma das raças de corte mais valorizadas do mundo, reconhecida pela qualidade da carne e pela eficiência produtiva. Responde bem tanto a pasto quanto em sistemas mais intensivos, mantendo padrão e regularidade. Pelagem preta ou vermelha; destaque para carne macia, marmoreio e alto rendimento.',
    attrs: ['Boa conversão alimentar', 'Ganho de peso consistente', 'Facilidade de manejo'],
  },
  {
    id: 'qm',
    tabLabel: 'Quarto de Milha',
    race: 'Quarto de Milha',
    subtitle: 'Linha esportiva · performance e temperamento',
    farm: 'Engenho Cruzeiro',
    img: IMG_QUARTO_MILHA,
    imgPosition: 'center 42%',
    desc: 'Animais para provas e lazer, acompanhados de perto em treino e manejo no campo.',
    attrs: ['Mobilidade e equilíbrio', 'Acompanhamento veterinário', 'Ambiente controlado'],
  },
  {
    id: 'elite',
    tabLabel: 'Genética Elite',
    race: 'Nelore var. REM Dulldog',
    subtitle: 'Top 0,5% ANCP · melhoramento contínuo',
    farm: 'Faz. Bom Retiro',
    img: IMG_REM_DULLDOG,
    imgPosition: 'center 45%',
    desc: 'Plantel de elite com rastreabilidade e índices entre os mais altos do programa.',
    attrs: ['DEPs de referência', 'Programa de fertilidade', 'Seleção assistida'],
  },
];

export default function Animais() {
  const [active, setActive] = useState(0);
  const rHead = useFadeIn(0);
  const current = breeds[active];

  return (
    <section id="animais" className={styles.section}>
      <div className={styles.inner}>
        <header ref={rHead} className={`fade-in ${styles.header}`}>
          <p className={styles.eyebrow}>Catálogo</p>
          <h2 className={styles.h2}>Raças & Genética</h2>
          <div className={styles.titleRule} aria-hidden />
        </header>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Categorias de animais"
        >
          {breeds.map((b, i) => (
            <button
              key={b.id}
              type="button"
              role="tab"
              id={`tab-${b.id}`}
              aria-selected={active === i}
              aria-controls={`panel-${b.id}`}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
            >
              {b.tabLabel}
            </button>
          ))}
        </div>

        <div
          className={styles.main}
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
        >
          <div className={styles.visual}>
            <div className={styles.imageFrame}>
              <div className={styles.imageKen} key={current.id}>
                <img
                  className={styles.mainImg}
                  src={current.img}
                  alt=""
                  style={{ objectPosition: current.imgPosition }}
                />
                <div className={styles.imgWarm} aria-hidden />
              </div>
            </div>
          </div>

          <div className={styles.copy} key={active}>
            <p className={styles.kicker}>{current.subtitle}</p>
            <h3 className={styles.raceTitle}>{current.race}</h3>
            <p className={styles.desc}>{current.desc}</p>
            <ul className={styles.attrs}>
              {current.attrs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.farm}>
              <span className={styles.farmLabel}>Fazenda</span>
              {current.farm}
            </p>
            <div className={styles.ctas}>
              <a className={styles.btnPrimary} href="#contato">
                Consultar disponibilidade
              </a>
              <a className={styles.linkSec} href="#contato">
                Falar com especialista →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
