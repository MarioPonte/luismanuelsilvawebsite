import Link from "next/link";
import Book from "../Book";
import Container from "../Container";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Books() {
  return (
    <Container id="livros">
      <h1 className="font-playfairDisplay text-3xl font-semibold uppercase text-center my-10">Livros</h1>

      <div className="flex flex-col gap-10">
        <hr />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="text-sm">Número de Livros:</span>
            <span className="font-gloock">5</span>
          </div>
          <Link href="https://www.amazon.es/stores/author/B0CBL78NRS/allbooks" target="_blank">
            <Button className="bg-gradient-to-b from-yellow-400 to-amber-500 ring-2 ring-black text-black text-xs font-medium font-gloock h-6">
              Todos os livros na Amazon
            </Button>
          </Link>
        </div>

        <div className="font-gloock flex justify-between content-between">
          <div>
            <Link href="/livros/#Uma Diversão de Potestades">
              <Image src="/images/books/book5.jpeg" width={220} height={334} alt="Um Comboio de Vidas Suspensas" className="border h-80 hover:opacity-90 transition-opacity duration-300 relative z-10" />
            </Link>
          </div>
          <div className="w-[680px] flex flex-col justify-between">
            <hr />
            <div className="flex flex-col gap-4">
              <span className="text-xl text-neutral-500">Lançamento mais recente</span>
              <span className="text-[40px]">Uma Diversão de Potestades</span>
              <span className="text-neutral-800">"Uma Diversão de Potestades" é uma história intensa, humana e sem medo de levantar perguntas difíceis sobre poder, fé, moralidade e destino.</span>
            </div>
            <div className="flex justify-between gap-4">
              <a href="/livros/#Uma Diversão de Potestades" className="border border-neutral-300 text-neutral-600 text-xl text-center p-2 w-80 rounded-lg">Resumo</a>
              <a href="https://www.amazon.com/dp/B0FDWNRKPK" target="_blank" className="border border-black text-xl text-center p-2 w-80 rounded-lg bg-amber-400 hover:bg-amber-500 transition duration-300">Comprar na Amazon</a>
            </div>
          </div>
        </div>

        <div className="flex gap-10">
          <Book title="Um Comboio de Vidas Suspensas" cover="/images/books/book1.jpg" buyLink="https://www.amazon.es/dp/B0C9SF6DQQ" />
          <Book title="Madalena" cover="/images/books/book2.jpg" buyLink="https://www.amazon.es/dp/B0CLSB9JHN" />
          <Book title="Cartas" cover="/images/books/book3.jpg" buyLink="https://www.amazon.es/dp/B0CQHSFQHP" />
          <Book title="O Futuro Põe-se ao Pôr do Sol" cover="/images/books/book4.jpg" buyLink="https://www.amazon.es/dp/B0CQTHX2HK" />
        </div>
        <Link href="/livros" className="m-auto">
          <Button className="min-w-96">
            Todos os livros
          </Button>
        </Link>
      </div>
    </Container>
  );
}
