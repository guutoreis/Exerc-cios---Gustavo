import Botaozinho from "./Components/Botao/Botaozinho";
import Card from "./Components/Card/Card";
import NumeroAleatorio from "./Components/Numero/NumeroAleatorio";

const pessoas = [
  {
    nome: 'Ana Silva',
    idade: 28,
    email: 'ana.silva@email.com',
    tipoPet: 'gato',
    nomePet: 'Mingau',
  },
  {
    nome: 'Bruno Costa',
    idade: 34,
    email: 'bruno.costa@email.com',
    tipoPet: 'cachorro',
    nomePet: 'Thor',
  },
  {
    nome: 'Carla Mendes',
    idade: 22,
    email: 'carla.mendes@email.com',
    tipoPet: 'papagaio',
    nomePet: 'Loro',
  },
  {
    nome: 'Diego Rocha',
    idade: 41,
    email: 'diego.rocha@email.com',
    tipoPet: 'gato',
    nomePet: 'Felix',
  },
  {
    nome: 'Elaine Souza',
    idade: 30,
    email: 'elaine.souza@email.com',
    tipoPet: 'cachorro',
    nomePet: 'Bella',
  },
  {
    nome: 'Felipe Martins',
    idade: 25,
    email: 'felipe.martins@email.com',
    tipoPet: 'peixe',
    nomePet: 'Nemo',
  },
  {
    nome: 'Gabriela Lima',
    idade: 27,
    email: 'gabriela.lima@email.com',
    tipoPet: 'hamster',
    nomePet: 'Biscoito',
  },
  {
    nome: 'Henrique Alves',
    idade: 36,
    email: 'henrique.alves@email.com',
    tipoPet: 'gato',
    nomePet: 'Garfield',
  },
  {
    nome: 'Isabela Duarte',
    idade: 29,
    email: 'isabela.duarte@email.com',
    tipoPet: 'cachorro',
    nomePet: 'Rex',
  },
  {
    nome: 'João Pedro',
    idade: 33,
    email: 'joao.pedro@email.com',
    tipoPet: 'papagaio',
    nomePet: 'Verde',
  },
];

const nomeDoBotao = 'CLIQUE NESSE BOTAOZINHO AQUI';

const numeroAleatorio = Math.random();

//NAO FAZER NENHUM CSS POR ENQUANTO!!!
//PROIBIDO USAR IA(CHATGPT OU SEILA O QUE)

//1- CRIAR UM COMPONENTE CHAMADO CARD QUE LISTA AS PESSOAS - OK

//2- CRIAR UM COMPONENTE BOTAOZINHO QUE RECEBE UMA VARIAVEL NOMEDOBOTAO COMO TITULO DO BOTAO - OK

//3- CRIAR UM COMPONENTE CHAMADO NUMEROALEATORIO, QUE RECEBE A VARIAVEL NUMEROALEATORIO

//4- TAREFA BONUS - CHAMAR O BOTAO DENTRO DO COMPONENTE CARD 

//LISTAR OS 3 COMPONENTES EM APP

function App() {

  return (

    <div>
      <Card dados = {pessoas} botao = {nomeDoBotao}/>
      <Botaozinho botao = {nomeDoBotao} />
      <NumeroAleatorio numero = {numeroAleatorio} />
    </div>

  )
}

export default App;
