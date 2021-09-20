const HomeRouter = require('./HomeRoute')
const ProfileRouter = require('./ProfilRoute')
const LoginRouter = require('./LoginRoute')
const RegisterRouter = require('./RegisterRoute')

module.exports = (app) => {
    app.use(HomeRouter.path, HomeRouter.router);
    app.use(ProfileRouter.path, ProfileRouter.router);
    app.use(LoginRouter.path, LoginRouter.router);
    app.use(RegisterRouter.path, RegisterRouter.router);
}
