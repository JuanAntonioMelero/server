const { Schema, model } = require('mongoose');


const SideBarSchema = Schema({

    titulo: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    
    }
});


SideBarSchema.method('toJSON', function() {
    const { ...object } = this.toObject();
   
    return object;
})



module.exports = model( 'SideBar', SideBarSchema );
