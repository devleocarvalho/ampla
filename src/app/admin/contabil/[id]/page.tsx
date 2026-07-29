import { DollarSign, FileText, ArrowUpRight, ArrowDownRight, ArrowLeft, Download, Building2 } from "lucide-react";
import Link from "next/link";
import { projetos } from "@/data/projetos";
import { notFound } from "next/navigation";

// Definindo o tipo para params que agora é uma Promise (Next.js 15+)
// Embora a versão do Next.js do projeto aparente ser 16 (ou uma variação da 15+), o padrão atual exige await ou acesso direto de acordo com a versão.
// Vamos usar o destructuring direto, mas definindo params como assíncrono caso necessário.
export default async function ProjetoContabilPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const projeto = projetos.find((p) => p.id === resolvedParams.id);

  if (!projeto) {
    notFound();
  }

  // Valores mockados, mas baseados na string de valor do projeto para parecerem reais
  // Removendo 'R$ ' e '.' para parsear o número base.
  const valorTotalNumber = parseInt(projeto.valor.replace(/\D/g, '')) || 0;
  
  // Criando dados falsos baseados no valor do projeto
  const receita = (valorTotalNumber * 0.45).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const despesa = (valorTotalNumber * 0.28).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const saldo = (valorTotalNumber * (0.45 - 0.28)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="space-y-8">
      {/* Cabeçalho */}
      <div>
        <Link href="/admin/contabil" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Voltar para Contábil Geral
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <Building2 className="h-6 w-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">{projeto.title}</h1>
            </div>
            <p className="text-muted-foreground mt-2">Visão contábil segmentada: {projeto.local}</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 bg-background border border-border text-foreground px-4 py-2 rounded-md hover:bg-card transition-colors font-medium">
              <Download className="h-5 w-5" />
              <span>Relatório da Obra</span>
            </button>
            <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium">
              <FileText className="h-5 w-5" />
              <span>Nova NF (Esta Obra)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Receita Faturada</h3>
            <div className="p-2 bg-green-500/10 rounded-md">
              <DollarSign className="h-4 w-4 text-green-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">{receita}</p>
          <p className="text-xs text-green-500 mt-2 flex items-center">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            Relativo às medições aprovadas
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Custos Pagos</h3>
            <div className="p-2 bg-red-500/10 rounded-md">
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">{despesa}</p>
          <p className="text-xs text-muted-foreground mt-2 flex items-center">
            Materiais, folha e subempreiteiros
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Saldo Atual (Caixa Obra)</h3>
            <div className="p-2 bg-blue-500/10 rounded-md">
              <DollarSign className="h-4 w-4 text-blue-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">{saldo}</p>
          <p className="text-xs text-blue-500 mt-2 flex items-center">
            Fluxo positivo
          </p>
        </div>
      </div>

      {/* Tabela de Movimentações Segmentada */}
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Extrato da Obra</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Data</th>
                <th className="px-6 py-4 font-medium">Descrição</th>
                <th className="px-6 py-4 font-medium">Fornecedor/Cliente</th>
                <th className="px-6 py-4 font-medium">Tipo</th>
                <th className="px-6 py-4 font-medium text-right">Valor</th>
                <th className="px-6 py-4 font-medium text-right">Anexo</th>
              </tr>
            </thead>
            <tbody>
              {[
                { data: "Ontem", desc: "Compra de Aço C30", entity: "Gerdau S.A", tipo: "Despesa", valor: "- R$ 125.000,00", corValor: "text-red-500" },
                { data: "12/07/2026", desc: "Medição Mês 06", entity: "Cliente Principal", tipo: "Receita", valor: "+ R$ 450.000,00", corValor: "text-green-500" },
                { data: "08/07/2026", desc: "Locação de Guindaste", entity: "LocRental", tipo: "Despesa", valor: "- R$ 18.500,00", corValor: "text-red-500" },
                { data: "05/07/2026", desc: "Imposto ISS Retido", entity: "Prefeitura", tipo: "Imposto", valor: "- R$ 22.500,00", corValor: "text-yellow-500" },
              ].map((item, i) => (
                <tr key={i} className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="px-6 py-4 text-muted-foreground">{item.data}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{item.desc}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.entity}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-background border border-border rounded-md text-xs">{item.tipo}</span>
                  </td>
                  <td className={`px-6 py-4 text-right font-bold ${item.corValor}`}>{item.valor}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:underline font-medium text-sm">Ver NF</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
