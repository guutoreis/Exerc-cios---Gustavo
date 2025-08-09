
import './App.css';

import twins from "./assets/img/twins.JPG"
import ricardo from "./assets/img/ricardo.png.jpg"

const dados = [
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


//CRIAR UM OU MAIS COMPONENTES PARA LISTAR O QUE TEM EM DADOS

function App() {
  return (
    <div className="App">
      <h1>Gustavo e Augusto</h1>
      <p>Bad boys</p>
      <p>Casa da vó Wanda e vô Eduardo</p>
      <img class="img" src={twins} title="guris da catequese" />
      <h1>Ricardo</h1>
      <p>30 anos</p>
      <p>Rua Odorico Mosmann - Centro</p>
      <img class="img" src={ricardo} />
    </div>
  );
}

export default App;
