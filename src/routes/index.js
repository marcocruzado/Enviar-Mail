const { Router }= require('express');
const nodemailer = require('nodemailer');
const router = Router();

//loq ue haremos aquie es configurar cosas que ya cuando tengamos un servicio de hodting lo podamos implementar solo lo vamos a poner con nombres ente corcjetespara poder mas adelante cambiarlo ESTAMOS HACIEDO UNA APLICACION DE ENVIAR CORREOS CON NODEMAILER



router.post('/enviar-correo',async (req,res)=>{
const {nombre,email,telefono,mensaje }= req.body;
//con esto estamos hacienodo que el envio de correos sea de la forma que querramos
contentHTML=`
        <h1>Informacion del ususario</h1>
        <ul>
            <li>Nombre:${nombre}</li>
            <li>Email:${email}</li>
            <li>Telefono:${telefono}</li>
        </ul>
        <p>  Mensaje:${mensaje}</p>
`;

//ESTO ES LA CONFIGURACION DE ADONDE LO ENVIAREMOS PERO AUN FALTA EL QUE ENVIAREMOS!!!!!
//primero con nodemailer tenemos que crear un transport o un transporte que nos ayudara a redirigir el email
const trasporter = nodemailer.createTransport({
    host:'mail.fazttech.xyz',//[aca ponemos el mail que nos sale al crear un mail en el cpanel]
    port: 26, //aca es el puerto dde mensajes de tu hosting entramos para averiuarlo poniendo godaaddy smtp,config y ahi nos saldra toda la info
    auth :{
        user: 'test@fazttech.xyz',//aca va el usuari osea el correo que creamos a quien se le va a remitir el correo
        pass: 'contraseña' //esta es la contraseña del correo que crearas esto solo es prueba
    } ,
    tls:{
        rejecUnautorized:false
    }
});

const info = await trasporter.sendMail({
    from:" 'Fazttech server' <test@fazttech.xyz>", 
    to: "marcoantoniocruzado@gmail.com", 
    subject:"mensaje enviado desde el formulario",
    html:contentHTML
});

console.log('mensaje a sido enviado',info.messageId);

    res.redirect('/satifactorio.html');
});




module.exports =router;