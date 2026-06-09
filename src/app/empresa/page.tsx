import styles from "./page.module.css";

const companyFields = [
  "NOME:",
  "CNPJ:",
  "Nº REGISTRO:",
  "CONSELHO:",
  "LOGRADOURO:",
  "NÚMERO:",
  "BAIRRO:",
  "CEP:",
  "MUNICÍPIO:",
  "REGISTRO",
  "TELEFONE:",
  "EMAIL:",
  "SITE:",
];

const technicalFields = [
  "NOME:",
  "CPF:",
  "TÍTULO PROFISSIONAL:",
  "Nº REGISTRO:",
  "CONSELHO:",
  "CÓDIGO INCRA:",
];

function FormSection({
  fields,
  title,
}: {
  fields: string[];
  title: string;
}) {
  return (
    <section className={styles.formSection}>
      <header className={styles.sectionTitle}>
        <h2>{title}</h2>
      </header>

      <div className={styles.rows}>
        {fields.map((field) => (
          <label className={styles.row} key={field}>
            <span>{field}</span>
            <input aria-label={field.replace(":", "")} type="text" />
          </label>
        ))}
      </div>
    </section>
  );
}

export default function EmpresaPage() {
  return (
    <main className={styles.page}>
      <section className={styles.box}>
        <form className={styles.form}>
          <FormSection fields={companyFields} title="DADOS DA SUA EMPRESA" />
          <FormSection
            fields={technicalFields}
            title="DADOS DO RESPONSÁVEL TÉCNICO"
          />
        </form>
      </section>
    </main>
  );
}
