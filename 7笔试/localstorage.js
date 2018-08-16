
// storage事件，键值改变时触发
if(window.addEventListener){
  window.addEventListener("storage",handle_storage,false);
}else if(window.attachEvent){
  window.attachEvent("onstarage",handle_storage);
}
function handle_storage(e){
  console.log("storage changed!");
}

if(window.localStorage){
  console.log("浏览器支持localStorage");
  var storage=window.localStorage;
  // 三种设置方法
  storage["a"]=1;
  storage.b=2;
  storage.setItem("c",3);
  // 三种获取方法
  console.log(storage["a"]);
  console.log(storage.b);
  console.log(storage.getItem("c"));
  // 遍历获取key
  for(let i=0;i<storage.length;i++){
    console.log(storage.key(i));
  }
  // 删除一条
  storage.removeItem("a");
  console.log(storage);
  // 删除所有
  storage.clear();
  console.log(storage);
  // json格式处理，locaStorage是字符串类型
  var data={
    'd':4,
    'e':5,
    'f':6
  };
  storage.setItem('data',JSON.stringify(data));//json-->string
  var sdata=storage.getItem('data');
  console.log(JSON.parse(sdata));//string-->json
}else{
  console.log("浏览器不支持localStorage");
}
