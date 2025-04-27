# Vaihe IV – Projektin esittely

Tässä projektissa määriteltiin ja toteutettiin liikuntapäiväkirja-sovellus. Määrittely- ja suunnitteludokumentissa hahmoteltiin viisi käyttäjäpersoonaa ja jokaiselle käyttötapaukset. Sovelluksen päätoiminnallisuuksien kehitysvaiheessa (vaihe II) toteutettiin käyttötapausten mukaisia toiminnallisuuksia. Tässä dokumentissa esitellään, mitkä käyttötapauksista toteutettiin ja miten, ja mitkä toiminnallisuuksista ja sovelluksen ominaisuuksista jäivät toteutettavaksi myöhempään jatkokehitykseen.

## 🎯 Projektin nimi

Projektin nimi on Liikuntapäiväkirja-sovelluksen kehittäminen.

## 📝 Projektin yleiskuva

Projektissa suunniteltiin ja toteutettiin Liikuntapäiväkirja-sovellus. Sovellusta on tarkoitus käyttää liikuntasuoritusten seurantaan ja esimerkiksi käyttäjälle mieluisten retkeily- tai kalastuspaikkojen sijaintien tallentamiseen karttatoimintoon. Sovelluksen tarkoitus on innostaa käyttäjiä liikkumaan, kun käyttäjä voi asettaa itselleen tavoitteen ja seurata asetetun tavoitteen täyttymistä.
Sovelluksen käyttäjät voivat olla kaikenikäisiä ja -tasoisia liikkujia. Käyttäjällä voi olla tarve tai halu  kirjata liikuntasuorituksia tai retkipaikkojen sijainteja, tai hän voi haluta seurata asettamansa tavoitteen täyttymistä. Käyttäjäpersoonissa on määritelty viisi erilaista henkilöä, jotka voisivat olla tämän sovelluksen käyttäjiä. Jokaiseen käyttäjäpersoonaan on yhdistetty yksi tai useampia käyttötapauksia.

## 📌 Kooste käyttötapauksista

Käyttötapaukset on määritelty määrittely- ja suunnitteludokumentin kappaleessa 2.
Linkki määrittely- ja suunnitteludokumenttiin GitHubissa:
https://github.com/reettapori/Web-kehittamisen-jatkokurssi/blob/350a3f9f45abc6fc994b484c70b0b21b4318889b/Projekti/M%C3%A4%C3%A4rittely-%20ja%20suunnitteludokumentti.md


| Käyttötapaus | Toteutettu (Kyllä/Ei) | Toteutustapa/Kuvaus |
|----------|----------------------|------------------------|
|1.|Antti Aktiiviurheilija vertailee sovellukseen kirjaamiensa hiihtosuoritusten matkoja ja keskinopeuksia|Kyllä|Toteutettu lisäämällä sovellukseen hakutoiminto. Kuvattu esityksessä 1:22.|
|2.|Antti Aktiiviurheilija voi vertailla keskinopeuksia graafisen kuvaajan avulla|Ei|Tämä ominaisuus voitaisiin toteuttaa sovelluksen jatkokehityksessä.|
|3.|Pipsa Perheenäiti voi lisätä omia ja perheenjäsenten liikuntasuorituksia liikuntapäiväkirjaan|Kyllä|Toteutuu liikuntapäiväkirjan ’Lisää liikuntasuoritus’-toiminnolla. Kuvattu esityksessä 2:22.|
|4.|Pipsa Perheenäiti voi seurata liikuntapäiväkirjasta kuka on liikkunut eniten viikon aikana.|Kyllä|Toteutuu sovelluksen ’Viikon tilastot’-toiminnossa. Kuvattu esityksessä 3:21.|
|5.|Iita It-opiskelija asettaa itselleen liikkumistavoitteen|Osittain toteutettu|Toteutuu sovelluksen ’Viikon tilastot’ -toiminnon ’Edistyminen’-osiossa. Tavoite täytyy asettaa joka kerta uudelleen, jatkokehitysominaisuutena tässä voisi olla yhteys tietokantaan, johon tavoitteen voi tallentaa. Kuvattu esityksessä 4:05.|
|6.|Iita It-opiskelija saa sähköpostiin säännöllisesti muistutuksen taukoliikunnasta|Ei|Jatkokehitysominaisuus.|
|7.|Simo Senioriliikkuja voi lisätä liikuntasuoritukseen, mitä puutarhatöitä hän on kulloinkin tehnyt. Hän voi muokata liikuntasuoritukseen tulleen kirjoitusvirheen ja poistaa vahingossa tekemänsä ylimääräisen liikuntasuorituskirjauksen.|Kyllä|Lisätietojen lisääminen toteutuu ’Lisää liikuntasuoritus’-toiminnon ’lisätiedot’-lomakekentän avulla ja  liikuntasuoritusten muokkaus ja poisto toteutuu ’Lista liikuntasuorituksista’-toiminnon ’Muokkaa’- ja ’Poista’-toimintojen avulla. Kuvattu esityksessä 5:35.|
|8.|Simo Senioriliikkuja voi lähettää listan viikon liikuntasuorituksistaan sähköpostiin.|Ei|Jatkokehitysominaisuus.|
|9.|Kalle Kalastaja voi merkitä liikuntapäiväkirjaan parhaan kalapaikkansa ja saalistiedot.|Kyllä|Toteutuu liikuntapäiväkirjan ’Kartta’-toiminnolla. Kuvattu esityksessä 7:48.|

