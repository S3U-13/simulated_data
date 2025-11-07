const PersonnalPositions = require("../models/personnal_position"); // model ที่ import มา

async function seed() {
  await PersonnalPositions.bulkCreate([
   
  ]);

  console.log("✅ personal positions seeded ");
}

seed();