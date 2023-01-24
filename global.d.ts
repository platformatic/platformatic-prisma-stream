import { Entity } from '@platformatic/sql-mapper';
import graphqlPlugin from '@platformatic/sql-graphql'
import { Author } from './types/Author'
import { Recipe } from './types/Recipe'

declare module '@platformatic/sql-mapper' {
  interface Entities {
    author: Entity<Author>,
    recipe: Entity<Recipe>,
  }
}
