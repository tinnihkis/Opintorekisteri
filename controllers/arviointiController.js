const db = require('../config/db'); // MySQL-yhteys
const Arviointi = require('../models/arviointi');

// CREATE
exports.create = async (req, res) => {
    try {
        const { opiskelija_id, opintojakso_id, arvosana } = req.body;
        await Arviointi.createArviointi(opiskelija_id, opintojakso_id, arvosana);
        res.json({ message: "Arviointi lisätty" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// READ
exports.getAll = async (req, res) => {
    try {
        const [rows] = await Arviointi.getAllArvioinnit();
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// UPDATE
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { arvosana } = req.body;
        await Arviointi.updateArviointi(id, arvosana);
        res.json({ message: "Arviointi päivitetty" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// DELETE
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await Arviointi.deleteArviointi(id);
        res.json({ message: "Arviointi poistettu" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
// GET: Opiskelijan keskiarvo
exports.getKeskiarvo = async (req, res) => {
    try {
        const { id } = req.params; // id opiskelijalle URL:sta
        const [rows] = await db.query("CALL GetOpiskelijanKeskiarvo(?)", [id]);
        res.json(rows[0][0]); // palauttaa esim. { keskiarvo: 4.5 }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
