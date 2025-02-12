import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";
import Container from "../Container";

export default function Bio() {
  return (
    <Container id="biografia">
      <h1 className="font-playfairDisplay text-3xl font-semibold uppercase text-center my-10">Biografia</h1>

      <div className="flex flex-col gap-10">
        <hr />
        <Card className="p-4">
          <div className="flex gap-10 items-center">
            <Image src="/images/fotoBio.avif" className="w-44 rounded-md" width={182} height={211} alt="Foto de Luis Silva" />
            <div className="flex flex-col gap-4">
              <div>
                <Quote className="text-neutral-400" />
                <p>
                  Entre guerras e amores, a geração dos verdes anos ancorava-se nas paixões e palavras de Esperança da madrinha de guerra,
                  namorada e mulher. Eram elas que apoiavam, humanizavam e combatiam os medos. Páginas de amores e desamores
                  revelam segredos e desvendam corações.
                </p>
              </div>
              <span className="text-sm font-gloock">Luis Manuel Silva</span>
            </div>
          </div>
        </Card>

        <hr />

        <div className="flex flex-col gap-4 text-justify">
          <div>
            <p>Luis Manuel Pinto da Silva nasceu em Azurém, Guimarães.</p>
            <p>Fez Cursos Industriais, nas áreas de Electrícidade e Electrónica. Mais tarde, formou-se em Engenharia Electrotécnica.
              O percurso académico foi construído em paralelo com a atividade profissional: trabalho diurno, estudo noturno.</p>
            <p>Filho de um analfabeto, aprendeu a ler e a escrever com o pai, quando comprava jornais com os principais
              acontecimentos que mobilizavam o país e a opinião pública mundial: caso das campanhas eleitorais do General
              Sem Medo e da execução do preso da cela da morte, 2455, Caryl Chessman, o Homem da Lanterna Vermelha.</p>
          </div>
          <div>
            <p>No intervalo do percurso profissional e académico, passou pelo exército e a guerra do ultramar, em Angola,
              de 1971 a 1974. Foram quatro anos de sonhos e juventudes perdidas das gerações de sessenta e setenta.</p>
          </div>
          <div>
            <p>O gosto pela escrita e leitura começou com as leituras dos jornais do pai, os romances de cordel
              da mãe — que não deixou de ler quando fez o exame da segunda classe — e as cartas que escrevia a rogo dos analfabetos
              para os maridos e mulheres, separados pela distância, em busca de melhores condições de vida.</p>
          </div>
          <div>
            <p>Profissionalmente, e sempre na área de electricidade, passou pela construção civil e contribuiu para a construção dos
              bairros de Lisboa: Olivais Sul e Norte, Estrada da Luz e Benfica. Antes de ser incorporado, ajudou a montar as
              primeiras bancadas de corte, desbaste e lapidação de diamantes, na extinta Dialap, hoje, RTP, onde trabalhou até 1984.
              Entrou para o quadro de pessoal do Banco de Portugal e saiu, pouco tempo depois, para trabalhar em Luanda, Angola.
              Entre outros trabalhos, esteve envolvido na construção da rede eléctrica, alojamentos e serviços sociais para os
              participantes da Conferência Ministerial do Movimento dos Países Não-Alinhados, realizada em Angola.
              Regressou ao Banco de Portugal, onde trabalhou até à reforma, no dia 1 de Abril de 2013.</p>
          </div>
          <div>
            <p>Fez curso de escrita criativa como combatente, em Angola, durante dois anos de cartas quase diárias.</p>
            <p>Alguns escritos foram encerrados no baú das memórias de ex-combatente. Mais tarde, já reformado, e por o bichinho da
              escrita não o ter abandonado, ao remexer nos velhos papéis picados pelas traças, achou piada, e perguntou-se:</p>
            <p>De quem serão estes manuscritos?</p>
            <p>Desde então, fez algumas tentativas de escrita de longo curso.</p>
          </div>
          <div>
            <p>Dessa prática empírica, feita de experiência,  resultaram estes livros que agora entrego à justiça para serem sentenciados
              pelos eméritos Juízes Conselheiros da Leitura Suprema.</p>
          </div>
          <div>
            <p>Espero que dêem tanto prazer a ler como a mim de os fazer.</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
