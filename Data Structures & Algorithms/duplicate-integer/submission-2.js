class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
      const dup = new Set()
       for(let item of nums) {
       if(dup.has(item)){
         return true;
       }
       dup.add(item);
      }
      return false;
    }
}