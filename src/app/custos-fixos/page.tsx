import styles from "./page.module.css";

const fixedCosts = [
  {
    description: "Aluguel (mensal)",
    period: "30",
    periodCost: "1.000,00",
    unitCost: "33.33",
  },
  {
    description: "Água (mensal)",
    period: "30",
    periodCost: "90.00",
    unitCost: "3.00",
  },
  {
    description: "Energia Elétrica (mensal)",
    period: "30",
    periodCost: "250.00",
    unitCost: "8.33",
  },
  {
    description: "Telefone (mensal)",
    period: "30",
    periodCost: "51.00",
    unitCost: "1.70",
  },
  {
    description: "Internet (mensal)",
    period: "30",
    periodCost: "90.00",
    unitCost: "3.00",
  },
  {
    description: "Material Escritório (mensal)",
    period: "30",
    periodCost: "500.00",
    unitCost: "16.67",
  },
];

export default function CustosFixosPage() {
  return (
    <main className={styles.page}>
      <header className={styles.titleBar}>
        <h1>REGISTRO DOS CUSTOS FIXOS</h1>
      </header>

      <section className={styles.content}>
        <div className={styles.toolbar}>
          <button className={styles.newButton} type="button">
            Novo registro
          </button>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>DESCRIÇÃO</th>
                <th>PERÍODO</th>
                <th>CUSTO NO PERÍODO</th>
                <th>CUSTO UNITÁRIO</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {fixedCosts.map((cost) => (
                <tr key={cost.description}>
                  <td>{cost.description}</td>
                  <td>{cost.period}</td>
                  <td>
                    <span className={styles.currency}>R$</span>
                    {cost.periodCost}
                  </td>
                  <td>
                    <span className={styles.currency}>R$</span>
                    {cost.unitCost}
                  </td>
                  <td>
                    <div className={styles.actions}>
                      <button type="button">Editar</button>
                      <button className={styles.deleteButton} type="button">
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.dailyTotal}>
          <span>TOTAL DO CUSTO DIÁRIO</span>
          <strong>R$ 66.03</strong>
        </div>
      </section>
    </main>
  );
}
