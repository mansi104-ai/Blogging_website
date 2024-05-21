import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import category from './category'
// import post from './post'
import author from './author'
import post from './postDoc'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post,author,category, blockContent],
}
