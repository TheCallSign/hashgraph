'use strict'

/**
 * Hashgraph
 * @ignore
 */
class Hashgraph {
  constructor() {
    /**
     * // events in the hashgraph
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
     */
      this.events = {}
      this.coin = 10 // frequency of coin rounds
    }
  /**
   * Parents
   * Returns a list of events that are the parents of `event`
   * @param {Event} event
   * @returns {Array} list of events that are the parents of `event`
   */
  parents(event) {}

  /**
   * selfParent
   * @description Get the self parent event
   * @param {Event} event
   * @returns {Event} Self parent event
   */
  selfParent(event) {}

  /**
   * ancestor
   * @description Check if event B is the ancestor to event A
   * @param {Event} eventA Event A
   * @param {Event} eventB Event B
   */
  ancestor(eventA, eventB) {}

  /**
   * selfAncestor
   * @description Check if event B is the self ancestor to event A
   * @param {Event} eventA
   * @param {Event} eventB
   */
  selfAncestor(eventA, eventB) {}

  /**
   * see
   * @description Check if event A can see event B
   * @param {Event} eventA
   * @param {Event} eventB
   */
  see(eventA, eventB) {}

  /**
   * stronglySee
   * @description Check if event A can strongly see event B
   * @param {Event} eventA
   * @param {Event} eventB
   */
  stronglySee(eventA, eventB) {}

  /**
   * parentRound
   * @description Get the parent round of the event
   * @param {Event} event
   */
  parentRound(event) {}

  /**
   * roundInc
   * @description Decide either to increment the round for the event or not
   * @param {Event} event
   * @returns A boolean
   */
  roundInc(event) {}

  /**
   * witness
   * @description Get a list of events that the passed in event witnesses
   * @param {Event} event
   * @returns A list if witnessed events
   */
  witness(event) {}

  /**
   * diff
   * @description Get the difference of round(eventA) - round(eventB)
   * @param {Event} eventA
   * @param {Event} eventB
   * @returns A subset of the hashgraph
   */
  diff(eventA, eventB) {}


  /**
   * votes
   * @description
   * return list of every event z (element of events) where diff(x, z) == 1
   * intersect with witness(z)
   * intersect with stronglySee(x, z)
   * intersect with vote(z, y) == v
   * @param {Event} eventA
   * @param {Event} eventB
   * @param {Bool} vote (v in description)
   */
  votes(eventA, eventB, vote) {}

  fractTrue(eventA, eventB)
  famous(event) {}
  uniqueFamous(event) {}
  roundsDecided() {}
  roundsReceived() {}
  timeReceived(event) {}

}

/**
 * Exports
 * @ignore
 */
module.exports = Hashgraph