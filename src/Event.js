'use strict'

/**
 * Event
 * @param {*} data The "payload" data, which may include transactions
 * @param {Array} hashes A list of hashs of the event's parents, self-parent first
 * @param {Time} time Creator's claimed data and time of the event's creation
 * @param {IDNumber} creator The creator's ID number
 * @param {Sig} sig The creator's digital signature of {data, hashes, time, creator}
 */
class Event {
  constructor(data, hashes, time, creator, sig) {
    Object.assign(this, data, hashes, time, creator, sig)
  }

  parents() {
    return hashes
  }

  selfParent() {
    return hashes[0] ? hashes[0] : this
  }
}

/**
 * Exports
 * @ignore
 */
module.exports = Event