function distanceFromHqInBlocks(blocks) {
    return Math.abs((42-blocks));
}
function distanceTravelledInFeet(value) {
    return (distanceFromHqInBlocks(value) * 264);
}