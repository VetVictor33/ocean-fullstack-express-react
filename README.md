# Cards do universo Rick em Morty

App inicialmente desenvolvivo na Jornada Fullstack da Samsung Ocean lecionada peloprofessor Paulo Salvatore em fevereiro de 2023.
Aplicativo monorepo, com backend e frontend hospedados na plataforma Render de maneira separada. O backend está conectado com um bando de dados noSQL MongoDB no qual há todas as inforações sobre os personagens que estão contemplados. O backend é implementado utilizando Express e o frontend usando React.

Os dados adicionados no MongoDB foram coletados de forma manual da API do Rick and Morty https://rickandmortyapi.com/

Deploy do frontend: https://rickandmorty-qlbm.onrender.com/

## Uso

### Home
![image](https://user-images.githubusercontent.com/115307935/221254524-a40ef0b1-577b-406c-9767-02e841c3ae5b.png)

Página inicial na qual todos os personagens contemplados pelo banco de dados são carregados. Dados como nome, imagem, tags e id são carregados de maneira dinâmica pelo algoritmo.

### Busca por ID
![image](https://user-images.githubusercontent.com/115307935/221255474-6edae203-b823-4f70-bc44-a5aa6666d226.png)

Aqui é possível buscar individualmente por uma personagem utilizado o ID que é disponibilizado no card da Home. 

## Como melhorar esse App

Criar uma nova seção na qual seja possível adicionar novos personagens. O backend já suporta a criação, porém essa funcionalidade precisa ser incluida no frontend.
