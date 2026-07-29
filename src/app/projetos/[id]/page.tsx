"use client";

import Link from "next/link";
import { use, useState } from "react";
import {
  Building2,
  ArrowLeft,
  Calendar,
  DollarSign,
  MapPin,
  CheckCircle2,
  Ruler,
  Clock,
  Circle,
  ChevronLeft,
  ChevronRight,
  HardHat,
} from "lucide-react";
import { projetos } from "@/data/projetos";

export default function ProjetoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const projeto = projetos.find((p) => p.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!projeto) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground">
            Projeto não encontrado
          </h1>
          <Link
            href="/projetos"
            className="text-primary hover:underline mt-4 inline-block"
          >
            Voltar para portfólio
          </Link>
        </div>
      </div>
    );
  }

  const nextImg = () =>
    setActiveImg((prev) => (prev + 1) % projeto.galeria.length);
  const prevImg = () =>
    setActiveImg(
      (prev) => (prev - 1 + projeto.galeria.length) % projeto.galeria.length
    );

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight text-foreground">
              Ampla<span className="text-primary">.</span>
            </span>
          </Link>
          <Link
            href="/projetos"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos Projetos
          </Link>
        </div>
      </nav>

      {/* Galeria de Fotos */}
      <div className="relative w-full h-[50vh] md:h-[65vh] bg-card overflow-hidden group">
        <img
          src={projeto.galeria[activeImg]}
          alt={projeto.title}
          className="w-full h-full object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

        {/* Controles da galeria */}
        <button
          onClick={prevImg}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImg}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-card/80 backdrop-blur border border-border flex items-center justify-center text-foreground hover:bg-card transition-colors opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots de navegação */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {projeto.galeria.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImg(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === activeImg
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>

        {/* Info sobre a foto */}
        <div className="absolute bottom-6 right-6 bg-card/80 backdrop-blur border border-border px-4 py-2 rounded-full text-xs text-foreground font-medium">
          {activeImg + 1} / {projeto.galeria.length}
        </div>

        {/* Titulo overlay */}
        <div className="absolute bottom-0 left-0 w-full pb-16 px-8 z-20">
          <div className="container mx-auto">
            <span
              className={`inline-block px-3 py-1 text-sm font-bold rounded-full mb-4 shadow ${
                projeto.status === "Concluído"
                  ? "bg-green-500 text-white"
                  : projeto.status === "Atrasado"
                  ? "bg-red-500 text-white"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {projeto.status}
            </span>
            <p className="text-primary font-semibold mb-2">
              {projeto.categoria}
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground">
              {projeto.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex space-x-3 overflow-x-auto">
            {projeto.galeria.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImg(idx)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === activeImg
                    ? "border-primary shadow-lg scale-105"
                    : "border-border opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Foto ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12">
          {/* Coluna principal */}
          <div className="lg:col-span-2 space-y-12">
            {/* Resumo */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Sobre a Obra
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {projeto.detalhes}
              </p>
            </div>

            {/* Diferenciais */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Diferenciais Construtivos
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {projeto.diferenciais.map((dif, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{dif}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cronograma / Etapas */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Cronograma de Etapas
              </h2>
              <div className="relative pl-8 space-y-0">
                {/* Linha vertical */}
                <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border" />

                {projeto.etapas.map((etapa, idx) => (
                  <div key={idx} className="relative flex items-start pb-8 last:pb-0">
                    {/* Dot */}
                    <div className="absolute -left-8 mt-1">
                      {etapa.status === "concluida" ? (
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      ) : etapa.status === "andamento" ? (
                        <Clock className="h-6 w-6 text-primary animate-pulse" />
                      ) : (
                        <Circle className="h-6 w-6 text-border" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-semibold ${
                          etapa.status === "concluida"
                            ? "text-foreground"
                            : etapa.status === "andamento"
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {etapa.nome}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {etapa.status === "concluida"
                          ? "✔ Concluída"
                          : etapa.status === "andamento"
                          ? "⏳ Em andamento"
                          : "Pendente"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / Ficha Técnica */}
          <div>
            <div className="bg-card border border-border p-8 rounded-2xl shadow-lg sticky top-32">
              <h3 className="text-xl font-bold text-foreground mb-6 border-b border-border pb-4">
                Ficha Técnica
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <DollarSign className="h-5 w-5 text-primary mr-4 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Valor da Obra
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {projeto.valor}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-primary mr-4 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Previsão de Conclusão
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {projeto.prazo}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Ruler className="h-5 w-5 text-primary mr-4 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Área Construída
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {projeto.area}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-4 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Localização
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {projeto.local}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <HardHat className="h-5 w-5 text-primary mr-4 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Responsável Técnico
                    </p>
                    <p className="text-lg font-bold text-foreground">
                      {projeto.responsavel}
                    </p>
                  </div>
                </div>

                {/* Barra de progresso */}
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-muted-foreground font-medium">
                      Progresso
                    </span>
                    <span className="font-bold text-foreground">
                      {projeto.progresso}%
                    </span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3 border border-border">
                    <div
                      className={`h-full rounded-full transition-all ${
                        projeto.progresso === 100
                          ? "bg-green-500"
                          : "bg-primary"
                      }`}
                      style={{ width: `${projeto.progresso}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-3">
                <Link
                  href="/#contato"
                  className="flex items-center justify-center w-full h-12 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-colors"
                >
                  Falar com um Consultor
                </Link>
                <Link
                  href="/projetos"
                  className="flex items-center justify-center w-full h-12 border border-border text-foreground font-medium rounded-md hover:bg-card transition-colors"
                >
                  Ver Outros Projetos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
