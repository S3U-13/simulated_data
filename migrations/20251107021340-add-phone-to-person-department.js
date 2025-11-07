"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("app_person", {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      PSCodeID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      pscode: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      salutation: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      firstname: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      lastname: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      GroID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      OffID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      PosID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      NursePosID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Poslevel: {
        allowNull: true,
        type: Sequelize.STRING(70),
      },
      Sex: {
        allowNull: true,
        type: Sequelize.STRING(70),
      },
      DivID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      DepartID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      SsjID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      WorkPoint: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Specialty: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Gradlevel: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Graduate: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Educate: {
        allowNull: true,
        type: Sequelize.STRING(150),
      },
      Birthday: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      StartJobdate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      ExpertID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      EndJobdate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      AcademicGroup: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Remark: {
        allowNull: true,
        type: Sequelize.STRING(250),
      },
      Active: {
        allowNull: true,
        type: Sequelize.STRING(9),
      },
      FuncUnitID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      StatusID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Up_date: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      TypeMID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      TypePayMid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      TypeDC: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      Inscl: {
        allowNull: true,
        type: Sequelize.STRING(4),
      },
      CITIZEN: {
        allowNull: true,
        type: Sequelize.STRING(13),
      },
      NOBANK: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      TAXID: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      salary: {
        allowNull: true,
        type: Sequelize.DECIMAL,
      },
      EndUser: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      KeyDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      Unions: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      StatusMember: {
        allowNull: true,
        type: Sequelize.SMALLINT,
      },
      picperson: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },
      NurseCrNo: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Engprename: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      Engname: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },
      Engsurname: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },
      Email: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Fiveyear: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      Username: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      Password: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      UserKey: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      CodeCSMBS: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      FiveyearNurse: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      NolicensedClinic: {
        allowNull: true,
        type: Sequelize.STRING(50),
      },
      HN: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Director: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      PosLevelOLD: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      BloodGroup: {
        allowNull: true,
        type: Sequelize.STRING(5),
      },
      SendDev: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      HomePhone: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      MobilePhone: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      JobEducate: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      IP: {
        allowNull: true,
        type: Sequelize.STRING(15),
      },
    });

    await queryInterface.createTable("pname", {
      name: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      class: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      provis_code: {
        allowNull: true,
        type: Sequelize.STRING(5),
      },
      hos_guid: {
        allowNull: true,
        type: Sequelize.STRING(38),
      },
      hos_guid_ext: {
        allowNull: true,
        type: Sequelize.STRING(64),
      },
      main_age: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      marrystatus: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
    });

    await queryInterface.createTable("personnal_positions", {
      positionid: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      positionname: {
        allowNull: true,
        type: Sequelize.STRING(70),
      },
      posid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      ppk: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      nurse: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      commenttext: {
        allowNull: true,
        type: Sequelize.STRING(200),
      },
      officegroup: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      businessgroup: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      frameamount: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      shortname: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
    });

    await queryInterface.createTable("doctor_name", {
      doctorid: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      doctorname: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },
      doctorlastname: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },
      sex: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      doctorsalutation: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },
      doctorlicenseid: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      doctorspecialisr: {
        allowNull: true,
        type: Sequelize.STRING(3),
      },
      doctorlevel: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      doctordepart: {
        allowNull: true,
        type: Sequelize.STRING(5),
      },
      doctorlimit: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      flag_active: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      activestart: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      activeend: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      personid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      doctornameeng: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },
      doctorlastnameeng: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },
    });
    await queryInterface.createTable("app_user", {
      userid: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      blobpsw1: {
        allowNull: true,
        type: Sequelize.BLOB,
      },
      blobpsw2: {
        allowNull: true,
        type: Sequelize.BLOB,
      },
      rightlevel: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      careuserid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      personid: {
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
      createdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      createuserid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      editdatetime: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      edituserid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      editlogid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      active: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      logext: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
    });
    await queryInterface.createTable("app_username", {
      username: {
        allowNull: true,
        unique: true,
        type: Sequelize.STRING,
      },
      userid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      userdesc: {
        allowNull: true,
        type: Sequelize.STRING(40),
      },
      hash1: {
        allowNull: true,
        type: Sequelize.STRING(40),
      },
      hash2: {
        allowNull: true,
        type: Sequelize.STRING(40),
      },
    });

    await queryInterface.createTable("app_group", {
      id: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      groupname: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      active: {
        allowNull: true,
        type: Sequelize.STRING(1),
      },
      edituserid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      userlogid: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
    });
    await queryInterface.createTable("app_position", {
      positionID: {
        allowNull: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      positionname: {
        allowNull: true,
        type: Sequelize.STRING(70),
      },
      posID: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      PPK: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Nurse: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      comment: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      officegroup: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      Businessgroup: {
        allowNull: true,
        type: Sequelize.TINYINT,
      },
      FrameAmount: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Shortname: {
        allowNull: true,
        type: Sequelize.STRING(100),
      },
      JobDesc: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      Educate: {
        allowNull: true,
        type: Sequelize.STRING(10),
      },
      UserKey: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      KeyDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      UptoDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("app_person");
    await queryInterface.dropTable("pname");
    await queryInterface.dropTable("personnal_positions");
    await queryInterface.dropTable("doctor_name");
    await queryInterface.dropTable("app_user");
    await queryInterface.dropTable("app_username");
  },
};
