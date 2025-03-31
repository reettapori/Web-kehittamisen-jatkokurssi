# Vaihe 1 - Määrittely ja suunnittelu
Tämän projektin tavoitteena on kehittää web-sovelluksena liikuntapäiväkirja, joka motivoi eri ikäisiä ihmisiä liikkumaan säännöllisesti. Sen avulla voi tarkastella ja vertailla tehtyjä liikuntasuorituksia, tilata liikuntamuistutuksia sähköpostiin ja tallentaa omia lisätietoja suorituksille.
## 1. Käyttäjäpersoonat
1. "Antti Aktiiviurheilija"
Taustatiedot:
- 30 vuotta
- hyvinvointivalmentaja
- harrastaa pyöräilyä, hiihtoa ja kuntosaliharjoittelua
- tavoittelee osallistumista Finlandia-hiihtoon ensi talvena
Odotukset sovellukselta:
- voi lisätä sovellukseen tarkat tiedot urheilusuorituksista
- voi hakea tietokannasta yksittäisiä suorituksia päivämäärän tai lajin perusteella
- voi verrata suorituksia toisiinsa

2. "Pipsa Perheenäiti"
Taustatiedot:
- 40 vuotta
- sairaanhoitaja
- harrastaa koiran kanssa lenkkeilyä, lasten kanssa ulkoilua ja satunnaisia kotijumppatuokioita
- tavoitteena nykykunnon ylläpitäminen
Odotukset sovellukselta:
- helposti omaksuttava käyttöliittymä
- voi lisätä sovellukseen myös perheenjäsenten liikuntasuorituksia ja motivoida koko perhettä liikkumaan

3. "Iita It-opiskelija"
Taustatiedot:
- 35 vuotta
- opiskelee tietotekniikkaa
- harrastaa uintia ja peliohjelmointia
- tavoitteena muistaa taukoliikunta päivän aikana
Odotukset sovellukselta:
- motivoi tauottamaan tietokoneella istumista
- innostava palaute liikuntasuorituksista

4. "Simo Senioriliikkuja"
Taustatiedot:
- 75 vuotta
- eläkkeellä
- harrastaa puutarhanhoitoa
- tavoitteena seurata aktiivisuutta ja puutarhan työvaiheiden etenemistä
Odotukset sovellukselta:
- selkeä käyttöliittymä
- toimii myös hyötyliikunnalle - voi lisätä liikuntalajin itse
- voi lisätä liikunnan oheen lisätietoja siitä, mitä liikuntasuoritus on pitänyt sisällään. Esim. nurmikon leikkuu, kasvimaan rikkaruohojen kitkeminen.

5. "Kalle Kalastaja"
Taustatiedot:
- 50 vuotta
- kirvesmies
- harrastaa kalastusta ja muuta luonnossa liikkumista
- tavoitteena saada merkittyä parhaat reitit, kalapaikat ja saaliit talteen
Odotukset sovellukselta:
- pystyy merkitsemään sovellukseen sijainnin tai kuljetun reitin
- pystyy tallentamaan kalansaaliin tiedot 

## 2. Käyttötapaukset ja -tilanteet

1. Antti Aktiiviurheilijan käyttötapaus
Sovelluksen käyttäjänä Antti haluaa seurata edistymistään: 
-	Antti avaa sovelluksen
-	Hän siirtyy kirjattuihin liikuntasuorituksiin
-	Hän suodattaa taulukosta esiin hiihtosuoritukset
-	Hän vertailee hiihtosuorituksien matkoja ja aikoja sekä keskinopeuksia
-	Hän voi vertailla keskinopeuksia myös graafisen kuvaajan avulla (lisäominaisuus?)
Tulos: Antti voi analysoida kehittymistään ja saa siitä motivaatiota jatkaa liikuntasuorituksia.

