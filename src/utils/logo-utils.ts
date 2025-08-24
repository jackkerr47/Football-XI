export interface LogoData {
    [country: string]: string[];
}

/**
 * Gets all available countries that have logos
 * @returns Array of country names
 */
export function getLogoCountries(): string[] {
    return [
        'Austria',
        'Belgium',
        'Bulgaria',
        'Croatia',
        'Czech Republic',
        'Denmark',
        'England',
        'France',
        'Germany',
        'Greece',
        'Israel',
        'Italy',
        'Netherlands',
        'Norway',
        'Poland',
        'Portugal',
        'Romania',
        'Russia',
        'Scotland',
        'Serbia',
        'Spain',
        'Sweden',
        'Switzerland',
        'Türkiye',
        'Ukraine'
    ];
}

/**
 * Gets all available leagues for a specific country
 * @param country The country name
 * @returns Array of league names
 */
export function getLeaguesByCountry(country: string): string[] {
    // This would typically scan the logos directory for the specific country
    // For now, returning a static mapping
    const leagueMap: Record<string, string[]> = {
        Austria: ['Bundesliga'],
        Belgium: ['Jupiler Pro League'],
        Bulgaria: ['efbet Liga'],
        Croatia: ['SuperSport HNL'],
        'Czech Republic': ['Chance Liga'],
        Denmark: ['Superliga'],
        England: ['Premier League'],
        France: ['Ligue 1'],
        Germany: ['Bundesliga'],
        Greece: ['Super League 1'],
        Israel: ["Ligat ha'Al"],
        Italy: ['Serie A'],
        Netherlands: ['Eredivisie'],
        Norway: ['Eliteserien'],
        Poland: ['PKO BP Ekstraklasa'],
        Portugal: ['Liga Portugal'],
        Romania: ['SuperLiga'],
        Russia: ['Premier Liga'],
        Scotland: ['Scottish Premiership'],
        Serbia: ['Super liga Srbije'],
        Spain: ['LaLiga'],
        Sweden: ['Allsvenskan'],
        Switzerland: ['Super League'],
        Türkiye: ['Süper Lig'],
        Ukraine: ['Premier Liga']
    };

    return leagueMap[country] || [];
}

/**
 * Gets organized logo data for the hierarchical dropdown
 * @returns Object with countries as keys and arrays of leagues as values
 */
export function getLogoData(): LogoData {
    const countries = getLogoCountries();
    const logoData: LogoData = {};

    countries.forEach((country) => {
        logoData[country] = getLeaguesByCountry(country);
    });

    return logoData;
}

/**
 * Gets the path to a specific logo
 * @param country The country name
 * @param league The league name (optional)
 * @returns The path to the logo file
 */
export function getLogoPath(country: string, league?: string): string {
    if (league) {
        return `/images/logos/${country} - ${league}/`;
    }
    return `/images/logos/${country}/`;
}

/**
 * Gets all available logos for a country
 * @param country The country name
 * @returns Array of logo file names
 */
export function getCountryLogos(country: string): string[] {
    // This would typically scan the directory and return actual file names
    // For now, returning a placeholder
    return [];
}
