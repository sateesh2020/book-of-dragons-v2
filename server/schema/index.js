const { gql } = require('apollo-server');

const typeDefs = gql`
    type VikingDetails {
        height          : String,
        eyes            : String,
        hair            : String,
        location        : String,
        weapons         : [String]
    }

    type DragonDetails {
        attack          : String,
        speed           : String,
        armor           : String,
        firePower       : String,
        shortLimit      : String,
        venom           : String,
        jawStrength     : String,
        stealth         : String
    }

    type Image  {
        thumbnail       : String,
        hero            : String
    }

    type About {
        descriptionOne  : String,
        descriptionTwo  : String
    }

    type Dragon {
        id              : ID,
        name            : String,
        class           : String,
        about           : About,
        fireType        : String,
        hiddenAbilities : String,
        details         : DragonDetails,
        image           : Image,   
        vikingID        : ID,
        viking          : Viking
        
    }

    type Viking {
        id              : ID,
        name            : String,
        fullName        : String,
        tribe           : String,
        about           : About,
        details         : VikingDetails,
        image           : Image,
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