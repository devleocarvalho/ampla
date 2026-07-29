import { Settings, User, Building, Shield, Bell } from "lucide-react";

export default function ConfiguracoesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Configurações</h1>
        <p className="text-muted-foreground mt-2">Gerencie as preferências da empresa e permissões de usuários.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-2">
          {[
            { icon: Building, label: "Perfil da Empresa", active: true },
            { icon: User, label: "Meu Perfil", active: false },
            { icon: Shield, label: "Acessos e Permissões", active: false },
            { icon: Bell, label: "Notificações", active: false },
          ].map((item, i) => (
            <button 
              key={i} 
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                item.active 
                  ? 'bg-primary text-primary-foreground' 
                  : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="md:col-span-3 bg-card border border-border rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-foreground mb-6">Dados da Empresa</h2>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Razão Social</label>
                <input 
                  type="text" 
                  defaultValue="Ampla Construtora e Incorporadora LTDA" 
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">CNPJ</label>
                <input 
                  type="text" 
                  defaultValue="12.345.678/0001-90" 
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-foreground mb-1 block">Endereço Principal</label>
                <input 
                  type="text" 
                  defaultValue="Av. das Nações, 500 - São Paulo, SP" 
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm"
                />
              </div>
            </div>

            <div className="pt-6 border-t border-border flex justify-end">
              <button type="button" className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
