
Function.prototype.bind=function(othis){
  var args=Array.prototype.slice.call(arguments,1);
  var ftobind=this;
  var result=function(){
    return ftobind.apply(othis,args.concat(Array.prototype.slice.call(arguments)));
  }

  var temp=function(){};
  temp.prototype=this.prototype;
  result.prototype=new temp();

  return result;
};

var A={
  name:'lorogy',
  print:function(title){
    console.log(title+'!'+this.name);
  }
};

A.print('Hello');
var func=A.print;
func('Hello');
var funcc=A.print.bind(A);
funcc('Hello');
// Hello!lorogy
// Hello!undefined
// Hello!lorogy