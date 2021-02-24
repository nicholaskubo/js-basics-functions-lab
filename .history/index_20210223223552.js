function distanceFromHqInBlocks(blocks) {
    return Math.abs((42-blocks));
}
function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks() * 264);
}