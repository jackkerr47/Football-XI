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

export function getLogoPath(country: string): string {
    return `/images/logos/${country}/`;
}
