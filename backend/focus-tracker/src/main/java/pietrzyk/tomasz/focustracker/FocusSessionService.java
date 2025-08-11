package pietrzyk.tomasz.focustracker;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
class FocusSessionService {

    private final FocusSessionRepository focusSessionRepository;

    public void createFocusSession(FocusSessionDto request) {
        var focusSessionEntity = new FocusSessionEntity(request.activityName(), request.durationInSeconds());
        focusSessionRepository.saveFocusSession(focusSessionEntity);
    }

    public List<FocusSessionDto> findAllFocusSessions() {
        return focusSessionRepository.findAllFocusSessions().stream()
                .map(entity -> new FocusSessionDto(entity.getActivityName(), entity.getDurationInSeconds()))
                .toList();
    }

}