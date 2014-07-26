/*globals fdom:true */
/*jslint indent:2,sloppy:true */
/**
 * STORAGE API
 *
 * API for Persistent Storage
 * Exposes a key-value get/put interface
 **/
fdom.apis.set("storebuffer", {
  /** 
   * List of scopes that can preferred when accessing storage.
  **/
  'scope': {type: 'constant', value: {
    // Storage should only last while the app is active.
    'SESSION': 0,
    // Storage should be limited to host the app is bound to.
    'DEVICE_LOCAL': 1,
    // Storage should be synchronized between user devices.
    'USER_LOCAL': 2,
    // Storage should be synchronized across users.
    'SHARED': 3
  }},

  /** 
   * error codes and default messages that may be returned on failures.
   */
  'ERRCODE': {type: 'constant', value: {
    /** GENERAL **/
    'SUCCESS': 'Success!',
    // Unknown
    'UNKNOWN': 'Unknown error',
    // Database not ready
    'OFFLINE': 'Database not reachable',
    // Improper parameters
    'MALFORMEDPARAMETERS': 'Parameters are malformed'
  }},

  /**
   * Create a storage provider.
   * @param {Object} options
   *    scope {storage.scope} The preferred storage scope.
   * @constructor
   */
  'constructor': { value: [{
    'scope': 'number'
  }]},

  /**
   * Fetch an array of all keys
   * e.g. storage.keys() => [string]
   *
   * @method keys
   * @return an array with all keys in the store 
   **/
  'keys': {
    type: "method",
    value: [],
    ret: ["array", "string"],
    err: {
      "errcode": "string",
      "message": "string"
    }
  },

  /**
   * Fetch a value for a key
   * e.g. storage.get(String key) => string
   *
   * @method get
   * @param {String} key - key to fetch
   * @return {ArrayBuffer} Returns value, null if doesn't exist
   **/
  'get': {
    type: "method",
    value: ["string"],
    ret: "buffer",
    err: {
      "errcode": "string",
      "message": "string"
    }
  },

  /**
   * Sets a value to a key
   * e.g. storage.set(String key, String value)
   *
   * @method set
   * @param {String} key - key of value to set
   * @param {ArrayBuffer} value - value
   * @return {String} previous value of key if there was one.
   **/
  'set': {
    type: "method",
    value: ["string", "buffer"],
    ret: "string",
    err: {
      "errcode": "string",
      "message": "string"
    }
  },
  
  /**
   * Removes a single key
   * e.g. storage.remove(String key)
   *
   * @method remove
   * @param {String} key - key to remove
   * @return {String} previous value of key if there was one.
   **/
  'remove': {
    type: "method",
    value: ["string"],
    ret: "string",
    err: {
      "errcode": "string",
      "message": "string"
    }
  },
  
  /**
   * Removes all data from storage
   * e.g. storage.clear()
   *
   * @method clear
   * @return nothing
   **/
  'clear': {
    type: "method",
    value: [],
    ret: [],
    err: {
      "errcode": "string",
      "message": "string"
    }
  }

});
