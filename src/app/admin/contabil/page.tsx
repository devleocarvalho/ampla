"use client";

import { DollarSign, FileText, ArrowUpRight, ArrowDownRight, Download, Building2, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useProjects } from "@/context/ProjectContext";

export default function ContabilPage() {
  const { projetosList: projetos } = useProjects();
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Contábil & Fiscal</h1>
          <p className="text-muted-foreground mt-2">Gestão financeira, notas fiscais e relatórios contábeis.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-background border border-border text-foreground px-4 py-2 rounded-md hover:bg-card transition-colors font-medium">
            <Download className="h-5 w-5" />
            <span>Exportar DRE</span>
          </button>
          <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium">
            <FileText className="h-5 w-5" />
            <span>Nova Nota Fiscal</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Receita Bruta (Mês)</h3>
            <div className="p-2 bg-green-500/10 rounded-md">
              <DollarSign className="h-4 w-4 text-green-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">R$ 2.450.000</p>
          <p className="text-xs text-green-500 mt-2 flex items-center">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            +15% vs mês anterior
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Despesas Pagas</h3>
            <div className="p-2 bg-red-500/10 rounded-md">
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">R$ 1.820.000</p>
          <p className="text-xs text-muted-foreground mt-2 flex items-center">
            Referente a fornecedores e folha
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Notas Pendentes (Emissão)</h3>
            <div className="p-2 bg-yellow-500/10 rounded-md">
              <FileText className="h-4 w-4 text-yellow-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">8</p>
          <p className="text-xs text-yellow-500 mt-2 flex items-center">
            Aguardando integração com SEFAZ
          </p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Últimas Movimentações e Notas</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Data</th>
                <th className="px-6 py-4 font-medium">Descrição</th>
                <th className="px-6 py-4 font-medium">Projeto Relacionado</th>
                <th className="px-6 py-4 font-medium">Tipo</th>
                <th className="px-6 py-4 font-medium text-right">Valor</th>
                <th className="px-6 py-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {[
                { data: "12/07/2026", desc: "Pagamento Fornecedor (Cimento)", projeto: "Edifício Infinity", tipo: "Despesa", valor: "- R$ 45.000,00", corValor: "text-red-500" },
                { data: "10/07/2026", desc: "Medição #04 Aprovada", projeto: "Galpão Logístico Rodoanel", tipo: "Receita", valor: "+ R$ 350.000,00", corValor: "text-green-500" },
                { data: "08/07/2026", desc: "NF-e Emissão de Serviço", projeto: "Condomínio Reserva", tipo: "Imposto", valor: "- R$ 12.500,00", corValor: "text-red-500" },
                { data: "05/07/2026", desc: "Folha de Pagamento - Julho", projeto: "Todos", tipo: "Despesa", valor: "- R$ 180.000,00", corValor: "text-red-500" },
              ].map((item, i) => (
                <tr key={i} className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="px-6 py-4 text-muted-foreground">{item.data}</td>
                  <td className="px-6 py-4 font-medium text-foreground">{item.desc}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.projeto}</td>
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

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden mt-8">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Contabilidade por Obra</h2>
          <p className="text-sm text-muted-foreground mt-1">Selecione uma obra para acessar o painel contábil segmentado.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
          {projetos.map((projeto) => (
            <Link key={projeto.id} href={`/admin/contabil/${projeto.id}`} className="block">
              <div className="border border-border rounded-lg p-5 hover:border-primary hover:shadow-md transition-all cursor-pointer bg-background group">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-2 bg-primary/10 rounded-md text-primary">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-bold text-foreground line-clamp-1">{projeto.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{projeto.local}</p>
                <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                  <span className="text-xs font-medium bg-background px-2 py-1 rounded border border-border">
                    {projeto.status}
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {projeto.valor}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
