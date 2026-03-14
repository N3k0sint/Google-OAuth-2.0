const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    // In a real application, you would save the user to a database here.
    // For this demo, we just pass the profile object.
    return done(null, profile);
  }
));

// Serialize user data to the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user data from the session
passport.deserializeUser((user, done) => {
  done(null, user);
});
