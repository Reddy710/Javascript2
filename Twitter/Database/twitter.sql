
CREATE DATABASE IF NOT EXISTS TwitterDB;
USE TwitterLikeDB;

CREATE TABLE IF NOT EXISTS User (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL,
    ProfileInfo TEXT,
    UNIQUE (Username),
    UNIQUE (Email)
);

-- Create the Tweet table
CREATE TABLE IF NOT EXISTS Tweet (
    TweetID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    Content TEXT NOT NULL,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    RetweetCount INT DEFAULT 0,
    LikeCount INT DEFAULT 0,
    FOREIGN KEY (UserID) REFERENCES User(UserID)
);

-- Create the Followers table
CREATE TABLE IF NOT EXISTS Followers (
    FollowerID INT,
    FolloweeID INT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (FollowerID, FolloweeID),
    FOREIGN KEY (FollowerID) REFERENCES User(UserID),
    FOREIGN KEY (FolloweeID) REFERENCES User(UserID)
);

-- Create the Likes table
CREATE TABLE IF NOT EXISTS Likes (
    LikeID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    TweetID INT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (TweetID) REFERENCES Tweet(TweetID)
);

-- Create the Retweets table
CREATE TABLE IF NOT EXISTS Retweets (
    RetweetID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    TweetID INT,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (TweetID) REFERENCES Tweet(TweetID)
);

-- Create the Comments table
CREATE TABLE IF NOT EXISTS Comments (
    CommentID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    TweetID INT,
    Content TEXT NOT NULL,
    Timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES User(UserID),
    FOREIGN KEY (TweetID) REFERENCES Tweet(TweetID)
);


