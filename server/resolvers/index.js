const { dragons, vikings } = require('../mock');
const { find, filter, includes } = require('lodash');
const resolvers = {
    Query: {
        dragons: () => dragons,
        dragon(parent, args) {
            return find(dragons, { id: args.id })
        },
        vikings: () => vikings,
        viking(parent, args) {
            return find(vikings, { id: args.id })
        },
    },
    Viking: {
        dragon(viking) {
            return find(dragons, { vikingID: viking.id })
        },
        relations(viking) {
            return filter(vikings, (vik) => {
                return includes(vik.relationIds, viking.id)
            })
        }
    },
    Dragon: {
        viking(dragon) {
            return find(vikings, { dragonID: dragon.id })
        }
    }
};

module.exports = resolvers;