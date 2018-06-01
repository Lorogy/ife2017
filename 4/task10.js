// 观察者构造函数
// 为参数对象data设置属性,以实现数据观察
function Observer(data){
  this.data=data;
  this.walk(data);
}
let proto=Observer.prototype;// prototype属性使有能力向对象添加属相和方法

// 此函数用于深层次遍历对象的各个属性
// 采用的是递归的思路
// 因为我们要为对象的每一个属性绑定getter和setter
proto.walk=function(obj){
  let val;
  for(let key in obj){
    // 这里为什么要用hasOwnProperty进行过滤呢？
    // 因为for...in 循环会把对象原型链上的所有可枚举属性都循环出来
    // 而我们想要的仅仅是这个对象本身拥有的属性，所以要这么做。
    // hasOwnProperty返回一个布尔值，判断对象是否包含特定的自身（非继承）属性
    if(obj.hasOwnProperty(key)){
      val=obj[key];//以对象属性初值设置val
       // 这里进行判断，如果还没有遍历到最底层，继续new Observer
      if(typeof val==='object'){
        // 如果val仍是对象，以val为参数调用Observer构造函数
        // 该构造函数调用为val对象中的属性设置getter和setter
        new Observer(val);
      }
      // 调用convert函数，将对对象数据属性的访问转换为对访问器属性的访问
      this.convert(key,val);
    }
  }
};
proto.convert=function(key,val){
  // 访问器实际上访问和修改的值是闭包val，仅仅用对象数据属性进行初始化
  
  // Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。obj要在其上定义属性的对象。prop要定义或修改的属性的名称。descriptor将被定义或修改的属性描述符。
  Object.defineProperty(this.data,key,{
    // 可枚举性决定属性是否出现在对象的属性枚举中，比如是否可以通过for-in循环返回该属性，默认值为true
    enumerable:true,
    // 可配置性决定是否可以使用delete删除属性，以及是否可以修改属性描述符的特性，默认值为true
    configurable:true,
    // 访问器属性不具有可写性(Writable)。如果属性同时具有getter和setter方法，那么它是一个读/写属性。如果它只有getter方法，那么它是一个只读属性。如果它只有setter方法，那么它是一个只写属性。读取只写属性总是返回undefined
    // 在读取属性时调用的函数。默认值为undefined
    get:function(){
      console.log('你访问了'+key);
      return val;
    },
    // 在写入属性时调用的函数。默认值为undefined
    set:function(newval){
      console.log('你设置了'+key);
      console.log('新的'+key+'='+newval);
      if(newval==val) return;
      val=newval;
    }
  });
};

let obj={
  a:1,
  b:2,
  c:{
    d:3,
    e:4
  }
}

let app=new Observer(obj);

// app.$watch('b',function(newb){
//   console.log('b自定义回调函数');
// });

app.data.b="haha";