## ✍️ Tekninen toteutus

Liikuntapäiväkirjan taustajärjestelmänä ovat Node.js ja Express. Projektin backend-kansioon on luotu server.js -tiedosto, jota ajettaessa käynnistyy Node.js-palvelin. Molemmat taustajärjestelmän työkalut ovat tulleet tutuksi tällä opintojaksolla aiempien tehtävien parista ja ne vaikuttivat sopivan myös tämän projektin sovelluksen kehittämiseen hyvin. Niiden avulla esimerkiksi voitiin käyttää samaa Javascript- ohjelmointikieltä sekä backendissä että frontendissä, ja jakaa logiikkaa backendin ja frontendin välillä. Express toimii hyvin yksinkertaisten API-palveluiden rakenteluun (kuten liikuntasuoritusten haku, tallennus ja poisto).
Liikuntapäiväkirjan käyttöliittymäpuolen kehitykseen käytettiin Reactia, joka mahdollisti komponenttipohjaisen käyttöliittymän rakentamisen. Tämä tarkoittaa sitä, että eri toiminnot ovat erillisinä kokonaisuuksina ja siten niitä on helpompi hallinnoida eikä yhteen komponenttiin tehdyt muutokset vaikuta muihin toimintoihin. Komponenttipohjaisuus tarkoittaa myös sitä, että samaa koodia voidaan käyttää useammassa eri toiminnossa ilman toistoa.
Tietokantana liikuntapäiväkirjassa on käytetty PostgreSQL:a. PostgreSQL on relaatiotietokanta, jossa tiedot on järjestetty rivejä ja sarakkeita sisältäviin tauluihin. Tauluilla sekä niissä olevilla sarakkeilla ja riveillä on loogiset nimet, jotka helpottavat tiedon organisointia ja kyselyitä tietokannasta. Liikuntapäiväkirjan tietokannassa on kaksi taulua: liikuntasuoritukset ja map_markers.
	Liikuntasuoritukset-tauluun lisätään tietoja sovelluksen Lisää liikuntasuoritus -toiminnon avulla ja sieltä noudetaan tietoja sekä Liikuntasuoritukset (viimeiset 7 päivää) -listaan että hakutoiminnon avulla. Liikuntasuoritukset-taulun tietoja kerätään myös Viikon tilastot-toiminnolla. Taulun tietoja voidaan muokata Liikuntasuoritukset -toiminnon muokkaa-painikkeen avulla.
	Map_markers-taulu on yhteydessä sovelluksen karttakomponenttiin. Tauluun voidaan lisätä ja sieltä voidaan poistaa tietoja karttatoiminnolla. Taulusta haetaan tiedot karttatoiminnon merkinnät-listaan.
