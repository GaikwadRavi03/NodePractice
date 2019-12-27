function findTripleEqualToZero(arr,n) {
    var found = false;
    for (var i = 0; i < n - 2; i++) {
      for (var j = i + 1; j < n - 1; j++) {
        for (var k = j + 1; k < n; k++) {
          if (arr[i] + arr[j] + arr[k] == 0) {
            console.log(arr[i] + " " + arr[j] + " " + arr[k]);
            found = true;
          }
        }
      }
    }
    if (found == false) {
      console.log("not exist");
    }
  }

  var arr = [ 0, -1, 2, -3, 1 ];
  var n = arr.length;
  findTripleEqualToZero(arr,n);
