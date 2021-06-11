/*
//YET TO BE DONE MANY CHANGES AND PUT IN GITHUB
//CHANGES->1.TRY AND CATCH FOR WRONG CITY Name
//2.USING BOOTSTRAP ADD BACKGROUND COLR AND SHOWING FORM AND RESULT ON SAME PAGE

const express=require("express");
const app=express();
const jsdom = require("jsdom");


const http=require("http");   //for using external links like api use "http"

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});




app.post("/",function(req,res){
  const qry=req.body.CityName;
  const apiky="803e711d5f261f6a66f00335f85864eb";
  const ut="metric";
  var url="http://api.openweathermap.org/data/2.5/weather?q="+qry+"&appid="+apiky+"&units="+ut;

  http.get(url,function(response){
  //  console.log(response);
    response.on("data",function(data){
        const weatherData=JSON.parse(data);    //parsing the JSON data into javascript object
try{
    const tmp=weatherData.main.temp;
    const desc=weatherData.weather[0].description;
                                                        // res.send("<h1>temperature of "+qry + " is "+ tmp + " degree Celcius.</h1>")
   const icn=weatherData.weather[0].icon;
   const imgurl="http://openweathermap.org/img/wn/" +icn+"@2x.png";
   //console.log(tmp);
   // console.log(desc);
   // console.log(imgurl);
  console.log("we are in try section");

  /*res.write("<h1>temperature of "+ qry +" is "+ tmp + " degree Celcius.</h1>");
  //res.write("<h1>Weather description of "+qry +" is "+ desc + ".</h1>");
  //res.write("<img src="+ imgurl+">");
  //res.sendFile(__dirname+"/success.html");*/
/*
  res.send( `<!doctype html>
            <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <meta name="description" content="">
                <meta name="author" content="">
                <title>WeatherNow - Check the current Weather in your City</title>
                <!-- Bootstrap core CSS -->
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <!-- Custom styles for this template -->
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet">
                <link href="css/style.css" rel="stylesheet">
              </head>
              <body>
                <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h1 class="display-4">Temperature in ${qry} is ${tmp}</h1>
                <p class="lead"><img src="${imageurl}"> ${desc}</p>
              </div>
              <form action="/return" method="post">
            <button class="btn btn-lg btn-info" type="submit" name="button"> Search Another City</button>
            </form>
              </div>
              </body>
            </html>`
  );
}
catch(err){
//  res.sendFile(__dirname+"/failure.html");
 console.log("we are in catch section");
res.send(`<!doctype html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <meta name="description" content="">
              <meta name="author" content="">
              <title>WeatherNow - Check the current Weather in your City</title>
              <!-- Bootstrap core CSS -->
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
              <!-- Custom styles for this template -->
              <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet">
              <link href="css/style.css" rel="stylesheet">
            </head>
            <body>
              <div class="jumbotron jumbotron-fluid">
              <div class="container">
              <h1 class="display-4">OOPS</h1>
              <p class="lead">Sorry! Weather Data not available for the location you specified. Try another Location.</p>
            </div>
            <form action="/return" method="post">
          <button class="btn btn-lg btn-info" type="submit" name="button"> Search Another City</button>
          </form>
            </div>
            </body>
          </html>`);
}
    });

  });
});
app.post("/return",function(req,res){
  res.redirect("/");
});
app.listen(3000,function(req,res){
  console.log("Server is running on port is 3000");
});*/
const express = require("express");
const https = require("https");
//const bodyParser = require("body-parser");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  var cityName = req.body.cityName;
  const apiKey = "803e711d5f261f6a66f00335f85864eb";
  const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey+"&units=metric";
  https.get(url, function(response){
    response.on("data", function(data){
      const weatherObject = JSON.parse(data);




        if(weatherObject.cod == 200) {
          const temp = weatherObject.main.temp;
          const description = weatherObject.weather[0].description;
          const icon = weatherObject.weather[0].icon;
          const iconPath = "http://openweathermap.org/img/wn/"+icon+"@2x.png";
         console.log(temp);
         console.log(description);
         console.log(icon);

          res.send(`<!doctype html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <meta name="description" content="">
              <meta name="author" content="">
              <title>WeatherNow - Check the current Weather in your City</title>
              <!-- Bootstrap core CSS -->
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
              <!-- Custom styles for this template -->
              <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet">
              <link href="css/style.css" rel="stylesheet">
            </head>
            <body>
              <div class="jumbotron jumbotron-fluid">
              <div class="container">

              <h1 class="display-4">Temperature in ${cityName} is ${temp}°C</h1>
              <p class="lead"><img src="${iconPath}"> ${description.toUpperCase()}</p>
            </div>
            <form action="/return" method="post">
          <button class="btn btn-lg btn-info" type="submit" name="button"> Search Another City</button>
          </form>
            </body>

          </html>`);
            }

        else {
          res.send(`<!doctype html>
          <html lang="en">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
              <meta name="description" content="">
              <meta name="author" content="">
              <title>WeatherNow - Check the current Weather in your City</title>
              <!-- Bootstrap core CSS -->
              <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
              <!-- Custom styles for this template -->
              <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet">
              <link href="css/style.css" rel="stylesheet">
            </head>
            <body>
              <div class="jumbotron jumbotron-fluid">
              <div class="container">
              <h1 class="display-4">OOPS</h1>
              <p class="lead">Sorry! Weather Data not available for the location you specified. Try another Location.</p>
            </div>
            <form action="/return" method="post">
          <button class="btn btn-lg btn-info" type="submit" name="button"> Search Another City</button>
          </form>
            </div>
            </body>
          </html>`);
        }



    });
  })
})

app.post("/return", function(req, res){
  res.redirect("/");
})

app.listen(process.env.PORT || 3000, function() {
  console.log("Server Started at Port 3000");
})
