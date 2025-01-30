const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Noctua - API",
      version: "1.0.0",
      description: "Documentação da API do Noctua",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desenvolvimento",
      },
    ],
  },
  apis: ["./routes/*.js", "./controllers/*.js"], // Caminho para os arquivos que contêm a documentação dos endpoints
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Rota para baixar o JSON do Swagger
  app.get("/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  // Configurar Swagger UI e adicionar o link para baixar o JSON
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      swaggerOptions: {
        urls: [
          {
            url: "http://localhost:3000/swagger.json",
            name: "Especificação OpenAPI",
          },
        ],
      },
    }),
  );

  console.log("📄 Swagger disponível em: http://localhost:3000/api-docs");
};

module.exports = swaggerDocs;
