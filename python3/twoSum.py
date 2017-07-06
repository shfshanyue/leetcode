class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        nums_len = len(nums)
        d = dict()
        for i in range(nums_len):
            d[nums[i]] = i
        for i in range(nums_len):
            if d.get(target - nums[i]):
                return i, d[target - nums[i]]
        
s = Solution()
assert(s.twoSum([2, 7, 11, 5], 9) == (0, 1))
assert(s.twoSum([2, 5, 5, 11], 10) == (1, 2))
