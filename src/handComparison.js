var validCardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
var cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var validCardSuits = ["H", "D", "C", "S"];
var incorrectHandEntry = "Hands entered incorrectly";

function handComparison(firstHand, secondHand) {
    var firstHandArray = firstHand.split(" "), secondHandArray = secondHand.split(" ");
    var firstHandRank, firstHandArrayValues, firstHandSuits, firstHandArrayValuesSorted;
    var secondHandRank, secondHandArrayValues, secondHandSuits, secondHandArrayValuesSorted;
    var firstHandCounter = 0, firstHandPairCount = 0, firstHandHighPairValue = 0, firstHandLowPairValue = 0,
        firstHandThreeOfAKindValue = 0, firstHandFourOfAKindValue = 0;
    var secondHandCounter = 0, secondHandPairCount = 0, secondHandHighPairValue = 0, secondHandLowPairValue = 0,
        secondHandThreeOfAKindValue = 0, secondHandFourOfAKindValue = 0;
    var firstHandFourOfAKind = false, firstHandFlush = false, firstHandStraight = false, firstHandIsPair = false,
        firstHandTwoPair = false, firstHandThreeOfAKind = false;
    var secondHandFourOfAKind = false, secondHandFlush = false, secondHandStraight = false, secondHandThreeOfAKind = false,
        secondHandTwoPair = false, secondHandIsPair = false;
    var isInvalidEntry = checkEntryValidity(firstHandArray, secondHandArray);

    if (isInvalidEntry) {
        return incorrectHandEntry;
    }

    firstHandArrayValues = generateValues(firstHandArray);
    secondHandArrayValues = generateValues(secondHandArray);
    firstHandSuits = generateSuits(firstHandArray);
    secondHandSuits = generateSuits(secondHandArray);
    firstHandArrayValuesSorted = orderCards(firstHandArrayValues);
    secondHandArrayValuesSorted = orderCards(secondHandArrayValues);
    firstHandStraight = straightChecker(firstHandArrayValuesSorted);
    secondHandStraight = straightChecker(secondHandArrayValuesSorted);
    firstHandFlush = flushChecker(firstHandSuits);
    secondHandFlush = flushChecker(secondHandSuits);
    firstHandMultiples = checkForMultiples(firstHandArrayValuesSorted);
    secondHandMultiples = checkForMultiples(secondHandArrayValuesSorted);
    
    if (firstHandMultiples[0] === 4) {
        firstHandFourOfAKind = true;
        firstHandFourOfAKindValue = firstHandMultiples[1];
    }
    else if (firstHandMultiples[0] === 3) {
        firstHandThreeOfAKind = true;
        firstHandThreeOfAKindValue = firstHandMultiples[1];
    }

    if (secondHandMultiples[0] === 4) {
        secondHandFourOfAKind = true;
        secondHandFourOfAKindValue = secondHandMultiples[1];
    }
    else if (secondHandMultiples[0] === 3) {
        secondHandThreeOfAKind = true;
        secondHandThreeOfAKindValue = secondHandMultiples[1];
    }

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (firstHandArrayValuesSorted[i] === firstHandArrayValuesSorted[j]) {
                firstHandCounter++;
            }
            if (secondHandArrayValuesSorted[i] === secondHandArrayValuesSorted[j]) {
                secondHandCounter++;
            }
        }

        if (firstHandCounter === 2) {
            firstHandIsPair = true;
            if (firstHandHighPairValue != firstHandArrayValuesSorted[i]) {
                firstHandPairCount++;
            }
            if (firstHandPairCount === 2) {
                firstHandTwoPair = true;
                if (firstHandHighPairValue > firstHandArrayValuesSorted[i]) {
                    firstHandLowPairValue = firstHandArrayValuesSorted[i];
                }
                else {
                    firstHandLowPairValue = firstHandHighPairValue;
                    firstHandHighPairValue = firstHandArrayValuesSorted[i];
                }
            }
            else if (firstHandPairCount === 1) {
                firstHandHighPairValue = firstHandArrayValuesSorted[i];
            }
        }
        if (secondHandCounter === 2) {
            secondHandIsPair = true;
            if (secondHandHighPairValue != secondHandArrayValuesSorted[i]) {
                secondHandPairCount++;
            }
            if (secondHandPairCount === 2) {
                secondHandTwoPair = true;
                if (secondHandHighPairValue > secondHandArrayValuesSorted[i]) {
                    secondHandLowPairValue = secondHandArrayValuesSorted[i];
                }
                else {
                    secondHandLowPairValue = secondHandHighPairValue;
                    secondHandHighPairValue = secondHandArrayValuesSorted[i];
                }
            }
            else if (secondHandPairCount === 1){
                secondHandHighPairValue = secondHandArrayValuesSorted[i];
            }
        }

        firstHandCounter = 0;
        secondHandCounter = 0;
    }

    if (firstHandStraight && firstHandFlush) {
        firstHandRank = 2;
    }
    else if (firstHandFourOfAKind) {
        firstHandRank = 3;
    }
    else if (firstHandThreeOfAKind && firstHandIsPair) {
        firstHandRank = 4;
    }
    else if (firstHandFlush) {
        firstHandRank = 5;
    }
    else if (firstHandStraight) {
        firstHandRank = 6;
    }
    else if (firstHandThreeOfAKind) {
        firstHandRank = 7;
    }
    else if (firstHandTwoPair) {
        firstHandRank = 8;
    }
    else if (firstHandIsPair) {
        firstHandRank = 9;
    }

    if (secondHandStraight && secondHandFlush) {
        secondHandRank = 2;
    }
    else if (secondHandFourOfAKind) {
        secondHandRank = 3;
    }
    else if (secondHandThreeOfAKind && secondHandIsPair) {
        secondHandRank = 4;
    }
    else if (secondHandFlush) {
        secondHandRank = 5;
    }
    else if (secondHandStraight) {
        secondHandRank = 6;
    }
    else if (secondHandThreeOfAKind) {
        secondHandRank = 7;
    }
    else if (secondHandTwoPair) {
        secondHandRank = 8;
    }
    else if (secondHandIsPair) {
        secondHandRank = 9;
    }

    if(firstHandRank < secondHandRank) {
        return 1;
    }
    else if (secondHandRank < firstHandRank) {
        return -1;
    }

    if (firstHandFourOfAKindValue > secondHandFourOfAKindValue) {
        return 1;
    }
    else if (secondHandFourOfAKindValue > firstHandFourOfAKindValue) {
        return -1;
    }
    if (firstHandThreeOfAKindValue > secondHandThreeOfAKindValue) {
        return 1;
    }
    else if (secondHandThreeOfAKindValue > firstHandThreeOfAKindValue) {
        return -1;
    }
    if (firstHandHighPairValue > secondHandHighPairValue) {
        return 1;
    }
    else if (secondHandHighPairValue > firstHandHighPairValue) {
        return -1;
    }

    if (firstHandLowPairValue > secondHandLowPairValue) {
        return 1;
    }
    else if (secondHandLowPairValue > firstHandLowPairValue) {
        return -1;
    }

    for(var i = 0; i < 5; i++) {
        if (firstHandArrayValuesSorted[i] > secondHandArrayValuesSorted[i]) {
            return 1;
        }
        else if (secondHandArrayValuesSorted[i] > firstHandArrayValuesSorted[i]) {
            return -1;
        }
    }
    
    return 0;
}

