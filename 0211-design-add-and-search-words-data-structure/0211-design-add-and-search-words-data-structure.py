class TrieNode():
    def __init__(self):
        self.children = {}
        self.endOfWord = False

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        curr = self.root

        for ch in word:
            if not(ch in curr.children):
                curr.children[ch] = TrieNode()
            curr = curr.children[ch]
        
        curr.endOfWord = True

    def search(self, word: str) -> bool:
        
        def dfs(root, i):
            curr = root

            for j in range(i, len(word)):
                ch = word[j]

                if (ch == '.'):
                    for child in curr.children:
                        if dfs(child, j + 1):
                            return True
                    return False

                else:
                    if not(ch in curr.children):
                        return False
                    curr = curr.children[ch]
            return curr.endOfWord

        dfs(self.root, 0)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)