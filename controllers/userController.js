const User = require('../models/User');

module.exports = {

    getUser: function(params) {
        return new Promise((resolve, reject) => {

            User.find(params)
                .then(user => resolve(user))
                .catch(error => reject(error));

        });

    }

}