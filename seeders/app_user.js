const AppUser = require("../models/app_user");

const users = [
  // ===== หมอ (5 คน) =====
  {
    userid: 1,
    blobpsw1:
      "0x3300700028004C0023000F0032003A007700F1FF32004C002A0028006A002E00720035003100550075003300",
    blobpsw2:
      "0x71002C00330046004A0036002E002600340032007B00720040002A004200360040003B002E00",
    rightlevel: 3,
    careuserid: 1,
    personid: 4001,
    startdatetime: "2015-01-01 08:00:00",
    enddatetime: "0000-00-00 00:00:00",
    createdatetime: "2015-01-01 08:00:00",
    createuserid: 1,
    editdatetime: "2015-01-01 08:00:00",
    edituserid: 1,
    editlogid: 100001,
    active: "Y",
    logext: "N",
  },
  {
    userid: 2,
    blobpsw1:
      "0x3300700028004C0023000F0032003A007700F1FF32004C002A0028006A002E00720035003100550075003300",
    blobpsw2:
      "0x71002C00330046004A0036002E002600340032007B00720040002A004200360040003B002E00",
    rightlevel: 3,
    careuserid: 2,
    personid: 4002,
    startdatetime: "2016-01-01 08:00:00",
    enddatetime: "0000-00-00 00:00:00",
    createdatetime: "2016-01-01 08:00:00",
    createuserid: 2,
    editdatetime: "2016-01-01 08:00:00",
    edituserid: 2,
    editlogid: 100002,
    active: "Y",
    logext: "N",
  },
  {
    userid: 3,
    blobpsw1:
      "0x3300700028004C0023000F0032003A007700F1FF32004C002A0028006A002E00720035003100550075003300",
    blobpsw2:
      "0x71002C00330046004A0036002E002600340032007B00720040002A004200360040003B002E00",
    rightlevel: 3,
    careuserid: 3,
    personid: 4003,
    startdatetime: "2014-05-10 08:00:00",
    enddatetime: "0000-00-00 00:00:00",
    createdatetime: "2014-05-10 08:00:00",
    createuserid: 3,
    editdatetime: "2014-05-10 08:00:00",
    edituserid: 3,
    editlogid: 100003,
    active: "Y",
    logext: "N",
  },

  // ===== พยาบาล (3 คน) =====
  {
    userid: 4,
    blobpsw1:
      "0x3300700028004C0023000F0032003A007700F1FF32004C002A0028006A002E00720035003100550075003300",
    blobpsw2:
      "0x71002C00330046004A0036002E002600340032007B00720040002A004200360040003B002E00",
    rightlevel: 2,
    careuserid: 6,
    personid: 5001,
    startdatetime: "2017-06-01 08:00:00",
    enddatetime: "0000-00-00 00:00:00",
    createdatetime: "2017-06-01 08:00:00",
    createuserid: 6,
    editdatetime: "2017-06-01 08:00:00",
    edituserid: 6,
    editlogid: 100006,
    active: "Y",
    logext: "N",
  },

  // ===== staff (2 คน) =====
  {
    userid: 5,
    blobpsw1:
      "0x3300700028004C0023000F0032003A007700F1FF32004C002A0028006A002E00720035003100550075003300",
    blobpsw2:
      "0x71002C00330046004A0036002E002600340032007B00720040002A004200360040003B002E00",
    rightlevel: 1,
    careuserid: 9,
    personid: 6001,
    startdatetime: "2020-01-01 08:00:00",
    enddatetime: "0000-00-00 00:00:00",
    createdatetime: "2020-01-01 08:00:00",
    createuserid: 9,
    editdatetime: "2020-01-01 08:00:00",
    edituserid: 9,
    editlogid: 100009,
    active: "Y",
    logext: "N",
  },
];

async function seed() {
  await AppUser.bulkCreate(users);
  console.log("✅ app user seeded with 10 sample records");
}

seed();
