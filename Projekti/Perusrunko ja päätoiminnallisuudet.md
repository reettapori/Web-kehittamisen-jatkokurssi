# Vaihe II – Perusrunko ja päätoiminnallisuudet

Projektin toisessa vaiheessa määritellään projektin aiheen, liikuntapäiväkirjan, perusrunko ja päätoiminnallisuudet sekä kuvataan yksityiskohtaisesti, miten eri kerrokset ja toiminnot on toteutettu. Lähtökohtana projektille on toiminut ennen projektin aloitusta laadittu suunnittelu- ja määrittelydokumentti.

## 1. Ympäristö

Add something

## 2. Backend eli taustajärjestelmä

Liikuntapäiväkirjan taustajärjestelmänä ovat Node.js ja Express. Node.js on ohjelmointiympäristö, jolla voi ajaa Javascript-ohjelmointikieltä palvelinpuolella. Express puolestaan on Noden päälle kehitetty web-sovelluskehys, joka helpottaa web-sovellusten tekoa mm. lomakkeiden, pyyntöjen ja vastausten osalta. 
Molemmat taustajärjestelmän työkalut ovat tulleet tutuksi tällä opintojaksolla aiempien tehtävien parista ja ne vaikuttivat sopivan myös tämän projektin sovelluksen kehittämiseen hyvin. Niiden avulla esimerkiksi voitiin käyttää samaa Javascript- ohjelmointikieltä sekä backendissä että frontendissä, jakaa logiikkaa backendin ja frontendin välillä ja Express toimii hyvin yksinkertaisten API-palveluiden rakenteluun (kuten liikuntasuoritusten haku, tallennus ja poisto). 
Projektin backend-kansioon on luotu server.js -tiedosto, jota ajettaessa käynnistyy Node.js-palvelin. Server.js:n tärkein tehtävä on määrittää, mihin osoitteisiin sovellus vastaa ja mitä tapahtuu, kun niihin tehdään API-kutsuja. Esimerkki server.js:n API-kutsusta löytyy kohdasta 7. koodin laatu ja dokumentointi.

## 3. Frontend - käyttöliittymäpuoli

Liikuntapäiväkirjan käyttöliittymäpuolen kehitykseen käytettiin Reactia, joka on suosittu Javascript-pohjainen kirjasto. Reactin etuna on, että käyttöliittymä on komponenttipohjainen, eli samaa koodia voi käyttää uudelleen eri toiminnoissa. Tämä tekee sovelluksesta nopeammin reagoivan ja helpomman ylläpitää. React mahdollistaa myös sen, että käyttöliittymä reagoi dynaamisesti tapahtumiin, eikä selaimen näkymää tarvitse ladata uudelleen nähdäkseen esimerkiksi tietokantaan tehtyjä muutoksia.
React valikoitui frontend-puolen kehittämiseen edellä mainituista syistä ja siksi, että se on jo tullut jonkin verran tutuksi opintojakson muiden tehtävien parista.
Projektin tyylin luomiseen on käytetty Tailwind CSS -tyylikirjastoa. Se sisältää valmiita luokkia tyylin luomiseen, mikä helpottaa käyttöliittymän komponenttien luomista. Tässä sovelluksessa on käytetty Tailwindin lisäksi myös index.css-tyylitiedostoa, koska joitain samoja tyyliominaisuuksia on käytetty useamman elementin kohdalla. Sellaisten hallinta ja muokkaus on helpompaa erillisen css-tiedoston kautta.
Projektin frontend-kansiossa on src/components-kansio, johon on tehty eri toiminnallisuuksille omat jsx-tiedostot. Näin sovelluksen rakenne on selkeämpi ja mahdolliset muutokset yhteen toimintoon eivät sekoita sovelluksen muuta logiikkaa. 
Sovelluksessa on pyritty huomioimaan erilaiset käyttäjät ja käyttötilanteet selkeällä, melko yksinkertaisella käyttöliittymänäkymällä ja responsiivisuudella.
Esimerkit Tailwind CSS:stä, erillisestä tyylitiedostosta ja frontendin funktionaalisesta komponentista löytyy kappaleesta 7. koodin laatu ja dokumentointi.

## 4. Tietokanta

