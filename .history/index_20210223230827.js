function distanceFromHqInBlocks(blocks) {
    return Math.abs((42-blocks));
}
function distanceFromHqInFeet(value) {
    return (distanceFromHqInBlocks(value) * 264);
}
function distanceTravelledInFeet(block1, block2) {
    return Math.abs((block1-block2) * 264) 
}