package pietrzyk.tomasz.focustracker;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
class FocusSessionService {

    private final FocusSessionRepository focusSessionRepository;
    private final FocusSessionMapper focusSessionMapper;

    FocusSessionService(@Autowired FocusSessionRepository focusSessionRepository) {
        this.focusSessionRepository = focusSessionRepository;
        this.focusSessionMapper = new FocusSessionMapper();
    }

    void createFocusSession(FocusSessionDto request) {
        var focusSessionEntity = focusSessionMapper.toEntity(request);
        focusSessionRepository.saveFocusSession(focusSessionEntity);
    }

    void deleteFocusSession(String uuid) {
        focusSessionRepository.deleteFocusSession(uuid);
    }

    List<FocusSessionDto> findAllFocusSessions() {
        return focusSessionRepository.findAllFocusSessions().stream()
                .map(focusSessionMapper::toDto)
                .toList();
    }

}