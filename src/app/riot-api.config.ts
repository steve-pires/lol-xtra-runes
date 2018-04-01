const _api: any = {
    cors_proxy: 'https://cors-anywhere.herokuapp.com/',
    lol_static_data_v3: 'https://euw1.api.riotgames.com/lol/static-data/v3/',
    api_key: 'RGAPI-92c7a8b3-63cb-4d43-baa7-7f3668ae2cfc',
    locale_fr: 'fr_FR'
};

_api.sd_v3_endpoints = {
    runes: _api.cors_proxy + _api.lol_static_data_v3 + 'reforged-runes/',
    runes_paths: _api.cors_proxy + _api.lol_static_data_v3 + 'reforged-rune-paths/'
};

export const api = _api;
