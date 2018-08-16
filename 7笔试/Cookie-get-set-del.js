var CookieUtil={
  // 获取，每个cookie都是一个名称/值对，名称/值对用“=”连接，如果要一次存储多个名称/值对，可以使用分“;”隔开
  get:function(name){
    // 在cookie的名或值中不能使用分号（;）、逗号（,）、等号（=）以及空格。如果想存入这些值，我们可以使用encodeURIComponent()函数进行编码
    let cookieName=encodeURIComponent(name);
    let cookieStr=document.cookie;
    let arr1=cookieStr.split(";");
    for(let i=0;i<arr1.length;i++){
      let arr2=arr1[i].split("=");
      if(arr2[0]==cookieName){
        return decodeURIComponent(arr2[1]);
      }
    }
  },
  // 设置，document.cookie可以赋不同的值；如果新赋的名值对的名已经存在，浏览器就会认为这是一个更新操作，新值会覆盖原先的值，如果名不存在，则浏览器认为这是一个新增操作，就会把这个名值对写进当前文档的cookie里；如果要改变一个cookie的值，只需重新赋值
  set:function(name,value,expires){
    let cookieText=encodeURIComponent(name)+"="+encodeURIComponent(value);
    if(expires){
      let odate=new Date();
      odate.setDate(odate.getDate()+expires);
      cookieText+=";expires="+odate.toGMTString();
    }
    //console.log(cookieText);
    document.cookie=cookieText;
  },
  // 删除，直接将cookie的有效时间设置成过去即可
  del:function(name){
    this.set(name,"",-1);
  }
}

CookieUtil.set("your,name","lorogy,",1);
console.log(document.cookie);
CookieUtil.set("your,age","24=",1);
console.log(document.cookie);
CookieUtil.del("your,age");
console.log(document.cookie);
console.log(CookieUtil.get("your,name"));