require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
const opiskelijaRoutes = require('./routes/opiskelijaRoutes');
app.use('/api/opiskelijat', opiskelijaRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Opintorekisteri API toimii!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});