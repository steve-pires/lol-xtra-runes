const _api: any = {
    lol_static_data_v3: 'https://euw1.api.riotgames.com/lol/static-data/v3/',
    api_key: 'RGAPI-18597450-6aa8-4054-a9e2-49d09327c5e3',
    locale_fr: 'fr_FR'
};

_api.sd_v3_endpoints = {
    runes: _api.lol_static_data_v3 + 'reforged-runes/',
    runes_paths: _api.lol_static_data_v3 + 'reforged-rune-paths/'
};

export const api = _api;