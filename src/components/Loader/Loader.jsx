import { useEffect, useState } from 'react';
import { useLoader } from '../../hooks/useLoader';
import { LOGO, IMG_CAMPO } from '../../data/imagesData';
import styles from './Loader.module.css';

export default function Loader() {
  const { progress, done } = useLoader(2600);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (!removed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [removed]);

  useEffect(() => {
    if (!done) return undefined;
    const id = window.setTimeout(() => setRemoved(true), 700);
    return () => window.clearTimeout(id);
  }, [done]);

  if (removed) return null;

  return (
    <div
      className={`${styles.overlay} ${done ? styles.overlayDone : ''}`}
      aria-hidden={done}
    >
      <img className={styles.bg} src={IMG_CAMPO} alt="" />
      <div className={styles.bgGrad} />
      <div className={styles.inner}>
        <img className={styles.logo} src={LOGO} alt="Cruzeiro Agropecuária" />
        <div className={styles.barOuter} role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div className={styles.barInner} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
