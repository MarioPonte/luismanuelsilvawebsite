import { LogoLMS } from "../app/SVGFiles";

export default function Navbar() {
  return (
        <nav className="fixed top-0 w-full bg-white shadow-md shadow-neutral-100 font-gloock">
          <div className="w-[1080px] flex h-24 items-center justify-between m-auto">
            <div className="flex items-center gap-2">
              <LogoLMS className="h-10" />
              <span className="text-2xl">Luis Manuel Silva</span>
            </div>
            <div className="flex gap-4 text-neutral-800">
              <a href="/#livros" className="hover:text-neutral-600">Livros</a>
              <a href="/#biografia" className="hover:text-neutral-600">Biografia</a>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl underline">Autor</span>
              <span className="text-xs">Carpinteiro de Letras, Palavras e Linhas</span>
            </div>
          </div>
        </nav>
  );
}
