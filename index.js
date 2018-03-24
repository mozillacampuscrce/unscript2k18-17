
require('dotenv').config();

const PORT = process.env.PORT;

const express = require('express');
const app = express();

require('./src/init')(app);

app.get('/', (req, res) => {
	res.json({
		hello: 'world',
	});
});

app.use((req, res) => {});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
