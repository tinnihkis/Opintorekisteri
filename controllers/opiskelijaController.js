const Opiskelija = require('../models/opiskelija');

exports.getOpiskelijat = async (req, res) => {
    try {
        const [rows] = await Opiskelija.getAllOpiskelijat();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addOpiskelija = async (req, res) => {
    const { nimi, email } = req.body;
    try {
        await Opiskelija.createOpiskelija(nimi, email);
        res.json({ message: 'Opiskelija lisätty!' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};