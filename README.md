# platformatic-prisma-stream

## TODO

- [X]  Create a Platformatic application from scratch
- [X]  Configure Prisma
- [ ]  Model the Prisma schema
    - [ ]  Recipe
        - [X]  id
        - [X]  title
        - [X]  ingredients
        - [X]  difficulty
        - [X]  author
    - [X]  Author
        - [X]  id
        - [X]  name
- [X]  Install `db-diff` CLI
- [X]  Use CLI to generate migration
- [X]  Apply migration
- [X]  Add workaround for versions
- [ ]  Update the Prisma schema, generate and apply migration changes
    - [X]  Add rating
- [X]  Seed the database
- [X]  Integrate Fastify plugin for Prisma ([fastify-prisma](https://github.com/sabinadams/fastify-prisma))
- [ ]  Extend Platformatic DB GraphQL schema with a mutation
- [X]  Bonus points: Add a REST API route with validation

## Actions

- [ ] Look into 

### create-platformatic CLI

- [ ] What should we do if a README already exists? Message says "All done! Please open the project directory and check the README."
- [ ] Do migrations still get created if you tell it not to?
