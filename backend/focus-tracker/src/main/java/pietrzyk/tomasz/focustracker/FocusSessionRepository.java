package pietrzyk.tomasz.focustracker;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
class FocusSessionRepository {

    private static final List<FocusSessionEntity> focusSessions = new ArrayList<>();

    public List<FocusSessionEntity> findAllFocusSessions() {
        return focusSessions;
    }

    public void saveFocusSession(FocusSessionEntity focusSessionEntities) {
        focusSessions.add(focusSessionEntities);
    }


}
