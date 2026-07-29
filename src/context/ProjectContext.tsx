"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { projetos as initialProjetos, Projeto } from "@/data/projetos";

interface ProjectContextData {
  projetosList: Projeto[];
  updateProjeto: (id: string, novosDados: Partial<Projeto>) => void;
}

const ProjectContext = createContext<ProjectContextData>({} as ProjectContextData);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [projetosList, setProjetosList] = useState<Projeto[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Carrega do LocalStorage na primeira renderização, se existir, senão usa os dados base
    const saved = localStorage.getItem("@ampla:projetos");
    if (saved) {
      setProjetosList(JSON.parse(saved));
    } else {
      setProjetosList(initialProjetos);
    }
    setIsLoaded(true);
  }, []);

  const updateProjeto = (id: string, novosDados: Partial<Projeto>) => {
    setProjetosList((prevList) => {
      const novaLista = prevList.map((p) => {
        if (p.id === id) {
          return { ...p, ...novosDados };
        }
        return p;
      });
      
      // Salva no LocalStorage
      localStorage.setItem("@ampla:projetos", JSON.stringify(novaLista));
      return novaLista;
    });
  };

  // Evita Hydration Mismatch
  if (!isLoaded) return null;

  return (
    <ProjectContext.Provider value={{ projetosList, updateProjeto }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProjects deve ser usado dentro de um ProjectProvider");
  }
  return context;
}
