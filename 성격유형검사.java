public class Solution {
    private int RTScore = 0;
    private int CFScore = 0;
    private int JMScore = 0;
    private int ANScore = 0;

    private final int standardScore = 4;

    public String solution(String[] survey, int[] choices) {
        if (survey.length != choices.length) {
            throw new IllegalArgumentException("선택치와 응답의 수가 일치하지 않습니다.");
        }

        for (int i = 0; i < survey.length; i++) {
            checkSurvey(survey[i], choices[i]);
        }

        return makeResult();
    }

    private void checkSurvey(String survey, int choice) {
        if (survey.length() != 2) {
            throw new IllegalArgumentException("survey의 길이는 반드시 2여야 합니다.");
        }
        if (choice < 1 || choice > 7) {
            throw new IllegalArgumentException("숫자는 1이상 7이하여야 합니다.");
        }
        int score = choice - standardScore;

        if (score > 0) {
            String target = survey.substring(1, 2);
            System.out.println(target + ": " + (score));
            scoreSurvey(target, score);
        } else if (score < 0) {
            String target = survey.substring(0, 1);
            System.out.println(target + ": " + (score));
            scoreSurvey(target, score);
        }
    }

    private void scoreSurvey(String target, int score) {
        int absScore = Math.abs(score);
        switch(target) {
            case "R":
                RTScore += absScore;
                break;
            case "T":
                RTScore -= absScore;
                break;

            case "C":
                CFScore += absScore;
                break;
            case "F":
                CFScore -= absScore;
                break;

            case "J":
                JMScore += absScore;
                break;
            case "M":
                JMScore -= absScore;
                break;

            case "A":
                ANScore += absScore;
                break;
            case "N":
                ANScore -= absScore;
                break;
        }
    }

    private String makeResult() {
        String rt = (RTScore >= 0) ? "R" : "T";
        String cf = (CFScore >= 0) ? "C" : "F";
        String jm = (JMScore >= 0) ? "J" : "M";
        String an = (ANScore >= 0) ? "A" : "N";

        return rt + cf + jm + an;
    }
}
