def solution(L, x):
    answer = []
    for i in range(len(L)):
        if L[i] == x:
            answer.append(i)
            continue
    if len(answer) > 0:
        return answer
    else:
        return [-1]
