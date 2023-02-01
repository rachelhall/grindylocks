import type { CodegenConfig } from '@graphql-codegen/cli';
import { printSchema } from 'graphql';

import { schema } from './graphql/schema';

const config: CodegenConfig = {
  schema: printSchema(schema),
  documents: ['src/**/*.tsx'],
  generates: {
    './src/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;