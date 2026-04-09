export interface Destination {
  name: string;
  slug: string;
  country: string;
  countrySlug: string;
  emoji: string;
  rating: number;
  description: string;
  longDescription: string;
  highlights: string[];
  topAttractions: { name: string; description: string }[];
  practicalInfo: { label: string; value: string }[];
  faq: { question: string; answer: string }[];
}

export const destinations: Destination[] = [
  {
    name: 'Berlijn',
    slug: 'berlijn',
    country: 'Duitsland',
    countrySlug: 'duitsland',
    emoji: '🇩🇪',
    rating: 8.9,
    description: 'Bruisende hoofdstad met een rijke geschiedenis, wereldberoemde nachtleven en een bloeiende kunstscene.',
    longDescription: 'Berlijn is een stad die nooit stilstaat. Van de overblijfselen van de Berlijnse Muur tot de bruisende wijken van Kreuzberg en Friedrichshain, elke hoek van deze stad vertelt een verhaal. De Duitse hoofdstad combineert een indrukwekkende geschiedenis met een van de meest levendige culturele scenes van Europa. Of je nu houdt van musea, streetfood, nachtleven of gewoon door wijken wilt slenteren met een uniek karakter — Berlijn heeft het allemaal.',
    highlights: ['Geschiedenis', 'Nachtleven', 'Street Art', 'Foodscene'],
    topAttractions: [
      { name: 'Brandenburger Tor', description: 'Het iconische symbool van Berlijn en de Duitse eenwording. Een must-see voor elke bezoeker.' },
      { name: 'East Side Gallery', description: 'Het langste openluchtmuseum ter wereld: 1,3 km beschilderde Berlijnse Muur.' },
      { name: 'Museuminsel', description: 'UNESCO Werelderfgoed met vijf wereldberoemde musea op een eiland in de Spree.' },
      { name: 'Reichstag', description: 'Het Duitse parlementsgebouw met een spectaculaire glazen koepel met panoramisch uitzicht.' },
      { name: 'Mauerpark Vlooienmarkt', description: 'Elke zondag een bruisende markt met vintage vondsten, streetfood en karaoke.' },
    ],
    practicalInfo: [
      { label: 'Beste reistijd', value: 'Mei - September' },
      { label: 'Gemiddeld budget', value: '€80-120 per dag' },
      { label: 'Taal', value: 'Duits (Engels veel gesproken)' },
      { label: 'Valuta', value: 'Euro (€)' },
      { label: 'Reistijd vanaf NL', value: '~6 uur met trein, 1,5 uur vliegen' },
      { label: 'Openbaar vervoer', value: 'Uitstekend (U-Bahn, S-Bahn, tram, bus)' },
    ],
    faq: [
      { question: 'Wat is de beste tijd om Berlijn te bezoeken?', answer: 'De beste periode is van mei tot september. Het weer is dan aangenaam (15-25°C) en er zijn talloze buitenevenementen en festivals. Het voorjaar (april-mei) is ideaal als je drukte wilt vermijden.' },
      { question: 'Hoeveel dagen heb je nodig in Berlijn?', answer: 'We raden minimaal 3-4 dagen aan om de belangrijkste bezienswaardigheden te zien. Wil je ook de wijken en het nachtleven ontdekken, plan dan 5-7 dagen. Berlijn heeft genoeg te bieden voor een week.' },
      { question: 'Is Berlijn een dure stad?', answer: 'Berlijn is vergeleken met andere Europese hoofdsteden vrij betaalbaar. Een gemiddeld budget is €80-120 per dag inclusief accommodatie, eten en activiteiten. Streetfood en lokale restaurants zijn erg goed geprijsd.' },
      { question: 'Hoe kom je het best van Schiphol naar Berlijn?', answer: 'Je kunt vliegen (1,5 uur) of de trein nemen (ongeveer 6 uur met ICE via Hannover). De trein is comfortabel en brengt je direct naar Berlin Hauptbahnhof in het centrum.' },
      { question: 'Welke wijken zijn het leukst om te verblijven?', answer: 'Mitte is ideaal voor eerste bezoekers (centraal, bij alle bezienswaardigheden). Kreuzberg en Friedrichshain zijn perfect voor nachtleven en een alternatieve sfeer. Prenzlauer Berg is gezellig en familievriendelijk.' },
      { question: 'Is de Berlin WelcomeCard de moeite waard?', answer: 'Ja, als je van plan bent om veel musea te bezoeken en het openbaar vervoer te gebruiken. De kaart geeft onbeperkt OV en tot 50% korting op meer dan 200 attracties. Vanaf €29 voor 48 uur.' },
    ],
  },
  {
    name: 'Rotterdam',
    slug: 'rotterdam',
    country: 'Nederland',
    countrySlug: 'nederland',
    emoji: '🇳🇱',
    rating: 8.5,
    description: 'Architectuurhoofdstad van Nederland met spectaculaire skyline, maritieme sfeer en bruisende food scene.',
    longDescription: 'Rotterdam is de stoerste stad van Nederland. Na het bombardement in 1940 is de stad herbouwd met gedurfde architectuur die nergens anders ter wereld te vinden is. Van de Markthal tot de Erasmusbrug, van de Kubuswoningen tot de Depot Boijmans — Rotterdam durft. De stad heeft ook een fantastische foodscene, met de Fenix Food Factory en talloze internationale restaurants.',
    highlights: ['Architectuur', 'Haven', 'Foodscene', 'Design'],
    topAttractions: [
      { name: 'Markthal', description: 'Spectaculair gebouw met een kleurrijk plafondkunstwerk en verse markt.' },
      { name: 'Erasmusbrug', description: 'Het iconische symbool van Rotterdam, ook wel De Zwaan genoemd.' },
      { name: 'Kubuswoningen', description: 'De beroemde scheefstaande huizen van architect Piet Blom.' },
      { name: 'Depot Boijmans', description: 'Het eerste publiek toegankelijke kunstdepot ter wereld.' },
      { name: 'Fenix Food Factory', description: 'Foodhal op Katendrecht met lokale producenten en ambachtelijk eten.' },
    ],
    practicalInfo: [
      { label: 'Beste reistijd', value: 'April - Oktober' },
      { label: 'Gemiddeld budget', value: '€70-110 per dag' },
      { label: 'Taal', value: 'Nederlands (Engels overal)' },
      { label: 'Valuta', value: 'Euro (€)' },
      { label: 'Reistijd', value: 'Centraal in NL, 30 min vanaf Schiphol' },
      { label: 'Openbaar vervoer', value: 'Metro, tram, bus, waterbus' },
    ],
    faq: [
      { question: 'Wat maakt Rotterdam uniek als stedentrip?', answer: 'Rotterdam heeft de meest moderne en gedurfde architectuur van Europa. Het is een stad die constant in beweging is, met nieuwe gebouwen, festivals en een jonge, creatieve energie die je nergens anders vindt in Nederland.' },
      { question: 'Hoeveel dagen heb je nodig voor Rotterdam?', answer: 'Voor de belangrijkste highlights is 2-3 dagen genoeg. Wil je ook de haven, Katendrecht en de wijken ontdekken, plan dan 3-4 dagen.' },
      { question: 'Is Rotterdam geschikt voor een weekendje weg?', answer: 'Absoluut! Rotterdam is perfect voor een lang weekend. De stad is compact genoeg om te voet of met de metro te ontdekken, en er is genoeg te doen voor 2-3 dagen.' },
    ],
  },
  {
    name: 'Barcelona',
    slug: 'barcelona',
    country: 'Spanje',
    countrySlug: 'spanje',
    emoji: '🇪🇸',
    rating: 9.1,
    description: 'Zonnige metropool aan de Middellandse Zee met adembenemende Gaudi-architectuur en een ongeevenaarde sfeer.',
    longDescription: 'Barcelona is de stad waar architectuur, strand en cultuur samenkomen. De meesterwerken van Antoni Gaudi, de gezellige tapasbarretjes in de gotische wijk, de levendige Ramblas en het strand op loopafstand van het centrum maken het een van de meest geliefde stedentrips van Europa.',
    highlights: ['Gaudi', 'Strand', 'Tapas', 'Cultuur'],
    topAttractions: [
      { name: 'Sagrada Familia', description: 'Gaudi\'s onvoltooide meesterwerk en het meest bezochte monument van Spanje.' },
      { name: 'Park Guell', description: 'Kleurrijk mozaiekpark met panoramisch uitzicht over de stad.' },
      { name: 'La Rambla', description: 'De beroemde boulevard van Barcelona, vol straatkunstenaars en terrassen.' },
      { name: 'Barri Gotic', description: 'De middeleeuwse gotische wijk met smalle straatjes en verborgen pleinen.' },
      { name: 'Barceloneta Strand', description: 'Het stadsstrand waar locals en toeristen samenkomen.' },
    ],
    practicalInfo: [
      { label: 'Beste reistijd', value: 'April - Juni, September - Oktober' },
      { label: 'Gemiddeld budget', value: '€90-140 per dag' },
      { label: 'Taal', value: 'Spaans & Catalaans' },
      { label: 'Valuta', value: 'Euro (€)' },
      { label: 'Reistijd vanaf NL', value: '~2 uur vliegen' },
      { label: 'Openbaar vervoer', value: 'Metro, bus, tram' },
    ],
    faq: [
      { question: 'Wanneer is de beste tijd om Barcelona te bezoeken?', answer: 'Het voorjaar (april-juni) en het najaar (september-oktober) zijn ideaal. Het is dan lekker warm maar niet te heet, en de drukte van het hoogseizoen is er niet.' },
      { question: 'Hoeveel dagen heb je nodig in Barcelona?', answer: 'Minimaal 4-5 dagen om de belangrijkste bezienswaardigheden, het strand en de gastronomie te ontdekken. Een week is ideaal voor een ontspannen bezoek.' },
    ],
  },
  {
    name: 'Rome',
    slug: 'rome',
    country: 'Italie',
    countrySlug: 'italie',
    emoji: '🇮🇹',
    rating: 9.0,
    description: 'De Eeuwige Stad met 2.000+ jaar geschiedenis, ongeevenaarde kunstschatten en de beste pasta ter wereld.',
    longDescription: 'Rome is een openluchtmuseum waar je bij elke stap over geschiedenis struikelt. Van het Colosseum tot het Vaticaan, van de Trevifontein tot de Spaanse Trappen — Rome is een stad die je overweldigt met schoonheid.',
    highlights: ['Geschiedenis', 'Kunst', 'Eten', 'Architectuur'],
    topAttractions: [
      { name: 'Colosseum', description: 'Het iconische amfitheater uit 80 na Christus, een van de Nieuwe Zeven Wereldwonderen.' },
      { name: 'Vaticaanstad', description: 'De Sixtijnse Kapel, Sint-Pietersbasiliek en Vaticaanse Musea.' },
      { name: 'Trevifontein', description: 'De beroemdste fontein ter wereld. Gooi een munt en je keert terug naar Rome.' },
      { name: 'Pantheon', description: 'Een 2.000 jaar oud tempel met de grootste ongewapende betonnen koepel ter wereld.' },
    ],
    practicalInfo: [
      { label: 'Beste reistijd', value: 'Maart - Mei, September - November' },
      { label: 'Gemiddeld budget', value: '€100-150 per dag' },
      { label: 'Taal', value: 'Italiaans' },
      { label: 'Valuta', value: 'Euro (€)' },
      { label: 'Reistijd vanaf NL', value: '~2,5 uur vliegen' },
    ],
    faq: [
      { question: 'Wat moet je gezien hebben in Rome?', answer: 'Het Colosseum, Vaticaanstad (Sixtijnse Kapel), de Trevifontein, het Pantheon en de Spaanse Trappen zijn de absolute must-sees.' },
      { question: 'Is Rome duur?', answer: 'Rome kan duur zijn, maar met een budget van €100-150 per dag kun je prima uit de voeten. Eet waar de locals eten en vermijd toeristische restaurants bij de bezienswaardigheden.' },
    ],
  },
  {
    name: 'Lissabon',
    slug: 'lissabon',
    country: 'Portugal',
    countrySlug: 'portugal',
    emoji: '🇵🇹',
    rating: 8.8,
    description: 'Betoverende havenstad op zeven heuvels met pasteis de nata, fado-muziek en kleurrijke azulejo-tegels.',
    longDescription: 'Lissabon is een van de meest charmante hoofdsteden van Europa. Gebouwd op zeven heuvels met uitzicht over de Taag, biedt de stad een unieke mix van nostalgie en moderniteit.',
    highlights: ['Azulejos', 'Fado', 'Pasteis de Nata', 'Tramlijnen'],
    topAttractions: [
      { name: 'Tram 28', description: 'De iconische gele tram die door de historische wijken Alfama en Graca slingert.' },
      { name: 'Torre de Belem', description: 'UNESCO Werelderfgoed en symbool van het Portugese ontdekkingstijdperk.' },
      { name: 'Alfama', description: 'De oudste wijk van Lissabon met smalle steegjes, fado-cafes en miradouros.' },
    ],
    practicalInfo: [
      { label: 'Beste reistijd', value: 'Maart - Oktober' },
      { label: 'Gemiddeld budget', value: '€70-110 per dag' },
      { label: 'Taal', value: 'Portugees' },
      { label: 'Valuta', value: 'Euro (€)' },
      { label: 'Reistijd vanaf NL', value: '~3 uur vliegen' },
    ],
    faq: [
      { question: 'Is Lissabon een goedkope stad?', answer: 'Ja, Lissabon is een van de meest betaalbare hoofdsteden van West-Europa. Een dagbudget van €70-110 is realistisch inclusief accommodatie, eten en activiteiten.' },
    ],
  },
  {
    name: 'Praag',
    slug: 'praag',
    country: 'Tsjechie',
    countrySlug: 'tsjechie',
    emoji: '🇨🇿',
    rating: 8.7,
    description: 'Sprookjesachtige stad met gotische architectuur, de beroemde Karelsbrug en het beste bier ter wereld.',
    longDescription: 'Praag is alsof je in een sprookje terechtkomt. De gotische torens, de Karelsbrug bij zonsopgang, het majestueuze kasteel op de heuvel en de gezellige biercafes maken het een van de populairste stedentrips van Europa.',
    highlights: ['Architectuur', 'Bier', 'Karelsbrug', 'Nachtleven'],
    topAttractions: [
      { name: 'Karelsbrug', description: 'De 600 jaar oude brug met 30 barokbeelden en een spectaculair uitzicht.' },
      { name: 'Praagse Burcht', description: 'Het grootste kasteel complex ter wereld met de Sint-Vituskathedraal.' },
      { name: 'Oude Stadsplein', description: 'Het hart van Praag met het astronomische uurwerk en gotische kerken.' },
    ],
    practicalInfo: [
      { label: 'Beste reistijd', value: 'April - Juni, September - Oktober' },
      { label: 'Gemiddeld budget', value: '€60-90 per dag' },
      { label: 'Taal', value: 'Tsjechisch' },
      { label: 'Valuta', value: 'Tsjechische Kroon (CZK)' },
      { label: 'Reistijd vanaf NL', value: '~1,5 uur vliegen' },
    ],
    faq: [
      { question: 'Is Praag goedkoop?', answer: 'Ja! Praag is een van de goedkoopste stedentrips in Europa. Bier kost vaak minder dan €2, en een goed restaurant-maaltijd is er voor €10-15.' },
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getDestinationsByCountry(countrySlug: string): Destination[] {
  return destinations.filter((d) => d.countrySlug === countrySlug);
}
