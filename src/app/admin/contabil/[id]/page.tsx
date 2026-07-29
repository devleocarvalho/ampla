"use client";

import { useState, use } from "react";
import { DollarSign, FileText, ArrowUpRight, ArrowDownRight, ArrowLeft, Download, Building2, TrendingDown, AlertTriangle, Scale, Calculator, Users, Receipt, Briefcase, Info } from "lucide-react";
import Link from "next/link";
import { projetos } from "@/data/projetos";
import { notFound } from "next/navigation";

export default function ProjetoAuditoriaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const projeto = projetos.find((p) => p.id === resolvedParams.id);

  if (!projeto) {
    notFound();
  }

  const [activeTab, setActiveTab] = useState<"resumo" | "dre" | "impostos" | "contratos">("dre");

  const valorTotalNumber = parseInt(projeto.valor.replace(/\D/g, '')) || 0;
  
  // Lógica de simulação de números
  const receita = valorTotalNumber * 0.45;
  const custosDiretos = valorTotalNumber * 0.22; // Materiais e mão de obra
  const despesasIndiretas = valorTotalNumber * 0.08; // Máquinas, alugueis, admin
  const impostosDeducoes = receita * 0.06;
  
  const receitaLiquida = receita - impostosDeducoes;
  const lucroBruto = receitaLiquida - custosDiretos;
  const lucroLiquido = lucroBruto - despesasIndiretas;

  const margem = (lucroLiquido / receita) * 100 || 0;
  
  // Status de Obra Parada (mock: se for Atrasado, a gente liga o alerta)
  const isObraParada = projeto.status === "Atrasado";
  // Simulação de custo fixo rodando em obra parada (prejuízo invisível)
  const custoFixoSemanal = (despesasIndiretas * 0.05).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="space-y-8 pb-12">
      {/* Cabeçalho */}
      <div>
        <Link href="/admin/contabil" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Voltar para Seleção de Obra
        </Link>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 text-primary rounded-lg">
                <Building2 className="h-6 w-6" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground">{projeto.title}</h1>
            </div>
            <p className="text-muted-foreground mt-2">Auditoria Contábil e Compliance: {projeto.local}</p>
          </div>
          <div className="flex space-x-3">
            <button className="flex items-center space-x-2 bg-background border border-border text-foreground px-4 py-2 rounded-md hover:bg-card transition-colors font-medium text-sm">
              <Download className="h-4 w-4" />
              <span>Baixar Relatório Fiscal (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Alerta de Obra Parada / Prejuízo */}
      {isObraParada && (
        <div className="bg-red-500/10 border border-red-500/30 p-5 rounded-xl flex items-start space-x-4 shadow-sm">
          <div className="p-2 bg-red-500 text-white rounded-lg shrink-0 mt-1">
            <TrendingDown className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-red-700 font-bold text-lg flex items-center">
              Alerta de Sangria de Caixa (Obra Atrasada/Parada)
            </h3>
            <p className="text-red-600/80 mt-1 text-sm">
              Esta obra está sinalizada como atrasada. O cronograma está congelado, mas os <strong>custos indiretos (Custo de oportunidade, depreciação de maquinário, IPTU, taxa de administração e aluguéis)</strong> continuam consumindo o caixa.
            </p>
            <div className="mt-3 bg-white/50 px-3 py-2 rounded-md inline-block border border-red-500/20 text-red-700 font-medium text-sm">
              Impacto Direto: <span className="font-bold">{custoFixoSemanal} de prejuízo semanal.</span>
            </div>
          </div>
        </div>
      )}

      {/* Navegação por Abas */}
      <div className="flex space-x-1 border-b border-border overflow-x-auto pb-px">
        <button 
          onClick={() => setActiveTab("dre")}
          className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'dre' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'}`}
        >
          <Calculator className="h-4 w-4 mr-2" />
          DRE e Resultado
        </button>
        <button 
          onClick={() => setActiveTab("resumo")}
          className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'resumo' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'}`}
        >
          <Scale className="h-4 w-4 mr-2" />
          Fluxo de Caixa (DFC)
        </button>
        <button 
          onClick={() => setActiveTab("impostos")}
          className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'impostos' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'}`}
        >
          <Receipt className="h-4 w-4 mr-2" />
          Tributos e Entes Públicos
        </button>
        <button 
          onClick={() => setActiveTab("contratos")}
          className={`flex items-center px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === 'contratos' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'}`}
        >
          <Briefcase className="h-4 w-4 mr-2" />
          Subempreiteiros e Folha
        </button>
      </div>

      {/* Conteúdo das Abas */}
      <div className="pt-2">

        {/* ABA: DRE */}
        {activeTab === "dre" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Receita Faturada (Acumulado)</h3>
                <p className="text-2xl font-bold text-foreground">{receita.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              </div>
              <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Custos e Deduções (Acumulado)</h3>
                <p className="text-2xl font-bold text-red-500">{(custosDiretos + despesasIndiretas + impostosDeducoes).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              </div>
              <div className={`p-6 border rounded-xl shadow-sm ${lucroLiquido >= 0 ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                <h3 className={`text-sm font-medium mb-1 ${lucroLiquido >= 0 ? 'text-green-700' : 'text-red-700'}`}>
                  {lucroLiquido >= 0 ? 'Lucro Líquido Atual' : 'Prejuízo Acumulado'}
                </h3>
                <p className={`text-3xl font-bold ${lucroLiquido >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {lucroLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
                <div className="flex items-center mt-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${lucroLiquido >= 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    Margem: {margem.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-border flex justify-between items-center bg-background/50">
                <div>
                  <h2 className="text-lg font-bold text-foreground">Demonstração do Resultado do Exercício (DRE)</h2>
                  <p className="text-sm text-muted-foreground mt-1">Visão contábil gerencial acumulada desde o início do projeto.</p>
                </div>
                <button className="text-primary hover:underline text-sm font-medium">Imprimir DRE</button>
              </div>
              
              <div className="p-0">
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-border bg-background">
                      <td className="px-6 py-4 font-bold text-foreground w-2/3">1. Receita Bruta de Vendas/Medições</td>
                      <td className="px-6 py-4 font-bold text-right text-foreground">{receita.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>
                    <tr className="border-b border-border border-dashed text-red-500/80">
                      <td className="px-6 py-3 pl-10 font-medium">(-) Impostos s/ Vendas (ISS, PIS, COFINS)</td>
                      <td className="px-6 py-3 font-medium text-right">- {impostosDeducoes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/30">
                      <td className="px-6 py-4 font-bold text-foreground">2. Receita Operacional Líquida (ROL)</td>
                      <td className="px-6 py-4 font-bold text-right text-foreground">{receitaLiquida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>
                    <tr className="border-b border-border border-dashed text-red-500/80">
                      <td className="px-6 py-3 pl-10 font-medium">(-) Custos Diretos (CPV / Mão de Obra e Materiais)</td>
                      <td className="px-6 py-3 font-medium text-right">- {custosDiretos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>
                    <tr className="border-b border-border bg-muted/30">
                      <td className="px-6 py-4 font-bold text-foreground">3. Lucro Bruto Operacional</td>
                      <td className="px-6 py-4 font-bold text-right text-foreground">{lucroBruto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>
                    <tr className="border-b border-border border-dashed text-red-500/80">
                      <td className="px-6 py-3 pl-10 font-medium">(-) Despesas Indiretas e Administrativas (Sede, Aluguéis)</td>
                      <td className="px-6 py-3 font-medium text-right">- {despesasIndiretas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    </tr>
                    <tr className={`bg-background border-t-2 ${lucroLiquido >= 0 ? 'border-green-500' : 'border-red-500'}`}>
                      <td className="px-6 py-5 font-black text-base text-foreground">4. Resultado Líquido do Exercício (LLE)</td>
                      <td className={`px-6 py-5 font-black text-lg text-right ${lucroLiquido >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {lucroLiquido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ABA: Fluxo de Caixa */}
        {activeTab === "resumo" && (
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-lg font-bold text-foreground">Demonstrativo de Fluxo de Caixa (DFC)</h2>
              <p className="text-sm text-muted-foreground mt-1">Lançamentos bancários, recebimentos e desembolsos recentes do projeto.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-background/50 border-b border-border">
                  <tr>
                    <th className="px-6 py-4 font-medium">Data / Hora</th>
                    <th className="px-6 py-4 font-medium">Descrição da Movimentação</th>
                    <th className="px-6 py-4 font-medium">Categoria Contábil</th>
                    <th className="px-6 py-4 font-medium text-right">Desembolso (Saída)</th>
                    <th className="px-6 py-4 font-medium text-right">Entrada</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="px-6 py-4 text-muted-foreground">Hoje, 09:30</td>
                    <td className="px-6 py-4 font-medium text-foreground">Liquidação Fatura Gerdau S.A (Nota #445)</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 bg-muted rounded-md text-xs">Fornecedores (CPV)</span></td>
                    <td className="px-6 py-4 text-right font-bold text-red-500">R$ 125.000,00</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">-</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="px-6 py-4 text-muted-foreground">Ontem, 16:45</td>
                    <td className="px-6 py-4 font-medium text-foreground">Recebimento Medição Mês 06 (Cliente Final)</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 bg-muted rounded-md text-xs">Receita de Serviços</span></td>
                    <td className="px-6 py-4 text-right text-muted-foreground">-</td>
                    <td className="px-6 py-4 text-right font-bold text-green-500">R$ 450.000,00</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-background/50 transition-colors">
                    <td className="px-6 py-4 text-muted-foreground">Ontem, 10:15</td>
                    <td className="px-6 py-4 font-medium text-foreground">Pagamento Folha (Quinzena Operários)</td>
                    <td className="px-6 py-4"><span className="px-2 py-1 bg-muted rounded-md text-xs">Mão de Obra Direta</span></td>
                    <td className="px-6 py-4 text-right font-bold text-red-500">R$ 88.500,00</td>
                    <td className="px-6 py-4 text-right text-muted-foreground">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ABA: Impostos e Entes Estatais */}
        {activeTab === "impostos" && (
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border flex justify-between items-start">
              <div>
                <h2 className="text-lg font-bold text-foreground">Obrigações Tributárias e Acessórias</h2>
                <p className="text-sm text-muted-foreground mt-1">Conformidade com Município, Estado e União gerados por esta obra.</p>
              </div>
              <div className="px-3 py-1 bg-green-500/10 text-green-700 border border-green-500/20 rounded-md text-sm font-bold flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                CND Federal Regular
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-6 border-b md:border-r border-border">
                <div className="flex items-center mb-3">
                  <Landmark className="h-5 w-5 text-muted-foreground mr-2" />
                  <h3 className="font-bold">Município (Prefeitura)</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-background rounded border border-border">
                    <div>
                      <p className="font-medium text-sm">ISSQN - Retido na Fonte</p>
                      <p className="text-xs text-muted-foreground">Ref. Mês Passado</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 12.500,00</p>
                      <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">PAGO</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded border border-border">
                    <div>
                      <p className="font-medium text-sm">Alvará e Licença Ambiental</p>
                      <p className="text-xs text-muted-foreground">Taxa Anual de Operação</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-muted-foreground">Isento</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-b border-border">
                <div className="flex items-center mb-3">
                  <Landmark className="h-5 w-5 text-muted-foreground mr-2" />
                  <h3 className="font-bold">União (Governo Federal)</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-red-500/5 rounded border border-red-500/20">
                    <div>
                      <p className="font-medium text-sm">INSS Patronal + FGTS</p>
                      <p className="text-xs text-red-600/80">Folha de Pagamento</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-red-600">R$ 44.200,00</p>
                      <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded">VENCE HOJE</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-background rounded border border-border">
                    <div>
                      <p className="font-medium text-sm">PIS / COFINS (Retenção)</p>
                      <p className="text-xs text-muted-foreground">Medições da Obra</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">R$ 38.000,00</p>
                      <span className="text-[10px] font-bold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded">A VENCER (Dia 20)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ABA: Contratos e Folha */}
        {activeTab === "contratos" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Users className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-bold text-foreground">Recursos Humanos Próprios</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm py-2 border-b border-border">
                    <span className="text-muted-foreground">Engenheiros / Arquitetos</span>
                    <span className="font-bold">3 ativos</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-border">
                    <span className="text-muted-foreground">Mestres de Obra / Encarregados</span>
                    <span className="font-bold">2 ativos</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-border">
                    <span className="text-muted-foreground">Operários Diretos (Pedreiros, Serventes)</span>
                    <span className="font-bold">45 ativos</span>
                  </div>
                  <div className="flex justify-between text-sm pt-2">
                    <span className="text-foreground font-medium">Custo Mensal da Folha (Estimado)</span>
                    <span className="font-bold text-red-500">R$ 158.000,00</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-5 w-5 text-primary mr-2" />
                  <h3 className="font-bold text-foreground">Contratos de Subempreitada</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-background border border-border rounded-md">
                    <div className="flex justify-between">
                      <p className="font-bold text-sm">Gesso & Drywall (Gessart)</p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-bold">ATIVO</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Valor do Contrato: R$ 85.000,00</p>
                  </div>
                  <div className="p-3 bg-background border border-border rounded-md">
                    <div className="flex justify-between">
                      <p className="font-bold text-sm">Instalações Elétricas (Eletrotec)</p>
                      <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded font-bold">EM NEGOCIAÇÃO</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">Valor do Contrato: R$ 120.000,00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
