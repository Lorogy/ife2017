
var m=10;
var n=10;
var arr=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,1,1,0,1,0,0,0],[0,1,0,0,0,0,0,1,0,1],[1,0,0,0,0,0,0,0,1,1],[0,0,0,1,1,1,0,0,0,1],[0,0,0,0,0,0,1,0,1,1],[0,1,1,0,0,0,0,0,0,0],[0,0,0,1,0,1,0,0,0,0],[0,0,1,0,0,1,0,0,0,0],[0,1,0,0,0,0,0,0,0,0]];
//var arr=[[0,0,0,0,1],[0,1,1,0,1],[0,1,0,0,1],[1,1,1,0,1],[1,1,0,0,1]];
console.log("标记前：");
console.log(arr);
var direct=[[-1,-1],[-1,0],[-1,1],[1,-1],[0,1],[1,-1],[1,0],[1,1]];
//var direct=[[-1,0],[0,1],[0,-1],[1,0]];
var p=0;
var q=0;

// 判断当前值是否符合条件，若未被分区则返回TRUE
function check(arr,x,y){
  if(x>=0&&x<m&&y>=0&y<n&&arr[x][y]==1){
    return true;
  }else{
    return false;
  }
}

//一个连通域
function DFS(arr,x,y,label){
  // 若不为1，即为0或已标注都停止遍历搜索
  if(arr[x][y]!=1){
    return false;
  }else{
    // 若为1，进行标注
    arr[x][y]=label;
    temp++;//连通域数量加一
    // 分别处理8连通域
    for(var i=0;i<8;i++){
      // 若是未处理的可连通项，继续进行深度遍历
      if(check(arr,x+direct[i][0],y+direct[i][1])){
        DFS(arr,x+direct[i][0],y+direct[i][1],label);
      }
    }
  }
  // 若八个方向都处理完成，返回TRUE
  return true;
}

var label=2;
var temp=0;
for(var i=0;i<m;i++){
  for(var j=0;j<n;j++){
    // 处理当前项，获得其连通域，
    if(DFS(arr,i,j,label)){
      label++;//下一个连通域标记
      q=Math.max(q,temp);//最大连通域数量
      temp=0;//处理完一个连通域后归零
    }
  }
}
p=label-2;
console.log("标记后：");
console.log(arr);
console.log("连通域个数："+p+"；最大连通域数量"+q);