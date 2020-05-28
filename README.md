# training-typescript
 A brief study of typescript
 
# Welcome to Typescript!
Um breve rascunho meu ao aprender sobre TypeScript. Nada formal, como eu disse, é um rascunho que faço para melhor fixação do aprendizado.

Vamos lá...


Linguagem baseada no javascript que nos permite acessar as features mais recentes...funciona como o Babel, o browser e o nodeJS não entendem. 
Em ambiente de dev o typescript nos ajuda muito.

Mas porque TypeScript?

    function displayUserInformation(user){
    return `${user.name}` - `${user.email}`;
    }
    export default displayUserInformation;

Se temos essa aplicação acima e é solicitado incluir a informação da cidade e UF do usuário nesse retorno, fica a dúvida, será que segue o mesmo padrão de user.name e user.email? Utilizo user.city? Será que esses campos não obrigatórios?

O Editor mesmo com IntelliSense não conhece o formato da variável user.

E ai vem uma das vantagens de TP, QUANDO TEMOS TP O EDITOR CONSEGUE SABER EXATAMENTE OS DADOS DE UM USUÁRIO. Quanto mais o projeto crescer, mais o TP será essencial.

- Então nesse projeto executei o comando **yarn add typescript -D** para rodar o tp em ambiente dev.
- Executei o comando **yarn add express** para adicionar Express.js, estrutura de aplicativo da Web para o Node.js.
- Executei **yarn add -D @types/express**, pacote que contém as definições de tipos do Express.
- Executei **yarn tsc --init** que gerá um arquivo chamado tsconfig.json com algumas configurações padrões
- Executei **yarn tsc**, a extensão typescript fornece pra nós um binário chamado tsc e ele fará a conversão de ts para js.
- E por fim, **node src/index.js** para executar meu arquivo convertido.

*Quando adicionar tipos?*

Um dos fatores é que editor vai nos avisar, irá ficar um erro dizendo por exemplo 'Parameter .... implicitly has an 'any' type', basicamente o parâmetro tem "qualquer" tipo e naquele contexto será necessário adicionar os tipos. Importaremos uma lib para informar o tipo ao parâmetros, por exemplo.

|          |Algumas formas de adicionar tipos (tipagem)|Exemplo|
|----------------|-------------------------------|-----------------------------|
|               |`Informando o valor padrão`   |"name = ' *vazio* ' " *(Tipagem primitiva)*                   
|                |`Informando o tipo da variável.`|"name: String; "            |
|                |`Informando interfaces`        |valores opcionais, obrigatórios, array....|


Interface basicamente será onde iremos criar nosso objeto com os tipos de conjunto de informação
![Exemplo Interface](https://imgur.com/cJXavXp)

Finalizo dizendo que o TS nos avisa que tem parâmetros que estão faltando, o JS não avisaria que há parâmetros faltantes.
![Exemplo parameters ](https://imgur.com/tZW5GmN)
