
import './App.css';

import twins from "./assets/img/twins.JPG"
import ricardo from "./assets/img/ricardo.png.jpg"




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
