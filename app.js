const express = require('express');
const app = express();

//set express to use only file names excluding .ejs
app.set('view engine', 'ejs');

//set express to use css file
app.use(express.static(__dirname + 'assets'));

// call all the root folders
app.use(express.static('assets'));
app.use(express.static('assets/css'));
app.use(express.static('assets/fonts'));
app.use(express.static('assets/images'));
app.use(express.static('assets/js'));
app.use(express.static('assets/sass'));
app.use(express.static('assets/sass/base'));
app.use(express.static('assets/sass/components'));
app.use(express.static('assets/sass/layout'));
app.use(express.static('assets/sass/libs'));


//root route
app.get("/", function (req, res){
    res.render("index");
})

//Server
var server = app.listen(process.env.PORT || 5000, function(){
    var port = server.address().port;
    console.log("Express is working on port " + port);
});