
function distanceFromHqInBlocks(startingBlock, endingBlock) {
    if ((startingBlock - endingBlock) > 0) {
        return (startingBlock - endingBlock);
    }
    else if ((startingBlock - endingBlock) <0) {
        return (endingBlock - startingBlock);
    }
}