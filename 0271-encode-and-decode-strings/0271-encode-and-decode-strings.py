'''
encode()
1. encoude as length of str + # + str

decode(encoded)
1. set a ptr at beginning (i)
2. length = read until #, increment i
3. res = encoded[i+1: i+1+length]
4. i = i + 1 + length
'''

class Codec:
    def encode(self, strs: List[str]) -> str:
        """Encodes a list of strings to a single string.
        """
        encoded = ''
        for w in strs:
            l = str(len(w))
            encoded = encoded + l + '#' + w
        return encoded

        

    def decode(self, s: str) -> List[str]:
        """Decodes a single string to a list of strings.
        """
        res = []
        i = 0
        length = ''

        while (i < len(s)):
            while (s[i] != '#'):
                length += s[i]
                i+=1
            print(length)

            num_length = int(length)
            res.append(s[i+1: i+1+num_length])
            i = i + 1 + num_length
            length = ''
        
        return res            

            


# Your Codec object will be instantiated and called as such:
# codec = Codec()
# codec.decode(codec.encode(strs))