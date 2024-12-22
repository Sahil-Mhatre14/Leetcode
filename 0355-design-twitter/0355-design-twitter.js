/*
Init() {
    users = new Map()
    tweets = []
}

follow(u1, u2) {
    followers = users.get(u1) || new Set()
    followers.add(u2)
    users.set(u1, followers)
}

unfollow(u1, u2) {
    followers = users.get(u1) || new Set()
    followers.delete(u2)
    users.set(u1, followers)
}

postTweet(userId, tweetId) {
    if user doesn't exist then make a new user
    tweets.push({userId, tweetId})
}

getNewsFeed(userId) {
    recentTweets = []
    following = users.get(userId)
    iterate from end of tweets until recentTweets.length < 10 {
        if tweet.id === userId || following.has(tweet.userId) {
            push tweet to recentTweets
        }
    }
    return recentTweets
}
*/
var Twitter = function() {
    this.users = new Map()
    this.tweets = []
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if (!this.users.has(userId)) {
        this.users.set(userId, new Set())
    }
    this.tweets.push({tweetId, userId})
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    var latestTweets = []
    var followers = this.users.get(userId) || new Set()
    for(var i = this.tweets.length - 1; i >= 0 && latestTweets.length < 10; i--) {
        if (this.tweets[i].userId === userId || 
        followers.has(this.tweets[i].userId)) {
            latestTweets.push(this.tweets[i].tweetId)
        }
    }
    return latestTweets
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    var followers = this.users.get(followerId) || new Set()
    followers.add(followeeId)
    this.users.set(followerId, followers)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    var followers = this.users.get(followerId)
    followers.delete(followeeId)
    this.users.set(followerId, followers)
   
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */