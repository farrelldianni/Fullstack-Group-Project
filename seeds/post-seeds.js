// nothing changed yet from module project, might be able to use this file to test db
const { Post } = require("../models");

const postData = [
  {
    title: "Lonely Night Gamer Hours",
    game: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Why does Link Up Air Always Kill?",
    game: "game Genre",
    username: "LinkHater69",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "What the fuck am I supposed to do in Elden Ring?",
    game: "game Genre",
    username: "JohnDarksoul",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Can someone help me with this DOS RPG quest?",
    game: "game Genre",
    username: "AncientBoomerGamer",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Who wants to play Fortnite? Must be able to edit and crank PHAT 90's",
    genre: "game Genre",
    username: "xXxBloodDrinker420xXx",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Whats the best exotic to run in Destiny 2 right now?",
    genre: "game Genre",
    username: "godimaddictedpleasehelp",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "buying gf. 4k",
    genre: "game Genre",
    username: "totallyNotAnAdult",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  { 
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
  {
    title: "Lonely Night Gamer Hours",
    genre: "game Genre",
    username: "gamerGirl",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum placeat fugiat corrupti nihil voluptate alias eos ullam aliquam, debitis, consequatur maxime maiores autem a expedita et, perspiciatis sunt animi quod.",
    user_id: 10,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