Tietokantana liikuntapäiväkirjassa on käytetty PostgreSQL:a. PostgreSQL on relaatiotietokanta, jossa tiedot on järjestetty rivejä ja sarakkeita sisältäviin tauluihin. Tauluilla sekä niissä olevilla sarakkeilla ja riveillä on loogiset nimet, jotka helpottavat tiedon organisointia ja kyselyitä tietokannasta. PostgreSQL toimii hyvin Node.js:n kanssa ja Google Cloud-pilvipalvelussa. Lisäksi PostgreSQL mahdollistaa sovelluksen jatkokehittämisen esimerkiksi useampien käyttäjien hallintaan, mitä tässä projektissa ei ole vielä toteutettu.
Liikuntapäiväkirjan tietokannassa on kaksi taulua: liikuntasuoritukset ja map_markers.
	Liikuntasuoritukset-tauluun lisätään tietoja sovelluksen Lisää liikuntasuoritus -toiminnon avulla ja sieltä noudetaan tietoja sekä Liikuntasuoritukset (viimeiset 7 päivää) -listaan että hakutoiminnon avulla. Liikuntasuoritukset-taulun tietoja kerätään myös Viikon tilastot-toiminnolla. Taulun tietoja voidaan muokata Liikuntasuoritukset -toiminnon muokkaa-painikkeen avulla.
	Map_markers-taulu on yhteydessä sovelluksen karttakomponenttiin. Tauluun voidaan lisätä ja sieltä voidaan poistaa tietoja karttatoiminnolla. Taulusta haetaan tiedot karttatoiminnon merkinnät-listaan.

## 5. Perusrunko ja arkkitehtuuri

Projektin tavoitteena on ollut luoda web-pohjainen liikuntapäiväkirja-sovellus, johon käyttäjät voivat lisätä merkintöjä liikuntasuorituksistaan ja tarkastella niitä jälkikäteen. Näin käyttäjät voivat seurata edistymistään ja motivoitua jatkamaan liikkumista. Sovelluksessa on myös karttatoiminto, johon voi merkitä muistiin esimerkiksi itselleen mieleisiä retkikohteita tai vaikkapa hyviä kalapaikkoja.
Sovellus on selkeä ja helppokäyttöinen, joten se sopii monen ikäisille ja tasoisille käyttäjille. Sovelluksen käyttöön tarvitaan vain tavanomaista tietokoneen käytön hallintaa. Toisin sanoen, jos osaa käyttää sähköpostisovellusta, osaa käyttää myös liikuntapäiväkirjaa.
Liikuntapäiväkirja-sovelluksessa on kolme tasoa: käyttöliittymäpuoli eli frontend, palvelinpuoli eli backend ja tietokantana käytettävä PostgreSQL. Sovellus toimii niin, että käyttäjä täyttää tietoja käyttöliittymäpuolen lomakkeisiin, josta ne lähetetään palvelimelle. Palvelinpuoli puolestaan välittää tiedot tietokantaan. Palvelinpuolella Node.js toimii palvelinmoottorina ja Express huolehtii API-kutsuista ja niiden logiikasta. Käyttöliittymäpuolella käytetään Reactia komponenttipohjaisen rakenteen vuoksi ja Tailwind CSS:ä helpottamaan käyttöliittymän tyylittelyä. PostgreSQL toimii tässä sovelluksessa hyvin, koska tiedot tallennetaan sinne tauluihin jäsenneltyinä ja niitä on helppo noutaa sieltä erilaisilla hauilla. Backendin, frontendin ja tietokannan eri kehyksien ja kirjastojen valintoja on perusteltu edellisissä kappaleissa 2, 3 ja 4.

Projektin kansiorakenne on tehty niin, että toiminnallisuuksia tai sovelluksen tyyliä olisi helppo tarvittaessa muuttaa ja uusia ominaisuuksia voi lisätä kajoamatta olemassa oleviin toiminnallisuuksiin.

