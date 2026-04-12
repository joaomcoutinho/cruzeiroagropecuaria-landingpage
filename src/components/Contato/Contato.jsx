import { useFadeIn } from '../../hooks/useFadeIn';
import { PHONE_DISPLAY, TEL_URL, WHATSAPP_URL } from '../../constants/contact';
import styles from './Contato.module.css';

const IG = 'https://instagram.com/cruzeiroagropecuaria';

function IconWa() {
  return (
    <svg className={styles.icon} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className={styles.icon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconIg() {
  return (
    <svg className={styles.icon} width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Contato() {
  const rCol = useFadeIn(0);

  return (
    <section id="contato" className={styles.section}>
      <div ref={rCol} className={`fade-in ${styles.left}`}>
        <h2 className={styles.h2}>
          Vamos <em>conversar</em>?
        </h2>
        <p className={styles.lead}>
          Seja para compra de animais, visita à fazenda ou tirar dúvidas sobre genética — estamos à disposição
          pelos canais abaixo.
        </p>
        <div className={styles.buttons}>
          <a className={styles.btn} href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <IconWa />
            <span className={styles.textCol}>
              <span className={styles.label}>WhatsApp</span>
              <span className={styles.sub}>{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a className={styles.btn} href={TEL_URL}>
            <IconPhone />
            <span className={styles.textCol}>
              <span className={styles.label}>Telefone</span>
              <span className={styles.sub}>{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a className={styles.btn} href={IG} target="_blank" rel="noreferrer">
            <IconIg />
            <span className={styles.textCol}>
              <span className={styles.label}>Instagram</span>
              <span className={styles.sub}>@cruzeiroagropecuaria</span>
            </span>
          </a>
        </div>
      </div>

      <aside className={styles.right} aria-label="Informações">
        <div className={styles.row}>
          <p className={styles.rLabel}>Operação</p>
          <p className={styles.rVal}>Cria, recria e engorda</p>
          <p className={styles.rSub}>Pecuária com melhoramento genético integrado às três fazendas.</p>
        </div>
        <div className={styles.row}>
          <p className={styles.rLabel}>Fazendas</p>
          <p className={styles.rVal}>São Mateus · Engenho Cruzeiro · Bom Retiro</p>
          <p className={styles.rSub}>Regiões de pastagem e confinamento sob a mesma gestão.</p>
        </div>
        <div className={styles.row}>
          <p className={styles.rLabel}>Atendimento</p>
          <p className={styles.rVal}>Segunda a sábado</p>
          <p className={styles.rSub}>Horário comercial — retornamos mensagens o mais rápido possível.</p>
        </div>
        <div className={styles.row}>
          <p className={styles.rLabel}>Redes sociais</p>
          <p className={styles.rVal}>@cruzeiroagropecuaria</p>
          <p className={styles.rSub}>Novidades do rebanho, campo e genética.</p>
        </div>
      </aside>
    </section>
  );
}
