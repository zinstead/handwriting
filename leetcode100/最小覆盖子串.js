/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map=new Map();
    for(let char of t){
        map.set(char,(map.get(char)??0)+1);
    }
    let minLen=Infinity,start=-1;
    let left=0,diff=t.length;
    for(let right=0;right<s.length;right++){
        if(map.has(s[right])){
            if(map.get(s[right])>0){
                diff--;
            }
            map.set(s[right],map.get(s[right])-1);
        }
        if(diff===0){
            while(!map.has(s[left])||map.get(s[left])<0){
                if(map.has(s[left])){
                    map.set(s[left],map.get(s[left])+1);
                }
                left++;
            }
            const len=right-left+1;
            if(len<minLen){
                minLen=len;
                start=left;
            }
        }
    }
    return start===-1 ? '' : s.substring(start,start+minLen);
};