2. Pipsan Perheenäidin käyttötapaus
Sovelluksen käyttäjänä Pipsa haluaa nähdä, että liikuntaa tulee harrastettua säännöllisesti ja hän saa innostettua koko perheen mukaan liikkumaan:
-	Pipsa avaa sovelluksen
-	Hän lisää omat ja perheenjäsenten liikuntatapahtumat liikuntapäiväkirjaan
-	Hän voi seurata liikuntapäiväkirjasta, kuka perheenjäsenistä on liikkunut eniten ja ”voittaja” saa mitalin sovelluksessa.
Tulos: Pipsa näkee, että hän ja perheenjäsenet liikkuvat säännöllisesti ja riittävästi, ja liikuntapäiväkirjan seuranta motivoi heitä leikkimielisesti kilpailemaan keskenään siitä, kuka liikkuu eniten.

3. Iita It-opiskelijan käyttötapaus
Sovelluksen käyttäjänä Iita voi seurata sovelluksesta, saako hän riittävästi liikuntaa tietokoneella istumisen vastapainoksi. 
-	Iita avaa sovelluksen
-	Hän asettaa liikkumistavoitteen ( x tuntia/viikko)
-	Hän seuraa tavoitteen saavuttamista palkista, joka edistyy kohti 100 %:a, kun hän kirjaa suorituksia liikuntapäiväkirjaan.
-	Hän asettaa sovellukseen sähköpostiin tulevan säännöllisen muistutuksen (lisäominaisuus?)
Tulos: Iita saa tauotettua tietokoneella istumista ja hän näkee, että asetettu tavoite tulee täytettyä. Hän motivoituu liikkumaan säännöllisesti.

4. Simo Senioriliikkujan käyttötapaus
Sovelluksen käyttäjänä Simo haluaa kirjata puutarhassa tehdyt hyötyliikuntatunnit liikunnaksi. Näin hän voi seurata, että liikkuu ja ulkoilee lääkäriltä saamiensa suositusten mukaan. 
-	Simo avaa sovelluksen
-	Hän löytää tarvitsemansa toiminnot helposti
-	Hän lisää uuden liikuntasuorituksen ja lisätiedoksi, mitä tarkalleen on tehnyt
-	Hän voi poistaa vahingossa tekemänsä ylimääräisen liikuntasuorituksen ja muokata kirjoitusvirheen toisesta liikuntasuoritusmerkinnästä
-	Hän voi lähettää listan viikon liikuntasuorituksista sähköpostiinsa (lisäominaisuus?)
Tulos: Simo pystyy tallentamaan liikuntasuorituksensa ja varmistaa, että liikkuu saamiensa suositusten mukaisesti. Hän voi lähettää kirjaamansa liikuntasuoritukset myös lääkärilleen.

5. Kalle Kalastajan käyttötapaus
Sovelluksen käyttäjänä Kalle haluaa merkitä parhaat kalapaikat ja kulkemansa reitit sovellukseen. Hän voi kirjata suoritukselle myös saaliinsa.
-	Kalle avaa sovelluksen
-	Hän merkitsee liikuntapaikan koordinaatit suorituksen lisätietoihin
-	Hän merkitsee suorituksen lisätietoihin kalansaaliinsa
-	Hän merkitsee liikuntapaikan karttaan (lisäominaisuus?)
Tulos: Kalle saa tallennettua sovellukseen parhaiden kalapaikkojen ja luontokohteiden sijainnit ja saalistiedot.

## 3. Käyttöliittymän prototyyppi

