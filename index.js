// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const scuberHq = 42;
    return Math.abs(pickupLocation - scuberHq);
}
  function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks(pickupLocation);
    const feetPerBlock = 264
    const blocks = Math.abs(pickupLocation - 42);
    return feetPerBlock * blocks;
}

  function distanceTravelledInFeet(start, destination) {
    const distanceTravelled = Math.abs(destination - start);
    const feetPerBlock = 264;
    return distanceTravelled * feetPerBlock;
}
  function calculatesFarePrice(start, destination) {
    const feetTravelled = distanceTravelledInFeet(start, destination);
    if (feetTravelled <= 400) {
        return 0;
    }
    else if (feetTravelled >400 && feetTravelled <=2000) {
        const additionalFeet = feetTravelled - 400;
        return additionalFeet * 0.02;
    }
    else if (feetTravelled > 2000 && feetTravelled <=2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}