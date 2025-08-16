package pietrzyk.tomasz.focustracker;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
class FocusSessionRepository {

    private static final List<FocusSessionEntity> focusSessions = new ArrayList<>();

    public List<FocusSessionEntity> findAllFocusSessions() {
        return focusSessions;
    }

    public void deleteFocusSession(String uuid) {
        var updatedFocusSessions = focusSessions.stream()
                .filter(focusSessionEntity -> !Objects.equals(focusSessionEntity.getUuid(), uuid))
                .toList();
        focusSessions.clear();
        focusSessions.addAll(updatedFocusSessions);
    }

    public void saveFocusSession(FocusSessionEntity focusSessionEntities) {
        focusSessions.add(focusSessionEntities);
    }

}
