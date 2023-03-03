const Axios = require("axios")
const api = Axios.create({
    baseURL: 'https://api.gatewaybot.xyz/api/',
    headers: { 'Authorization': `Bearer e2tleTogImFlMzkxMTUzZDM2YTRlMGZiYzI3OTUwYzc2NzM4ZjVmIiwgdHlwZTogImZldGNoIiwgY2xpZW50OiAiZ2F0ZXdheWFwaSJ9` }
  });
  api.get("/get/stats")
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err);
    })