const express = require("express");
const app = express();

const fetch = require('node-fetch');

app.use(express.static("public"));

if (require.main === module) {
  app.listen(process.env.PORT || 8080, function() {
    console.info(`App listening on ${this.address().port}`);
  });
}

fetch('https://api.sportradar.us/mlb-t6/seasontd/2018/REG/leaders/statistics.json?api_key=jm9frdbhpz26zspgamqj394d')
.then(function(response){
    return response.json();
})
.then(function(json){
    console.log(json);
});

module.exports = app;