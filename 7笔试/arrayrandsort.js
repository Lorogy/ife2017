function randsort1(arr){
  for (var i = 0; i < arr.length; i++) {
    var randnum=parseInt(Math.random()*arr.length);
    var temp=arr[i];
    arr[i]=arr[randnum];
    arr[randnum]=temp;
  }
  return arr;
}

var arr=[1,2,3,4,5,6,7,8,9,10];
console.log(randsort1(arr));

function randsort2(arr){
  arr.sort(function(){
    return Math.random()-0.5;
  });
  return arr;
}

console.log(randsort2(arr));

function randsort3(arr){
  var newarr=[];
  while(arr.length>0) {
    var randnum=parseInt(Math.random()*arr.length);
    newarr.push(arr[randnum]);
    arr.splice(randnum,1);
  }
  return newarr;
}

console.log(randsort3(arr));
