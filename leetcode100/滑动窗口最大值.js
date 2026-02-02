/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const queue=[];
    const res=[];
    const n=nums.length;
    for(let i=0;i<nums.length;i++){
        while(queue.length>0&&nums[i]>nums[queue[queue.length-1]]){
            queue.pop();
        }
        queue.push(i);
        const len=i-queue[0]+1;
        if(len>k){
            queue.shift();
        }
        if(i>=k-1){
            res.push(nums[queue[0]]);
        }
    }
    return res;
};