import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public int solution(String[][] clothes) {
        Map<String, List<String>> typeMap = new HashMap<>();

        // 데이터를 처리하여 Map에 저장
        for (String[] clothe : clothes) {
            String name = clothe[0];
            String type = clothe[1];

            typeMap.putIfAbsent(type, new ArrayList<>());

            // 해당 타입 리스트에 항목 추가
            typeMap.get(type).add(name);
        }

        int answer = 1;
        for (List<String> items : typeMap.values()) {
            // 각 타입별 (아이템 수 + 1)
            answer *= (items.size() + 1);
        }

        // 모든 타입에서 아무것도 선택하지 않는 경우 제외
        return answer - 1;
    }
}
