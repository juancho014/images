const express= require('express');
const app= express();
const morgan = require('morgan');
const path= require('path');
const multer= require('multer');


const exphbs= require('express-handlebars');
const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');

app.set('views', path.join(__dirname, 'views'))


const hbs = exphbs.create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  });

app.engine(".hbs", hbs.engine);
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req, file, cb,) => {
      console.log(file);
      cb(null, new Date().getTime() + path.extname(file.originalname));
  }
}) 
app.use(multer({storage}).single('image'));
app.use(morgan('dev'))

app.use(require('./routers/index.router'));

module.exports= app;