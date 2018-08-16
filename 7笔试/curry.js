// 通用版
// 首先将参数进行分割，也就是将除了func之外的参数存进args。
// 返回的函数接受新传入的参数并与之前的参数合并，从而将所有的参数传入函数中，并执行真正的函数。
var curry1=function(func){
  // []相当于Array，数组
  // [].slice()是一个函数，返回数组某一段
  // .call()是函数slice本身的方法，第一个参数是指定函数执行时的this指针,第二个是参数
  // 所以相当于arguments.slice(1)
  // arguments是传入的参数数组，但不是真正数组，需要借助数组的slice方法
  var args=[].slice.call(arguments,1);
  return function(){
    // connect参数合并
    var newArgs=args.concat([].slice.call(arguments));
    // 执行
    return func.apply(this,newArgs);
  }
}

function add1(a,b){
  return a+b;
}

var addCurry1=curry1(add1);
console.log(addCurry1(1,2));
addCurry1=curry1(add1,1,2);
console.log(addCurry1());
addCurry1=curry1(add1,1,);
console.log(addCurry1(2));

// 改进版
// 若传入的参数没有到达两个的话，就继续调用curry，继续接受参数。若参数到达2个了，就直接调用add函数。
var curry2=function(func,args){
  var len=func.length;
  args=args||[];
  return function(){
    var newArgs=args.concat([].slice.call(arguments));
    if(newArgs.length<len){
      return curry2.call(this,func,newArgs);
    }else{
      return func.apply(this,newArgs);
    }
  }
}

function add2(a,b,c){
  return a+b+c;
}
var addCurry2=curry2(add2);
console.log(addCurry2(1)(2)(3));
console.log(addCurry2(1,2,3));
console.log(addCurry2(1,2)(3));
