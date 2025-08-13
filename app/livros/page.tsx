import Container from "@/components/Container";
import BookSec from "@/components/sections/BookSec";

export default function Page() {
  return (
    <Container id="livros">
      <div>
        <BookSec
          title="Uma Diversão de Potestades"
          cover="/images/books/book5.jpeg"
          description={<>
            <p>Enquanto Yahweh e Moloque jogam xadrez, a terra arde e as peças humanas movem-se sem saber que fazem parte de um jogo maior.</p>
            <p>Cada jogada muda o rumo dos acontecimentos. Cada capítulo é um reflexo direto das mãos invisíveis que tecem os fios do bem e do
              mal, da ordem e do caos, da proteção e destruição.</p>
            <p>Quando a guerra na Ucrânia explode, um grupo de alunos e docentes da Universidade de Colúmbia, em Nova Iorque, vê-se apanhado
              pelo choque e pela urgência de agir. Vindos de diferentes países e culturas, unem-se em solidariedade com os colegas afetados.
              Mas quando o conflito em Gaza rebenta, percebem que o sofrimento é universal e que as potestades jogam em todos os tabuleiros.</p>
            <p>Entre ficar inativos ou arriscar, escolhem oferecer as suas vidas para aliviar o sofrimento dos outros — um caminho que os
              levará a questionar as narrativas dominantes, a confrontar a ideia de povo eleito e a sentir, na pele, o preço da humanidade.</p>
          </>}
          buyLink="https://www.amazon.com/dp/B0FDWNRKPK"
        />
        <BookSec
          title="Um Comboio de Vidas Suspensas"
          cover="/images/books/book1.jpg"
          description={<>
            <p>Um grupo de militares mobilizados para Angola vai conversando entre si no interior de um comboio.</p>
            <p>No decurso da viagem, com momentos de introspeção e reflexão, os diálogos refletem os medos e o receio
              de não chegarem ao fim da comissão de dois anos.</p>
            <p>Sob o ponto de vista dos jovens, fala-se da guerra colonial, da situação do país, da sangria dos homens
              enviados para a guerra, das mulheres, namoradas e madrinhas de guerra, do trajeto militar, da descolonização
              europeia e suas implicações na realidade portuguesa.</p>
          </>}
          buyLink="https://www.amazon.es/dp/B0C9SF6DQQ"
        />
        <BookSec
          title="Madalena"
          cover="/images/books/book2.jpg"
          description={<>
            <p>Madalena, mulher madura, bonita e sensual, confiante e independente, tem uma vida bastante ativa na gestão dos negócios
              de uma multinacional. Apesar de casada, vive separada do marido há uns anos. Por comum acordo, decidiram partilhar o
              crescimento e a educação da filha semana sim, semana não.</p>
            <p>As suas origens remontam à Idade Média e desde sempre estava habituada a ouvir falar que os casamentos entre famílias
              eram negociados e cumpridos: jamais desfeitos. A última representante de uma nobreza desagregada dedicava-se ao amor da filha.</p>
            <p>Neste ambiente secular de amores e desamores, liberdade e independência, caldeado pelos valores da velha nobreza, sem ser
              libertina, ia mantendo uma ou outra relação ocasional. No supermercado, local mais improvável para o romance, conhece António.</p>
            <p>Ao contrário das outras aventuras, ambos concordam com uma relação aberta e descomprometida. Só que...</p>
          </>}
          buyLink="https://www.amazon.es/dp/B0CLSB9JHN"
        />
        <BookSec
          title="Cartas"
          cover="/images/books/book3.jpg"
          description={<>
            <p>No rio selvagem e turbulento de dois anos de guerra, fluíram medos, saudades e rotinas mortais.
              As namoradas e madrinhas de guerra enviaram torrentes de palavras secretas, em cartas seladas com beijos, para adoçar peitos agitados.
              No interior deste rio de águas antigas, sem métrica, rima e estrofes regulares, desliza um barco carregado de graças para elas.</p>
            <p>Noite após noite, deixava que a bic
              se animasse a fazer o seu caminho
              até se sentir esgotada de tanto andar.
              Feliz, nunca se cansava!</p>
          </>}
          buyLink="https://www.amazon.es/dp/B0CQHSFQHP"
        />
        <BookSec
          title="O Futuro Põe-se ao Por do Sol"
          cover="/images/books/book4.jpg"
          description={<>
            <p>Um grupo de jovens militares a caminho de Angola, fechados num avião, desconhecem as realidades do país e África. Habituados
              a verem mortos e estropiados na família, amigos e vizinhos, interrogam-se sobre o futuro.</p>
            <p>Quando desembarcam em Luanda, encontram uma cidade fortemente militarizada, com muita cor, alegria, juventude, mulheres vistosas e bonitas.</p>
            <p>Enquanto Lisboa era uma cidade fechada, cercada pelo medo, deserta depois das dez horas da noite; Luanda, cidade de luz, néon,
              intensa vida diurna e noturna, era um espaço de liberdade estonteante para quem acabava de chegar da Metrópole.</p>
            <p>Durante os dias de espera e fragilidades, esquecem os medos, floresce um romance avassalador.</p>
          </>}
          buyLink="https://www.amazon.es/dp/B0CQTHX2HK"
        />
      </div>
    </Container>
  );
}
