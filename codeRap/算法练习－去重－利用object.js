var arr=[11,8,2,9,11,29,101,222,8]
var checkObj={},checkArr=[]
for(var i=0,j=arr.length;i<j;i++){
    if(!checkObj[arr[i]]){
        checkObj[arr[i]]=true
        checkArr.push(arr[i])
    }
}
console.log(checkArr)
// 利用obj的key值直接来比对
