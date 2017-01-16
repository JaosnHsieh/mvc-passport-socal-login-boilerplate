# mvc-passport-socal-login-boilerplate
a Express MVC (MySQL,Handlebars) added facebook,github,google social login(passport) , actually a memo for myself

Generated it with yo express generator https://github.com/petecoop/generator-express
social login using Passport http://passportjs.org/

Refer to :
http://mherman.org/blog/2015/09/26/social-authentication-in-node-dot-js-with-passport/#.WHyzElV94b7
https://github.com/passport/express-4.x-local-example
https://github.com/jaredhanson/passport-github
https://github.com/mstade/passport-google-oauth2
https://github.com/jaredhanson/passport-facebook

#Setup

```
git clone https://github.com/JaosnHsieh/mvc-passport-socal-login-boilerplate.git
cd mvc-passport-socal-login-boilerplate
npm install
```

#replace MySQL config to your MYSQL server
config/config.js

#replace your own socail OAuth ClientID & SecretKey & CallbackURL
 (ids.js format: https://gist.github.com/JaosnHsieh/811a889e1c758f297a046a274b511f63 )
```
app/auth/ids.js
```

```
grunt
```

# Test login over http://localhost:3000/login
local login default username: jason , password: 1234
if you login successfully , yor will redirect to the root path then get social account info.

# Change social account info scope 
app/controllers/login.js
such as: router.get('/auth/facebook', passportGoogle.authenticate('facebook',  
# { scope: ['email'] }));

check above links for more details.

# Change query/create Users logic ( nomarlly created a user in the database in but I haven't done this )
go
```
app/auth/facebook.js
app/auth/google.js
app/auth/github.js
app/auth/local.js
```
then try db.User in your logic

