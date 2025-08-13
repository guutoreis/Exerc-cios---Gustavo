import Botaozinho from "../Botaozinho/Botaozinho";

const Card = (props) => {

    return (
        <div>
            <h1>Lista de Pessoas</h1>
            {props.dados.map((dado) => (
                <div>
                    <h2>Nome: {dado.nome}</h2>
                    <li>Idade: {dado.idade}</li>
                    <li>E-mail: {dado.email}</li>
                    <li>Tipo Pet: {dado.tipoPet}</li>
                    <li>Nome Pet: {dado.nomePet}</li>  
                    <button>{props.botao} </button>     
                </div>
                
            ))}   
        </div>
    );
}

export default Card;