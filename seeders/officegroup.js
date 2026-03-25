const OfficeGroup = require("../models/officegroup");

const officeGroup = [
  {
    OffID: 1,
    Offname: "ข้าราชการ",
    FiveYearReport: "Y",
    ShortOffname: "ขร.",
    PaperText: "เป็นข้าราชการพลเรือนสามัญ",
    Interview: "Yes",
  },
  {
    OffID: 2,
    Offname: "ลูกจ้างประจำ",
    FiveYearReport: "Y",
    ShortOffname: "ล.ประจำ",
    PaperText: "เป็นลูกจ้างประจำ",
    Interview: "Nos",
  },
  {
    OffID: 3,
    Offname: "ลูกจ้างชั่วคราว-รายเดือน",
    FiveYearReport: "Y",
    ShortOffname: "ลช.รายเดือน",
    PaperText: "เป็นลูกจ้างชั่วคราว",
    Interview: "Nos",
  },
  {
    OffID: 4,
    Offname: "พนักงานราชการ",
    FiveYearReport: "Y",
    ShortOffname: "พ.ราชการ",
    PaperText: "เป็นพนักงานราชการ",
    Interview: "Yes",
  },
  {
    OffID: 5,
    Offname: "ลูกจ้างชั่วคราว - ข้าราชการบำนาญ",
    FiveYearReport: null,
    ShortOffname: "ลช.บำนาญ",
    PaperText: "เป็นลูกจ้างชั่วคราว",
    Interview: "Nos",
  },
  {
    OffID: 6,
    Offname: "ลูกจ้างโครงการ",
    FiveYearReport: null,
    ShortOffname: "ล.โครงการ",
    PaperText: "เป็นลูกจ้างชั่วคราว",
    Interview: "Nos",
  },
  {
    OffID: 7,
    Offname: "พนักงานกระทรวงสาธารณสุข",
    FiveYearReport: "Y",
    ShortOffname: "พกส.",
    PaperText: "เป็นพนักงานกระทรวงสาธารณสุข",
    Interview: "Yes",
  },
  {
    OffID: 8,
    Offname: "ลูกจ้างชั่วคราว-รายวัน",
    FiveYearReport: "Y",
    ShortOffname: "ลช.รายวัน",
    PaperText: "เป็นลูกจ้างชั่วคราว",
    Interview: "Nos",
  },
  {
    OffID: 9,
    Offname: "ลูกจ้างเหมาจ่าย",
    FiveYearReport: null,
    ShortOffname: "ล.เหมาจ่าย",
    PaperText: null,
    Interview: "Nos",
  },
  {
    OffID: 10,
    Offname: "ลูกจ้างชั่วคราว - รายคาบ",
    FiveYearReport: null,
    ShortOffname: "ลช.รายคาบ",
    PaperText: "เป็นลูกจ้างชั่วคราว",
    Interview: "Nos",
  },
  {
    OffID: 11,
    Offname: "จิตอาสา",
    FiveYearReport: "Y",
    ShortOffname: "จิตอาสา",
    PaperText: null,
    Interview: "Nos",
  },
  {
    OffID: 12,
    Offname: "พนักงานราชการเฉพาะกิจ",
    FiveYearReport: "Y",
    ShortOffname: "พนักงานราชการเฉพาะ",
    PaperText: null,
    Interview: "Nos",
  },
  {
    OffID: 13,
    Offname: "ลูกจ้างประเภทอื่น",
    FiveYearReport: "Y",
    ShortOffname: "ลูกจ้างประเภทอื่น",
    PaperText: null,
    Interview: "Nos",
  },
];

async function seed() {
  await OfficeGroup.bulkCreate(officeGroup);

  console.log("Office Group seeder success");
}

seed();
