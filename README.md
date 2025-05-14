# Huntd public

Anonymous job search in IT(public version).

## Setup environment

1. Setup environment as described in the [doc](./Setup.md)

2. Clone repository:
    ```bash
   git clone git@github.com:mate-academy/huntd-public.git
   ```
3. Setup local `.env` file
  - Run `make init` to copy `.env.sample` -> `.env`
  - Insert on the 4th line the NPM_TOKEN you were given
4. Install dependencies (node modules) for primary services locally(make sure correct node version is used, check .nvmrc file):
    ```bash
    npm install # in root, ./frontend, ./api, ./cms
    ```
5. Add certificates to trusted
  - Check [Nginx Readme](./nginx/README.md)

## Run project

To run the project run following command in the root directory(INSERT NPM TOKEN INTO MAKEFILE BEFORE RUNNING IT):
```bash
  make up
```

After project has started up it should be accessible at `https://local.huntd.tech`

Project contains following services combined in `docker-compose`:
- **API:**
    - Codebase: './api'
    - Graphql endpoint: `https://local.huntd.tech/graphql`
    - Rest endpoint: `https://local.huntd.tech/rest`

    Graphql is a primary endpoint to use. Rest api is needed only for services without graphql support (like receive a pingback from the oAuth provider).

    Useful guides to learn how graphql works in combination with ORM and UI:
    - [Beginner GraphQL Series](https://www.youtube.com/watch?v=DyvsMKsEsyE&list=PLN3n1USn4xln0j_NN9k4j5hS1thsGibKi)
    - [Typescript, Next.js and GraphQL Series](https://www.youtube.com/watch?v=kfmh2mMf3fs&list=PLN3n1USn4xlkDk8vPVtgyGG3_1eXYPrW-)
    - [Slack Clone using GraphQL and React](https://www.youtube.com/watch?v=0MKJ7JbVnFc&list=PLN3n1USn4xlkdRlq3VZ1sT6SGW0-yajjL)

- **Frontend:**
    - Codebase: './frontend'
    - Homepage: `https://local.huntd.tech`

    [NextJS](https://nextjs.org) is used for serving UI on Huntd. Complete official [guide](https://nextjs.org/learn) and read the [docs](https://nextjs.org/docs) to get familiar with NextJS features.

- **CMS:**
    - Codebase: './cms'
    - Homepage: `https://local.hutnd.tech/admin`

  [Strapi](https://strapi.io) is used as a CMS on Huntd. Read official [docs](https://strapi.io/documentation) to get familiar with strapi features.

  On Huntd it's possible to use Typescript in Strapi while developing custom plugins even despite TS is not supported officially.

- **NGINX:**
    - Codebase: './nginx'

  Reverse proxy server. Read the [docs](https://nginx.org/en/docs) to get familiar with nginx features.

  **Follow guide from [Nginx readme](nginx/README.md)** to setup SSL certificates locally


- **DB:**
    - Codebase: './db'

  Local postgres database

- **Redis:**

  Huntd uses Redis as a PubSub server. Read the [docs](https://redis.io/documentation) to get familiar with Redis features.

  In production Huntd project uses AWS Redis.

**Makefile** is useful for running project locally. Most of the time developers use following commands:
- `make` or `make up` - start project
- `make down` - stop project
- `make rebuild-hard s=<service>` - rebuild image. Useful after installing new packages/dependencies.
- `make test s=<service>` - run tests
- `make db-development` - connect to database
- `make clean` - clean docker resources. Useful when message `No space left on the device` appeared.

## Daily workflow advices:
- Rebuild service every time when new dependency added. The `node_modules` folder is not synced to the docker container for performance purposes, so the only way to get dependencies in the container is running the "rebuild" command.
  ```bash
    make rebuild-hard s=<service>
  ```
- Keep local `.env` in sync with `.env.sample`.
