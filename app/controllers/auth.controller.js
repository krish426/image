var User = require('./../models/user.model');
var jwt = require('jsonwebtoken');
var config = require('./../../config');
var bcrypt = require('bcryptjs');


module.exports = {

    registerUser: ((req, res) => {

        var params = req.body;

        var passwordHash = bcrypt.hashSync(params.password, 8);

        var _user = new User({
            firstName: params.firstName,
            lastName: params.lastName,
            email: params.email,
            password: passwordHash,
            status: true,
            acceptTerms: params.acceptTerms,
        });

        _user.save((error, result) => {
            if (error) {
                res.json({ status: false, error: error, message: 'error : User registation faild' });
            } else {
                res.json({ status: true, data: result, message: 'User has been registered successfully.' });
            };
        });

    }),

    loginUser: ((req, res) => {

        var params = req.body;

        User.findOne({
            email: params.email
        }, function (error, user) {

            if (error) {
                res.json({ status: false, error: error, message: 'Invalid username / password.' });
            }

            if (!user) {
                res.json({ status: false, data: null, message: 'User not found.' });
            } else {
                var passwordIsValid = bcrypt.compareSync(params.password, user.password);

                if (!passwordIsValid) {
                    res.json({ status: false, data: null, message: 'Authentication failed. Wrong password.' });
                } else {
                    const payload = { email: user.email };

                    var token = jwt.sign(payload, config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    });

                    let data = {
                        token: token,
                        user: user
                    };

                    res.json({ status: true, data: data, message: 'Login successfully.' });

                };

            };

        });

    })


}