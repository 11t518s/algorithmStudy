def solution(L, x, low=None, high=None):
    high = high or len(L)-1
    low = low or 0

    mid = (high + low)//2
    if low > high:
        return -1

    if x > L[mid]:
        return solution(L, x, mid + 1, high)
    if x < L[mid]:
        return solution(L, x, low, mid)
    if x == L[mid]:
        return mid
