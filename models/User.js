const connection = require('../db/config');

const User = {};

User.create = (userInfo, callback) => {
    connection.query(
        `INSERT INTO user (email, passwordHash)
            VALUES (
                ?,
                SHA2(?)
            )`,
        [userInfo.email, userInfo.password],
        (err, results, fields) =>
                callback(err, results, fields)
    );
}

module.exports = User;