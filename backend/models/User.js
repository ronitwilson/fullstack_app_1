module.exports = (sequelize, datatype) => {
    const user = sequelize.define('User', {
        email: {
            type: datatype.STRING,
            unique:true
        },
        password: datatype.STRING
    })
    return user
}


// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('User', {
//       username: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//       },
//       // Add more attributes as needed
//     });
  
//     // Optional: Define associations here
//     // User.associate = (models) => {
//     //   // Define associations here
//     // };
  
//     return User;
//   };