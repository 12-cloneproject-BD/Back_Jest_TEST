"use strict";
const { Model } = require("sequelize");
const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users, {
        targetKey: "userIdx", // Users 모델의 userId 컬럼을
        foreignKey: "userIdx", // 현재 모델의 userId가 외래키로 가진다.
        onDelete: "CASCADE",
      });

      this.hasMany(models.ViewHistory, {
        sourceKey: "profileIdx",
        foreignKey: "profileIdx",
      });
      this.hasMany(models.Like, {
        sourceKey: "profileIdx",
        foreignKey: "profileIdx",
      });
      this.hasMany(models.Save, {
        sourceKey: "profileIdx",
        foreignKey: "profileIdx",
      });
      this.hasMany(models.Alarm, {
        sourceKey: "profileIdx",
        foreignKey: "profileIdx",
      });
      this.hasMany(models.ViewRank, {
        sourceKey: "profileIdx",
        foreignKey: "profileIdx",
      });
      this.hasMany(models.LikeRank, {
        sourceKey: "profileIdx",
        foreignKey: "profileIdx",
      });
    }
  }
  Profile.init(
    {
      profileIdx: {
        allowNull: false, // NOT NULL
        primaryKey: true, // Primary Key (기본키)
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      userIdx: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      profieName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      profileImgUrl: {
        type: DataTypes.STRING,
      },
      viewLimit: {
        allowNull: false,
        type: DataTypes.STRING(8),
      },
      status: {
        allowNull: false,
        type: DataTypes.STRING(8),
      },
      createdAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        allowNull: false, // NOT NULL
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Profile",
    }
  );
  return Profile;
};
