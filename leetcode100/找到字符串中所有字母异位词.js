/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const res=[];
    const map=new Map();
    for(let char of p){
        const num=map.has(char)?map.get(char)+1:1;
        map.set(char,num);
    }
    let diff=p.length,left=0;
    for(let right=0;right<s.length;right++){
        if(map.has(s[right])){
            if(map.get(s[right])>0){
                diff--;
            }
            map.set(s[right],map.get(s[right])-1);
        }
        if(right>=p.length-1){
            if(diff===0){
                res.push(left);
            }
            if(map.has(s[left])){
                if(map.get(s[left])>=0){
                    diff++;
                }
                map.set(s[left],map.get(s[left])+1);
            }
            left++;
        }
    }
    return res;
};