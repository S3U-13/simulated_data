const hashPassword = require("../utils/hassPassword");

const AppUsername = require("../models/app_username");

const usernames = [
  {
    username: "somchai",
    userid: 1,
    userdesc: "แพทย์สูติ-นรีเวชกรรม",
  },
  {
    username: "orathai",
    userid: 2,
    userdesc: "แพทย์รังสีวิทยา",
  },
  {
    username: "wichai",
    userid: 3,
    userdesc: "แพทย์สูติ-นรีเวชกรรม",
  },
  {
    username: "sunisa",
    userid: 4,
    userdesc: "พยาบาลวิชาชีพ",
  },
  {
    username: "sompong",
    userid: 5,
    userdesc: "ผู้ช่วยพยาบาล",
  },
];

async function seed() {
  const users = await Promise.all(
    usernames.map(async (u) => ({
      ...u,
      hash1: await hashPassword("12345"),
      hash2: await hashPassword("12345"),
    })),
  );

  await AppUsername.bulkCreate(users);

  console.log("✅ app username seeded with 5 sample records");
}
seed();
