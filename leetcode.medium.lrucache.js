/**
 * @param {number} capacity
 */

/*
    cache fxn has this.capacity set to the inputted capacity
    cache fxn also has a cache that is a hashmap

    get is a call to capacity with key, -1 or result
    get resets order in map

    put has LRU eviction
    delete method on Map deletes that key
*/
var LRUCache = function(capacity) {
  this.capacity = capacity
  this.cache = new Map()
};

/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  if (this.cache.has(key)) {
      let value = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, value)
      return value
  } else {
      return -1
  }
};

/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.cache.has(key)) {
      this.cache.delete(key)
  }
  this.cache.set(key, value)
  if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value)
  }
};
