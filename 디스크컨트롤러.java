import java.util.*;

class Solution {
    public int solution(int[][] jobs) {
        // Step 1. jobs 배열을 요청 시각 기준으로 정렬
        Arrays.sort(jobs, (a, b) -> Integer.compare(a[0], b[0]));

        PriorityQueue<int[]> waitingQueue = new PriorityQueue<>(
            (a, b) -> a[1] == b[1] ? Integer.compare(a[0], b[0]) : Integer.compare(a[1], b[1])
        ); // 우선순위: 소요 시간 -> 요청 시각

        int currentTime = 0; // 현재 시간
        int totalTurnaroundTime = 0; // 총 반환 시간
        int completedJobs = 0; // 완료된 작업 수
        int jobIndex = 0; // jobs 배열의 작업 인덱스

        // Step 2. 작업 처리 반복
        while (completedJobs < jobs.length) {
            // 현재 시간까지 요청된 작업을 대기 큐에 추가
            while (jobIndex < jobs.length && jobs[jobIndex][0] <= currentTime) {
                waitingQueue.offer(jobs[jobIndex]);
                jobIndex++;
            }

            // 대기 큐에서 작업 처리
            if (!waitingQueue.isEmpty()) {
                int[] job = waitingQueue.poll();
                currentTime += job[1]; // 소요 시간을 더해 현재 시간 갱신
                totalTurnaroundTime += currentTime - job[0]; // 반환 시간 계산
                completedJobs++; // 완료된 작업 수 증가
            } else {
                // 대기 큐가 비어있다면 현재 시간을 다음 작업 요청 시각으로 갱신
                currentTime = jobs[jobIndex][0];
            }
        }

        // Step 3. 반환 시간 평균의 정수 부분 반환
        return totalTurnaroundTime / jobs.length;
    }
}
