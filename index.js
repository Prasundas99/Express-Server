const express = require('express')
const app = express()

app.use(express.static('public'))

//Server Listen
const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
     console.log(`Server is listening on port ${PORT}`);
});