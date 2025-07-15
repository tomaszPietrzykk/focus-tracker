package pietrzyk.tomasz.focustracker;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
class FocusSessionRepository {

    private static final List<String> focusSessions = new ArrayList<>();

    public List<String> findAllFocusSessions() {
        return focusSessions;
    }

    public void saveFocusSession(String focusSession) {
        focusSessions.add(focusSession);
    }


}
