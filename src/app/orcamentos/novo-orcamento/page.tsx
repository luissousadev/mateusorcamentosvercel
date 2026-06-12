import styles from "./page.module.css";

type CostRow = {
  label: string;
  required?: boolean;
};

type CostSection = {
  title: string;
  groups: {
    name: string;
    rows: CostRow[];
    totals: string[];
  }[];
};

const sections: CostSection[] = [
  {
    title: "DESLOCAMENTO",
    groups: [
      {
        name: "VEICULO",
        rows: [
          { label: "DISTANCIA DA PROPRIEDADE (KM)" },
          { label: "VALOR DO COMBUSTIVEL (L)", required: true },
          { label: "CONSUMO DO VEICULO (KM/L)" },
          { label: "DEPRECIAÇÃO (DESGASTE)" },
          { label: "VIAGENS" },
        ],
        totals: ["VALOR POR KM", "VALOR TOTAL"],
      },
    ],
  },
  {
    title: "EQUIPAMENTOS",
    groups: [
      {
        name: "Marcos",
        rows: ["VALOR", "QUANTIDADE", "DESLOCAMENTO (KM)"].map((label) => ({
          label,
        })),
        totals: ["VALOR DE MARCOS"],
      },
      {
        name: "GPS",
        rows: ["ALUGUEL GPS (DIÁRIA)", "DIÁRIAS", "DESLOCAMENTO (KM)"].map(
          (label) => ({ label }),
        ),
        totals: ["VALOR GPS"],
      },
    ],
  },
  {
    title: "EQUIPE",
    groups: [
      {
        name: "PESSOAL",
        rows: [
          "QUANTIDADE DE PESSOAS",
          "VALOR DE HOSPEDAGEM (POR PESSOA)",
          "DIAS DE HOSPEDAGEM",
        ].map((label) => ({ label })),
        totals: ["VALOR HOSPEDAGEM"],
      },
      {
        name: "ALIMENTAÇÃO",
        rows: ["VALOR DA REFEIÇÃO POR PESSOA (DIA)", "DIÁRIAS"].map(
          (label) => ({ label }),
        ),
        totals: ["VALOR ALIMENTAÇÃO"],
      },
    ],
  },
];

const variableItems = [
  {
    id: "montagem-processo",
    name: "MONTAGEM DO PROCESSO",
    rows: ["VALOR", "QUANTIDADE"],
  },
  {
    id: "art-trt",
    name: "ART / TRT",
    rows: ["VALOR", "QUANTIDADE"],
  },
  {
    id: "mao-obra-escritorio",
    name: "MÃO DE OBRA ESCRITÓRIO",
    rows: ["VALOR", "QUANTIDADE"],
    value: "66,03",
  },
  {
    id: "certidoes-confrontantes",
    name: "CERTIDÕES CONFRONTANTES",
    rows: ["VALOR", "QUANTIDADE"],
  },
  {
    id: "certidoes-propriedade",
    name: "CERTIDÕES DA PROPRIEDADE",
    rows: ["VALOR", "QUANTIDADE"],
  },
  {
    id: "viagens-cartorio-km",
    name: "VIAGENS AO CARTÓRIO / KM",
    rows: ["VALOR", "DESLOCAMENTO (KM)"],
  },
  {
    id: "assinaturas",
    name: "ASSINATURAS",
    rows: ["VALOR", "QUANTIDADE"],
  },
  {
    id: "distancia-assinaturas-km",
    name: "DISTÂNCIA/ASSINATURAS KM",
    rows: ["VALOR", "DESLOCAMENTO (KM)"],
  },
  {
    id: "reconhecimento-firma",
    name: "N. RECONH. FIRMA",
    rows: ["VALOR", "QUANTIDADE"],
  },
  {
    id: "protocolo-entrega-km",
    name: "PROTOCOLO DO PROCESSO / ENTREGA / KM",
    rows: ["VALOR", "DESLOCAMENTO (KM)"],
  },
  {
    id: "adicionar-nome-1",
    name: "( ADICIONAR NOME)",
    rows: ["VALOR", "QUANTIDADE"],
  },
  {
    id: "adicionar-nome-2",
    name: "(ADICIONAR NOME)",
    rows: ["VALOR", "QUANTIDADE"],
  },
  {
    id: "adicionar-nome-3",
    name: "(ADICIONAR NOME)",
    rows: ["VALOR", "QUANTIDADE"],
  },
];

