module.exports = (sequelize, DataTypes) =>{
    const Review = sequelize.define("review", {
        rating: {
            type: DataTypes.INTERGER
        },
        description:{
            type: DataTypes.TEXT
        }
    })
    
    return Review
}