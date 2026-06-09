import Link from "next/link";
import styles from "./page.module.css";

export default function Login() {
  return (
    <div className={styles.page}>
      <main className={styles.loginCard}>
        <div className={styles.header}>
          <span className={styles.badge}>Mateus Orcamentos</span>
          <h1>Entrar na sua conta</h1>
          <p>Acesse o painel para gerenciar seus orcamentos.</p>
        </div>

        <form className={styles.form} action="/home">
          <label className={styles.field}>
            <span>E-mail</span>
            <input type="email" placeholder="seuemail@exemplo.com" />
          </label>

          <label className={styles.field}>
            <span>Senha</span>
            <input type="password" placeholder="Digite sua senha" />
          </label>

          <div className={styles.options}>
            <label className={styles.remember}>
              <input type="checkbox" />
              <span>Lembrar acesso</span>
            </label>
            <Link href="/forgot-password">Esqueci a senha</Link>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </main>
    </div>
  );
}
