export function getLogoPath(club: string): string {
    return `/images/logos/${getCountryByClub(club)}/${club}.png`;
}

export function getCountryByClub(club: string): string | null {
    for (const [country, clubs] of Object.entries(clubLogos)) {
        if (clubs.includes(club)) {
            return country;
        }
    }

    return null;
}

export function getClubByCountry(country: string): string[] {
    return clubLogos[country] || [];
}

export const clubLogos: { [key: string]: string[] } = {
    Belgium: [
        'Cercle Brugge',
        'Club Brugge KV',
        'FCV Dender EH',
        'KAA Gent',
        'KRC Genk',
        'KV Mechelen',
        'KVC Westerlo',
        'Oud-Heverlee Leuven',
        'RAAL La Louvière',
        'Royal Antwerp FC',
        'Royal Charleroi SC',
        'RSC Anderlecht',
        'Sint-Truidense VV',
        'Standard Liège',
        'Union Saint-Gilloise',
        'Zulte Waregem'
    ],
    England: [
        'AFC Bournemouth',
        'Arsenal FC',
        'Aston Villa',
        'Brentford FC',
        'Brighton & Hove Albion',
        'Burnley FC',
        'Chelsea FC',
        'Crystal Palace',
        'Everton FC',
        'Fulham FC',
        'Leeds United',
        'Liverpool FC',
        'Manchester City',
        'Manchester United',
        'Newcastle United',
        'Nottingham Forest',
        'Sunderland AFC',
        'Tottenham Hotspur',
        'West Ham United',
        'Wolverhampton Wanderers'
    ],
    France: [
        'AJ Auxerre',
        'Angers SCO',
        'AS Monaco',
        'FC Lorient',
        'FC Metz',
        'FC Nantes',
        'FC Toulouse',
        'Le Havre AC',
        'LOSC Lille',
        'OGC Nice',
        'Olympique Lyon',
        'Olympique Marseille',
        'Paris FC',
        'Paris Saint-Germain',
        'RC Lens',
        'RC Strasbourg Alsace',
        'Stade Brestois 29',
        'Stade Rennais FC'
    ],
    Germany: [
        '1.FC Heidenheim 1846',
        '1.FC Köln',
        '1.FC Union Berlin',
        '1.FSV Mainz 05',
        'Bayer 04 Leverkusen',
        'Bayern Munich',
        'Borussia Dortmund',
        'Borussia Mönchengladbach',
        'Eintracht Frankfurt',
        'FC Augsburg',
        'FC St. Pauli',
        'Hamburger SV',
        'RB Leipzig',
        'SC Freiburg',
        'SV Werder Bremen',
        'TSG 1899 Hoffenheim',
        'VfB Stuttgart',
        'VfL Wolfsburg'
    ],
    Italy: [
        'AC Milan',
        'ACF Fiorentina',
        'AS Roma',
        'Atalanta BC',
        'Bologna FC 1909',
        'Cagliari Calcio',
        'Como 1907',
        'Genoa CFC',
        'Hellas Verona',
        'Inter Milan',
        'Juventus FC',
        'Parma Calcio 1913',
        'Pisa Sporting Club',
        'SSC Napoli',
        'SS Lazio',
        'Torino FC',
        'Udinese Calcio',
        'US Cremonese',
        'US Lecce',
        'US Sassuolo'
    ],
    Netherlands: [
        'Ajax Amsterdam',
        'AZ Alkmaar',
        'Excelsior Rotterdam',
        'FC Groningen',
        'FC Utrecht',
        'FC Volendam',
        'Feyenoord Rotterdam',
        'Fortuna Sittard',
        'Go Ahead Eagles',
        'Heracles Almelo',
        'NAC Breda',
        'NEC Nijmegen',
        'PEC Zwolle',
        'PSV Eindhoven',
        'SC Heerenveen',
        'SC Telstar',
        'Sparta Rotterdam',
        'Twente Enschede FC'
    ],
    Portugal: [
        'Avs Futebol',
        'Casa Pia AC',
        'CD Nacional',
        'CD Santa Clara',
        'CD Tondela',
        'CF Estrela Amadora',
        'FC Alverca',
        'FC Arouca',
        'FC Famalicão',
        'FC Porto',
        'GD Estoril Praia',
        'Gil Vicente FC',
        'Moreirense FC',
        'Rio Ave FC',
        'SC Braga',
        'SL Benfica',
        'Sporting CP',
        'Vitória Guimarães SC'
    ],
    Scotland: [
        'Aberdeen FC',
        'Celtic FC',
        'Dundee FC',
        'Dundee United FC',
        'Falkirk FC',
        'Heart of Midlothian FC',
        'Hibernian FC',
        'Kilmarnock FC',
        'Livingston FC',
        'Motherwell FC',
        'Rangers FC',
        'St. Mirren FC'
    ],
    Spain: [
        'Athletic Bilbao',
        'Atlético de Madrid',
        'CA Osasuna',
        'Celta de Vigo',
        'Deportivo Alavés',
        'Elche CF',
        'FC Barcelona',
        'Getafe CF',
        'Girona FC',
        'Levante UD',
        'RCD Espanyol Barcelona',
        'RCD Mallorca',
        'Rayo Vallecano',
        'Real Betis Balompié',
        'Real Madrid',
        'Real Oviedo',
        'Real Sociedad',
        'Sevilla FC',
        'Valencia CF',
        'Villarreal CF'
    ]
};
