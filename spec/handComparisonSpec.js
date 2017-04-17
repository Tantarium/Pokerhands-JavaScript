
describe("Comparing two poker hands to determine which one would win.", function() {

    it("Provides an error if first hand does not contain 5 cards.", function() {
        var firstHand = "AD TH 7C 5H";
        var secondHand = "KD TC 7H 5S 3C";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Provides an error if second hand does not contain 5 cards.", function() {
        var firstHand = "AD TH 7C 5H 3S";
        var secondHand = "KD TC 7H 5S";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Provides an error if first hand contains more than 5 cards.", function() {
        var firstHand = "AD TH 7C 5H 3S 4C";
        var secondHand = "KD TC 7H 5S 3C";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Provides an error if second hand contains more than 5 cards.", function() {
        var firstHand = "AD TH 7C 5H 3S";
        var secondHand = "KD TC 7H 5S 3C 4C";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Provides an error if first hand has an impropper card number entered.", function() {
        var firstHand = "AD TH GC 5H 3S";
        var secondHand = "KD TC 7H 5S 3C";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Provides an error if second hand has an impropper card number entered.", function() {
        var firstHand = "AD TH 7C 5H 3S";
        var secondHand = "KD TC YH 5S 3C";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Provides an error if first hand has an impropper card suit entered.", function() {
        var firstHand = "AT TH 7C 5H 3S";
        var secondHand = "KD TC 7H 5S 3C";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Provides an error if second hand has an impropper card suit entered.", function() {
        var firstHand = "AD TH 7C 5H 3S";
        var secondHand = "KT TC 7H 5S 3C";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Provides an error if first hand has extra characters in a card.", function() {
        var firstHand = "AD TH 77C 5H 3S";
        var secondHand = "KD TC 7H 5S 3C";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Provides an error if second hand has extra characters in a card.", function() {
        var firstHand = "AD TH 7C 5H 3S";
        var secondHand = "KT TC 77H 5S 3C";
        expect("Hands entered incorrectly").toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal high card hands with first hand winning.", function() {
        var firstHand = "AD TH 7C 5H 3S";
        var secondHand = "KD TC 7H 5S 3C";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal high card hands with first hand winning.", function() {
        var firstHand = "KD TH 7C 5H 3S";
        var secondHand = "AD TC 7H 5S 3C";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal high card hands with first hand winning where the highest card is the same in both hands.", function() {
        var firstHand = "AC JH 7C 5H 3S";
        var secondHand = "AD TC 7H 5S 3C";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal high card hands with second hand winning where the highest card is the same in both hands.", function() {
        var firstHand = "AC TH 7C 5H 3S";
        var secondHand = "AD JC 7H 5S 3C";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal high card hands with first hand winning where the lowest card is the only difference.", function() {
        var firstHand = "AC JH 7C 5H 3S";
        var secondHand = "AD JC 7H 5S 2C";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal high card hands with second hand winning where the lowest card is the only difference.", function() {
        var firstHand = "AC JH 7C 5H 2S";
        var secondHand = "AD JC 7H 5S 3C";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two equal high card hands and results in a tie.", function() {
        var firstHand = "AD TH 7C 5H 3S";
        var secondHand = "AD TC 7H 5S 3C";
        expect(0).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a pair to a high card with first hand having the pair.", function() {
        var firstHand = "KD KH 7C 5H 3S";
        var secondHand = "AD TC 7H 5S 3C";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a pair to a high card with second hand having the pair.", function() {
        var firstHand = "KD TH 7C 5H 3S";
        var secondHand = "QD TC TS 5S 3C";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two pair hands where first hand has the higher pair.", function() {
        var firstHand = "JD JH 7C 5H 3S";
        var secondHand = "QD TC TS 5S 3C";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two pair hands where second hand has the higher pair.", function() {
        var firstHand = "QD TC TS 5S 3C";
        var secondHand = "JD JH 7C 5H 3S";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two equal pair hands and results in a tie.", function() {
        var firstHand = "QD JH JD 5H 4C";
        var secondHand = "QH JS JC 5D 4S";
        expect(0).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two pair hands where the pair is equal, but the high card is not and first hand wins.", function() {
        var firstHand = "JH JD 7D 5H 4C";
        var secondHand = "JS JC 6D 5D 4S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two pair hands where the pair is equal, but the high card is not and second hand wins.", function() {
        var firstHand = "QD JH JD 5H 4C";
        var secondHand = "KH JS JC 5D 4S";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two pair hands where the pair is equal and the middle card is not and the first hand wins.", function() {
        var firstHand = "QD JH JD 6H 4C";
        var secondHand = "QH JS JC 5D 3S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two pair hands where the pair is equal, but the middle card is not and second hand wins.", function() {
        var firstHand = "QD JH JD 5H 4C";
        var secondHand = "QH JS JC 6D 4S";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two pair hands where the pair is equal and only the lowest card are unequal and the first hand wins.", function() {
        var firstHand = "QD JH JD 5H 4C";
        var secondHand = "QH JS JC 5D 3S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two pair hands where the pair is equal and only the lowest card are unequal and the second hand wins.", function() {
        var firstHand = "QD JH JD 5H 2C";
        var secondHand = "QH JS JC 5D 3S";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a two pair hand to a single pair hand and first hand is the two pair.", function() {
        var firstHand = "QD JH JD 2H 2C";
        var secondHand = "QH JS JC 5D 3S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a two pair hand to a single pair hand and second hand is the two pair.", function() {
        var firstHand = "QD JH JD 5H 2C";
        var secondHand = "QH JS JC 3D 3S";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal two pair hands where the high pair is unequal and first player has the higher pair.", function() {
        var firstHand = "QD QS JH JD 5H";
        var secondHand = "QH JS JC 3D 3S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal two pair hands where the high pair is unequal and second player has the higher pair.", function() {
        var firstHand = "QH JS JC 3D 3S";
        var secondHand = "QD QS JH JD 5H";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal two pair hands where the low pair is unequal and first player has the higher pair.", function() {
        var firstHand = "QD QS JH JD 5H";
        var secondHand = "QH QC JC 3D 3S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal two pair hands where the low pair is unequal and second player has the higher pair.", function() {
        var firstHand = "QH QC JC 3D 3S";
        var secondHand = "QD QS JH JD 5H";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal two pair hands where the single card is unequal and first player has the higher pair.", function() {
        var firstHand = "QD QS JH JD 5H";
        var secondHand = "QH QC JC JS 3S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two unequal two pair hands where the single card is unequal and second player has the higher pair.", function() {
        var firstHand = "QD QS JH JD 5H";
        var secondHand = "QH QC JC JS 6S";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two equal two pair hands and returns a tie.", function() {
        var firstHand = "QD QS JH JD 6H";
        var secondHand = "QH QC JC JS 6S";
        expect(0).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a three of a kind hand to a two pair hand where first hand is the three of a kind.", function() {
        var firstHand = "QD QS QH JD 6H";
        var secondHand = "JH JC TC TS 6S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a three of a kind hand to a two pair hand where second hand is the three of a kind.", function() {
        var firstHand = "JH JC TC TS 6S";
        var secondHand = "QD QS QH JD 6H";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two three of a kind hands where the first hand has a higher three of a kind value.", function() {
        var firstHand = "QD JS 6S 6D 6H";
        var secondHand = "KH JC 5C 5S 5H";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two three of a kind hands where the second hand has a higher three of a kind value.", function() {
        var firstHand = "KH JC 5C 5S 5H";
        var secondHand = "QD JS 6S 6D 6H";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a straight hand to a three of a kind and the first hand is the straight.", function() {
        var firstHand = "2H 3D 4S 5C 6C";
        var secondHand = "JH JC JS TS 6S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a straight hand to a three of a kind and the second hand is the straight.", function() {
        var firstHand = "JH JC JS TS 6S";
        var secondHand = "2H 3D 4S 5C 6C";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two equal straight hands and results in a tie.", function() {
        var firstHand = "2D 3H 4C 5S 6S";
        var secondHand = "2H 3D 4S 5C 6C";
        expect(0).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a flush hand to a straight and the first hand is the flush.", function() {
        var firstHand = "AC TC 7C 5C 2C";
        var secondHand = "2H 3D 4S 5C 6C";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a flush hand to a straight and the second hand is the flush.", function() {
        var firstHand = "2H 3D 4S 5C 6C";
        var secondHand = "AC TC 7C 5C 2C";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two flush hands where first hand has greater value cards.", function() {
        var firstHand = "AD TD 7D 5D 3D";
        var secondHand = "AC TC 7C 5C 2C";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two flush hands where second hand has greater value cards.", function() {
        var firstHand = "AD TD 7D 5D 3D";
        var secondHand = "AC TC 7C 5C 4C";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two equal flush hands and return a tie.", function() {
        var firstHand = "AD TD 7D 5D 2D";
        var secondHand = "AC TC 7C 5C 2C";
        expect(0).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a full house to a flush and first hand is the full house.", function() {
        var firstHand = "AD AC 5S 5D 5H";
        var secondHand = "KC TC 7C 5C 2C";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a full house to a flush and second hand is the full house.", function() {
        var firstHand = "KC TC 7C 5C 2C";
        var secondHand = "AD AC 5S 5D 5H";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two full house hands where the first hand has a higher three of a kind value.", function() {
        var firstHand = "AD AC 5S 5D 5H";
        var secondHand = "AH AS 4C 4H 4S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two full house hands where the second hand has a higher three of a kind value.", function() {
        var firstHand = "AH AS 4C 4H 4S";
        var secondHand = "AD AC 5S 5D 5H";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a four of a kind to a full house where the first hand is the four of a kind.", function() {
        var firstHand = "AD 5C 5S 5D 5H";
        var secondHand = "AH AS 4C 4H 4S";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a four of a kind to a full house where the second hand is the four of a kind.", function() {
        var firstHand = "AH AS 4C 4H 4S";
        var secondHand = "AD 5C 5S 5D 5H";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two four of a kind hands and the first hand has a higher four of a kinda value.", function() {
        var firstHand = "KD 5C 5S 5D 5H";
        var secondHand = "AH 4S 4C 4H 4D";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares two four of a kind hands and the second hand has a higher four of a kinda value.", function() {
        var firstHand = "AH 4S 4C 4H 4D";
        var secondHand = "KD 5C 5S 5D 5H";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a straight flush hand against a four of a kind where the first hand is the straight flush.", function() {
        var firstHand = "2H 3H 4H 5H 6H";
        var secondHand = "AH 4S 4C 4H 4D";
        expect(1).toEqual(handComparison(firstHand, secondHand));
    });

    it("Compares a straight flush hand against a four of a kind where the second hand is the straight flush.", function() {
        var firstHand = "AH 4S 4C 4H 4D";
        var secondHand = "2H 3H 4H 5H 6H";
        expect(-1).toEqual(handComparison(firstHand, secondHand));
    });

});