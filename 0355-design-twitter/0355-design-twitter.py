class Twitter:

    def __init__(self):
        self.users = {}
        self.tweets = []

    def postTweet(self, userId: int, tweetId: int) -> None:
        if userId not in self.users:
            self.users[userId] = set()

        self.tweets.append({"tweetId": tweetId, "userId": userId})

    def getNewsFeed(self, userId: int) -> list[int]:
        if userId not in self.users:
            return []

        feed = []
        count = 0
        userFollowing = self.users.get(userId)
        for i in range(len(self.tweets) - 1, -1, -1):
            if self.tweets[i]["userId"] == userId or self.tweets[i]["userId"] in userFollowing:
                feed.append(self.tweets[i]["tweetId"])
                count += 1
            if count == 10:
                break
        return feed

    def follow(self, followerId: int, followeeId: int) -> None:
        followers = self.users.get(followerId, set())
        followers.add(followeeId)
        self.users[followerId] = followers

    def unfollow(self, followerId: int, followeeId: int) -> None:
        followers = self.users.get(followerId, set())

        if followeeId not in followers:
            return

        followers.remove(followeeId)
        self.users[followerId] = followers


# Your Twitter object will be instantiated and called as such:
# obj = Twitter()
# obj.postTweet(userId,tweetId)
# param_2 = obj.getNewsFeed(userId)
# obj.follow(followerId,followeeId)
# obj.unfollow(followerId,followeeId)