'use strict'

/**
 * Hashgraph
 * @ignore
 */
class Hashgraph {
  constructor() {
      this.events = {} // events in the hashgraph
      this.coin = 10 // frequency of coin rounds
    }
    /**
     * Parents
     * Returns a list of events that are the parents of `event`
     * @param {Event} event
     * @returns {Array} list of events that are the parents of `event`
     */
  parents(event) {}
}

/**
 * Exports
 * @ignore
 */
module.exports = Hashgraph