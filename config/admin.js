module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9f5cc4dd3daa7ca3ff63e680c4e65aa8'),
  },
});
