package pietrzyk.tomasz.focustracker;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

record FocusSessionDto(
        @NotBlank String activityName,
        @NotNull @Positive Long durationInSeconds) {
}
