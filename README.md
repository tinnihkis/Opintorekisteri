# "Opintorekisteri" -tietokanta
![ER_KAAVIO](./ER_KAAVIO.png)

**Taulut:**
- **Opiskelija** (idopiskelija, Etunimi, Sukunimi, Osoite, Luokkatunnus)
- **Opintojakso** (idOpintojakso, Nimi, Laajuus, Koodi)
- **Arviointi** (idArviointi, Paivamaara, Arvosana, idOpiskelija, idOpintojakso)

## REST API:a ja MVC-arkkitehtuuria käyttävä MySQL/Node/Express -sovellus ilman käyttöliittymää, jossa taulujen CRUD-operaatiot testataan Postman avulla
