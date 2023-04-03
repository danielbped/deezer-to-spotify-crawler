### Spotify Crawler

## Contexto
Projetinho desenvolvido com o intuito de passar minha lista de músicas do Deezer para o Spotify. Eram mais de 1500 músicas, o que daria um baita de um trabalho para fazer manualmente e decidi utilizar o Puppeteer para desenvolver este Crawler. Atualmente está bem básico, me serviu bastante, porém a parte de pegar as músicas do Deezer não foi automatizada, consegui pegar o array de músicas pelo network do painel do desenvolvedor do Google Chrome.

## Tecnologias Utilizadas

- [**Node JS**](https://nodejs.org/en/)
- [**dotenv**](https://www.npmjs.com/package/dotenv)
- [**Puppeteer**](https://www.npmjs.com/package/puppeteer)

# Instruções para rodar o projeto

### Será necessário ter instalado na sua máquina:

```
Git
Node v18.7.23
```

- Clone o repositório com o comando **git clone**:

```
git clone git@github.com:danielbped/spotify-bot.git
```

- Entre no diretório que acabou de ser criado:

```
cd crawler
```

- Para o projeto funcionar na sua máquina, será necessário instalar suas dependências, para isso, utilize o comando **npm install**:

```
npm install
```

## .env
- Para testes locais, é fundamental configurar um arquivo de variáveis de ambiente **.env** na raiz do projeto, este arquivo deverá possuir as seguintes informações (email e senha cadastrado no Spotify):

```
EMAIL=""
PASSWORD=""
```

## Dump do Deezer
Ao pegar os dados das músicas através da aba Network da ferramenta do desenvolvedor do Google Chrome, a lista será um array igual ao do arquivo [songs](https://github.com/danielbped/spotify-bot/blob/main/songs.js), que será filtrado antes do crawler rodar, desde que esteja no arquivo e no formato correto.

- Pronto, agora o projeto está pronto para ser rodado localmente, utilizando o comando **npm start**:

```
npm start
```

### Conclusão
Seu tempo de execução pode ser bastante demorado, dependendo do tempo de músicas, mas me ajudou bastante, tendo em vista que deixei rodando enquanto realizava outras tarefas, o que me poupou um bom tempo. Há várias melhorias que podem ser implementadas, sem sombra de dúvidas. Uma das principais implementações seria a captura automática da lista de músicas do Deezer, o que já permitiria que mais pessoas utilizassem a aplicação sem precisar de maiores dificuldades.