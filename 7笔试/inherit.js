// 父类
function Fn(name){
  this.name=name;
  this.sleep=function(){
    console.log(this.name+' is sleeping');
  }
}
Fn.prototype.eat=function(food){
  console.log(this.name+' is eating '+food);
};

// 原型链继承，父类的实例为子类的原型
function Subfn1(){}
Subfn1.prototype=new Fn();
Subfn1.prototype.name='sub1';

var subfn1=new Subfn1();
console.log(subfn1.name);//sub1
subfn1.eat('1');//sub1 is eating 1
subfn1.sleep();//sub1 is sleeping
console.log(subfn1 instanceof Fn);//true
console.log(subfn1 instanceof Subfn1);//true

// 构造继承,使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
function Subfn2(name){
  Fn.call(this);
  this.name=name||'sub2';
}

var subfn2=new Subfn2();
console.log(subfn2.name);//sub2
//subfn2.eat('2');//subfn2.eat is not a function
subfn2.sleep();//sub2 is sleeping
console.log(subfn2 instanceof Fn);//false
console.log(subfn2 instanceof Subfn2);//true

// 实例继承，为父类实例添加新特性，作为子类实例返回
function Subfn3(name){
  var instance=new Fn();
  instance.name=name||'sub3';
  return instance;
}

var subfn3=new Subfn3();
console.log(subfn3.name);//sub3
subfn3.eat('3');//sub3 is eating 3
subfn3.sleep();//sub3 is sleeping
console.log(subfn3 instanceof Fn);//true
console.log(subfn3 instanceof Subfn3);//false

// 拷贝继承
function Subfn4(name){
  var fn=new Fn();
  for(var p in fn){
    Subfn4.prototype[p]=fn[p];
  }
  Subfn4.prototype.name=name||'sub4';
}

var subfn4=new Subfn4();
console.log(subfn4.name);//sub4
subfn4.eat('4');//sub4 is eating 4
subfn4.sleep();//sub4 is sleeping
console.log(subfn4 instanceof Fn);//false
console.log(subfn4 instanceof Subfn4);//true

// 组合继承,通过调用父类构造，继承父类的属性并保留传参的优点，然后通过将父类实例作为子类原型，实现函数复用
function Subfn5(name){
  Fn.call(this);
  this.name=name||'sub5';
}
Subfn5.prototype=new Fn();
Subfn5.prototype.constructor=Subfn5;

var subfn5=new Subfn5();
console.log(subfn5.name);//sub5
subfn5.eat('5');//sub5 is eating 5
subfn5.sleep();//sub5 is sleeping
console.log(subfn5 instanceof Fn);//true
console.log(subfn5 instanceof Subfn5);//true

// 寄生组合继承，通过寄生方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，就不会初始化两次实例方法/属性，避免的组合继承的缺点
function Subfn6(name){
  Fn.call(this);
  this.name=name||'sub6';
}
(function (){
  var Super=function(){};
  Super.prototype=Fn.prototype;
  Subfn6.prototype=new Super();
  Subfn6.prototype.constructor=Subfn6;
})();

var subfn6=new Subfn6();
console.log(subfn6.name);//sub6
subfn6.eat('6');//sub6 is eating 6
subfn6.sleep();//sub6 is sleeping
console.log(subfn6 instanceof Fn);//true
console.log(subfn6 instanceof Subfn6);//true