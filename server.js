const express = require("express");
const openAI = require("openai");

const app = express();
const port = 3000;

const client = new openAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());
app.use(express.static("."));

app.post("/preguntar", async (req,res) => {
try {
   const mensaje = req.body.mensaje;

   const respuesta = await
client.responses.create({
       model:"gpt-5.6",
       input:mensaje
     });
   
      rest.json({respuesta:respuesta.output_text});
    }catch(error) {
      console.error(error);
      res.status(500).json({error:"No se puede obtener una repuesta"});
    }
});

app.listen(port,() =>{
  console.log(`Mi asistente esta funcionando en http://localhost:${port}`);
});