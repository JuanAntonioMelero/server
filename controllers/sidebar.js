const { response } = require('express');

const Sidebar = require('../models/sidebar');
const { generarJWT } = require('../helpers/jwt');


const getSideBar = async(req, res) => {

    const sidebar = await Sidebar.find({}, 'titulo url');

    res.json({
        //ok: true,
        sidebar
    });

}

const crearSideBar =async (req, res ) => {
    console.log(req.body);
    const { titulo, url } = req.body;
   
    try {

       

        const  sidebar = new Sidebar( req.body );
    
       
    
        // Guardar sidebar
        await sidebar.save();

      

        res.json({
            ok: true,
            
            sidebar
        });


    }
     catch (error) {
        console.log(error);
      //  res.status(500).json({
       //     ok: false,
        //    msg: 'Error inesperado... revisar logs'
        //});
    }


}








module.exports = {
    getSideBar,
    crearSideBar
}