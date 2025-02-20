import Container from "../Container";
import Comment from "../Comment";

export default function Comments() {
  return (
    <Container id="comentarios">
      <h1 className="font-playfairDisplay text-3xl font-semibold uppercase text-center my-10">Comentários</h1>

      <div className="flex flex-col gap-10">
        <hr />
        <div className="flex flex-col gap-6">
          <Comment
            userName="CH"
            rate="5,0 de 5 estrelas Emocionante"
            date="Avaliado em Espanha em 19 de janeiro de 2024"
            message="“Um comboio de vidas suspensas” proporciona uma viagem emocional única ao acompanhar jovens militares num comboio rumo
            à guerra do Ultramar. A narrativa habilmente entrelaça as despedidas nos momentos de paragem nas estações, revelando
            a complexidade das relações. O autor, no seu notável primeiro romance, tece uma história envolvente que ressoa com
            emoção, quiçá auto-biográfica, oferecendo uma perspetiva tocante sobre o impacto da partida para um futuro incerto. Uma
            obra que deixa uma marca profunda no leitor."
          />
          <Comment
            userName="Armando Mendes"
            rate="5,0 de 5 estrelas Retrato de uma época que trucidou gerações de jovens."
            date="Avaliado em Espanha em 26 de outubro de 2023"
            message="Ficção muito realista contada na primeira pessoa, retratando com muita clareza a mobilização de jovens para as guerras 
            coloniais com os seus reflexos, traumas e medos, só possível por quem viveu toda a situação na própria pele."
          />
          <Comment
            userName="Isa Henriques"
            rate="5,0 de 5 estrelas Muito interessante e actual"
            date="Avaliado em Espanha em 29 de agosto de 2023"
            message="Livro facil de ler e Bem escrito. Factos reais. Uma verdadeira história de vida."
          />
          <Comment
            userName="CSC"
            rate="5,0 de 5 estrelas Muito bom"
            date="Avaliado em Espanha em 26 de agosto de 2023"
            message={"Bem escrito, com \"fôlego\". Factos reais ou ficcionados? Mesmo que ficcionado, relata factos reais para muitos jovens e famílias da época em que se foca. Excelente capa."}
          />
        </div>
      </div>
    </Container>
  );
}
