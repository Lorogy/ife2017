function Fun(){}
//我创造了一个函数Fn
//这个函数由Function生成（Function作为构造函数）
var fn=new Fun()
//我创建了一个函数fn
//这个函数由Fn生成（Fn作为构造函数)


console.log(fn.__proto__===Fun.prototype)    //true
//fn的__proto__指向其构造函数Fun的prototype
console.log(Fun.__proto__===Function.prototype)        //true
//Fun的__proto__指向其构造函数Function的prototype
console.log(Function.__proto__===Function.prototype)    //true
//Function的__proto__指向其构造函数Function的prototype
//构造函数自身是一个函数，他是被自身构造的
console.log(Function.prototype.__proto__===Object.prototype)    //true
//Function.prototype的__proto__指向其构造函数Object的prototype
//Function.prototype是一个对象,同样是一个方法,方法是函数,所以它必须有自己的构造函数也就是Object
console.log(Fun.prototype.__proto__===Object.prototype)         //true
//与上条相同
//此处可以知道一点,所有构造函数的的prototype方法的__都指向__Object.prototype(除了....Object.prototype自身)
console.log(Object.__proto__===Function.prototype)        //true
//Object作为一个构造函数(是一个函数对象!!函数对象!!),所以他的__proto__指向Function.prototype
console.log(Object.prototype.__proto__===null)        //true
//Object.prototype作为一切的源头,他的__proto__是null

//下面是一个新的,额外的例子

var obj={}
//创建了一个obj
console.log(obj.__proto__===Object.prototype)        //true
//obj作为一个直接以字面量创建的对象，所以obj__proto__直接指向了Object.prototype，而不需要经过Function了！！

//下面是根据原型链延伸的内容
//还有一个上文并未提到的constructor,  constructor在原型链中,是作为对象prototypr的一个属性存在的,它指向构造函数（由于主要讲原型链，这个就没在意、）；

console.log(obj.__proto__.__proto__===null)        //true
console.log(obj.__proto__.constructor===Object)        //true
console.log(obj.__proto__.constructor.__proto__===Function.prototype)        //true
console.log(obj.__proto__.constructor.__proto__.__proto__===Object.prototype)    //true    
console.log(obj.__proto__.constructor.__proto__.__proto__.__proto__===null)        //true
console.log(obj.__proto__.constructor.__proto__.__proto__.constructor.__proto__===Function.prototype)    //true
