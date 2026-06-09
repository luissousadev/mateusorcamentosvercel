import Link from "next/link";
import styles from "./page.module.css";

const clients = [
  {
    name: "Construtora Almeida Ltda",
    document: "12.345.678/0001-90",
    phone: "(11) 98888-1234",
    email: "financeiro@almeida.com",
    address: "Av. Paulista, 1000 - Bela Vista, Sao Paulo - SP",
    status: "Ativo",
  },
  {
    name: "Mariana Costa",
    document: "123.456.789-10",
    phone: "(21) 97777-4321",
    email: "mariana@email.com",
    address: "Rua das Laranjeiras, 220 - Rio de Janeiro - RJ",
    status: "Ativo",
  },
  {
    name: "Mercado Nova Safra",
    document: "45.987.321/0001-55",
    phone: "(31) 96666-8080",
    email: "compras@novasafra.com",
    address: "Rua Curitiba, 455 - Belo Horizonte - MG",
    status: "Pendente",
  },
  {
    name: "Roberto Martins",
    document: "987.654.321-00",
    phone: "(71) 95555-1090",
    email: "roberto.martins@email.com",
    address: "Av. Sete de Setembro, 840 - Salvador - BA",
    status: "Ativo",
  },
];

export default function ClientesPage() {
  return (
    <main className={styles.page}>
      <section className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Clientes</span>
          <h1>Clientes</h1>
          <p>Pesquise, filtre e gerencie os clientes cadastrados.</p>
        </div>
      </section>

      <section className={styles.gridCard}>
        <div className={styles.gridToolbar}>
          <div className={styles.filters}>
            <label className={styles.searchField}>
              <span>Pesquisar clientes</span>
              <input type="search" placeholder="Nome, CPF/CNPJ, telefone ou email" />
            </label>

            <label className={styles.filterField}>
              <span>Filtrar</span>
              <select defaultValue="todos">
                <option value="todos">Todos</option>
                <option value="ativos">Ativos</option>
                <option value="pendentes">Pendentes</option>
              </select>
            </label>
          </div>

          <Link className={styles.newButton} href="/clientes/novo-cliente">
            Novo cliente
          </Link>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Nome / Razão Social</th>
                <th>CPF/CNPJ</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Endereço</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.document}>
                  <td>{client.name}</td>
                  <td>{client.document}</td>
                  <td>{client.phone}</td>
                  <td>{client.email}</td>
                  <td>{client.address}</td>
                  <td>
                    <span className={styles.status}>{client.status}</span>
                  </td>
                  <td>
                    <div className={styles.rowActions}>
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
      </section>
    </main>
  );
}
