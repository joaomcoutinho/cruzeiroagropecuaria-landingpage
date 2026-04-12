import { useFadeIn } from '../../hooks/useFadeIn';
import styles from './ComoNegociar.module.css';

const steps = [
  {
    n: '01',
    title: 'Veja o que temos',
    body:
      'Conheça fazendas, linhagens e disponibilidade de animais. Transparência vem antes do preço.',
  },
  {
    n: '02',
    title: 'Entre em contato',
    body:
      'Fale por WhatsApp, telefone ou Instagram. Tiramos dúvidas com calma e sem pressa de fechar.',
  },
  {
    n: '03',
    title: 'Negocie direto com o proprietário',
    body:
      'Sem intermediário: combinamos visita, condições e logística com quem toma a decisão no campo.',
  },
];

function Step({ step, fadeDelay }) {
  const ref = useFadeIn(fadeDelay);
  return (
    <div ref={ref} className={`fade-in ${styles.step}`}>
      <div className={styles.bigNum}>{step.n}</div>
      <h3 className={styles.h3}>{step.title}</h3>
      <p className={styles.p}>{step.body}</p>
    </div>
  );
}

export default function ComoNegociar() {
  const rHead = useFadeIn(0);

  return (
    <section className={styles.section} aria-labelledby="como-titulo">
      <div className={styles.inner}>
        <header ref={rHead} className={`fade-in ${styles.head}`}>
          <p className={styles.eyebrow}>Transparência</p>
          <h2 id="como-titulo" className={styles.h2}>
            Como <em>negociar</em> conosco
          </h2>
        </header>
        <div className={styles.grid}>
          {steps.map((s, i) => (
            <Step key={s.n} step={s} fadeDelay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
