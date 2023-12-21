class Deque {
    
    constructor()
    {
        this.qu = [];
    }
   

    push(val)
    {
        this.qu[this.qu.length] = val;
       // this.qu.length+=1;
    }

    pop()
    {      
        if(this.qu)
        {
            let pop_ele = this.qu[0];
            this.qu.shift();
            return pop_ele;
        }
        else
         return undefined;
            
    }
    lengt()
    {
        return this.qu.length;
    }
};


module.exports = Deque;