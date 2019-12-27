var arr = new Array();
for (var i = 0; i <= 100 ; i++) {
    var a = parseInt(i/10);
    var b = i%10;
    if(a==b)
    arr[i]=i;
}

console.log(arr);
