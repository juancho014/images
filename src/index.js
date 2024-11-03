const app= require('./server')
const PORT= 5000;
require('./database')




app.listen(PORT,()=>{console.log(`funcionando en el puerto ${PORT}`)});