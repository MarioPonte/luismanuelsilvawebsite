import Link from "next/link";
import Book from "../Book";
import Container from "../Container";
import { Button } from "../ui/button";

export default function Books() {
  return (
    <Container id="livros">
      <h1 className="font-playfairDisplay text-3xl font-semibold uppercase text-center my-10">Livros</h1>

      <div className="flex flex-col gap-10">
        <hr />
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <span className="text-sm">Número de Livros:</span>
            <span className="font-gloock">4</span>
          </div>
          <Button className="bg-gradient-to-b from-yellow-400 to-amber-500 ring-2 ring-black text-black text-xs font-medium font-gloock h-6">
            Todos os livros na Amazon
          </Button>
        </div>
        <div className="flex gap-10">
          <Book title="Um Comboio de Vidas Suspensas" cover="/images/books/book1.jpg" buyLink="https://www.amazon.es/dp/B0C9SF6DQQ" />
          <Book title="Madalena" cover="/images/books/book2.jpg" buyLink="https://www.amazon.es/dp/B0CLSB9JHN" />
          <Book title="Cartas" cover="/images/books/book3.jpg" buyLink="https://www.amazon.es/dp/B0CQHSFQHP" />
          <Book title="O Futuro Põe-se ao Por do Sol" cover="/images/books/book4.jpg" buyLink="https://www.amazon.es/dp/B0CQTHX2HK" />
        </div>
        <Link href="/" className="m-auto">
          <Button className="min-w-96">
            Todos os livros
          </Button>
        </Link>
      </div>
    </Container>
  );
}
