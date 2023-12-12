module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Vote",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      vote1: {
        type: DataTypes.STRING,
      },
      vote2: {
        type: DataTypes.STRING,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "Vote",
    }
  );
  return Users;
};
