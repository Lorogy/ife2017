// 获取URL后面的参数变为对象
(function(){
  var urlToObject=function(url){
    var urlObject={};
    if(/\?/.test(url)){
      var urlString=url.substring(url.indexOf("?")+1);
      var urlArray=urlString.split("&");
      for (var i = 0; i < urlArray.length; i++) {
        var urlItem=urlArray[i];
        var item=urlItem.split("=");
        urlObject[item[0]]=item[1];
      }
    }
    return urlObject;
  }

  var testUrl="http://tools.jb51.net/index.php?key0=0&key1=1&key2=2"
  var result=urlToObject(testUrl);
  console.log(result);
})();