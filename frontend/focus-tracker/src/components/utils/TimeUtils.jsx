export const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return padTime(hours) + ":" + padTime(minutes) + ":" + padTime(seconds);
};

const padTime = (time) => String(time).padStart(2, "0");