const Pname = require("../models/pname"); // model ที่ import มา

async function seed() {
  await Pname.bulkCreate([
   
  ]);

  console.log("✅ app pname seeded");
}

seed();