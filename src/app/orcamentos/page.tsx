"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

type Budget = {
  id: string;
  status: string;
  statusTone: "open" | "approved" | "review" | "rejected";
  client: string;
  serviceCode: string;
  date: string;
};

const initialBudgets: Budget[] = [
  {
    id: "orc-2026-001",
    status: "Em aberto",
    statusTone: "open",
    client: "Fazenda Boa Vista",
    serviceCode: "SRV-001",
    date: "25/05/2026",
  },
  {
    id: "orc-2026-002",
    status: "Aprovado",
    statusTone: "approved",
    client: "Agro Serra Ltda",
    serviceCode: "SRV-014",
    date: "28/05/2026",
  },
  {
    id: "orc-2026-003",
    status: "Em analise",
    statusTone: "review",
    client: "Sitio Santa Clara",
    serviceCode: "SRV-021",
    date: "02/06/2026",
  },
  {
    id: "orc-2026-004",
    status: "Recusado",
    statusTone: "rejected",
    client: "Mateus Empreendimentos",
    serviceCode: "SRV-032",
    date: "08/06/2026",
  },
];

export default function OrcamentosPage() {
  const [budgets, setBudgets] = useState(initialBudgets);

  function deleteBudget(id: string) {
    setBudgets((currentBudgets) =>
      currentBudgets.filter((budget) => budget.id !== id),
    );
  }

  return (
    <main className={styles.page}>
      <section className={styles.content}>
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Status de orçamentos</span>
            <h1>Orçamentos</h1>
            <p>Acompanhe os registros cadastrados e mantenha a lista organizada.</p>
          </div>

          <Link className={styles.newButton} href="/orcamentos/novo-orcamento">
            Novo orçamento
          </Link>
        </header>

        <section className={styles.summaryGrid} aria-label="Resumo dos orçamentos">
          <article className={styles.summaryCard}>
            <span>Total</span>
            <strong>{budgets.length}</strong>
          </article>
          <article className={styles.summaryCard}>
            <span>Em andamento</span>
            <strong>
              {
                budgets.filter((budget) =>
                  ["open", "review"].includes(budget.statusTone),
                ).length
              }
            </strong>
          </article>
          <article className={styles.summaryCard}>
            <span>Aprovados</span>
            <strong>
              {budgets.filter((budget) => budget.statusTone === "approved").length}
            </strong>
          </article>
        </section>

        <section className={styles.panel}>
          <div className={styles.toolbar}>
            <div>
              <h2>Lista de orçamentos</h2>
              <p>{budgets.length} registros encontrados</p>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Situação</th>
                  <th>Cliente</th>
                  <th>Cod Serviço</th>
                  <th>Data</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {budgets.map((budget) => (
                  <tr key={budget.id}>
                    <td>
                      <span
                        className={`${styles.status} ${styles[budget.statusTone]}`}
                      >
                        {budget.status}
                      </span>
                    </td>
                    <td>{budget.client}</td>
                    <td>{budget.serviceCode}</td>
                    <td>{budget.date}</td>
                    <td>
                      <div className={styles.actions}>
                        <Link
                          className={styles.editButton}
                          href="/orcamentos/novo-orcamento"
                        >
                          Editar
                        </Link>
                        <button
                          className={styles.deleteButton}
                          type="button"
                          aria-label={`Excluir orçamento de ${budget.client}`}
                          onClick={() => deleteBudget(budget.id)}
                        >
                          Excluir
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {budgets.length === 0 ? (
            <p className={styles.emptyState}>Nenhum orçamento cadastrado.</p>
          ) : null}
        </section>
      </section>
    </main>
  );
}
