package pietrzyk.tomasz.focustracker;

class FocusSessionMapper {

    FocusSessionDto toDto(FocusSessionEntity entity) {
        return new FocusSessionDto(entity.getUuid(), entity.getActivityName(), entity.getDurationInSeconds());
    }

    FocusSessionEntity toEntity(FocusSessionDto request) {
        return new FocusSessionEntity(
                request.uuid(),
                request.activityName(),
                request.durationInSeconds()
        );
    }
}
