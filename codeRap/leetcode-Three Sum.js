/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var arr=[]
    if(nums.length<3){
        return []
    }
    nums.sort(function(a,b){
        return a-b
    })
    for(var i=0;i<nums.length;i++){
        if(nums[i]==nums[i-1]){
            continue
        }
        for(var j=i+1,k=nums.length-1;j<k;){
            var sum=nums[i]+nums[j]+nums[k]
            if(sum==0){
                arr.push([nums[i],nums[j],nums[k]])
                while (j < k && nums[j] == nums[j+1]) {
                    j++;
                }
                while (j < k && nums[k] == nums[k-1]) {
                    k--;
                }
                j++
                k--
            }else if(sum<0){
                j++
            }else{
                k--
            }
        }
    }
    return arr
};