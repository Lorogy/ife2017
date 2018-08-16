// 浅拷贝
let obj = {
  nNum : 1,
  sName : 'aaron'
};

function shallowCopy(o) {
  let result = {};
  
  for(let item in o) {
    if(o.hasOwnProperty(item)) {
      result[item] = o[item];
    };
  };

  return result;
};

console.log(shallowCopy(obj));//{ nNum: 1, sName: 'aaron' }
// $.extend({} , obj);//jquery
console.log(Object.assign({} , obj));//es6

// 深拷贝
obj = {  
    nNum : 1,  
    oAar : [1,2,3,4]  
};

let newObj = shallowCopy(obj);  
console.log(newObj === obj);      // false  
console.log(newObj.oAar === obj.oAar);   // true,引用的同一地址
console.log(newObj);//{ nNum: 1, oAar: [ 1, 2, 3, 4 ] }
newObj.oAar.push(5);
console.log(obj);//{ nNum: 1, oAar: [ 1, 2, 3, 4, 5 ] }
console.log(newObj);//{ nNum: 1, oAar: [ 1, 2, 3, 4, 5 ] }

function deepCopy(o,temp){
  let result=temp||{};

  for(let item in o){
    if((typeof o[item])==='object'&&o[item]!==null){//typeof null==='object'
      result[item]=(o[item].constructor===Array)?[]:{};//针对数组情况，result初始化应为[]而不是{}
      result[item]=deepCopy(o[item],result[item]);
    }else{
      result[item]=o[item];
    }
  }

  return result;
}

newObj = deepCopy(obj);
//$.extend(true, {}, obj)//jquery
console.log(newObj === obj);      // false  
console.log(newObj.oAar === obj.oAar);   // false
console.log(newObj);
newObj.oAar.push(6);//{ nNum: 1, oAar: [ 1, 2, 3, 4, 5 ] }
console.log(obj);//{ nNum: 1, oAar: [ 1, 2, 3, 4, 5 ] }
console.log(newObj);//{ nNum: 1, oAar: [ 1, 2, 3, 4, 5, 6 ] }

console.log(typeof null);