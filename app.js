const express = require('express');
const https = require('https');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.use("/assets", express.static('assets'));
app.use("/img", express.static('img'));
app.use("/js", express.static('js'));
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });

app.post("/", function (req, res) {
  let formName = req.body.f1;
  let formEmail = req.body.f2;
  let formText = req.body.f3;
  console.log(req.body.f1, req.body.f2, req.body.f3,);
  res.render("list", {formName : formName, formEmail : formEmail, formText : formText})
})


app.listen(process.env.PORT || 3000, function() {
    console.log('Svr running');
});