Projektin tyylin luomiseen on käytetty Tailwind CSS -tyylikirjastoa. Sovelluksessa on käytetty Tailwindin lisäksi myös index.css-tyylitiedostoa, koska joitain samoja tyyliominaisuuksia on käytetty useamman elementin kohdalla. Sellaisten hallinta ja muokkaus on helpompaa erillisen css-tiedoston kautta.

## 🚂 Kehitysprosessi

Projekti aloitettiin maaliskuun lopussa määrittelemällä mitä ominaisuuksia sovellukseen halutaan, ja suunnittelemalla kuinka ne toteutetaan. Tästä kirjoitettiin vaiheen I määrittely- ja suunnitteludokumentti. 
Tärkeimmät toiminnallisuudet sovelluksessa ovat 
-	mahdollisuus lisätä liikuntasuorituksia tietokantaan sekä muokata ja poistaa niitä sieltä. 
-	mahdollisuus hakea liikuntasuorituksia hakuehdoin sekä tarkastella niitä listauksesta
-	mahdollisuus tarkastella liikuntasuorituksia listalta viimeisen viikon ajalta
-	mahdollisuus seurata tilastoa viikon liikuntasuorituksista
-	mahdollisuus seurata omaa edistymistä
-	mahdollisuus lisätä merkintöjä karttaan
-	mahdollisuus tarkastella karttamerkintöjä tietokannasta
Sovelluksen varsinainen kehitys aloitettiin kansiorakenteen luomisella. Projektin kansiorakenne on tehty niin, että toiminnallisuuksia tai sovelluksen tyyliä olisi helppo tarvittaessa muuttaa ja uusia ominaisuuksia voi lisätä kajoamatta olemassa oleviin toiminnallisuuksiin.
![image](https://github.com/user-attachments/assets/18d1f8c0-ce3c-4bc6-8325-84c0203c76df)

Lisäksi luotiin tietokanta ja sinne ensimmäinen taulu liikuntasuoritusten tallentamista varten.
Käyttöliittymään luotiin ensin perusrakenne, johon kuului mm. sivuston taustavärin ja yläpalkin lisääminen ja alueet toiminnallisuuksia varten. Käyttöliittymän perusrungon valmistuttua aloitettiin toiminnallisuuksien kehittäminen. Ensimmäisenä luotiin ’Lisää liikuntasuoritus’-toiminto, sitten ’Lista liikuntasuorituksista’ viimeisen viikon ajalta jossa on muokkaus- ja poistamistoiminnot, ’Haku’-toiminto, ’Viikon tilastot’- sekä ’Edistyminen’-toiminnot ja lopuksi ’Kartta’-toiminnolle uusi taulu tietokantaan ja itse ’Kartta’-toiminto sekä kartan tietokantamerkintöjen tarkastelumahdollisuus. Viimeisenä haluttiin vielä lisätä sivulle alapalkki, jossa on sivun tekijän tiedot sekä sivun käyttöehdot ja tietosuoja -ponnahdusikkunat. 
Kehitysprosessin aikana tietyt ominaisuudet ja toiminnallisuudet muuttuivat tai päätettiin jättää jatkokehitysmahdollisuudeksi. Muun muassa yläpalkin taustaväri muutettiin ja toiminnallisuuksista päätettiin jättää jatkokehitykseen mahdollisuus tilata sähköpostiin muistutuksia taukoliikunnasta tai lista omista liikuntasuorituksista viimeisen viikon ajalta. Nämä ominaisuudet olisivat edellyttäneet hieman enemmän perehtymistä sovelluksen ja sähköpostin välisen yhteyden luomisesta.
Sovelluksen koodin ja koodin kommentoinnin luomiseen on käytetty apuna tekoälyä (Microsoft Copilot).  
Sovellukseen oli tavoitteena lisätä responsiivisuutta niin, että se toimisi moitteettomastri erilaisilla päätelaitteilla. Tämä ominaisuus jäi valitettavasti myös jatkokehitykseen, sillä sen lisääminen olisi vaatinut melko paljon lisää koodin hiomista ja testausta eikä onnistunut tämän projektin aikataulun puitteissa.
Sovellusta testattiin koko kehitysprosessiin ajan yksikkötestauksella (jokaista toimintoa erikseen kehityksen aikana). Lisäksi sovellusta testattiin lopuksi kokonaisuutena, kun kaikki toiminnallisuudet oli saatu valmiiksi. 
Sovelluksen saavutettavuutta testattiin Google Chrome-selaimen Lighthouse-työkalulla. Kuvakaappaus Lighthouse-raportin koosteesta:
 


## ☀️ Itsearviointi ja jatkokehitys

Projektin toteuttaminen oli todella mielenkiintoista ja sen aikana tuli opittua paljon uutta ja hyödyllistä. Käytännön toteuttamisen lisäksi tuli haettua myös vielä teoriatietoa taustajärjestelmistä ja niiden välisestä yhteydestä sekä vertailtua valittuja järjestelmiä, kirjastoja ja kehyksiä muihin vastaaviin. Opiskelijalle mieluista tässä projektissa oli se, että sai itse valita sovelluksen aiheen ja käyttää luovuuttaan käyttöliittymän suunnittelussa. 
Projektissa mieluisita olivat myös ahaa-elämykset ja uuden oppiminen. Hauskaa oli hioa käyttöliittymän tyylittelyä ja saada toiminnallisuuksia toimimaan halutulla tavalla. Kartta-toiminnallisuuksien lisääminen oli ehkä jännittävintä. Olin aika epäileväinen, että saako sellaista kovin helposti toimimaan tähän sovellukseen. Kartta näyttää kuitenkin toimivan moitteettomasti. 
Tavoitteena oli saada projekti toimimaan Google Cloud -pilvipalvelussa, mutta siinä ei valitettavasti onnistuttu, vaan projekti jää tässä vaiheessa toimimaan pelkästään paikalliselta palvelimelta. 
Jatkokehitykseen jäävät ominaisuudet, joissa lähetetään sähköpostia käyttäjän antamaan sähköpostiin.

## 📊 Tuntikirjaukset

|Päivämäärä|Tunnit|Projektin vaihe|Tehtävä|
|:---:|:---:|:---:|:---|
|27.3.2025|2|Vaihe I|Aiheen ideointi|
|28.3.2025|3|Vaihe I|Käyttäjäpersoonat|
|29.3.2025|3|Vaihe I|Käyttötapaukset ja prototyypin aloitus|
|31.3.2025|8|Vaihe I|Prototyypin viimeistely & projektihallinnan ja testauksen suunnittelu|
|1.4.2025|2|Vaihe I ja II|Projektityöpajalla käynti,projektin rakenteen ja toiminnallisuuksien suunnittelua|
|5.4.2025|6|Vaihe II|Projektin rakenteen ja tyylin tekeminen|
|7.4.2025|8|Vaihe II|Toiminnallisuuksien rakentelua ja sijoittelua|
|9.4.2025|7|Vaihe II|Toiminnallisuuksien rakentelua ja sijoittelua|
|14.4.2025|10|Vaihe II|Tyylin ja toiminnallisuuksien viilausta, vaiheen II raportin kirjoittaminen|
|22.4.2025|6|Vaihe IV|Loppuraportin kirjoittaminen|
|27.4.2025|2|Vaihe IV|Esittelyvideon suunnittelu ja nauhoitus|

Yhteensä projektiin käytetty 57 tuntia.

## 🪢 Linkki esittelyvideoon
https://centriafi-my.sharepoint.com/personal/reetta_pori_centria_fi/_layouts/15/stream.aspx?id=%2Fpersonal%2Freetta%5Fpori%5Fcentria%5Ffi%2FDocuments%2FTallenteet%2FTapaaminen%20j%C3%A4rjest%C3%A4j%C3%A4n%20Reetta%20P%C3%B6ri%20ATIS22Y%20kanssa%2D20250427%5F135526%2DKokouksen%20tallenne%2Emp4&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E9b676406%2D55bd%2D450d%2Da13d%2D77ce62d58d25

