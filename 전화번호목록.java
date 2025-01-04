import java.util.Arrays;
import java.util.stream.IntStream;

class Solution {
    public boolean solution(String[] phoneBook) {
        // 배열을 정렬
        Arrays.sort(phoneBook);

        // 인접한 두 번호를 스트림으로 비교
        return IntStream.range(0, phoneBook.length - 1)
                .noneMatch(i -> phoneBook[i + 1].startsWith(phoneBook[i]));
    }
}
