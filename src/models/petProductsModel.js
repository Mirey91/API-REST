
const petProductsModel = (sequelize, type) => {
    return sequelize.define('pet_products', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        tag: type.STRING
    },{
        timestamps: false
    })
};

module.exports = petProductsModel;