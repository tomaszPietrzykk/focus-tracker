package pietrzyk.tomasz.focustracker;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
class FocusSessionEntity {

    private final String activityName;
    private final Long durationInSeconds;

}