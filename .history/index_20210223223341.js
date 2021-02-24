function distanceFromHqInBlocks(blocks) {
    return Math.abs((42-blocks));
}
function distanceTravelledInFeet(value) {
    return Math.abs((distanceFromHqInBlocks(value)) * 264);
}