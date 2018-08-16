/*同样的立方体搭成n个高度不同的立柱，不稳定值s为最高立柱与最低立柱之间的高度差，为使尽量稳定，每次从一个立柱取一块放到另一个立柱（不会放到原来立柱）
若进行不超过k次操作，不稳定值s最小是多少
*/
var n =6;//n个立柱
var k =2;//最多k次操作
var a=[5,8,5,9,10,1];//每个立柱高度

var m=0;//实际操作次数
var maxindex=0;//最高立柱
var minindex=0;//最低立柱
// 遍历获得最大索引和最小索引
for(var i=0;i<a.length;i++){
    if(a[i]>a[maxindex]){
        maxindex=i;
    }
    if(a[i]<a[minindex]){
        minindex=i;
    }
}
console.log("立柱："+a);
var s=a[maxindex]-a[minindex];//最小不稳定值，最大值与最小值之差
// 循环操作，若操作次数用完或者已经稳定则跳出循环
while(k>0&&s!=0){
    k--;
    m++;//实际操作次数
    // 将最高立柱的一块挪到最低立柱
    a[maxindex]--;
    a[minindex]++;
    console.log("第"+m+"次操作：从第"+(maxindex+1)+"个立柱移一块到第"+(minindex+1)+"个立柱");//输出此次操作立柱
    console.log("立柱："+a);
    // 重新遍历获取最高立柱与最低立柱
    for(var i=0;i<a.length;i++){
        if(a[i]>a[maxindex]){
            maxindex=i;
        }
        if(a[i]<a[minindex]){
            minindex=i;
        }
    }
    s=a[maxindex]-a[minindex];//新的不稳定值
}
console.log("不稳定值s:"+s+"实际操作次数m:"+m);

