//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const titles =[];
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const posts = [];
const contents =[];
const app = express();
var _ = require('lodash');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/" ,function(req,res){
  
  
  
    res.render("home" , { homePageContent : homeStartingContent, posts : posts   });
  
    
 
           

  

     

    
  
})

app.get("/about" ,function(req,res){
  res.render("about" ,{aboutPageContent : aboutContent})
})

app.get("/contact" ,function(req,res){
  res.render("contact" , {contactPageContent: contactContent})
})

app.get("/compose" , function(req,res){
  
  res.render("compose" );
})

app.get("/posts/:topic" , function(req,res){
 
let p = _.lowerCase(req.params.topic);

posts.forEach(function(post){
  const storedTitle = _.lowerCase(post.title);
  const storedContent = post.content;
  if ( storedTitle === p ){
  
   res.render("post" , { sTitle : storedTitle , sContent :storedContent});
  
}
})




});

app.post("/compose" , function(req,res){

  let post = {
  title: req.body.composeTitle,
  content: req.body.composePost
};
posts.push(post);
titles.push(post.title);
contents.push(post.content);
res.redirect("/");

});






app.listen(3000, function() {
  console.log("Server started on port 3000");
});
// everything fine fornow