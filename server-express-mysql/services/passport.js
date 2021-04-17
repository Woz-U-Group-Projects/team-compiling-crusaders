var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var models = require('./models');

passport.use(
    'local',
    new LocalStrategy((username, password, done) => {
        models.users.fineOne({where: { username: username } })
        .then(user => {
            if (!user) {
                return done(null, false, { message: 'Incorrect username'});
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password'});
            }
            return done(null, user);
        })
        .catch(err => {
            if (err) { return done(err); }
        });
    })
);

passport.serializeUser((user, callback) => {
    callback(null, user.iduser);
});

passport.deserializeUser((id, callback) => {
    models.users.findByPk(id)
    .then(user =>  callback(null, user))
    .catch(err => callback(err));
});

module.exports = passport;