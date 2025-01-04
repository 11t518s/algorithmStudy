import java.util.Arrays;
import java.util.Objects;
import java.util.Stack;

class Solution {
    private final String openTag = "(";
    private final String closeTag = ")";

    boolean solution(String s) {
        Stack<String> stack = new Stack<>();

        for (char c : s.toCharArray()) {
            if (c == '(') {
                stack.push(String.valueOf(c));
            } else if (c == ')') {
                if (stack.isEmpty()) {
                    return false;
                }
                stack.pop();
            }
        }

        return stack.isEmpty();
    }
}
