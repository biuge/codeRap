//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution.
//翻译下 大概就是给一个数组，再给一个具体的数字 要求返回相加等于数字的数组下标
// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].
// 下面是正规解法1 没什么难度
var twoSum = function(nums, target) {
    for(var i=0,k=nums.length;i<k;i++){
        for(var j=i,c=i;j<k;j++){
            if(nums[c]+nums[j+1]==target){
                return [c,j+1]
            }
        }
    }
};
//可以提供一些有趣的野路子来解决这个问题
