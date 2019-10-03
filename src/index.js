const express= require('express');
const app = express();
//el modulo patj me ayuda a trabajar con lasa carpetas
const path = require('path');


//esto sirve para que mi sercidoor entioenda los sdatos de mi formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(require('./routes/index'));

//con esta configuracion el navegador podra utilizar todos los archivos de esta ruta
app.use(express.static(path.join(__dirname,'public'))) ;

//tengo que crear mi ruta enviar-correo



app.listen(3000,()=>{
    console.log("servidor en el puertop 3000");
})
