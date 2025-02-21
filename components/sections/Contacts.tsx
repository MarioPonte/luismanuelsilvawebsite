import Container from "../Container";
import Contact from "../Contact";

export default function Contacts() {
  return (
    <Container id="contacto">
      <h1 className="font-playfairDisplay text-3xl font-semibold uppercase text-center my-10">Contacto</h1>

      <div className="flex flex-col gap-10">
        <hr />
        <div className="flex flex-col gap-6">
          <p>Envie-me uma mensagem, para esclarecimentos ou comentários sobre os meus livros.</p>
          <Contact />
        </div>
      </div>
    </Container>
  );
}
