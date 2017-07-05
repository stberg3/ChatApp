const passport = require('passport');
const LocalStrategy = require('passport-local');

app.get('/profile', passport.authenticateMiddleware(), renderProfile);

const user = {
  username: 'test-user',
  password: 'test-password',
  id: 1
};

passport.use(new LocalStrategy(
  function(username, password, done){
    findUser(username, function(err, user){
      if(err){
        return done(err);
      }
      else if(!user || (password != user.password)){
        return done(null, false);
      } else {
        return done(null, user);
      }

    })
  }
));
