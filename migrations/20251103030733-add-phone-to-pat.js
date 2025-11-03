"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("pat", {
      hn: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      soundex: {
        allowNull: true,
        type: Sequelize.STRING(15),
      },
      salutation: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      prename: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      firstname: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      lastname: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      prename_en: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      firstname_en: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      lastname_en: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      birthflag: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      sex: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      marriage: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      religious: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      race: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      citizenship: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      occupation: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      abogroup: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      hnofmother: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      firstnameofmother: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      lastnameofmother: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      firstnameoffather: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      lastnameoffather: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      firstnameofcouple: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      lastnameofcouple: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      citizencardno: {
        allowNull: true,
        type: Sequelize.STRING(13),
      },
      othercardtype: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      othercardno: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      flag_status: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      adduserid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      adddatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      edituserid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      editdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      timestart: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      timefinish: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      birhtdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      onhand: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      lastlocationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      bloodgroup: {
        allowNull: true,
        type: Sequelize.STRING(2),
      },
    });

    await queryInterface.createTable("pat_address", {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hn: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      house: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      moo: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      soy: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      road: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      tambon: {
        allowNull: true,
        type: Sequelize.STRING(6),
      },
      amphur: {
        allowNull: true,
        type: Sequelize.STRING(6),
      },
      province: {
        allowNull: true,
        type: Sequelize.STRING(6),
      },
      country: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      postcode: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING(40),
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING(40),
      },
      flag_status: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      userid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    });

    await queryInterface.createTable("pat_visit", {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hn: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      an: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      prename: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      firstname: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      lastname: {
        allowNull: true,
        type: Sequelize.STRING(25),
      },
      visitdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      dischodatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      lastregtypeid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      patcoverageid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      coveragecode: {
        allowNull: true,
        type: Sequelize.STRING(5),
      },
      coveragemasterid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      regstatusid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      lastlocationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      dischargettypeid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      sex: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      ageday: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING(120),
      },
      tambon: {
        allowNull: true,
        type: Sequelize.STRING(6),
      },
      amphur: {
        allowNull: true,
        type: Sequelize.STRING(6),
      },
      province: {
        allowNull: true,
        type: Sequelize.STRING(6),
      },
      zipcode: {
        allowNull: true,
        type: Sequelize.STRING(5),
      },
      citizencardno: {
        allowNull: true,
        type: Sequelize.STRING(13),
      },
      flag_status: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      admitlocationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      admindatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      dischlocationid: {
        allowNull: true,
        type: Sequelize.STRING(6),
      },
      visitdate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.createTable("pat_reg", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      hn: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      an: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      patvisitid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      regtypeid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      regstatusid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      departcode: {
        allowNull: true,
        type: Sequelize.STRING(6),
      },
      locationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      roomno: {
        allowNull: true,
        type: Sequelize.STRING(4),
      },
      los: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      patcoverageid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      coveragecode: {
        allowNull: true,
        type: Sequelize.STRING(5),
      },
      coveragemasterid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      queueno: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      locationqueueno: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      startdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      enddatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      dischargettypeid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      flag_status: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      flag_reg: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      flag_service: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      flag_appoint: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      appointid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      nextappointid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      flag_refer: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      referid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      referinid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      referoutid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      maindoctorid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      userid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      editdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      projectid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      flag_app: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      fromlocationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      visitdate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      frompatregid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      druglocationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      lablocationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      xraylocationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      cashierlocationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      flag_end: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      flag_opdcard: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      flag_oneself: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      nurseuserid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      drugcheckuserid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      regdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      drugdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      cashdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      docdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      flag_new: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      flag_a: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      flag_b: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      flag_c: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
    });

    await queryInterface.createTable("pat_vitalsign", {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      patregid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      patvisitid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      hn: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      dodate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      dotime: {
        allowNull: true,
        type: Sequelize.TIME,
      },
      waist: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      height: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      weight: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      bp_systolic: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      bp_diastolic: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      temperature: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      pulse: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      respiration: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      coma_e: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      coma_v: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      coma_m: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      userid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      locationid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      smoking: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      alcohol: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      o2sat: {
        allowNull: true,
        type: Sequelize.STRING(6),
      },
      sos: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      plain: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      lmpdate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("pat");
    await queryInterface.dropTable("pat_address");
    await queryInterface.dropTable("pat_visit");
    await queryInterface.dropTable("pat_reg");
    await queryInterface.dropTable("pat_vitalsign");
  },
};
