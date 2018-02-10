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
  constructor(data, hashes, time, creator ) {
    Object.assign(this, data, hashes, time, creator)
  }

  parents() {
    return hashes
  }

  selfParent() {
    return hashes[0] ? hashes[0] : null
  }

  toJSON() {
    const event = [data, hashes, time, creator, sig]
    return JSON.stringify(event)
  }

  get normalized() {
    const normalized = [data, hashes, time, creator]
    return JSON.stringify(normalized)
  }

  /**
   * sign
   * @description Sign the normalized data with a private key
   * @param {PrivateKey} sig The private key to use for signing
   *
   */
  sign(privateKey) {
    const normalized = this.normalized
    const sig = privateKey.sign(normalized)
    Object.assign(this, sig)
    return sig
  }

}

/**
 * Exports
 * @ignore
 */
module.exports = Event