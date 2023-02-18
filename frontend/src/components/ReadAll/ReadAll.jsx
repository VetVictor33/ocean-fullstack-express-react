/**
 * Desafios!
 *
 * Primeiro: HTML/CSS; Criação de componente.
 * 1. Criar um componente <Header /> que possua um logo na esquerda e dois itens
 * clicáveis:
 * - Home
 * - Criar
 * 2. Estilizar o Header com uma cor de fundo, o logo com tamanho pequeno e
 * os itens com uma cor que contraste bem com o fundo
 *
 * Segundo: JS; Lista; Map;
 * 1. Para cada item da lista de itens, crie uma propriedade chamada `tags`;
 * 2. Essa propriedade `tags` deve conter uma lista de strings;
 * 3. Cada string representa uma tag daquele personagem;
 * 4. Crie um componente <Tag /> que recebe uma `string` como
 * propriedade (`props`) e exibia um <div> com o texto informado.
 * 5. Estilize o componente <Tag /> para ter uma cor de fundo que contraste com
 * o card.
 * 6. Utilizando o map, exiba dentro do componente <Card />, uma renderização
 * desse componente <Tag /> recém criado.
 */

import Card from "../Card/Card";
import "./ReadAll.css";


//Mock items
const items = [
    {
        "_id": "63ef87a3387ea92af85f95bd",
        "nome": "Rick Sanchez",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        "_id": "63ef87df387ea92af85f95be",
        "nome": "Morty Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
        "_id": "63ef87f0387ea92af85f95bf",
        "nome": "Summer Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
        "_id": "63ef8802387ea92af85f95c0",
        "nome": "Beth Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
        "_id": "63ef880b387ea92af85f95c1",
        "nome": "Jerry Smith",
        "imagemUrl": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    }
]

function ReadAll() {
    return (
        <div className="ReadAll">
            {items.map(function (item) {
                return <Card key={'card-' + item._id} item={item} />;
            })}
        </div>
    )
}
export default ReadAll;