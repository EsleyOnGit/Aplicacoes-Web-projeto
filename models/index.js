const dbConfig = require('../config/dbConfig.js')

const {Sequelize, Datatypes} = require('sequelize')

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorAliases: false,

        pool:{
            max: dbConfig.pool.max,
            min: dbConfig.pool.max,
            acquire: dbConfig.pool.max,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(() =>{
    console.log('conectado')
})
.catch(err =>{
    console.log('erro' + err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.products = require('./productModel.js')(sequelize, Datatypes)
db.reviews = require('./reviewModel.js')(sequelize, Datatypes)
db.sequelize.sync({force: false})
.then(() =>{
    console.log('Sim, resincronização feita com sucesso!')
})

//1 to many relation
db.products.hasMany(db.reviews, {
    foreignKey: 'product_id',
    as: 'reviews'
})

db.reviews.belongsTo(db.products, {
    foreignKey: 'products_id',
    as: 'product'
})

module.exports = db