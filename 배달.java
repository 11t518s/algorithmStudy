import java.util.*;

class Solution {
    public int solution(int N, int[][] road, int K) {
        // 그래프 초기화
        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i <= N; i++) {
            graph.add(new ArrayList<>());
        }

        // 도로 정보 추가
        for (int[] r : road) {
            int a = r[0];
            int b = r[1];
            int c = r[2];
            graph.get(a).add(new int[]{b, c});
            graph.get(b).add(new int[]{a, c});
        }

        // 최단 거리 배열 초기화
        int[] dist = new int[N + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[1] = 0; // 시작점 거리 0

        // 우선순위 큐 사용
        PriorityQueue<int[]> pq = new PriorityQueue<>((x, y) -> x[1] - y[1]);
        pq.add(new int[]{1, 0}); // 시작점 추가

        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int now = current[0];
            int time = current[1];

            if (time > dist[now]) continue;

            for (int[] neighbor : graph.get(now)) {
                int next = neighbor[0];
                int cost = neighbor[1];

                if (dist[next] > dist[now] + cost) {
                    dist[next] = dist[now] + cost;
                    pq.add(new int[]{next, dist[next]});
                }
            }
        }

        // K 이하 시간 마을 개수 계산
        int count = 0;
        for (int i = 1; i <= N; i++) {
            if (dist[i] <= K) count++;
        }

        return count;
    }
}
