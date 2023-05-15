var floodFill = function(image, sr, sc, color) {
    
    var m,n;
    m = image.length;
    n = image[0].length;

    var fill = function (image,x,y,old,ne){

        if(x<0 || x>m || y<0 || y>n)// || image[x][y]!=old)
         return;

        else{
            image[x][y] = ne;

            fill(image,x+1,y,image[x][y],color);
            fill(image,x,y+1,image[x][y],color);
            fill(image,x-1,y,image[x][y],color);
            fill(image,x,y-1,image[x][y],color);
        } 
    }
    fill(image,sr,sc,image[sr][sc],color);
    return image;
}

var image = [[1,1,1],[1,1,0],[1,0,1]];
image = floodFill(image,1,1,2);