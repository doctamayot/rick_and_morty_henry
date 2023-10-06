const {DataTypes } = require('sequelize')

module.exports =(sequelize) =>{
    const Favorites = sequelize.define("Favorites",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
        status:{
            type:DataTypes.ENUM("Alive", "Dead", "unknown"),
            allowNull:false,
            
        },
        species:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
        status:{
            type:DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
            allowNull:false,
            
        },
        origin:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
        image:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
    })
}