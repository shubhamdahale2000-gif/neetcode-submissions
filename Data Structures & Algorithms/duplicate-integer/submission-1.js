class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const dup = []
       for(let item of nums) {
       if(dup.includes(item)){
         return true;
       }
       dup.push(item);
      }
      return false;
    }
}