/*
Left rotate array by give D place
arr = [1,2,3,4,5,6,7],n=7,D=3
o/p = [4,5,6,7,1,2,3]
*/

var arr = [1,2,3,4,5,6,7],d=3;
let leftRotateArray = (arr,d)=>{
    let reverseArray = (i,j,a)=>{
        while(i<j){
            [arr[i],arr[j]] = [arr[j],arr[i]]
            i++,j--;
        }
        return a
    }
    reverseArray(0,d-1,arr); //arr[0] -> arr[d-1]
    reverseArray(d,arr.length-1,arr) //arr[d] -> arr[n-1]
    reverseArray(0,arr.length-1,arr)
    return arr
}

let res = leftRotateArray(arr,d)
console.log(res)