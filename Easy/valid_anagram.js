/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:
Input: s = "racecar", t = "carrace"
Output: true


Example 2:
Input: s = "jar", t = "jam"
Output: false
*/

function isAnagram(s,t){
    let sMap = new Map()
    if(s.length === t.length){
        for(let i=0;i<s.length;i++){
            if(sMap.has(s[i])){
                sMap.set(s[i],sMap.get(s[i])+1)
            }else{
                sMap.set(s[i],1)
            }
        }
        
        for(let i=0;i<t.length;i++){
            if(sMap.has(t[i])){
                sMap.set(t[i],sMap.get(t[i])-1);
                if(sMap.get(t[i]) === 0){
                    sMap.delete(t[i])
                }
            }else{
                return false;
            }
        }
        return sMap.size;

    }
    return false;

}

let result = isAnagram('racecar','carrace')
result?console.log(false):console.log(true)