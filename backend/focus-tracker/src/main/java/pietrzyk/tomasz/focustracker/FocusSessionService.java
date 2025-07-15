package pietrzyk.tomasz.focustracker;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
class FocusSessionService {

    private final FocusSessionRepository focusSessionRepository;

    public void createFocusSession(FocusSessionRequest request) {
        focusSessionRepository.saveFocusSession(request.activityName());
    }

    public List<String> findAllFocusSessions() {
        return focusSessionRepository.findAllFocusSessions();
    }

}