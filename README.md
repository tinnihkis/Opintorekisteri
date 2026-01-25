# "Opintorekisteri" -tietokanta

![ER_KAAVIO](./ER_KAAVIO.png)

**Taulut:**
- **Opiskelija** (idopiskelija, Etunimi, Sukunimi, Osoite, Luokkatunnus)
- **Opintojakso** (idOpintojakso, Nimi, Laajuus, Koodi)
- **Arviointi** (idArviointi, Paivamaara, Arvosana, idOpiskelija, idOpintojakso) idOpiskelija ja idOpintojakso ovat foreign key:tä, eli viittaavat toiseen tauluun(opiskelija ja opintojakso). Monesta moneen-suhde.

--- 
Yleiskuvaus

Opintorekisteri on Node.js / Express / MySQL -pohjainen REST-API-projekti, jonka tarkoituksena on hallinnoida opiskelijoita, opintojaksoja ja arviointeja. Projekti noudattaa MVC-arkkitehtuuria ja mahdollistaa kaikkien tietokantataulujen CRUD-operaatiot REST-rajapinnan kautta.

Projektissa ei ole käyttöliittymää, vaan rajapintaa testataan Postman-työkalulla. Tietokanta on toteutettu MySQL:llä ja se ajetaan UniServer-ympäristössä. Sekä tietokanta että sovellus sijaitsevat paikallisella koneella.

### MVC-rakenne

- **Model:**  
  Jokaiselle taululle (Opiskelija, Opintojakso, Arviointi) on oma model-tiedosto. Model sisältää SQL-kyselyt CRUD-operaatioille ja mahdolliset Stored Procedure -kutsut.

- **Controller:**  
  Controller käsittelee HTTP-pyynnöt, välittää datan modelille ja palauttaa vastauksen JSON-muodossa.   - **CREATE:** lisää uusi tietue
  - **READ:** hakee tietueet
  - **UPDATE:** päivittää tietueen id:n perusteella
  - **DELETE:** poistaa tietueen id:n perusteella

- **Routes:**  
  Routes määrittelee URL-polut ja yhdistää ne oikeaan controllerin funktioon.

---
## Yhteenveto

- Projekti opetti relaatiotietokannan suunnittelua, ER-kaavion laatimista sekä REST-API:n toteutusta Node.js-ympäristössä MVC-arkkitehtuuria hyödyntäen. Lisäksi projektissa harjoiteltiin CRUD-operaatioiden testaamista Postmanilla ja MySQL Stored Procedure -aliohjelmien käyttöä