function orderCards(cardArray) {
    var sortedArray = [0,0,0,0,0], unsortedArray = cardArray, currentHighCard = 0;

    for(var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (currentHighCard < unsortedArray[j]) {
                currentHighCard = unsortedArray[j];
            }
        }
        sortedArray[i] = currentHighCard;
        unsortedArray[unsortedArray.indexOf(currentHighCard)] = 0
        currentHighCard = 0;
    }

    return sortedArray;
}

function straightChecker(sortedCardArray) {

    for (var i = 1; i < 5; i++) {
        if (sortedCardArray[i-1] != sortedCardArray[i] + 1) {
            return false;
        }
    }

    return true;
}

function flushChecker(cardSuits) {
    for (var i = 1; i < 5; i++) {
        if (cardSuits[i-1] != cardSuits[i]) {
            return false;
        }
    }

    return true;
}

function checkEntryValidity(firstHand, secondHand) {
    if (firstHand.length != 5 || secondHand.length != 5) {
        return true;
    }

    for (var i = 0; i < 5; i++) {
        if (!(validCardNumbers.indexOf(firstHand[i].substring(0,1)) > -1)
            || !(validCardNumbers.indexOf(secondHand[i].substring(0,1)) > -1)) {
            return true;
        }
        if (!(validCardSuits.indexOf(firstHand[i].substring(1,2)) > -1)
            || !(validCardSuits.indexOf(secondHand[i].substring(1,2)) > -1)) {
            return true;
        }
    }
}

function generateValues(handArray) {
    valueArray = [0,0,0,0,0];
    for (var i = 0; i < 5; i++) {
        valueArray[i] = cardValues[validCardNumbers.indexOf(handArray[i].substring(0,1))];
    }

    return valueArray;
}

function generateSuits(handArray) {
    suitArray = ["","","","",""];

    for (var i = 0; i < 5; i++) {
        suitArray[i] = validCardSuits.indexOf(handArray[i].substring(1,2));
    }

    return suitArray;
}

function checkForMultiples(sortedValues) {
    var localCounter = 0 , returnCounter = 0, returnValue = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 5; j++) {
            if (sortedValues[i] === sortedValues[j]) {
                localCounter++;
            }
        }
        if (localCounter === 4) {
            returnCounter = 4;
            returnValue = sortedValues[i];
        }
        else if (localCounter === 3) {
            returnCounter = 3;
            returnValue = sortedValues[i];
        }

        localCounter = 0;
    }

    var returnArray = [returnCounter, returnValue];

    return returnArray;
}