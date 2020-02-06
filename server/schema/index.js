const { gql } = require('apollo-server');

const typeDefs = gql`
    type Dragon {
        id              : ID,
        name            : String,
        class           : String,
        about           : String,
        fireType        : String,
        hiddenAbilities : String,
        vikingID        : ID,
        viking          : Viking
    }

    type Viking {
        id              : ID,
        name            : String,
        fullName        : String,
        tribe           : String,
        about           : String,
        dragonID        : ID,
        dragon          : Dragon,
        relationIds     : [ID]
        relations       : [Viking]

    }
    type Query {
        dragons: [Dragon],
        dragon(id:ID) : Dragon,
        vikings: [Viking],
        viking(id:ID) : Viking
    }
`

module.exports = typeDefs