Liikuntapäiväkirja on yhden sivun sovellus. Kaikki toiminnallisuudet löytyvät sivua selaamalla, mutta staattisessa yläpalkissa on myös linkit eri osioihin helpottamaan navigointia.
Saavutettavuus: selkeä ja helppokäyttöinen käyttöliittymä, sopii kaikille käyttäjille. Selkeä fontti ja tekstin koko riittävän suuri. Väreillä hyvä kontrasti. Saavutettavuutta tarkastellaan Lighthouse -työkalulla (Google Chrome). Värien kontrastit tarkistetaan accessibleweb.comin contrast checkerilla (https://accessibleweb.com/color-contrast-checker/).
Responsiivisuus: voidaan käyttää erilaisilla päätelaitteilla. Tarkistetaan selaimen developer tool-työkalulla.
Visuaalisesti miellyttävä: Neutraali taustaväri ja 2-3 pääväriä. Elementtien väliset etäisyydet sopivia. Ei ylimääräisiä elementtejä, ei liikaa tekstiä.
Käytettävät värit: 
Tausta: #F0F4F8 
Yläpalkki: #0077B6 
 
Painikkeet:
-	Lisää -painike: #00B74A ![image](https://github.com/user-attachments/assets/b337f468-83dc-434d-a002-282e4b06d044)
-	Poista -painike: #FF6B6B ![image](https://github.com/user-attachments/assets/815184ea-2fbf-4edc-b3a1-b5beb7def7cb)
-	Muokkaa -painike: #FFD166 ![image](https://github.com/user-attachments/assets/aeaff194-091f-49c8-b8e9-827ce62f8cb5)
-	Haku -painike: #FF9F1C ![image](https://github.com/user-attachments/assets/fabee08e-4df5-4238-acab-b9b19aa9d5c0)

Prototyyppi aloitusnäkymästä:
![image](https://github.com/user-attachments/assets/2ffc2bbd-9919-4927-a13f-177fd4d18a8b)

Sovelluksen kaikki osat tehdään alkunäkymän tyyliä ja värejä noudattaen. Aloitusnäkymän alapuolelle selatessa sivulla on
-	Liikuntahistoria (oletuksena näytetään viikon liikuntasuoritukset)
o	haku-toiminto (päivämäärän, lajin tai käyttäjän nimen perusteella)
o	kalenteri, josta voi valita päivän ja tarkastella sen liikuntasuorituksia.
o	muokkaus-toiminto
o	poistotoiminto
-	Sähköpostimuistutusten tilaus (lisäominaisuus?)
-	Sijaintitietojen tallennus karttaan (lisäominaisuus?)
-	Alapalkki, jossa sovelluksen tiedot

## 4. Arkkitehtuuri ja tekninen toteutus

Tavoitteena on, että sovellus:
- toimii Google Cloud -pilvessä 
- taustajärjestelmänä on Node.js + Express
- käyttöliittymä on luotu Reactilla 
- tietokantana toimii PostgreSQL
- tyylittelyyn käytetään Tailwind CSS (tai Bootstrap)

Ohjelmointiin käytetään VSCodea.

## 5. Projektin hallinta ja käyttäjätestaus
Projekti on jaettu neljään vaiheeseen:
I.	Määrittely ja suunnittelu
II.	Perusrunko ja päätoiminnallisuudet
III.	Edistyneet ominaisuudet ja optimointi
IV.	Esittely
Vaiheiden palautuspäivämäärät on annettu opintojakson aikataulun puitteissa. Aikaa on 1-2 viikkoa per vaihe. 
Projekti on aloitettu suunnitteluvaiheella 27.3.2025 ja sen tulee valmistua viikolla 15 (huhtikuun lopussa). 
Projektin aikataulun seurantaan käytän Trelloa. Projektin vaiheet tallennetaan Githubiin projektin kansioon versiointia käyttäen.

Testaus:
Testauksen on tarkoitus varmistaa sovelluksen toimivuus, saavutettavuus ja responsiivisuus. 
Testaan saavutettavuutta Google Chromen Lighthouse -työkalulla. 
Responsiivisuuden tarkistan selaimen kehitystyökaluilla (developer tools). 
Teen yksikkötestausta sovellusta kehittäessä opintojakson materiaaleissa opastetun mukaisesti. 
Sovelluksen valmistuttua pyydän puolisoa toimimaan käyttäjätestaajana. 
Sovelluksen tietoturvaa testaan Checkmarxin Zap-ohjelmalla. 
