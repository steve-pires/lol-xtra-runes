const _api: any = {
    lol_static_data_v3: 'https://euw1.api.riotgames.com/lol/static-data/v3/',
    api_key: 'RGAPI-a20e1703-c199-4d74-99e7-cc1210c4da32',
    locale_fr: 'fr_FR'
};

_api.sd_v3_endpoints = {
    runes: _api.lol_static_data_v3 + 'reforged-runes/',
    runes_paths: _api.lol_static_data_v3 + 'reforged-rune-paths/'
};

export const api = _api;