// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const hqLocation = 42;
    return Math.abs(pickupLocation - hqLocation);
}
  function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks(pickupLocation);
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    const feetPerBlock = 264
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
    const blocks = Math.abs(pickupLocation - 42);
    // the return value of distanceFromHqInBlocks can then be used to calculate feet
    return feetPerBlock * blocks;
}

  function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
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