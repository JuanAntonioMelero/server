/*
    Ruta: /api/sidebars

*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {  getSideBar,crearSideBar } = require('../controllers/sidebar');
const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();


router.get( '/', 
//validarJWT , 
getSideBar );

router.post( '/',
    [
        check('titulo', 'El nombre es obligatorio').not().isEmpty(),
        check('url', 'El password es obligatorio').not().isEmpty(),
       
        //validarCampos,
    ], 
    crearSideBar 
);




module.exports = router;