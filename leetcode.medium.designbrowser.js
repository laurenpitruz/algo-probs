/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  //this.currentUrl
  //stack for backward history
  //stack for forward history
  this.currentUrl = homepage
  this.backwardStack = []
  this.forwardStack = []
};

/**
* @param {string} url
* @return {void}
*/
BrowserHistory.prototype.visit = function(url) {
  //previous currentUrl goes to this.backwardHistory stack
  //this.currentUrl updates
  //this.forwardStack clears
  this.backwardStack.push(this.currentUrl)
  this.currentUrl = url
  this.forwardStack = []
};

/**
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.back = function(steps) {
  //previous currentUrl goes to forward stack
  //while steps > 1 && backwardstack length > 1
  //url popped from backward history stack
  //url pushed to forward history stack
  //this.currentUrl becomes the last popped url
  if(!this.backwardStack.length) return this.currentUrl
  this.forwardStack.push(this.currentUrl)
  while(steps > 1 && this.backwardStack.length > 1) {
      this.forwardStack.push(this.backwardStack.pop())
      steps--
  }
  this.currentUrl = this.backwardStack.pop()
  return this.currentUrl
};

/**
* @param {number} steps
* @return {string}
*/
BrowserHistory.prototype.forward = function(steps) {
  //previous currentUrl goes to backward stack
  //while steps > 1 && forwardstack length > 1
  //url popped from forward stack
  //this.currentUrl becomes the last poppedUrl
  if (!this.forwardStack.length) return this.currentUrl
  this.backwardStack.push(this.currentUrl)
  while(steps > 1 && this.forwardStack.length > 1) {
      this.backwardStack.push(this.forwardStack.pop())
      steps--
  }
  this.currentUrl = this.forwardStack.pop()
  return this.currentUrl
};

/**
* Your BrowserHistory object will be instantiated and called as such:
* var obj = new BrowserHistory(homepage)
* obj.visit(url)
* var param_2 = obj.back(steps)
* var param_3 = obj.forward(steps)
*/
