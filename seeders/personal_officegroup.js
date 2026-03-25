const PersonalOfficeGroup = require("../models/personnal_officegroup");

const officegroup = [
  {
    offid: 1,
    offname: "ข้าราชการ",
  },
  {
    offid: 2,
    offname: "ลูกจ้างประจำ",
  },
  {
    offid: 3,
    offname: "ลูกจ้างชั่วคราว-รายเดือน",
  },
  {
    offid: 4,
    offname: "พนักงานราชการ",
  },
  {
    offid: 5,
    offname: "ลูกจ้างชั่วคราว - ข้าราชการบำนาญ",
  },
  {
    offid: 6,
    offname: "ลูกจ้างโครงการ",
  },
  {
    offid: 7,
    offname: "พนักงานกระทรวงสาธารณสุข",
  },
  {
    offid: 8,
    offname: "ลูกจ้างชั่วคราว-รายวัน",
  },
  {
    offid: 9,
    offname: "ลูกจ้างเหมาจ่าย",
  },
  {
    offid: 10,
    offname: "ลูกจ้างชั่วคราว - รายคาบ",
  },
  {
    offid: 11,
    offname: "จิตอาสา",
  },
  {
    offid: 12,
    offname: "พนักงานราชการเฉพาะกิจ",
  },
  {
    offid: 13,
    offname: "ลูกจ้างประเภทอื่น",
  },
];

async function seed() {
  await PersonalOfficeGroup.bulkCreate(officegroup);
  console.log("personnal office group seed success");
}

seed();
