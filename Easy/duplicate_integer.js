/*

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:
Input: nums = [1, 2, 3, 3]
Output: true

Example 2:
Input: nums = [1, 2, 3, 4]
Output: false

when we are trying to find the index of a number which is not in the array it returns -1

Approach
1->find index of a number like arr.indexOf(num,cur_num+1) if there is duplicate of it it returns index otherwise -1
2->using hash map to count the no. of occurance of a element

*/

function duplicateInt(nums){
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i],i+1) !== -1){
            return true;
        }
    }
    return false;
}

let res = duplicateInt([1,2,3,4])
console.log(res)