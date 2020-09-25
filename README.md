<p align="right">
  <a href="README.en.md">🇺🇸</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">🇧🇷</a>&nbsp;&nbsp;&nbsp;
</p>

<img alt="GoStack" src=./src/assets/header-bootcamp.png />

<h3 align="center">
  Conceitos do ReactJS
</h3>

<p align="center">
  <a href="#🚀-sobre-a-aplicação">Sobre a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#💿-pacotes-requiridos">Pacotes requiridos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#📝-licença">Licença</a>
</p>

## 🚀 Sobre a aplicação

Uma simples aplicação com ReactJS!

Essa é uma aplicação para armazenar projetos do seu portfólio, que permite a criação e listagem dos projetos.

`Importante`: Essa aplicação requer o [backend](https://github.com/bruno-fialho/conceitos-back-end-nodejs).

### Rotas da aplicação

A aplicação possui duas rotas:

- **`Listar os projetos da sua API`**: Deve ser capaz de criar uma lista com o campo **title** de todos os projetos que estão cadastrados na sua API.

- **`Adicionar um projeto a sua API`**: Deve ser capaz de adicionar um novo item na API através de um botão com o texto **Adicionar Projeto** e, após a criação, deve ser capaz de exibir o nome<sup>*</sup>. 

<sup>*</sup>Nome gerado automaticamente

## 💿 Pacotes requiridos

A seguir segue uma lista dos pacotes necessários para a aplicação (Usando [yarn](https://yarnpkg.com/)):

### No Frontend

- yarn add [react react-dom](https://www.npmjs.com/package/react-dom)
- yarn add [@babel/core](https://www.npmjs.com/package/@babel/core) [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env) [@babel/preset-react](https://www.npmjs.com/package/@babel/preset-react) [webpack webpack-cli](https://webpack.js.org/guides/installation/)
- yarn add [@babel/cli](https://babeljs.io/docs/en/babel-cli/)
- yarn add [babel-loader](https://github.com/babel/babel-loader)
- yarn add [webpack-dev-server](https://github.com/webpack/webpack-dev-server) -D
- yarn add [style-loader](https://www.npmjs.com/package/style-loader) [css-loader](https://www.npmjs.com/package/css-loader) -D
- yarn add [file-loader](https://webpack.js.org/loaders/file-loader/)
- yarn add [axios](https://www.npmjs.com/package/axios)
- yarn add [@babel/plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime)

### No Backend

- yarn add [cors](https://www.npmjs.com/package/cors)


## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.