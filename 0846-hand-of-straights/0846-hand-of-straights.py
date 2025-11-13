class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize != 0:
            return False

        hand.sort()

        cards = {}
        for card in hand:
            cards[card] = cards.get(card, 0) + 1

        for card in hand:
            if cards[card] == 0:
                continue
            
            for i in range(0, groupSize):
                nextCard = card + i
                if nextCard not in cards or cards[nextCard] == 0:
                    return False
                cards[nextCard] -= 1
        
        return True