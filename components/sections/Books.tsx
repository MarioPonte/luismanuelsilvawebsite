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
        <div className="flex gap-10">
          <Book title="Um Comboio de Vidas Suspensas" />
          <Book title="Madalena" />
          <Book title="Cartas" />
          <Book title="O Futuro Põe-se ao Por do Sol" />
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
