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
    public ResponseEntity<Void> createFocusSession(@RequestBody @Valid FocusSessionDto request) {
        focusSessionService.createFocusSession(request);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{uuid}")
    public ResponseEntity<Void> deleteSession(@PathVariable String uuid) {
        focusSessionService.deleteFocusSession(uuid);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<FocusSessionDto>> getFocusSessions() {
        return ResponseEntity.ok(focusSessionService.findAllFocusSessions());
    }

}
