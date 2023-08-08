const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PORT;

const cors = require('cors');
app.use(cors({
    origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}));

//require('./db/conn');
//const Blog = require('./models/blogSchema');

app.use(express.json());
app.use(require('./router/auth')); 


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})