module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Calon",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama: {
        type: DataTypes.STRING,
      },
      visi: {
        type: DataTypes.STRING,
      },
      misi: {
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
      tableName: "Calon",
    }
  );
  return Users;
};
