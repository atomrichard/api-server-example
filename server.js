const express = require('express');
const dotEnv = require('dotenv');
const cors = require('cors');

const dbConection = require('./database/connection');

dotEnv.config();

const app = express();

//db connection
dbConection();

//cors needed
app.use(cors());

//request payload middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/api/v1/nonUserObject', require('./routes/nonUserObjectRoutes'));
app.use('/api/v1/user', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is on ${PORT}`)
});

app.use(function (err, req, res, next) {
	console.error(err.stack)
	res.status(500).send({
		status: 500,
		message: err.message,
		body: {}
	})
});