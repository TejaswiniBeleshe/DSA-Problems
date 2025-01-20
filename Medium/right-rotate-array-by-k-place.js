/*

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]

*/

const nums = [1,2,3,4,5,6,7],k=3

const rotateArray = (arr,k)=>{
    const reverseArray = (i,j,arr)=>{
        while(i<j){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++,j--
        }
    }
    reverseArray(arr.length-k,arr.length-1,arr);
    reverseArray(0,arr.length-k-1,arr);
    reverseArray(0,arr.length-1,arr);
    return arr;
}

const result = rotateArray(nums,k);
console.log(result)