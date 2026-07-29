import Link from "next/link";
import { Building2, ArrowLeft, Calendar, DollarSign, MapPin, Ruler, ChevronRight } from "lucide-react";
import { projetos } from "@/data/projetos";

export default function PublicProjetosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight text-foreground">Ampla<span className="text-primary">.</span></span>
          </Link>
          <Link href="/#projetos" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Link>
        </div>
      </nav>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mb-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-6">Nosso Portfólio</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore nossa galeria de obras e descubra por que a Ampla é sinônimo de segurança, qualidade e pontualidade no mercado da construção civil.
            </p>
          </div>
          
          <div className="space-y-12">
            {projetos.map((projeto) => (
              <div key={projeto.id} className="bg-card border border-border rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Imagem */}
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img src={projeto.img} alt={projeto.title} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full shadow ${
                        projeto.status === 'Concluído' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-primary text-primary-foreground'
                      }`}>
                        {projeto.status}
                      </span>
                    </div>
                    {/* Barra de progresso sobre a imagem */}
                    <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-background/30">
                      <div 
                        className={`h-full ${projeto.progresso === 100 ? 'bg-green-500' : 'bg-primary'}`}
                        style={{ width: `${projeto.progresso}%` }}
                      />
                    </div>
                  </div>

                  {/* Detalhes */}
                  <div className="p-8 lg:p-10 flex flex-col">
                    <p className="text-primary font-semibold text-sm mb-2 uppercase tracking-wider">{projeto.categoria}</p>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{projeto.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{projeto.resumo}</p>

                    {/* Ficha Técnica Resumida */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border">
                        <DollarSign className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Investimento</p>
                          <p className="text-sm font-bold text-foreground">{projeto.valor}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border">
                        <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Prazo</p>
                          <p className="text-sm font-bold text-foreground">{projeto.prazo}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border">
                        <Ruler className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Área</p>
                          <p className="text-sm font-bold text-foreground">{projeto.area}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border border-border">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Local</p>
                          <p className="text-sm font-bold text-foreground">{projeto.local}</p>
                        </div>
                      </div>
                    </div>

                    {/* Diferenciais */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {projeto.diferenciais.slice(0, 4).map((dif, idx) => (
                        <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                          {dif}
                        </span>
                      ))}
                      {projeto.diferenciais.length > 4 && (
                        <span className="px-3 py-1 bg-background text-muted-foreground text-xs font-semibold rounded-full border border-border">
                          +{projeto.diferenciais.length - 4} mais
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link 
                        href={`/projetos/${projeto.id}`} 
                        className="inline-flex items-center justify-center h-12 bg-primary text-primary-foreground px-8 rounded-md font-bold hover:bg-primary/90 transition-colors"
                      >
                        Ver Galeria e Detalhes
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
