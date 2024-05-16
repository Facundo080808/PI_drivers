const { DataTypes } = require('sequelize');





module.exports = (sequelize) => {
  
  const drivers = sequelize.define('drivers', {
    id :{
      primaryKey: true,
      type : DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type : DataTypes.STRING,
      allowNull : false
    },
    image :{
      type : DataTypes.STRING,  
    },
    nacionalidad : {
      type : DataTypes.STRING,
      allowNull : false
    },
    fechadenacimiento : {
      type : DataTypes.DATE,
      allowNull: false
    },
    created : {
      type : DataTypes.BOOLEAN,
      defaultValue : true
    }
  },{timestamps : false});
  return drivers;
};

