import Link from "next/link";
import styles from "./page.module.css";

export default function NovoClientePage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Clientes</span>
          <h1>Cadastro Cliente</h1>
          <p>Preencha as informacoes principais para cadastrar um cliente.</p>
        </div>

        <Link className={styles.backLink} href="/clientes">
          Voltar para clientes
        </Link>
      </section>

      <section className={styles.formCard}>
        <div className={styles.sectionHeader}>
          <div>
            <h2>Dados do cliente</h2>
            <p>Informe os dados cadastrais e de contato.</p>
          </div>
        </div>

        <form className={styles.form}>
          <label className={styles.field}>
            <span>Nome / Razão Social</span>
            <input type="text" placeholder="Digite o nome ou razao social" />
          </label>

          <label className={styles.field}>
            <span>CPF/CNPJ</span>
            <input type="text" placeholder="000.000.000-00 ou 00.000.000/0000-00" />
          </label>

          <label className={styles.field}>
            <span>Telefone</span>
            <input type="tel" placeholder="(00) 00000-0000" />
          </label>

          <label className={styles.field}>
            <span>Email</span>
            <input type="email" placeholder="cliente@exemplo.com" />
          </label>

          <label className={`${styles.field} ${styles.fullWidth}`}>
            <span>Endereço</span>
            <textarea placeholder="Digite o endereco completo em linha livre" rows={3} />
          </label>

          <div className={styles.formActions}>
            <button className={styles.secondaryButton} type="reset">
              Limpar
            </button>
            <button className={styles.primaryButton} type="submit">
              Salvar cliente
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