![image](https://github.com/user-attachments/assets/8dc36c9d-9b9a-4b18-9953-08ddda02d1d0)

## 6. Toiminnallisuudet

Liikuntapäiväkirjassa toiminnallisuudet ovat komponentteina frontend/src/components-kansiossa. Osa komponenteista sisältää useampia toiminnallisuuksia.  
- lisää liikuntasuoritus
- hae liikuntasuorituksia
- liikuntasuoritukset -lista viimeisimmän 7 päivä ajalta
- muokkaa liikuntasuorituksia
- poista liikuntasuorituksia
- viikoittaiset tilastot
- edistymisen seuranta
- kartta merkintöjen tekemiseen
- kartan merkintöjen listaus

Sovelluksen tämänhetkiset toiminnallisuudet toteuttavat suurimman osan projektin määrittely- ja suunnitteludokumenttiin kirjatuista käyttötapauksista. Jatkokehitykseen jäävät ne toiminnallisuudet, jotka lähettävät käyttäjälle muistutuksia tai listan viikon liikuntasuorituksista sähköpostiin.

## 7. Koodin laatu ja dokumentointi

Koodi ja sen kommentointi on luotu tekoälyä apuna käyttäen. Komponenttipohjaisuus mahdollistaa jatkokehityksen niin, että olemassa oleviin toimintoihin ei tarvitse kajota uusia toimintoja lisätessä. 
Backend:
Esimerkki server.js:n API-kutsusta:
```
// Lisää uusi liikuntasuoritus
app.post('/api/liikuntasuoritukset', async (req, res) => {
  const { nimi, paivamaara, kesto, liikuntalaji, keskinopeus, matka, lisatiedot } = req.body;

  if (!nimi || !paivamaara || !kesto || !liikuntalaji) {
    return res.status(400).json({ error: 'Pakolliset kentät ovat täyttämättä!' });
  }

  try {
    const newExercise = {
      nimi,
      paivamaara,
      kesto,
      liikuntalaji,
      keskinopeus: keskinopeus || null, // Aseta null, jos arvo on tyhjä
      matka: matka || null, // Aseta null, jos arvo on tyhjä
      lisatiedot: lisatiedot || '', // Tyhjä merkkijono lisätiedoille
    };

    await pool.query(
      'INSERT INTO liikuntasuoritukset (nimi, paivamaara, kesto, liikuntalaji, keskinopeus, matka, lisatiedot) VALUES ($1, $2, $3, $4, $5, $6, $7)',
      [
        newExercise.nimi,
        newExercise.paivamaara,
        newExercise.kesto,
        newExercise.liikuntalaji,
        newExercise.keskinopeus,
        newExercise.matka,
        newExercise.lisatiedot,
      ]
    );

    res.status(201).json({ message: 'Liikuntasuoritus lisätty onnistuneesti!' });
  } catch (err) {
    console.error('Virhe lisättäessä liikuntasuoritusta:', err);
    res.status(500).json({ error: 'Sisäinen palvelinvirhe.' });
  }
});
```


Tämä API-kutsu on Express-reitti, joka vastaanottaa uuden liikuntasuorituksen tiedot frontendiltä (React-lomakkeelta) ja lisää tiedot PostgreSQL-tietokantaan, kun käyttäjä lähettää lomakkeen.

Frontend:
Käyttöliittymäpuolelle määritellyt toiminnallisuudet ovat jokainen omassa jsx-tiedostossa. 
Esimerkkinä lisää liikuntasuoritus-toiminnon koodi:
```
import React, { useState } from 'react';

// Komponentti liikuntasuorituksen lisäämiseen
const AddExercise = () => {
  // Käytetään Reactin useState-hookia lomakkeen kenttien tilan hallintaan
  const [formData, setFormData] = useState({
    nimi: '',
    paivamaara: '',
    kesto: '',
    liikuntalaji: '',
    keskinopeus: '',
    matka: '',
    lisatiedot: '',
  });

  // Funktio, joka päivittää lomakkeen kenttien arvoja käyttäjän syötteen perusteella
  const handleChange = (e) => {
    setFormData({
      ...formData, // säilytetään olemassa olevat kentät
      [e.target.name]: e.target.value, // päivitetään muuttuva kenttä
    });
  };

  // Funktio, joka suoritetaan kun lomake lähetetään
  const handleSubmit = async (e) => {
    e.preventDefault(); // Estetään oletusarvoinen lomakkeen lähetys
    try {
      // Lähetetään POST-pyyntö backendin API-päätepisteeseen lomakkeen tiedoilla
      await fetch('http://localhost:5000/api/liikuntasuoritukset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      // (Tässä voisi lisätä esimerkiksi ilmoituksen onnistuneesta lisäyksestä tai tyhjentää lomakkeen.)
    } catch (err) {
      console.error('Virhe:', err); // Tulostetaan mahdollinen virhe
    }
  };

  return (
    <div
      id="add-exercise"
      className="add-exercise-container relative"
      style={{ scrollMarginTop: '140px' }} // Mahdollistaa scrollauksen oikeaan kohtaan navigoidessa
    >
      {/* Vihreä yläpalkki ja otsikko */}
      <div className="header-bar">
        <h2 className="add-exercise-title">Lisää liikuntasuoritus</h2>
      </div>

      {/* Lomake suorituksen tietojen syöttämiseen */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
        {/* Jokainen kenttä sisältää labelin ja inputin tai tekstialueen */}
        <label className="date-type-name block text-sm font-medium text-gray-700">Nimi, pakollinen</label>
        <input
          type="text"
          name="nimi"
          value={formData.nimi}
          onChange={handleChange}
          className="p-2 rounded"
        />

        <label className="date-type-name block text-sm font-medium text-gray-700">Päivämäärä, pakollinen</label>
        <input
          type="date"
          name="paivamaara"
          value={formData.paivamaara}
          onChange={handleChange}
          className="p-2 rounded"
        />

        <label className="date-type-name block text-sm font-medium text-gray-700">Liikuntalaji, pakollinen</label>
        <input
          type="text"
          name="liikuntalaji"
          value={formData.liikuntalaji}
          onChange={handleChange}
          className="p-2 rounded"
        />

        <label className="date-type-name block text-sm font-medium text-gray-700">Kesto (tuntia), pakollinen</label>
        <input
          type="number"
          name="kesto"
          value={formData.kesto}
          onChange={handleChange}
          className="p-2 rounded"
        />

        <label className="date-type-name block text-sm font-medium text-gray-700">Keskinopeus (km/h)</label>
        <input
          type="number"
          name="keskinopeus"
          value={formData.keskinopeus}
          onChange={handleChange}
          className="p-2 rounded"
        />

        <label className="date-type-name block text-sm font-medium text-gray-700">Matka (km)</label>
        <input
          type="number"
          name="matka"
          value={formData.matka}
          onChange={handleChange}
          className="p-2 rounded"
        />

        <label className="date-type-name block text-sm font-medium text-gray-700">Lisätiedot</label>
        <textarea
          name="lisatiedot"
          value={formData.lisatiedot}
          onChange={handleChange}
          className="p-2 rounded"
        />

        {/* Lähetyspainike, jonka taustaväri määritetty Tailwindin kautta */}
        <button
          type="submit"
          className="button-text-size bg-[#00B74A] text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Lisää suoritus
        </button>
      </form>
    </div>
  );
};

export default AddExercise;
```



Tietokanta:
Tietokanta sisältää kaksi taulua, liikuntasuoritukset ja map_markers. Liikuntasuoritukset-taulussa on kahdeksan saraketta: id, käyttäjän nimi, päivämäärä, suorituksen kesto, liikuntalaji, keskinopeus, matka ja lisätiedot, joista kolme viimeistä eivät ole pakollisia täyttää. Map_markers-taulun sarakkeet ovat id, leveysasteet, pituusasteet, päivämäärä ja kuvaus. Koordinaatit ja päivämäärä määrittyvät tietokantaan automaattisesti merkinnän karttasijainnin ja merkinnän luomishetken mukaisesti. 
Kuvakaappaus liikuntasuoritukset-taulusta:
![image](https://github.com/user-attachments/assets/e9806115-7b51-47dd-828c-e954f3a04c54)

Kuvakaappaus map_markers-taulusta:
![image](https://github.com/user-attachments/assets/7ba6efcc-28b1-446b-9567-f04a99d4fe62)

## 8. Testaus ja virheenkäsittely

Sovellus on kehitetty ja testattu määrittely- ja suunnitteludokumentissa kuvaillusti. Responsiivisuutta ei valitettavasti ole tämän projektin puitteissa lisätty, vaan se jää jatkokehitykseen.
Sovelluksen kehityksen aikana jokaista toiminnallisuutta on testattu yksitellen useaan otteeseen. Komponenttipohjaisen sovelluksen etuna on, että yhden toiminnallisuuden muuttaminen tai uuden lisääminen ei vaikuta muihin toimintoihin.
Sovellusta on testattu myös kokonaisuutena, kun kaikki toiminnallisuudet on saatu valmiiksi. 
Sovelluksen saavutettavuutta testattiin Google Chrome-selaimen Lighthouse-työkalulla. Kuvakaappaus Lighthouse-raportin koosteesta:
![image](https://github.com/user-attachments/assets/40c51223-a71b-43ba-bce4-c1bcf5766ea7)

## 9. Käyttöliittymä ja vuorovaikutus

Käyttöliittymästä on tehty selkeä ja yksinkertainen, vastaten kuitenkin monipuolisesti erilaisten käyttäjien tarpeisiin. Kaikki toiminnot ovat yhdellä sivulla, joten käyttäjä löytää kaikki toiminnot selaamalla sivua alaspäin. Yläpalkissa on myös painikkeet, joista pääsee eri toimintoihin.
Käyttäjä voi lisätä uusia liikuntasuorituksia lomakkeen avulla, hakea suorituksia suodattimilla (päivämäärä, liikuntalaji, nimi), sekä tarkastella hakutuloksia. Lisäksi käyttäjä voi syöttää nimensä ja viikkotavoitteensa nähdäkseen oman edistymisensä prosenttiosuutena.
Sovelluksen karttatoiminto tarjoaa käyttäjälle visuaalisen näkymän merkintöjen lisäämiselle. Tämä auttaa joitakin käyttäjiä liikuntasuoritusten maantieteellisessä hahmottamisessa.
Kuvakaappaus käyttöliittymän aloitusnäkymästä:
![image](https://github.com/user-attachments/assets/1ffb049d-09a2-4dd4-9a64-7cbd0b913f1c)
