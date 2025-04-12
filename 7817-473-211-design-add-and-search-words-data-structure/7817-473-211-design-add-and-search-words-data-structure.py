class TrieNode:
    def __init__(self):
        self.children = {}
        self.endOfWord = False

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        curr = self.root

        for ch in word:
            if ch not in curr.children:
                curr.children[ch] = TrieNode()
            curr = curr.children[ch]
        
        curr.endOfWord = True

    def search(self, word: str) -> bool:
        
        def dfs(root, j):
            curr = root

            for i in range (j, len(word)):
                ch = word[i]

                if ch != '.':
                    if ch not in curr.children:
                        return False
                    curr = curr.children[ch]
                else:
                    for children in curr.children.values():
                        if (dfs(children, i + 1)):
                            return True
                    return False
            return curr.endOfWord   

        return dfs(self.root, 0)    


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)