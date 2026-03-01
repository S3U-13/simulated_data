const DoctorName = require("../models/doctorname");

const doctor_names = [
  {
    doctorid: 52,
    doctorname: "สมชาย",
    doctorlastname: "ใจดี",
    sex: "M",
    doctorsalutation: "นพ.",
    doctorlicenseid: "43246",
    doctorspecialist: "D10",
    doctorlevel: "E",
    doctordepart: "400",
    doctorlimit: "Y",
    flag_active: "Y",
    activestart: "2012-09-21",
    activeend: null,
    personid: 4001,
    doctornameeng: "somchai",
    doctorlastnameeng: "jaidee",
  },
  {
    doctorid: 53,
    doctorname: "อรทัย",
    doctorlastname: "สุขใจ",
    sex: "F",
    doctorsalutation: "พญ.",
    doctorlicenseid: "43257",
    doctorspecialist: "D10",
    doctorlevel: "E",
    doctordepart: "400",
    doctorlimit: "Y",
    flag_active: "Y",
    activestart: "2012-09-21",
    activeend: null,
    personid: 4002,
    doctornameeng: "orathai",
    doctorlastnameeng: "sukjai",
  },
  {
    doctorid: 54,
    doctorname: "วิชัย",
    doctorlastname: "บุญมี",
    sex: "M",
    doctorsalutation: "นพ.",
    doctorlicenseid: "43387",
    doctorspecialist: "D10",
    doctorlevel: "E",
    doctordepart: "400",
    doctorlimit: "Y",
    flag_active: "Y",
    activestart: "2012-09-21",
    activeend: null,
    personid: 4003,
    doctornameeng: "wichai",
    doctorlastnameeng: "bunmee",
  },
];

async function seed() {
  await DoctorName.bulkCreate(doctor_names);
  console.log("DoctorName seeded successfully.");
}

seed();
