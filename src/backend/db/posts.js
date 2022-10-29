import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "dsf4sda6f65das4f",
    pic: "	https://img.freepik.com/free-vector/gradient-anime-girl-illustration_52683-83754.jpg?w=2000",
    content:
      "Hey,everyone it's been a while since I posted...Now i will be consistent.",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",

        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    pic: "https://i.pinimg.com/originals/bd/fb/dc/bdfbdc0e5c86a266c7a04c97869074ac.png",
    content: "Attack On Titan Releasing Today !! Are you guys excited?",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sohamshah",
        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],

    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    pic: "https://i.pinimg.com/originals/bd/fb/dc/bdfbdc0e5c86a266c7a04c97869074ac.png",
    content: "Hey Guys Whatsup !",
    likes: {
      likeCount: 4999,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Naman Jain",
    createdAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "namanjain",
        text: "amazing",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "rahulsharma",
        text: "Great!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
