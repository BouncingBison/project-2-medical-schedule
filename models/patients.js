module.exports = function(sequelize, DataTypes) {
    var Patient = sequelize.define("Patient", {
        // first name 
        first: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // last name
        last: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // condition
        // condition: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // gender: {
        //     type: DataTypes.ENUM,
        // values: ['Male', 'Female', 'Non-Binary'],
        //     allowNull: false
        // },
        admitted: {
            type: DataTypes.DATE
        }
        // this will be patientID in the future
    });
    return Patient;
};