const marginSummaryLeft = [
  "CUSTO TOTAL",
  "VALOR DO IMPOSTO",
  "RECEITA ESPERADA",
  "LUCRO ESPERADO",
];

const marginSummaryRight = [
  "MARGEM ESPERADA",
  "IMPOSTOS",
  "RECEITA ESPERADA + IMPOSTOS",
];

export default function NovoOrcamentoPage() {
  return (
    <main className={styles.page}>
      <section className={styles.sheet}>
        <header className={styles.titleBar}>
          <h1>ELABORAÇÃO DO CUSTO</h1>
        </header>

        <section className={styles.clientArea}>
          <div className={styles.fieldLine}>
            <strong>CLIENTE</strong>
            <span />
          </div>

          <div className={styles.fieldGrid}>
            <div className={styles.fieldLine}>
              <strong>DIAS DE LEVANTAMENTO</strong>
              <span />
            </div>
            <div className={styles.dateLine}>
              <strong>DATA</strong>
              <span>25/05/2026</span>
            </div>
          </div>
        </section>

        {sections.map((section) => (
          <section className={styles.costSection} key={section.title}>
            <h2>{section.title}</h2>

            {section.groups.map((group) => (
              <div className={styles.groupGrid} key={group.name}>
                <div className={styles.groupName}>{group.name}</div>

                <div className={styles.rows}>
                  {group.rows.map((row) => (
                    <label className={styles.row} key={row.label}>
                      <span>
                        {row.label}
                        {row.required ? (
                          <em aria-label="campo obrigatorio">*</em>
                        ) : null}
                      </span>
                      <input type="text" />
                    </label>
                  ))}
                </div>

                <div className={styles.totals}>
                  {group.totals.map((total) => (
                    <div className={styles.totalBox} key={total}>
                      <strong>{total}</strong>
                      <span>R$</span>
                      <output>-</output>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}

        <section className={`${styles.costSection} ${styles.variablesSection}`}>
          <h2>VARIÁVEIS</h2>

          {variableItems.map((item) => (
            <div className={styles.variableGrid} key={item.id}>
              <div className={styles.variableName}>{item.name}</div>

              <div className={styles.variableRows}>
                {item.rows.map((row) => (
                  <label className={styles.variableRow} key={`${item.id}-${row}`}>
                    <span>{row}</span>
                    <strong>{row === "VALOR" ? "R$" : ""}</strong>
                    <input
                      type="text"
                      defaultValue={row === "VALOR" ? item.value ?? "" : ""}
                      placeholder={row === "VALOR" ? "-" : ""}
                    />
                  </label>
                ))}
              </div>

              <div className={styles.variableTotal}>
                <strong>TOTAL</strong>
                <span>R$</span>
                <output>-</output>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.marginSection}>
          <header className={styles.marginTitle}>
            <h2>DEFINIÇÃO DE MARGEM</h2>
          </header>

          <div className={styles.marginContent}>
            <h3>RESUMO</h3>

            <div className={styles.summaryArea}>
              <div className={styles.summaryColumn}>
                {marginSummaryLeft.map((item) => (
                  <label className={styles.summaryRow} key={item}>
                    <strong>{item}</strong>
                    <span>R$</span>
                    <input type="text" placeholder="-" />
                  </label>
                ))}
              </div>              

              <div className={styles.summaryColumn}>
                {marginSummaryRight.map((item) => (
                  <label className={styles.summaryRow} key={item}>
                    <strong>{item}</strong>
                    <span>{item === "MARGEM ESPERADA" || item === "IMPOSTOS" ? "" : "R$"}</span>
                    <input type="text" placeholder={item === "MARGEM ESPERADA" || item === "IMPOSTOS" ? "" : "-"} />
                  </label>
                ))}
              </div>
            </div>

            <h3>Observações</h3>
            <label className={styles.observationField}>
              <span>Preencha aqui as observações do projeto:</span>
              <textarea rows={3} />
            </label>

            <label className={styles.noteLine}>
              <strong>Condições de pagamento:</strong>
              <input type="text" />
            </label>

            <label className={styles.noteLine}>
              <strong>Prazo de entrega do serviço</strong>
              <input type="text" />
            </label>
          </div>
        </section>

        <div className={styles.generateAction}>
          <button className={styles.generateButton} type="button">
            <span className={styles.generateIcon} aria-hidden="true">
              <span />
            </span>
            <strong>GERAR ORÇAMENTO</strong>
          </button>
        </div>
      </section>
    </main>
  );
}
