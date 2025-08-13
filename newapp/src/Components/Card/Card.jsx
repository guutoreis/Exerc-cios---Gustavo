

const Card = (props) => {

    return (
        <div>
            <h1> Lista de Pessoas </h1>
            {props.dados.map((dado) => (
                <div>
                    <h2>{dado.nome}</h2>
                    <li>Idade: {dado.idade}</li>
                    <li>Email: {dado.email}</li>
                    <li>Animal: {dado.tipoPet}</li>
                    <li>Nome do Pet: {dado.nomePet}</li>
                    <button>{props.botao}</button>
                </div>
            ))}

        </div>

    );
}

export default Card;