require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routes
const opiskelijaRoutes = require('./routes/opiskelijaRoutes');
const opintojaksoRoutes = require('./routes/opintojaksoRoutes');
const arviointiRoutes = require('./routes/arviointiRoutes');

app.use('/api/opiskelijat', opiskelijaRoutes);
app.use('/api/opintojaksot', opintojaksoRoutes);
app.use('/api/arvioinnit', arviointiRoutes);

// Test route
app.get('/', (req, res) => {
    res.send('Opintorekisteri API toimii!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
