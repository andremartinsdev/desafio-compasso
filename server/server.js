const express = require('express');
// const GitHubStrategy = require('passport-github2').Strategy;
// const passport = require('passport');
// const session = require('express-session');
const cors = require("cors")
const app = express();
const axios = require('axios')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

const user = {
  client_id: '51a8b065ddb54a72b422',
  redirect: 'http://localhost:3002/auth/redirect',
  path: '/',
  secret: "a1e347d93a178e86486d9baeaf3bfdb060f214e3",
 

}

async function getUserInformation() {
  var code = window.location.href.match(/\?code=(.*)/)[1];
  const a = await axios.post(`https://github.com/login/oauth/access_token?client_id=${user.client_id}&redirect_uri=${user.redirect}&client_secret=${user.secret}&code=${code}`)
  console.log(a)
}
app.get('/auth/redirect', async (req, res) => {
  const { code } = req.query
  user.code = code
  return res.redirect('http://localhost:3000/Home')
})
app.get('/auth/token', async (req, res) => {
  console.log("olaaaaaaaaaaaaa")
  const { data } = await axios.post(`https://github.com/login/oauth/access_token?client_id=${user.client_id}&redirect_uri=${user.redirect}&client_secret=${user.secret}&code=${user.code}`)
  return res.json({
    token: data.split("&")[0].split("=")[1]
  })
})


app.listen(3002, () => console.log('server is running on port 3002'));