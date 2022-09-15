const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const { getCompliment,
        getFortune,
        getLetter,
        getNumber, 
        getColor
} = require('./controller')

app.get(`/api/compliment`, getCompliment);

app.get(`/api/fortune`, getFortune);

app.get(`/api/letter`, getLetter);

app.get(`/api/number`, getNumber);

app.get(`/api/color`, getColor);

app.listen(4000, () => console.log("Server running on 4000"));
