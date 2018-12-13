module.exports = {
  hrPool: {
    user: "dairy", //process.env.HR_USER,
    password: "1234", //process.env.HR_PASSWORD,
    connectString: process.env.HR_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
}
