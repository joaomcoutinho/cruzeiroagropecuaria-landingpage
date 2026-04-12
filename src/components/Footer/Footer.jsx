import { LOGO } from '../../assets/imagesData';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>
        <img className={styles.logo} src={LOGO} alt="Cruzeiro Agropecuária" />
        <p className={styles.tag}>Pecuária de cria, recria e engorda · genética de elite</p>
      </div>
      <nav className={styles.links} aria-label="Rodapé">
        <a href="#sobre">Sobre</a>
        <a href="#fazendas">Fazendas</a>
        <a href="#animais">Animais</a>
        <a href="#contato">Contato</a>
        <a href="https://instagram.com/cruzeiroagropecuaria" target="_blank" rel="noreferrer">Instagram</a>
      </nav>
    </footer>
  );
}
