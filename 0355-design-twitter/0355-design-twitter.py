class Twitter:

    def __init__(self):
        self.tweets = []
        self.users = {}

    def postTweet(self, userId: int, tweetId: int) -> None:
        if userId not in self.users:
            self.users[userId] = {"following": set()}

        newTweet = {
            "tweetId": tweetId,
            "userId": userId
        }
        self.tweets.append(newTweet)

    def getNewsFeed(self, userId: int) -> List[int]:
        if userId not in self.users:
            return []

        feed = []
        tweets = self.tweets
        userFollowing = self.users.get(userId)["following"]

        for i in range(len(tweets) - 1, -1, -1):
            tweet = tweets[i]
            if tweet["userId"] == userId or tweet["userId"] in userFollowing:
                feed.append(tweet["tweetId"])
                if len(feed) >= 10:
                    break
        
        return feed


    def follow(self, followerId: int, followeeId: int) -> None:
        if followerId not in self.users:
            self.users[followerId] = {"following": set()}

        self.users[followerId]["following"].add(followeeId)

    def unfollow(self, followerId: int, followeeId: int) -> None:
        if followeeId not in self.users[followerId]["following"]:
            return
            
        self.users[followerId]["following"].remove(followeeId)


# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)