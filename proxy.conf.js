const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target : "http://localhost:9292",
    secure: false
  }
]
module.exports = PROXY_CONFIG;
