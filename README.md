# express-template

Express using TypeScript starter project.

This project was created following guides and best practises detailled below.

## Express
Guides and best practises:
- [Application skeleton generator](https://expressjs.com/en/starter/generator.html)
- [TypeScript - Express starter project](https://github.com/Microsoft/TypeScript-Node-Starter#typescript-node-starter)
- [MDN - Express starter project](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)
- [Security best practises](https://expressjs.com/en/advanced/best-practice-security.html)
- [Performance best practises](https://expressjs.com/en/advanced/best-practice-performance.html)

## Docker with Node
Guides and best practises:
- [nodejs.org](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [docker-node](https://github.com/nodejs/docker-node)

## Chrome
Guides:
- [inspector](https://nodejs.org/en/docs/inspector/)

## VS Code
Guides:
- [Node debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [Debugging TypeScript in Docker](https://github.com/Microsoft/vscode-recipes/tree/master/Docker-TypeScript)

## Beginning Projects
- Config DataBase in Env
- yarn install
- yarn build
- yarn migration:run
- yarn migration:seed
- yarn start

## Payload For API EndPoints
- Clients 
- {
  - name: string,
  - userName: string,
  - email: string,
  - business: number,
- }

- Address
- {
  - street: string,
  - postalCode: string,
  - numberHome: string,
  - client: number,
  - enabled: boolean,
- }

- Business
- {
  - name: string,
- }


## Payload For API EndPoints Exceptions

- Clients
- {
  - name: string,
  - userName: string,
  - email: string,
  - business: {
    - name: string
  - },
- }



