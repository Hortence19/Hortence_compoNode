require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose"); // Using Node.js `require()`
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Swagger configuration
const swaggerOPtion = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Registrations management",
      version: "1.0.0",
      description:
        "API documentation for the Registrations management application",
      contact: {
        name: "Michelle",
        email: "hounkpatinmichelle@gmail.com",
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"], // path to api the doc
};
const swaggerDocs = swaggerJsDoc(swaggerOPtion); // Generate swagger documatation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // serve swagger ui at /api-docs
const userRoute = require("./routers/user");
const bookRoute = require("./routers/books")
const reviewRoute = require("./routers/reviews")

mongoose
  .connect(
    process.env.DB_URL
    /*  {
        userNewUrlParser: true, //  option de connexion de base par défaut
        userUnifiedTopology: true
    } */
  )
  .then(() => console.log("Connected!")); //connexion a la bdd

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extented: true }));

app.use('/user',userRoute);
app.use('/book',bookRoute);
app.use('/review',reviewRoute);
module.exports = app;