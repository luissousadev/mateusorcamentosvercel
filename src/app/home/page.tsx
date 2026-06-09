import Link from "next/link";
import styles from "./page.module.css";

const menuItems = [
  { label: "Orçamentos", href: "/orcamentos" },
  { label: "Clientes", href: "/clientes" },
  { label: "Custos Fixos", href: "/custos-fixos" },
  { label: "Empresa", href: "/empresa" },
];

const budgetTotals = [
  { label: "Jan", value: 38 },
  { label: "Fev", value: 45 },
  { label: "Mar", value: 52 },
  { label: "Abr", value: 49 },
  { label: "Mai", value: 64 },
  { label: "Jun", value: 71 },
];

const lineCharts = [
  {
    title: "Valor dos Orçamentos Aprovados",
    value: "R$ 184.200",
    trend: "+18% no período",
    color: "#2e7d59",
    points: "12,72 58,58 104,62 150,39 196,44 242,24",
  },
  {
    title: "Valor dos Orçamentos Pendentes",
    value: "R$ 47.850",
    trend: "+6% no período",
    color: "#b7791f",
    points: "12,64 58,50 104,55 150,42 196,48 242,34",
  },
  {
    title: "Contas a pagar",
    value: "R$ 31.430",
    trend: "-4% no período",
    color: "#c2410c",
    points: "12,34 58,42 104,39 150,51 196,46 242,58",
  },
  {
    title: "Contas a receber",
    value: "R$ 92.700",
    trend: "+12% no período",
    color: "#2563eb",
    points: "12,70 58,64 104,47 150,51 196,36 242,28",
  },
];

function LineChart({
  color,
  points,
}: {
  color: string;
  points: string;
}) {
  return (
    <svg className={styles.lineChart} viewBox="0 0 254 88" role="img">
      <path className={styles.gridLine} d="M12 18 H242" />
      <path className={styles.gridLine} d="M12 44 H242" />
      <path className={styles.gridLine} d="M12 70 H242" />
      <polyline points={points} fill="none" stroke={color} strokeWidth="4" />
      {points.split(" ").map((point) => {
        const [cx, cy] = point.split(",");

        return <circle key={point} cx={cx} cy={cy} r="4" fill={color} />;
      })}
    </svg>
  );
}

export default function HomeDashboard() {
  return (
    <main className={styles.page}>
      <aside className={styles.sidebar} aria-label="Menu principal">
        <div className={styles.brand}>
          <span className={styles.brandMark}>MO</span>
          <span>Mateus Orçamentos</span>
        </div>

        <nav className={styles.navigation}>
          {menuItems.map((item) => (
            <Link className={styles.navItem} href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className={styles.content}>
        <section className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Dashboard</span>
            <h1>Home</h1>
            <p>Resumo financeiro e operacional dos orçamentos.</p>
          </div>

          <label className={styles.periodFilter}>
            <span>Período</span>
            <select defaultValue="30">
              <option value="7">Últimos 7 dias</option>
              <option value="30">Últimos 30 dias</option>
              <option value="90">Últimos 90 dias</option>
              <option value="year">Este ano</option>
            </select>
          </label>
        </section>

        <section className={styles.summaryGrid}>
          <article className={styles.totalCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardLabel}>Total de Orçamentos</span>
                <strong>319</strong>
              </div>
              <span className={styles.status}>+14%</span>
            </div>

            <div className={styles.barChart} aria-label="Total de orçamentos por mês">
              {budgetTotals.map((item) => (
                <div className={styles.barItem} key={item.label}>
                  <span>{item.value}</span>
                  <div
                    className={styles.bar}
                    style={{ height: `${item.value * 2.4}px` }}
                  />
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </article>

          {lineCharts.map((chart) => (
            <article className={styles.metricCard} key={chart.title}>
              <div className={styles.cardHeader}>
                <div>
                  <span className={styles.cardLabel}>{chart.title}</span>
                  <strong>{chart.value}</strong>
                </div>
                <span className={styles.trend}>{chart.trend}</span>
              </div>

              <LineChart color={chart.color} points={chart.points} />
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
