import express, { query } from "express";

const app = express();

app.get("/", (req, res) => {
	console.log(req, query);
	res.send(`  <h1>${"Forside"}</h1>
                <p>${"Alt efter hvor stor en webshop der er tale om, vil nogle af følgende sider være delt op med flere undersider. Der vil stå en beskrivelse af hvad siden skal indeholde, under side."}</p`);
});

app.get("/category", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"Kategorier"}</h1>
                <p>${"På denne side vil der blive listet forskellige kategorier. Eksempelvis hvis siden sælger legetøj kan det være der skal være kategorier så som følgende"}</p
                <ul>
                    <li>${"Udendørs leg"}</li>
                    <li>${"Kreativitet"}</li>
                    <li>${"Spil og underholdning"}</li>
                    <li>${"mfl"}</li>
                </ul>`);
});

app.get("/product", (req, res) => {
	console.log(req.query);
	res.send(
		`   <h1>${"Produkt side"}</h1>
            <p>${"Der skal være en side for hvert eneste produkt hvor man kan have en yderligere beskrivelse af det givende produkt, valg af variant og eller eventuelt størrelse samt en køb knap"}</p`
	);
});

app.get("/cart", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"Kurv"}</h1>
                <p>${"I kurven kan se en oversigt over hvad du lige nu har i kurven, du fjerne eller tilføje flere af samme produkt. Du kan også se totalen af ordresummen"}</p>)`);
});

app.get("/check-out", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"Betaling"}</h1>
                <p>${"På betalings siden kan du indtaste dine leveringsoplysninger. Evt. kan du vælge betaling, tilføje rabatkode og godkende betingelserne for købet hvis ikke dette er på en særskilt Betalings side."}</p>`);
});

app.get("/about", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"Om os"}</h1>
                <p>${"En beskrivelse af hvem som står bag firmaet, eventuelt en præsentation af medarbejdere."}</p>`);
});

app.get("/contact", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"Kontakt os"}</h1>
                <p>${"En beskrivelse af hvordan man kommer i kontakt med firmaet"}</p>`);
});

app.get("/faq", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"Ofte stillede spørgsmål"}</h1>
                <p>${"Besvarelse af ofte stillede spørgsmål, hvis denne ikke der er en kundeservice side med flere undersider og eller informationer"}</p>`);
});

app.get("/care", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"Kundeservice"}</h1>    
                <p>${"Her kan der eventuelt være underside som kan tage sig af flere ting så som:"}</p<
                <ul>
                    <li>${"Ofte stillede spørgsmål"}</li>
                    <li>${"Fragt og levering"}</li>
                    <li>${"Returnering"}</li>
                    <li>${"Betalingsmetoder"}</li>
                    <li>${"mfl"}</li>
                </ul>`);
});

app.get("/privacy-policy", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"privatlivspolitik"}</h1>
                <p>${"En beskrivelse af hvordan behandling af personoplysninger bliver behandlet. Denne er et krav (Datatilsynet og GDPR). Der findes forskellige skabeloner på nettet som kan bruges på siden"}</p>`);
});

app.get("/terms-conditions", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"Handelsbetingelser"}</h1>
                <p>${"En beskrivelse af hvilke betingelser der er gældne for handlen imellem kunde og virksomhed. Der er flere krav til denne ifølge købeloben, aftaleloven, forbrugeraftaleloven, e-handelsloven og markedsføringsloven. Som udgangspunkt bør den som minimum indeholde fælgende:"}</p>
                <ul>
                    <li>${"Virksomheden"}</li>
                    <li>${"Betaling"}</li>
                    <li>${"Levering"}</li>
                    <li>${"Fortrydelse"}</li>
                    <li>${"Returret"}</li>
                    <li>${"Reklamation"}</li>
                    <li>${"Ansvar"}</li>
                    <li>${"Databehandling"}</li>
                    <li>${"Kontakt"}</li>
                    <li>${"Ændringer"}</li>
                    <li>${"Klagemuligheder"}</li>
                </ul>
                <p>${"Ligesom med privatlivspolitik findes der forskellige standard skabeloner på nettet som kan bruges på siden. Men der er også firmaer som har specialiseret sig i at skrive disse."}</p>`);
});

app.get("/acount", (req, res) => {
	console.log(req.query);
	res.send(`  <h1>${"Min konto"}</h1>
                <p>${"En side hvor man kan logge ind og se sine tidligere køb, følge sin ordre, anmelde returneinger/klager mm."}</p>
    `);
});

//Der kunne også være sider som er mere specifikke/unikke for en webshop. eks.
//Andmeldelser og vurderinger
//Søgefunktion
//Produktfiltrering
//Rabat -og kampagneside
//Produktanbefalinger
//Kundeanmeldelser
//Sociale medie integration
//Live chat/support
//Nyhedsbrevstilmelding. Denne kunne også ligge på forsiden eller som en del af footeren, eller som en pop-up(modal) efter man har været på siden i xx tid.

app.listen(4000, () => {
	console.log("Server started on port 4000");
});
