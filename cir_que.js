class Queue{
    constructor(size)
    {
        this.arr = [];
        this.size = size;
        this.front = -1;
        this.rear = -1;
    }

    enqueue(ele)
    {
        if(this.front==-1 && this.rear==-1 )
        { 
         this.front=this.rear=0;
         this.arr[this.rear] = ele;
        }

        else if( (this.rear+1) % this.size == this.front )
        {
            throw new TypeError(" queue overflow ");
        }

        else if( (this.rear+1) % this.size != this.front  && (this.rear+1 == this.size) )
        {
            this.rear = 0;
            this.arr[this.rear] = ele;
        }

        else
        {
            this.rear = (this.rear+1) % this.size;
            this.arr[this.rear] = ele;
        }
    }

    dequeue()
    {
        if(this.front==-1)
        {
            throw new TypeError(" queue underflow ");
        }

        else if( this.front == this.rear )
        {
            this.arr[this.front] = null;
            this.front = this.rear = -1;
        }

        else
        {
            this.arr[this.front] = null;
            this.front = (this.front + 1) % this.size;
        }
    }

}

const q = new Queue(3);

q.enqueue(1);
q.enqueue(2);
q.dequeue();
q.enqueue(3);
q.enqueue(4);
q.dequeue();
q.dequeue();
q.enqueue(5);
q.dequeue();
q.dequeue();