const mongoose = require('mongoose');

const connectionString = "mongodb+srv://milidev:VEDmili@cluster0.cpr3mwp.mongodb.net/workaway?retryWrites=true&w=majority";

mongoose.connect(connectionString)
.then(() => {
    console.log('Conexion lista');
}).catch(err => {
    console.log(err);
})


