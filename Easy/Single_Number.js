/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.


Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1


Approach:

ans->Here use map to track count of each number
     loop through each property of map and whose value is 1 return the key of it
     when you loop map using for(i of map) i-> [3,5] [num,number_count] array containing key and value pair

*/




var singleNumber = function(nums) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1)
        }
        else{
            map.set(nums[i],1)
        } 
    }
    for(let [k,v] of map){
        if(v===1) return k
    }
};

console.log(singleNumber([1,2,2,4,1]))