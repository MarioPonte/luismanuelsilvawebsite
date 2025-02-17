import { Card } from "@/components/ui/card";
import Container from "../Container";

export default function Comments() {
  return (
    <Container id="comentarios">
      <h1 className="font-playfairDisplay text-3xl font-semibold uppercase text-center my-10">Comentários</h1>

      <div className="flex flex-col gap-10">
        <hr />
        <Card className="p-4">
          <div className="flex flex-col gap-1 font-gloock">
            <span className="underline">CH</span>
            <span className="underline">5,0 de 5 estrelas Emocionante</span>
            <span className="text-[10px] text-neutral-500">Avaliado em Espanha em 19 de janeiro de 2024</span>
          </div>
          <div className="text-sm mt-3">
            <p>“Um comboio de vidas suspensas” proporciona uma viagem emocional única ao acompanhar jovens militares num comboio rumo
              à guerra do Ultramar. A narrativa habilmente entrelaça as despedidas nos momentos de paragem nas estações, revelando
              a complexidade das relações. O autor, no seu notável primeiro romance, tece uma história envolvente que ressoa com
              emoção, quiçá auto-biográfica, oferecendo uma perspetiva tocante sobre o impacto da partida para um futuro incerto. Uma
              obra que deixa uma marca profunda no leitor.</p>
          </div>
        </Card>
      </div>
    </Container>
  );
}
