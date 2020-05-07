const reachDestination = (distance, speed) => {
  const duration = distance / speed;

  const roundDur = Math.round(duration * 2) / 2;
  return `I should be there in ${roundDur} hours.`;
};

module.exports = reachDestination;
