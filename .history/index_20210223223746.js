function distanceFromHqInBlocks(blocks) {
    return Math.abs((42-blocks));
}
function distanceFromHqInFeet(value) {
    return (distanceFromHqInBlocks(value) * 264);
}