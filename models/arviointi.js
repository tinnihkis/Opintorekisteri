const db = require("../config/db");

exports.getAll = (callback) => {
  db.query("SELECT * FROM Arviointi", callback);
};

exports.create = (data, callback) => {
  db.query(
    "INSERT INTO Arviointi (idopiskelija, idOpintojakso, Paivamaara, Arvosana) VALUES (?, ?, ?, ?)",
    [data.idopiskelija, data.idOpintojakso, data.Paivamaara, data.Arvosana],
    callback
  );
};

exports.update = (data, callback) => {
  db.query(
    "UPDATE Arviointi SET Arvosana = ?, Paivamaara = ? WHERE idopiskelija = ? AND idOpintojakso = ?",
    [data.Arvosana, data.Paivamaara, data.idopiskelija, data.idOpintojakso],
    callback
  );
};

exports.delete = (ids, callback) => {
  db.query(
    "DELETE FROM Arviointi WHERE idopiskelija = ? AND idOpintojakso = ?",
    [ids.idopiskelija, ids.idOpintojakso],
    callback
  );
};
