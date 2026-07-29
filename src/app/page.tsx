import Link from "next/link";
import { Building2, HardHat, Ruler, ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import { projetos } from "@/data/projetos";

export default function AmplaPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar específica da Ampla */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight text-foreground">Ampla<span className="text-primary">.</span></span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="#projetos" className="hover:text-primary transition-colors">Projetos</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/admin" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Acesso Restrito
            </Link>
            <a href="#contato" className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Fale Conosco
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
              Excelência em Construção Civil
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
              Construindo o seu <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">futuro hoje.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              A Ampla Construtora entrega projetos de infraestrutura, comerciais e residenciais de alto padrão, com pontualidade e rigor técnico incomparáveis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projetos" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                Conheça Nossas Obras
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#contato" className="inline-flex h-12 items-center justify-center rounded-md border border-border bg-card px-8 font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                Solicitar Orçamento
              </a>
            </div>
          </div>
          <div className="relative hidden lg:block">
            {/* Imagem Placeholder Estilizada */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10" />
              <img 
                src="/images/hero.png" 
                alt="Obra em andamento" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Card flutuante */}
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-6 rounded-xl shadow-xl flex items-center space-x-4 z-20">
              <div className="bg-primary/20 p-3 rounded-full">
                <HardHat className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">+150</p>
                <p className="text-sm text-muted-foreground font-medium">Obras Entregues</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-24 bg-background">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Tradição e Inovação na Engenharia Civil</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de duas décadas de mercado, a Ampla se consolida como uma das construtoras mais confiáveis e inovadoras do país. Nosso foco é entregar obras que superem expectativas, respeitando rigorosamente orçamentos e cronogramas.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Rigor técnico em todas as etapas",
                "Gestão transparente e eficiente",
                "Sustentabilidade e respeito ao meio ambiente",
                "Equipe de engenheiros altamente qualificados"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-foreground font-medium">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-lg">
                <img src="/images/sobre-arq.png" alt="Arquitetura" className="w-full h-full object-cover" />
              </div>
              <div className="bg-card border border-border p-6 rounded-2xl shadow-lg hover:border-primary/50 transition-colors">
                <p className="text-3xl font-bold text-primary mb-1">20+</p>
                <p className="text-sm font-medium text-muted-foreground">Anos de Experiência</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-card border border-border p-6 rounded-2xl shadow-lg hover:border-primary/50 transition-colors">
                <p className="text-3xl font-bold text-primary mb-1">3.5M</p>
                <p className="text-sm font-medium text-muted-foreground">Metros Construídos</p>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-border shadow-lg">
                <img src="/images/sobre-eng.png" alt="Engenharia" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nossa Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Atuamos em diversas frentes da engenharia civil, garantindo a mesma qualidade e segurança institucional em todos os nossos projetos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group">
              <Building2 className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-3">Obras Corporativas</h3>
              <p className="text-muted-foreground">Galpões logísticos, edifícios comerciais e lajes corporativas construídos com agilidade e tecnologia de ponta.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group">
              <HardHat className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-3">Infraestrutura</h3>
              <p className="text-muted-foreground">Obras pesadas, pavimentação, saneamento e contenções com rigor técnico e respeito ao meio ambiente.</p>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors group">
              <Ruler className="h-10 w-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-3">Alto Padrão</h3>
              <p className="text-muted-foreground">Empreendimentos residenciais de luxo com acabamento impecável, design arrojado e exclusividade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Obras em Destaque</h2>
              <p className="text-muted-foreground">
                Conheça alguns dos projetos que definem o padrão de excelência da Ampla. De edifícios de luxo a complexos industriais.
              </p>
            </div>
            <Link href="/projetos" className="flex items-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors">
              <span>Ver todos os projetos</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.slice(0, 3).map((projeto) => (
              <Link href={`/projetos/${projeto.id}`} key={projeto.id} className="group relative rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl transition-all cursor-pointer block">
                <div className="aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
                  <img src={projeto.img} alt={projeto.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <p className="text-primary font-medium mb-1 text-sm">{projeto.categoria}</p>
                  <h3 className="text-2xl font-bold text-foreground">{projeto.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contato */}
      <section id="contato" className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Pronto para iniciar a sua obra?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fale com nossos engenheiros. Nós avaliamos o seu projeto e apresentamos o melhor plano de execução, com transparência total de custos e prazos.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-foreground">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="font-medium">(11) 4000-0000</span>
                </div>
                <div className="flex items-center text-foreground">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span className="font-medium">projetos@amplaconstrutora.com.br</span>
                </div>
                <div className="flex items-center text-foreground">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span className="font-medium">Av. das Nações, 500 - São Paulo, SP</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Nome / Empresa</label>
                  <input type="text" className="w-full h-11 px-4 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">E-mail Corporativo</label>
                  <input type="email" className="w-full h-11 px-4 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Mensagem ou Escopo do Projeto</label>
                  <textarea rows={4} className="w-full p-4 rounded-md border border-border bg-background focus:ring-1 focus:ring-primary focus:outline-none"></textarea>
                </div>
                <button type="button" className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors mt-2">
                  Solicitar Contato
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="border-t border-border py-8 text-center text-muted-foreground text-sm">
        <p>© {new Date().getFullYear()} Ampla Construtora. Todos os direitos reservados. Desenvolvido no ecossistema Construlink.</p>
      </footer>
    </div>
  );
}
