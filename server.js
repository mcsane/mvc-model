const express = require('express');
const errorHandler = require('./middleware/errorMiddleware');
const notFoundHandler = require('./middleware/notFoundMiddleware');

const app = express();

app.use(express.json());

// Tours API
app.use('/tours', require('./routes/toursRoutes'));

// Users API
app.use('/users', require('./routes/usersRoutes'));

// Services API
app.use('/services', require('./routes/servicesRoutes'));

const PORT = 5000;

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));