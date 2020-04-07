export const formatTime = (time) => {
  if (!time || typeof time !== 'number' || time < 0) return null;

  let seconds = Math.floor(time % 60);
  let minutes = Math.floor((time / 60) % 60);
  let hours = Math.floor(time / 3600);

  let newTime = (hours < 10 ? '0' + hours : hours) + ':'
    + (minutes < 10 ? '0' + minutes : minutes) + ':'
    + (seconds < 10 ? '0' + seconds : seconds);

  return newTime;
};
