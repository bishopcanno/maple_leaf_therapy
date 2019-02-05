const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const bodyParser = require('body-parser');
// const routes = require("./routes");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/maple-leaf-theraputic', {useNewUrlParser: true});
const connecton = mongoose.connection;

connecton.once('open', () => {
  console.log("MongoDB database conncection established successfully!")
})

// require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});