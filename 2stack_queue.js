// 
var MyQueue = function() {
    this.st1 = [];
    this.st2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.st1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {

// check underflow
    if( this.st1.length == 0)
     return null;

// pop except the last to st2 from st1   
    while(this.st1.length-1 > 0){
        this.st2.push(this.st1.pop());
    }
        
// return the bottom element -- here front of the queue
    let ret_ele = this.st1.pop();

    while(this.st2.length > 0)
    {
        this.st1.push(this.st2.pop());
    }

    return ret_ele;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {

    if( this.st1.length > 0)
        return this.st1[0];
    else
        return null;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if( this.st1.length == 0)
     return true;

    return false;
};


const myQueue = new MyQueue();

myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log ( myQueue.peek() ); // return 1
console.log(myQueue.pop()); // return 1, queue is [2]
console.log(myQueue.empty()); // return false