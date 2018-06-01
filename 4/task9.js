//观察者构造函数
function Observer(data){
  this.data=data;
  this.walk(data);
}
let proto=Observer.prototype;
proto.walk=function(obj){
  let val;
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      val=obj[key];
      this.convert(key,val);
    }
  }
};
proto.convert=function(key,val){
  Object.defineProperty(this.data,key,{
    enumerable:true,
    configurable:true,
    get:function(){
      console.log('你访问了'+key);
      return val;
    },
    set:function(newval){
      console.log('你设置了'+key);
      console.log('新的'+key+'='+newval);
      if(newval==val) return;
      val=newval;
    }
  });
};

let app1=new Observer({
  name:'youngwid',
  age:25
});
let app2=new Observer({
  university:'bupt',
  major:'computer'
});
app1.data.name;
app1.data.age=100;
app2.data.university;
app2.data.major='science';