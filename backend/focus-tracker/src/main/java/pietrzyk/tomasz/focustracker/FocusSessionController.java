package pietrzyk.tomasz.focustracker;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/focus-sessions")
class FocusSessionController {

    private final FocusSessionService focusSessionService;

    @PostMapping
    public ResponseEntity<Void> createFocusSession(@RequestBody @Valid FocusSessionRequest request) {
        focusSessionService.createFocusSession(request);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<String>> getFocusSessions() {
        return ResponseEntity.ok(focusSessionService.findAllFocusSessions());
    }

}
