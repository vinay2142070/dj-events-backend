module.exports = ({ env }) => ({
    url: env('MY_HEROKU_URL'),
    admin: {
        auth: {
            secret: env("ADMIN_JWT_SECRET"),
        },

    }
    ,
    app: {
        keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
    },
});