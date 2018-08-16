const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
  console.log('1');
  return 1;
});

const ajax2 = () => timeout(1000).then(() => {
  console.log('2');
  return 2;
});

const ajax3 = () => timeout(2000).then(() => {
  console.log('3');
  return 3;
});

const mergePromise = ajaxArray => {
  // 在这里实现你的代码
  var data=[];
  var p=new Promise((resolve,reject)=>{
    resolve();
  });
  for(let i=0;i<=ajaxArray.length;i++){
    p=p.then((id)=>{
      if(i>0){
        data.push(id);
      }
      if(i==ajaxArray.length){
        return new Promise((resolve,reject)=>{resolve(data)})
      }
      return ajaxArray[i]();
    })
  }
  return p;
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log('done');
  console.log(data); // data 为 [1, 2, 3]
});

// 分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]