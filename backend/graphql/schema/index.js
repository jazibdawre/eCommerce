import { buildSchema } from 'graphql';

module.exports = buildSchema(`
    type rootQuery {
        
    }

    type rootMutation {
        
    }

    schema {
        query: rootQuery
        mutation: rootMutation
    }
`);
