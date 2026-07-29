import { FileText, Download } from "lucide-react";

export default function RelatoriosPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Relatórios</h1>
        <p className="text-muted-foreground mt-2">Central de emissão de relatórios gerais da construtora.</p>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm p-8 text-center max-w-2xl mx-auto mt-12">
        <div className="mx-auto h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <FileText className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-4">Módulo em Desenvolvimento</h2>
        <p className="text-muted-foreground mb-8">
          Em breve, você poderá gerar relatórios gerenciais complexos, extrair planilhas de medição e consolidar dados contábeis automaticamente através deste painel.
        </p>
        <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium cursor-not-allowed opacity-80">
          <Download className="h-5 w-5" />
          <span>Exportar Relatório Mensal</span>
        </button>
      </div>
    </div>
  );
}
