package pietrzyk.tomasz.focustracker;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/focus-sessions")
class FocusSessionController {


    @PostMapping
    public ResponseEntity<Void> createFocusSession(@RequestBody @Valid FocusSessionRequest request) {
        System.out.println(request.activityName() + " " + request.durationInSeconds());
        return ResponseEntity.ok().build();
    }

}
