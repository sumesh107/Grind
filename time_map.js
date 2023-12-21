var TimeMap = function() {
    this.obj = new Map();
};


TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.obj.has(key))
        this.obj.set(key,[[timestamp,value]]);
    else
        this.obj.get(key).push([timestamp,value]); 
};



TimeMap.prototype.get = function(key, timestamp) {
    const arr = this.obj.get(key) || [];

    let [l, r] = [0, arr.length - 1];
    let res = "";
    while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        const [t, v] = arr[mid];
        if (timestamp === t) return v;
        if (timestamp >= t) {
            l = mid + 1;
            res = v;
        } else r = mid - 1;

    }
    return res;
};

 //* Your TimeMap object will be instantiated and called as such:
var obj = new TimeMap()
obj.set("foo","bar1",0)
obj.set("foo","bar2",2)
console.log(obj.get("foo",1));
