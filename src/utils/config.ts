export default () => ({
  PROJECT_NAME: 'FLIP',

  PORT: parseInt(process.env.PORT, 10) || 3000,

  AWS_REGION: process.env.AWS_REGION ?? 'us-east-1',

  DB_SECRET_NAME: 'flip/es/dbconfig',

  SQS_SECRET_NAME: 'flip/es/sqs',
});
