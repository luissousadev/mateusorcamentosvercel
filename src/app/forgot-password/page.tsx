import Link from "next/link";
import styles from "./page.module.css";

export default function ForgotPassword() {
  return (
    <div className={styles.page}>
      <main className={styles.card}>
        <div className={styles.header}>
          <span className={styles.badge}>Recuperar acesso</span>
          <h1>Esqueci minha senha</h1>
          <p>
            Informe seu e-mail cadastrado para receber as instrucoes de
            recuperacao.
          </p>
        </div>

        <form className={styles.form}>
          <label className={styles.field}>
            <span>E-mail</span>
            <input type="email" placeholder="seuemail@exemplo.com" />
          </label>

          <button type="submit">Enviar instrucoes</button>
        </form>

        <Link className={styles.backLink} href="/">
          Voltar para o login
        </Link>
      </main>
    </div>
  );
}
