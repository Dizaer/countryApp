export interface Country {
    name:         Name;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       string;
    unMember:     boolean;
    currencies:   Currencies;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    languages:    Languages;
    translations: Translations;
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  string;
    capitalInfo:  CapitalInfo;
    cioc?:        string;
    subregion?:   string;
    borders?:     string[];
    gini?:        Gini;
    fifa?:        string;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    signs?: string[];
    side:   string;
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export interface Currencies {
    shp?: Aed;
    lsl?: Aed;
    zar?: Aed;
    usd?: Aed;
    isk?: Aed;
    ars?: Aed;
    huf?: Aed;
    twd?: Aed;
    aud?: Aed;
    dzd?: Aed;
    mad?: Aed;
    mru?: Aed;
    xcd?: Aed;
    xpf?: Aed;
    crc?: Aed;
    thb?: Aed;
    htg?: Aed;
    tvd?: Aed;
    nzd?: Aed;
    xof?: Aed;
    hnl?: Aed;
    idr?: Aed;
    cve?: Aed;
    xaf?: Aed;
    lak?: Aed;
    ugx?: Aed;
    eur?: Aed;
    bif?: Aed;
    php?: Aed;
    gip?: Aed;
    dkk?: Aed;
    gnf?: Aed;
    bhd?: Aed;
    srd?: Aed;
    cdf?: Aed;
    yer?: Aed;
    sos?: Aed;
    czk?: Aed;
    sbd?: Aed;
    nok?: Aed;
    fok?: Aed;
    uzs?: Aed;
    vuv?: Aed;
    egp?: Aed;
    gbp?: Aed;
    kes?: Aed;
    lkr?: Aed;
    rwf?: Aed;
    ils?: Aed;
    jod?: Aed;
    ron?: Aed;
    bdt?: Aed;
    pen?: Aed;
    sgd?: Aed;
    try?: Aed;
    ttd?: Aed;
    afn?: Aed;
    vnd?: Aed;
    awg?: Aed;
    ckd?: Aed;
    zmw?: Aed;
    azn?: Aed;
    hkd?: Aed;
    tmt?: Aed;
    kpw?: Aed;
    mzn?: Aed;
    pab?: Aed;
    cop?: Aed;
    ang?: Aed;
    ern?: Aed;
    tzs?: Aed;
    sdg?: Aed;
    fjd?: Aed;
    aoa?: Aed;
    chf?: Aed;
    npr?: Aed;
    kzt?: Aed;
    mdl?: Aed;
    fkp?: Aed;
    pkr?: Aed;
    amd?: Aed;
    wst?: Aed;
    jep?: Aed;
    bwp?: Aed;
    clp?: Aed;
    bmd?: Aed;
    dop?: Aed;
    scr?: Aed;
    gtq?: Aed;
    qar?: Aed;
    tjs?: Aed;
    mga?: Aed;
    gmd?: Aed;
    ngn?: Aed;
    bsd?: Aed;
    kwd?: Aed;
    syp?: Aed;
    mvr?: Aed;
    ssp?: Aed;
    szl?: Aed;
    irr?: Aed;
    pyg?: Aed;
    all?: Aed;
    brl?: Aed;
    rsd?: Aed;
    bzd?: Aed;
    mmk?: Aed;
    ves?: Aed;
    imp?: Aed;
    aed?: Aed;
    bgn?: Aed;
    lrd?: Aed;
    pln?: Aed;
    iqd?: Aed;
    bnd?: Aed;
    top?: Aed;
    kid?: Aed;
    cuc?: Aed;
    cup?: Aed;
    ghs?: Aed;
    zwl?: Aed;
    myr?: Aed;
    stn?: Aed;
    mnt?: Aed;
    cad?: Aed;
    sar?: Aed;
    bam?: Aed;
    etb?: Aed;
    nio?: Aed;
    omr?: Aed;
}

export interface Aed {
    name:   string;
    symbol: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Gini {
    the2017?: number;
    the2019?: number;
    the2018?: number;
    the2012?: number;
    the2014?: number;
    the2010?: number;
    the2015?: number;
    the2016?: number;
    the2013?: number;
    the1999?: number;
    the2003?: number;
    the2011?: number;
    the1992?: number;
    the2005?: number;
    the1998?: number;
    the2008?: number;
    the2009?: number;
    the2006?: number;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    eng?: string;
    sot?: string;
    mah?: string;
    isl?: string;
    grn?: string;
    spa?: string;
    hun?: string;
    zho?: string;
    nau?: string;
    ber?: string;
    mey?: string;
    fra?: string;
    tha?: string;
    hat?: string;
    tvl?: string;
    ind?: string;
    por?: string;
    lao?: string;
    nld?: string;
    pap?: string;
    swa?: string;
    lav?: string;
    cat?: string;
    run?: string;
    afr?: string;
    nbl?: string;
    nso?: string;
    ssw?: string;
    tsn?: string;
    tso?: string;
    ven?: string;
    xho?: string;
    zul?: string;
    fil?: string;
    dan?: string;
    cal?: string;
    cha?: string;
    ara?: string;
    kon?: string;
    lin?: string;
    lua?: string;
    som?: string;
    ces?: string;
    slk?: string;
    nor?: string;
    fao?: string;
    rus?: string;
    uzb?: string;
    bis?: string;
    niu?: string;
    sin?: string;
    tam?: string;
    kin?: string;
    est?: string;
    ron?: string;
    ben?: string;
    aym?: string;
    que?: string;
    msa?: string;
    tur?: string;
    prs?: string;
    pus?: string;
    tuk?: string;
    vie?: string;
    rar?: string;
    smo?: string;
    tkl?: string;
    pov?: string;
    aze?: string;
    ita?: string;
    lat?: string;
    de?:  string;
    kor?: string;
    ell?: string;
    swe?: string;
    sag?: string;
    hrv?: string;
    tir?: string;
    fij?: string;
    hif?: string;
    deu?: string;
    nep?: string;
    kaz?: string;
    urd?: string;
    hye?: string;
    nrf?: string;
    crs?: string;
    tgk?: string;
    mlt?: string;
    mlg?: string;
    sqi?: string;
    srp?: string;
    div?: string;
    cnr?: string;
    fas?: string;
    bjz?: string;
    mya?: string;
    glv?: string;
    bul?: string;
    pol?: string;
    arc?: string;
    ckb?: string;
    ton?: string;
    gil?: string;
    bwg?: string;
    kck?: string;
    khi?: string;
    ndc?: string;
    nde?: string;
    nya?: string;
    sna?: string;
    toi?: string;
    zib?: string;
    mon?: string;
    bos?: string;
    amh?: string;
    heb?: string;
    eus?: string;
    glc?: string;
    slv?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: NativeName;
}

export interface NativeName {
    eng?: Ara;
    sot?: Ara;
    mah?: Ara;
    isl?: Ara;
    grn?: Ara;
    spa?: Ara;
    hun?: Ara;
    zho?: Ara;
    nau?: Ara;
    ber?: Ara;
    mey?: Ara;
    fra?: Ara;
    tha?: Ara;
    hat?: Ara;
    tvl?: Ara;
    ind?: Ara;
    por?: Ara;
    lao?: Ara;
    nld?: Ara;
    pap?: Ara;
    swa?: Ara;
    lav?: Ara;
    cat?: Ara;
    run?: Ara;
    afr?: Ara;
    nbl?: Ara;
    nso?: Ara;
    ssw?: Ara;
    tsn?: Ara;
    tso?: Ara;
    ven?: Ara;
    xho?: Ara;
    zul?: Ara;
    fil?: Ara;
    dan?: Ara;
    cal?: Ara;
    cha?: Ara;
    ara?: Ara;
    kon?: Ara;
    lin?: Ara;
    lua?: Ara;
    som?: Ara;
    ces?: Ara;
    slk?: Ara;
    nor?: Ara;
    fao?: Ara;
    rus?: Ara;
    uzb?: Ara;
    bis?: Ara;
    niu?: Ara;
    sin?: Ara;
    tam?: Ara;
    kin?: Ara;
    est?: Ara;
    ron?: Ara;
    ben?: Ara;
    aym?: Ara;
    que?: Ara;
    msa?: Ara;
    tur?: Ara;
    prs?: Ara;
    pus?: Ara;
    tuk?: Ara;
    vie?: Ara;
    rar?: Ara;
    smo?: Ara;
    tkl?: Ara;
    pov?: Ara;
    aze?: Ara;
    ita?: Ara;
    lat?: Ara;
    bar?: Ara;
    kor?: Ara;
    ell?: Ara;
    swe?: Ara;
    sag?: Ara;
    hrv?: Ara;
    tir?: Ara;
    fij?: Ara;
    hif?: Ara;
    deu?: Ara;
    nep?: Ara;
    kaz?: Ara;
    urd?: Ara;
    hye?: Ara;
    nrf?: Ara;
    crs?: Ara;
    tgk?: Ara;
    mlt?: Ara;
    mlg?: Ara;
    sqi?: Ara;
    srp?: Ara;
    div?: Ara;
    cnr?: Ara;
    fas?: Ara;
    bjz?: Ara;
    mya?: Ara;
    glv?: Ara;
    bul?: Ara;
    pol?: Ara;
    arc?: Ara;
    ckb?: Ara;
    ton?: Ara;
    gil?: Ara;
    bwg?: Ara;
    kck?: Ara;
    khi?: Ara;
    ndc?: Ara;
    nde?: Ara;
    nya?: Ara;
    sna?: Ara;
    toi?: Ara;
    zib?: Ara;
    mon?: Ara;
    bos?: Ara;
    amh?: Ara;
    heb?: Ara;
    slv?: Ara;
}

export interface Ara {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export interface Translations {
    ara:  Ara;
    bre:  Ara;
    ces:  Ara;
    cym:  Ara;
    deu:  Ara;
    est:  Ara;
    fin:  Ara;
    fra:  Ara;
    hrv?: Ara;
    hun:  Ara;
    ita:  Ara;
    jpn?: Ara;
    kor:  Ara;
    nld:  Ara;
    per?: Ara;
    pol:  Ara;
    por:  Ara;
    rus:  Ara;
    slk:  Ara;
    spa:  Ara;
    srp:  Ara;
    swe:  Ara;
    tur:  Ara;
    urd:  Ara;
    zho?: Ara;
}
