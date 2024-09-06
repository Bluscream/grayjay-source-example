export interface CountryData {
    name: string;
    shortname: string;
    language: string;
    currency: string;
    continent: string;
    localized?: {
        name: string;
        language: string;
        currency: string;
        continent: string;
    };
}

export const Countries: CountryData[] = [
    {
        name: "Unspecified / Global",
        shortname: "",
        language: "Default",
        currency: "Default",
        continent: "World"
    },
    {
        name: "Afghanistan",
        shortname: "AF",
        language: "Pashto",
        currency: "Afghan Afghani",
        continent: "Asia",
        localized: {
            name: "افغانستان",
            language: "پښتو",
            currency: "افغانی",
            continent: "آسیا"
        }
    },
    {
        name: "Åland Islands",
        shortname: "AX",
        language: "Swedish",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Åland",
            language: "Svenska",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Albania",
        shortname: "AL",
        language: "Albanian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Shqipëria",
            language: "Shqip",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "American Samoa",
        shortname: "AS",
        language: "English",
        currency: "US Dollar",
        continent: "Oceania",
        localized: {
            name: "America Sāmoa",
            language: "English",
            currency: "United States dollar",
            continent: "Oceania"
        }
    },
    {
        name: "Andorra",
        shortname: "AD",
        language: "Catalan",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Andorra",
            language: "Català",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Angola",
        shortname: "AO",
        language: "Portuguese",
        currency: "Angolan Kwanza",
        continent: "Africa",
        localized: {
            name: "Angola",
            language: "Português",
            currency: "Kwanza Angolano",
            continent: "África"
        }
    },
    {
        name: "Anguilla",
        shortname: "AI",
        language: "English",
        currency: "East Caribbean Dollar",
        continent: "North America",
        localized: {
            name: "Anguilla",
            language: "English",
            currency: "East Caribbean Dollar",
            continent: "North America"
        }
    },
    {
        name: "Antarctica",
        shortname: "AQ",
        language: "English",
        currency: "USD",
        continent: "Antarctica",
        localized: {
            name: "Antártida",
            language: "Inglés",
            currency: "Dólar estadounidense",
            continent: "Antártica"
        }
    },
    {
        name: "Antigua and Barbuda",
        shortname: "AG",
        language: "English",
        currency: "East Caribbean Dollar",
        continent: "Caribbean",
        localized: {
            name: "Antigua y Barbuda",
            language: "Inglés",
            currency: "Dólar del Caribe Oriental",
            continent: "Caribe"
        }
    },
    {
        name: "Argentina",
        shortname: "AR",
        language: "Spanish",
        currency: "Argentine Peso",
        continent: "South America",
        localized: {
            name: "Argentina",
            language: "Español",
            currency: "Peso Argentino",
            continent: "América del Sur"
        }
    },
    {
        name: "Armenia",
        shortname: "AM",
        language: "Armenian",
        currency: "Armenian Dram",
        continent: "Asia",
        localized: {
            name: "Հայաստան",
            language: "հայերեն",
            currency: "Դրամ",
            continent: "Ասիա"
        }
    },
    {
        name: "Aruba",
        shortname: "AW",
        language: "Dutch",
        currency: "Aruban Florin",
        continent: "South America",
        localized: {
            name: "Aruba",
            language: "Nederlands",
            currency: "Florijn Aruba",
            continent: "Zuid-Amerika"
        }
    },
    {
        name: "Australia",
        shortname: "AU",
        language: "English",
        currency: "Australian Dollar",
        continent: "Oceania",
        localized: {
            name: "Australia",
            language: "Inglés",
            currency: "Dólar australiano",
            continent: "Oceanía"
        }
    },
    {
        name: "Austria",
        shortname: "AT",
        language: "German",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Österreich",
            language: "Deutsch",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Azerbaijan",
        shortname: "AZ",
        language: "Azerbaijani",
        currency: "Azerbaijani Manat",
        continent: "Asia",
        localized: {
            name: "Azərbaycan",
            language: "Azərbaycanca",
            currency: "Manat Azərbaycan",
            continent: "Asiya"
        }
    },
    {
        name: "Bahamas",
        shortname: "BS",
        language: "English",
        currency: "Bahamian Dollar",
        continent: "North America",
        localized: {
            name: "Bahamas",
            language: "Inglés",
            currency: "Dólar bahameño",
            continent: "Norteamérica"
        }
    },
    {
        name: "Bahrain",
        shortname: "BH",
        language: "Arabic",
        currency: "Bahraini Dinar",
        continent: "Asia",
        localized: {
            name: "البحرين",
            language: "العربية",
            currency: "دينار بحريني",
            continent: "آسيا"
        }
    },
    {
        name: "Bangladesh",
        shortname: "BD",
        language: "Bengali",
        currency: "Taka",
        continent: "Asia",
        localized: {
            name: "বাংলাদেশ",
            language: "বাংলা",
            currency: "টাকা",
            continent: "এশিয়া"
        }
    },
    {
        name: "Barbados",
        shortname: "BB",
        language: "English",
        currency: "Barbadian Dollar",
        continent: "Caribbean",
        localized: {
            name: "Barbados",
            language: "Inglés",
            currency: "Dólar barbadense",
            continent: "Caribe"
        }
    },
    {
        name: "Belarus",
        shortname: "BY",
        language: "Belarusian",
        currency: "Belarusian Ruble",
        continent: "Europe",
        localized: {
            name: "Белоруссия",
            language: "Белорусский",
            currency: "Рубль белорусский",
            continent: "Европа"
        }
    },
    {
        name: "Belgium",
        shortname: "BE",
        language: "Dutch",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "België",
            language: "Nederlands",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Belize",
        shortname: "BZ",
        language: "English",
        currency: "Belize Dollar",
        continent: "North America",
        localized: {
            name: "Belize",
            language: "Inglés",
            currency: "Dólar de Belice",
            continent: "Norteamérica"
        }
    },
    {
        name: "Benin",
        shortname: "BJ",
        language: "French",
        currency: "West African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Bénin",
            language: "Français",
            currency: "Franc CFA de l'Afrique",
            continent: "Afrique"
        }
    },
    {
        name: "Bermuda",
        shortname: "BM",
        language: "English",
        currency: "Bermudian Dollar",
        continent: "North America",
        localized: {
            name: "Bermuda",
            language: "English",
            currency: "Bermudian Dollar",
            continent: "North America"
        }
    },
    {
        name: "Bhutan",
        shortname: "BT",
        language: "Dzongkha",
        currency: "Bhutanese Ngultrum",
        continent: "Asia",
        localized: {
            name: "འབྲུག་",
            language: "རྒྱ་ཡིག",
            currency: "Ngultrum Bhūtānī",
            continent: "Asia"
        }
    },
    {
        name: "Bolivia",
        shortname: "BO",
        language: "Spanish",
        currency: "Bolivian Boliviano",
        continent: "South America",
        localized: {
            name: "Bolivia",
            language: "Español",
            currency: "Boliviano",
            continent: "América del Sur"
        }
    },
    {
        name: "Bosnia and Herzegovina",
        shortname: "BA",
        language: "Bosnian",
        currency: "Bosnian Convertible Mark",
        continent: "Europe",
        localized: {
            name: "Bosna i Hercegovina",
            language: "Bosanski",
            currency: "Konvertibilna marka Bosne i Hercegovine",
            continent: "Evropa"
        }
    },
    {
        name: "Botswana",
        shortname: "BW",
        language: "English",
        currency: "Botswana Pula",
        continent: "Africa",
        localized: {
            name: "Botswana",
            language: "English",
            currency: "Pula Botswana",
            continent: "Africa"
        }
    },
    {
        name: "Brazil",
        shortname: "BR",
        language: "Portuguese",
        currency: "Brazilian Real",
        continent: "South America",
        localized: {
            name: "Brasil",
            language: "Português",
            currency: "Real Brasileiro",
            continent: "América do Sul"
        }
    },
    {
        name: "British Indian Ocean Territory",
        shortname: "IO",
        language: "English",
        currency: "Sterling",
        continent: "Asia",
        localized: {
            name: "British Indian Ocean Territory",
            language: "English",
            currency: "Sterling",
            continent: "Asia"
        }
    },
    {
        name: "Brunei",
        shortname: "BN",
        language: "Malay",
        currency: "Brunei Dollar",
        continent: "Asia",
        localized: {
            name: "بروناي",
            language: "بهاس ملايو",
            currency: "دولار بروني",
            continent: "آسيا"
        }
    },
    {
        name: "Bulgaria",
        shortname: "BG",
        language: "Bulgarian",
        currency: "Bulgarian Lev",
        continent: "Europe",
        localized: {
            name: "България",
            language: "Български",
            currency: "Лев България",
            continent: "Европа"
        }
    },
    {
        name: "Burkina Faso",
        shortname: "BF",
        language: "French",
        currency: "West African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Burkina Faso",
            language: "Français",
            currency: "Franc CFA de l'Afrique",
            continent: "Afrique"
        }
    },
    {
        name: "Burundi",
        shortname: "BI",
        language: "Kirundi",
        currency: "Burundian Franc",
        continent: "Africa",
        localized: {
            name: "Burundi",
            language: "Kirundi",
            currency: "Franc Burundien",
            continent: "Afrique"
        }
    },
    {
        name: "Cambodia",
        shortname: "KH",
        language: "Khmer",
        currency: "Cambodian Riel",
        continent: "Asia",
        localized: {
            name: "កម្ពុជា",
            language: "ភាសាខ្មែរ",
            currency: "រៀលកម្ពុជា",
            continent: "អាស៊ី"
        }
    },
    {
        name: "Cameroon",
        shortname: "CM",
        language: "French",
        currency: "Central African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Cameroun",
            language: "Français",
            currency: "Franc CFA de l'Afrique Centrale",
            continent: "Afrique"
        }
    },
    {
        name: "Canada",
        shortname: "CA",
        language: "English",
        currency: "Canadian Dollar",
        continent: "North America",
        localized: {
            name: "Canada",
            language: "Anglais",
            currency: "Dollar Canadien",
            continent: "Amérique du Nord"
        }
    },
    {
        name: "Cape Verde",
        shortname: "CV",
        language: "Portuguese",
        currency: "Cape Verdean Escudo",
        continent: "Africa",
        localized: {
            name: "Cabo Verde",
            language: "Português",
            currency: "Escudo Caboverdiano",
            continent: "África"
        }
    },
    {
        name: "Central African Republic",
        shortname: "CF",
        language: "French",
        currency: "Central African CFA Franc",
        continent: "Africa",
        localized: {
            name: "République centrafricaine",
            language: "Français",
            currency: "Franc CFA de l'Afrique Centrale",
            continent: "Afrique"
        }
    },
    {
        name: "Chad",
        shortname: "TD",
        language: "French",
        currency: "Central African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Tchad",
            language: "Français",
            currency: "Franc CFA de l'Afrique Centrale",
            continent: "Afrique"
        }
    },
    {
        name: "Chile",
        shortname: "CL",
        language: "Spanish",
        currency: "Chilean Peso",
        continent: "South America",
        localized: {
            name: "Chile",
            language: "Español",
            currency: "Peso Chileno",
            continent: "América del Sur"
        }
    },
    {
        name: "China",
        shortname: "CN",
        language: "Mandarin Chinese",
        currency: "Renminbi Yuan",
        continent: "Asia",
        localized: {
            name: "中国",
            language: "汉语",
            currency: "人民币",
            continent: "亚洲"
        }
    },
    {
        name: "Christmas Island",
        shortname: "CX",
        language: "English",
        currency: "AUD",
        continent: "Asia",
        localized: {
            name: "Christmas Island",
            language: "English",
            currency: "AUD",
            continent: "Asia"
        }
    },
    {
        name: "Cocos (Keeling) Islands",
        shortname: "CC",
        language: "English",
        currency: "AUD",
        continent: "Asia",
        localized: {
            name: "Cocos (Keeling) Islands",
            language: "English",
            currency: "AUD",
            continent: "Asia"
        }
    },
    {
        name: "Colombia",
        shortname: "CO",
        language: "Spanish",
        currency: "Colombian Peso",
        continent: "South America",
        localized: {
            name: "Colombia",
            language: "Español",
            currency: "Peso Colombiano",
            continent: "América del Sur"
        }
    },
    {
        name: "Comoros",
        shortname: "KM",
        language: "Comorian",
        currency: "Comorian Franc",
        continent: "Africa",
        localized: {
            name: "Comores",
            language: "Comore",
            currency: "Franc Comoro",
            continent: "Afrique"
        }
    },
    {
        name: "Congo (Brazzaville)",
        shortname: "CG",
        language: "French",
        currency: "Central African CFA Franc",
        continent: "Africa",
        localized: {
            name: "République du Congo",
            language: "Français",
            currency: "Franc CFA de l'Afrique Centrale",
            continent: "Afrique"
        }
    },
    {
        name: "Congo (Kinshasa)",
        shortname: "CD",
        language: "French",
        currency: "Congolese Franc",
        continent: "Africa",
        localized: {
            name: "République démocratique du Congo",
            language: "Français",
            currency: "Franc Congolais",
            continent: "Afrique"
        }
    },
    {
        name: "Cook Islands",
        shortname: "CK",
        language: "Cook Islands Maori",
        currency: "NZD",
        continent: "Oceania",
        localized: {
            name: "Cook Islands",
            language: "Cook Islands Maori",
            currency: "NZD",
            continent: "Oceania"
        }
    },
    {
        name: "Costa Rica",
        shortname: "CR",
        language: "Spanish",
        currency: "Costa Rican Colón",
        continent: "North America",
        localized: {
            name: "Costa Rica",
            language: "Español",
            currency: "Colon Costarricense",
            continent: "América del Norte"
        }
    },
    {
        name: "Côte d'Ivoire",
        shortname: "CI",
        language: "French",
        currency: "West African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Côte d'Ivoire",
            language: "Français",
            currency: "Franc CFA de l'Afrique",
            continent: "Afrique"
        }
    },
    {
        name: "Croatia",
        shortname: "HR",
        language: "Croatian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Hrvatska",
            language: "Hrvatski",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Cuba",
        shortname: "CU",
        language: "Spanish",
        currency: "Cuban Peso",
        continent: "Caribbean",
        localized: {
            name: "Cuba",
            language: "Español",
            currency: "Peso Cubano",
            continent: "Caribe"
        }
    },
    {
        name: "Cyprus",
        shortname: "CY",
        language: "Greek",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Κύπρος",
            language: "Ελληνικά",
            currency: "ΕΥΡΩ",
            continent: "Ευρώπη"
        }
    },
    {
        name: "Czech Republic",
        shortname: "CZ",
        language: "Czech",
        currency: "Czech Koruna",
        continent: "Europe",
        localized: {
            name: "Česká republika",
            language: "Čeština",
            currency: "Koruna Česká",
            continent: "Evropa"
        }
    },
    {
        name: "Denmark",
        shortname: "DK",
        language: "Danish",
        currency: "Danish Krone",
        continent: "Europe",
        localized: {
            name: "Danmark",
            language: "Dansk",
            currency: "Danske kroner",
            continent: "Europa"
        }
    },
    {
        name: "Djibouti",
        shortname: "DJ",
        language: "French",
        currency: "Jibuti Dinar",
        continent: "Africa",
        localized: {
            name: "Djibouti",
            language: "Français",
            currency: "Dinar Djibouti",
            continent: "Afrique"
        }
    },
    {
        name: "Dominica",
        shortname: "DM",
        language: "English",
        currency: "Eastern Caribbean Dollar",
        continent: "Caribbean",
        localized: {
            name: "Dominica",
            language: "English",
            currency: "Eastern Caribbean Dollar",
            continent: "Caribe"
        }
    },
    {
        name: "Dominican Republic",
        shortname: "DO",
        language: "Spanish",
        currency: "Dominican Peso",
        continent: "Caribbean",
        localized: {
            name: "República Dominicana",
            language: "Español",
            currency: "Peso Dominicano",
            continent: "Caribe"
        }
    },
    {
        name: "Ecuador",
        shortname: "EC",
        language: "Spanish",
        currency: "US Dollar",
        continent: "South America",
        localized: {
            name: "Ecuador",
            language: "Español",
            currency: "Dólar estadounidense",
            continent: "América del Sur"
        }
    },
    {
        name: "Egypt",
        shortname: "EG",
        language: "Arabic",
        currency: "Egyptian Pound",
        continent: "Africa",
        localized: {
            name: "مصر",
            language: "عربي",
            currency: "جنيه مصري",
            continent: "إفريقيا"
        }
    },
    {
        name: "El Salvador",
        shortname: "SV",
        language: "Spanish",
        currency: "US Dollar",
        continent: "North America",
        localized: {
            name: "El Salvador",
            language: "Español",
            currency: "Dólar estadounidense",
            continent: "América del Norte"
        }
    },
    {
        name: "Equatorial Guinea",
        shortname: "GQ",
        language: "Spanish",
        currency: "Central African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Guinea Ecuatorial",
            language: "Español",
            currency: "Franc CFA de l'Afrique Centrale",
            continent: "Afrika"
        }
    },
    {
        name: "Eritrea",
        shortname: "ER",
        language: "Tigrinya",
        currency: "Eritrean Nakfa",
        continent: "Africa",
        localized: {
            name: "ኤርትራ",
            language: "ትግሪና",
            currency: "ናቅፍና",
            continent: "አፍሪቃ"
        }
    },
    {
        name: "Estonia",
        shortname: "EE",
        language: "Estonian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Eesti",
            language: "Eesti keel",
            currency: "Euro",
            continent: "Euroopa"
        }
    },
    {
        name: "Ethiopia",
        shortname: "ET",
        language: "Amharic",
        currency: "Ethiopian Birr",
        continent: "Africa",
        localized: {
            name: "ኢትዮጵያ",
            language: "አማርኛ",
            currency: "ብር",
            continent: "አፍሪቃ"
        }
    },
    {
        name: "Fiji",
        shortname: "FJ",
        language: "Fijian",
        currency: "Fijian Dollar",
        continent: "Oceania",
        localized: {
            name: "Viti",
            language: "Fijian",
            currency: "Fijian Dollar",
            continent: "Oceania"
        }
    },
    {
        name: "Finland",
        shortname: "FI",
        language: "Finnish",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Suomi",
            language: "Suomen kieli",
            currency: "Euro",
            continent: "Eurooppa"
        }
    },
    {
        name: "France",
        shortname: "FR",
        language: "French",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "France",
            language: "Français",
            currency: "Euro",
            continent: "Europe"
        }
    },
    {
        name: "Gabon",
        shortname: "GA",
        language: "French",
        currency: "Gabonese Franc",
        continent: "Africa",
        localized: {
            name: "Gabon",
            language: "Français",
            currency: "Franc Gabonais",
            continent: "Afrique"
        }
    },
    {
        name: "Georgia",
        shortname: "GE",
        language: "Georgian",
        currency: "Lari",
        continent: "Asia",
        localized: {
            name: "საქართველო",
            language: "ქართული",
            currency: "ლარი",
            continent: "აზია"
        }
    },
    {
        name: "Germany",
        shortname: "DE",
        language: "German",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Deutschland",
            language: "Deutsch",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Ghana",
        shortname: "GH",
        language: "English",
        currency: "Ghanaian Cedi",
        continent: "Africa",
        localized: {
            name: "Ghana",
            language: "English",
            currency: "Cedi Ghanaien",
            continent: "Afrique"
        }
    },
    {
        name: "Gibraltar",
        shortname: "GI",
        language: "English",
        currency: "Gibraltar Pound",
        continent: "Europe",
        localized: {
            name: "Gibraltar",
            language: "Inglés",
            currency: "Libra Gibraltar",
            continent: "Europa"
        }
    },
    {
        name: "Greece",
        shortname: "GR",
        language: "Greek",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Ελλάδα",
            language: "Ελληνικά",
            currency: "ΕΥΡΩ",
            continent: "Ευρώπη"
        }
    },
    {
        name: "Greenland",
        shortname: "GL",
        language: "Greenlandic",
        currency: "DKK",
        continent: "North America",
        localized: {
            name: "Grønland",
            language: "Kalaallisut",
            currency: "DKK",
            continent: "Amérique du Nord"
        }
    },
    {
        name: "Grenada",
        shortname: "GD",
        language: "English",
        currency: "Eastern Caribbean Dollar",
        continent: "Caribbean",
        localized: {
            name: "Grenade",
            language: "Anglais",
            currency: "Dollar de la Caraïbe orientale",
            continent: "Caribe"
        }
    },
    {
        name: "Guatemala",
        shortname: "GT",
        language: "Spanish",
        currency: "Quetzal",
        continent: "Central America",
        localized: {
            name: "Guatemala",
            language: "Español",
            currency: "Quetzal",
            continent: "América Central"
        }
    },
    {
        name: "Guinea",
        shortname: "GN",
        language: "French",
        currency: "Guinean Franc",
        continent: "Africa",
        localized: {
            name: "Guinée",
            language: "Français",
            currency: "Franc Guinéen",
            continent: "Afrique"
        }
    },
    {
        name: "Guinea-Bissau",
        shortname: "GW",
        language: "Portuguese",
        currency: "West African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Guiné-Bissau",
            language: "Português",
            currency: "Franc CFA de l'Afrique",
            continent: "África"
        }
    },
    {
        name: "Guyana",
        shortname: "GY",
        language: "English",
        currency: "Guyanese Dollar",
        continent: "South America",
        localized: {
            name: "Guyane",
            language: "Anglais",
            currency: "Dollar Guyanien",
            continent: "Amérique du Sud"
        }
    },
    {
        name: "Haiti",
        shortname: "HT",
        language: "Creole",
        currency: "Haitian Gourde",
        continent: "Caribbean",
        localized: {
            name: "Haïti",
            language: "Créole",
            currency: "Gourde Haïtienne",
            continent: "Caribe"
        }
    },
    {
        name: "Holy See (Vatican City)",
        shortname: "VA",
        language: "Italian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Stato della Città del Vaticano",
            language: "Italiano",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Hungary",
        shortname: "HU",
        language: "Hungarian",
        currency: "Forint",
        continent: "Europe",
        localized: {
            name: "Magyarország",
            language: "Magyar",
            currency: "Ft",
            continent: "Európa"
        }
    },
    {
        name: "Iceland",
        shortname: "IS",
        language: "Icelandic",
        currency: "Icelandic Króna",
        continent: "Europe",
        localized: {
            name: "Ísland",
            language: "Íslenska",
            currency: "Króna Íslands",
            continent: "Evropa"
        }
    },
    {
        name: "India",
        shortname: "IN",
        language: "Hindi",
        currency: "Indian Rupee",
        continent: "Asia",
        localized: {
            name: "भारत",
            language: "हिंदी",
            currency: "रुपया",
            continent: "एशिया"
        }
    },
    {
        name: "Indonesia",
        shortname: "ID",
        language: "Indonesian",
        currency: "Indonesian Rupiah",
        continent: "Asia",
        localized: {
            name: "Indonésie",
            language: "Bahasa Indonesia",
            currency: "Rupiah Indonésien",
            continent: "Asie"
        }
    },
    {
        name: "Iran",
        shortname: "IR",
        language: "Persian",
        currency: "Iranian Rial",
        continent: "Asia",
        localized: {
            name: "ایران",
            language: "فارسی",
            currency: "ریال ایران",
            continent: "آسيا"
        }
    },
    {
        name: "Iraq",
        shortname: "IQ",
        language: "Arabic",
        currency: "Iraqi Dinar",
        continent: "Asia",
        localized: {
            name: "العراق",
            language: "العربية",
            currency: "دينار عراقي",
            continent: "آسيا"
        }
    },
    {
        name: "Ireland",
        shortname: "IE",
        language: "Irish",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Éire",
            language: "Gaeilge",
            currency: "Euro",
            continent: "Európa"
        }
    },
    {
        name: "Israel",
        shortname: "IL",
        language: "Hebrew",
        currency: "Shekel",
        continent: "Asia",
        localized: {
            name: "ישראל",
            language: "עברית",
            currency: "שקל",
            continent: "אסיה"
        }
    },
    {
        name: "Italy",
        shortname: "IT",
        language: "Italian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Italia",
            language: "Italiano",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Jamaica",
        shortname: "JM",
        language: "English",
        currency: "Jamaican Dollar",
        continent: "Caribbean",
        localized: {
            name: "Jamaïque",
            language: "Anglais",
            currency: "Dollar Jamaïcain",
            continent: "Caribe"
        }
    },
    {
        name: "Japan",
        shortname: "JP",
        language: "Japanese",
        currency: "Yen",
        continent: "Asia",
        localized: {
            name: "日本",
            language: "日本語",
            currency: "円",
            continent: "アジア"
        }
    },
    {
        name: "Jordan",
        shortname: "JO",
        language: "Arabic",
        currency: "Jordanian Dinar",
        continent: "Asia",
        localized: {
            name: "الأردن",
            language: "العربية",
            currency: "دينار اردني",
            continent: "آسيا"
        }
    },
    {
        name: "Kazakhstan",
        shortname: "KZ",
        language: "Kazakh",
        currency: "Tenge",
        continent: "Asia",
        localized: {
            name: "Қазақстан",
            language: "Қазақ тілі",
            currency: "Тенге",
            continent: "Азия"
        }
    },
    {
        name: "Kenya",
        shortname: "KE",
        language: "Swahili",
        currency: "Kenyan Shilling",
        continent: "Africa",
        localized: {
            name: "Kenya",
            language: "Swahili",
            currency: "Shilingi ya Kenya",
            continent: "Afrika"
        }
    },
    {
        name: "Kiribati",
        shortname: "KI",
        language: "Gilbertese",
        currency: "Australian Dollar",
        continent: "Oceania",
        localized: {
            name: "Kiribati",
            language: "Gilbertese",
            currency: "Dollar Australian",
            continent: "Oceania"
        }
    },
    {
        name: "North Korea",
        shortname: "KP",
        language: "Korean",
        currency: "Won",
        continent: "Asia",
        localized: {
            name: "조선 민주주의 인민 공화국",
            language: "한국어",
            currency: "원",
            continent: "아시아"
        }
    },
    {
        name: "South Korea",
        shortname: "KR",
        language: "Korean",
        currency: "Won",
        continent: "Asia",
        localized: {
            name: "대한민국",
            language: "한국어",
            currency: "원",
            continent: "아시아"
        }
    },
    {
        name: "Kosovo",
        shortname: "XK",
        language: "Albanian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Kosovës",
            language: "Shqip",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Kuwait",
        shortname: "KW",
        language: "Arabic",
        currency: "Kuwaiti Dinar",
        continent: "Asia",
        localized: {
            name: "الكويت",
            language: "العربية",
            currency: "دينار كويتي",
            continent: "آسيا"
        }
    },
    {
        name: "Kyrgyzstan",
        shortname: "KG",
        language: "Kyrgyz",
        currency: "Som",
        continent: "Asia",
        localized: {
            name: "Кыргызстан",
            language: "Кыргыз тили",
            currency: "Сом",
            continent: "Азия"
        }
    },
    {
        name: "Laos",
        shortname: "LA",
        language: "Lao",
        currency: "Laotian Kip",
        continent: "Asia",
        localized: {
            name: "ລາວ",
            language: "ລາວ",
            currency: "ກີບ",
            continent: "ອາຊີ"
        }
    },
    {
        name: "Latvia",
        shortname: "LV",
        language: "Latvian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Latvija",
            language: "Latviešu valoda",
            currency: "Euro",
            continent: "Eiropas"
        }
    },
    {
        name: "Lebanon",
        shortname: "LB",
        language: "Arabic",
        currency: "Lebanese Pound",
        continent: "Asia",
        localized: {
            name: "لبنان",
            language: "اللغة العربية",
            currency: "ليرة لبنانية",
            continent: "آسيا"
        }
    },
    {
        name: "Lesotho",
        shortname: "LS",
        language: "Sotho",
        currency: "Loti",
        continent: "Africa",
        localized: {
            name: "Lesotho",
            language: "Sesotho",
            currency: "Loti",
            continent: "Afrika"
        }
    },
    {
        name: "Liberia",
        shortname: "LR",
        language: "English",
        currency: "Liberian Dollar",
        continent: "Africa",
        localized: {
            name: "Liberia",
            language: "English",
            currency: "Liberian Dollar",
            continent: "Afrique"
        }
    },
    {
        name: "Libya",
        shortname: "LY",
        language: "Arabic",
        currency: "Libyan Dinar",
        continent: "Africa",
        localized: {
            name: "ليبيا",
            language: "العربية",
            currency: "دولار ليبي",
            continent: "أفريقيا"
        }
    },
    {
        name: "Liechtenstein",
        shortname: "LI",
        language: "German",
        currency: "Swiss Franc",
        continent: "Europe",
        localized: {
            name: "Liechtenstein",
            language: "Deutsch",
            currency: "Franken",
            continent: "Europa"
        }
    },
    {
        name: "Lithuania",
        shortname: "LT",
        language: "Lithuanian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Lietuva",
            language: "Lietuvių kalba",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Luxembourg",
        shortname: "LU",
        language: "Luxembourgish",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Luxemburg",
            language: "Lëtzebuergesch",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Macau",
        shortname: "MO",
        language: "Portuguese",
        currency: "Pataca",
        continent: "Asia",
        localized: {
            name: "Macau",
            language: "Português",
            currency: "Pataca",
            continent: "Ásia"
        }
    },
    {
        name: "Madagascar",
        shortname: "MG",
        language: "Malagasy",
        currency: "Ariary",
        continent: "Africa",
        localized: {
            name: "Madagascar",
            language: "Malagasy",
            currency: "Ariary",
            continent: "Afrika"
        }
    },
    {
        name: "Malawi",
        shortname: "MW",
        language: "Chewa",
        currency: "Kwacha",
        continent: "Africa",
        localized: {
            name: "Malawi",
            language: "Chewa",
            currency: "Kwacha",
            continent: "Afrika"
        }
    },
    {
        name: "Malaysia",
        shortname: "MY",
        language: "Malay",
        currency: "Ringgit",
        continent: "Asia",
        localized: {
            name: "Malaysia",
            language: "Bahasa Malaysia",
            currency: "Ringgit",
            continent: "Asia"
        }
    },
    {
        name: "Maldives",
        shortname: "MV",
        language: "Dhivehi",
        currency: "Rufiyaa",
        continent: "Asia",
        localized: {
            name: "މިނިސްލާއަކު",
            language: "ދިވެހި",
            currency: "ރީޖޭ",
            continent: "އިޢުތު"
        }
    },
    {
        name: "Mali",
        shortname: "ML",
        language: "French",
        currency: "West African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Mali",
            language: "Français",
            currency: "Franc CFA de l'Afrique",
            continent: "Afrique"
        }
    },
    {
        name: "Malta",
        shortname: "MT",
        language: "Maltese",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Malta",
            language: "Maltese",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Marshall Islands",
        shortname: "MH",
        language: "Marshallese",
        currency: "United States Dollar",
        continent: "Oceania",
        localized: {
            name: "Marshall Islands",
            language: "Marshallese",
            currency: "United States Dollar",
            continent: "Oceania"
        }
    },
    {
        name: "Martinique",
        shortname: "MQ",
        language: "French",
        currency: "Euro",
        continent: "Caribbean",
        localized: {
            name: "Martinique",
            language: "Français",
            currency: "Euro",
            continent: "Caribe"
        }
    },
    {
        name: "Mauritania",
        shortname: "MR",
        language: "Arabic",
        currency: "Ouguiya",
        continent: "Africa",
        localized: {
            name: "موريتانيا",
            language: "اللغة العربية",
            currency: "أوقية",
            continent: "إفريقيا"
        }
    },
    {
        name: "Mauritius",
        shortname: "MU",
        language: "Creole",
        currency: "MGA",
        continent: "Africa",
        localized: {
            name: "Maurice",
            language: "Créole",
            currency: "Roupie mauricienne",
            continent: "Afrique"
        }
    },
    {
        name: "Mexico",
        shortname: "MX",
        language: "Spanish",
        currency: "Mexican Peso",
        continent: "North America",
        localized: {
            name: "México",
            language: "Español",
            currency: "Peso Mexicano",
            continent: "América del Norte"
        }
    },
    {
        name: "Micronesia",
        shortname: "FM",
        language: "English",
        currency: "United States Dollar",
        continent: "Oceania",
        localized: {
            name: "Micronesia",
            language: "English",
            currency: "United States Dollar",
            continent: "Oceania"
        }
    },
    {
        name: "Moldova",
        shortname: "MD",
        language: "Romanian",
        currency: "Leu",
        continent: "Europe",
        localized: {
            name: "Moldova",
            language: "Română",
            currency: "Leu",
            continent: "Europa"
        }
    },
    {
        name: "Monaco",
        shortname: "MC",
        language: "French",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Monaco",
            language: "Français",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Mongolia",
        shortname: "MN",
        language: "Mongolian",
        currency: "Tögrög",
        continent: "Asia",
        localized: {
            name: "Монгол Улс",
            language: "Монгол хэл",
            currency: "Төгрөг",
            continent: "Азия"
        }
    },
    {
        name: "Monaco",
        shortname: "MC",
        language: "French",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Monaco",
            language: "Français",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Mongolia",
        shortname: "MN",
        language: "Mongolian",
        currency: "Tögrög",
        continent: "Asia",
        localized: {
            name: "Монгол Улс",
            language: "Монгол хэл",
            currency: "Төгрөг",
            continent: "Азия"
        }
    },
    {
        name: "Montenegro",
        shortname: "ME",
        language: "Montenegrin",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Crna Gora",
            language: "Crnogorski jezicko",
            currency: "Euro",
            continent: "Evropa"
        }
    },
    {
        name: "Morocco",
        shortname: "MA",
        language: "Arabic",
        currency: "Dirham",
        continent: "Africa",
        localized: {
            name: "المغرب",
            language: "اللغة العربية",
            currency: "درهم",
            continent: "إفريقيا"
        }
    },
    {
        name: "Mozambique",
        shortname: "MZ",
        language: "Portuguese",
        currency: "Metical",
        continent: "Africa",
        localized: {
            name: "Moçambique",
            language: "Português",
            currency: "Metical",
            continent: "África"
        }
    },
    {
        name: "Myanmar",
        shortname: "MM",
        language: "Burmese",
        currency: "Kyat",
        continent: "Asia",
        localized: {
            name: "မြန်မာနိုင်ငံ",
            language: "မြန်မာစာ",
            currency: "ကျေးတီး",
            continent: "အာရှတိုက်"
        }
    },
    {
        name: "Namibia",
        shortname: "NA",
        language: "English",
        currency: "Namibian Dollar",
        continent: "Africa",
        localized: {
            name: "Namibia",
            language: "English",
            currency: "Namibian Dollar",
            continent: "Afrika"
        }
    },
    {
        name: "Nauru",
        shortname: "NR",
        language: "Nauruan",
        currency: "Australian Dollar",
        continent: "Oceania",
        localized: {
            name: "Nauru",
            language: "Nauruan",
            currency: "Dollar Australian",
            continent: "Oceania"
        }
    },
    {
        name: "Nepal",
        shortname: "NP",
        language: "Nepali",
        currency: "Rupee",
        continent: "Asia",
        localized: {
            name: "नेपाल",
            language: "नेपाली",
            currency: "रुपैयाँ",
            continent: "एशिया"
        }
    },
    {
        name: "Netherlands",
        shortname: "NL",
        language: "Dutch",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Nederland",
            language: "Nederlands",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "New Zealand",
        shortname: "NZ",
        language: "English",
        currency: "New Zealand Dollar",
        continent: "Oceania",
        localized: {
            name: "New Zealand",
            language: "English",
            currency: "New Zealand Dollar",
            continent: "Oceania"
        }
    },
    {
        name: "Nicaragua",
        shortname: "NI",
        language: "Spanish",
        currency: "Córdoba",
        continent: "Central America",
        localized: {
            name: "Nicaragua",
            language: "Español",
            currency: "Córdoba",
            continent: "América Central"
        }
    },
    {
        name: "Niger",
        shortname: "NE",
        language: "French",
        currency: "West African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Niger",
            language: "Français",
            currency: "Franc CFA de l'Afrique",
            continent: "Afrique"
        }
    },
    {
        name: "Nigeria",
        shortname: "NG",
        language: "English",
        currency: "Naira",
        continent: "Africa",
        localized: {
            name: "Nigeria",
            language: "English",
            currency: "Naira",
            continent: "Afrika"
        }
    },
    {
        name: "Norway",
        shortname: "NO",
        language: "Norwegian",
        currency: "Krone",
        continent: "Europe",
        localized: {
            name: "Norge",
            language: "Norsk",
            currency: "Kroner",
            continent: "Europa"
        }
    },
    {
        name: "Oman",
        shortname: "OM",
        language: "Arabic",
        currency: "Rial",
        continent: "Asia",
        localized: {
            name: "عمان",
            language: "اللغة العربية",
            currency: "ريال",
            continent: "آسيا"
        }
    },
    {
        name: "Pakistan",
        shortname: "PK",
        language: "Urdu",
        currency: "Rupee",
        continent: "Asia",
        localized: {
            name: "پاکستان",
            language: "اردو",
            currency: "روپے",
            continent: "آسيا"
        }
    },
    {
        name: "Palau",
        shortname: "PW",
        language: "Palauan",
        currency: "US Dollar",
        continent: "Oceania",
        localized: {
            name: "Palau",
            language: "Palauan",
            currency: "US Dollar",
            continent: "Oceania"
        }
    },
    {
        name: "Panama",
        shortname: "PA",
        language: "Spanish",
        currency: "Balboa",
        continent: "Central America",
        localized: {
            name: "Panamá",
            language: "Español",
            currency: "Balboa",
            continent: "América Central"
        }
    },
    {
        name: "Papua New Guinea",
        shortname: "PG",
        language: "Tok Pisin",
        currency: "Kina",
        continent: "Oceania",
        localized: {
            name: "Papua New Guinea",
            language: "Tok Pisin",
            currency: "Kina",
            continent: "Oceania"
        }
    },
    {
        name: "Paraguay",
        shortname: "PY",
        language: "Spanish",
        currency: "Guaraní",
        continent: "South America",
        localized: {
            name: "Paraguay",
            language: "Español",
            currency: "Guaraní",
            continent: "Sur América"
        }
    },
    {
        name: "Peru",
        shortname: "PE",
        language: "Spanish",
        currency: "Sol",
        continent: "South America",
        localized: {
            name: "Perú",
            language: "Español",
            currency: "Sol",
            continent: "Sur América"
        }
    },
    {
        name: "Philippines",
        shortname: "PH",
        language: "Filipino",
        currency: "Peso",
        continent: "Asia",
        localized: {
            name: "Pilipinas",
            language: "Filipino",
            currency: "Peso",
            continent: "Asya"
        }
    },
    {
        name: "Poland",
        shortname: "PL",
        language: "Polish",
        currency: "Złoty",
        continent: "Europe",
        localized: {
            name: "Polska",
            language: "Polski",
            currency: "Złoty",
            continent: "Europa"
        }
    },
    {
        name: "Portugal",
        shortname: "PT",
        language: "Portuguese",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Portugal",
            language: "Português",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Puerto Rico",
        shortname: "PR",
        language: "Spanish",
        currency: "US Dollar",
        continent: "Caribbean",
        localized: {
            name: "Puerto Rico",
            language: "Español",
            currency: "Dolar estadounidense",
            continent: "Caribe"
        }
    },
    {
        name: "Qatar",
        shortname: "QA",
        language: "Arabic",
        currency: "Rial",
        continent: "Asia",
        localized: {
            name: "قطر",
            language: "العربية",
            currency: "ريال قطري",
            continent: "آسيا"
        }
    },
    {
        name: "Romania",
        shortname: "RO",
        language: "Romanian",
        currency: "Leu",
        continent: "Europe",
        localized: {
            name: "România",
            language: "Română",
            currency: "Leu",
            continent: "Europa"
        }
    },
    {
        name: "Russia",
        shortname: "RU",
        language: "Russian",
        currency: "Ruble",
        continent: "Asia/Europe",
        localized: {
            name: "Россия",
            language: "русский",
            currency: "рубль",
            continent: "Азия/Европа"
        }
    },
    {
        name: "Rwanda",
        shortname: "RW",
        language: "Kinyarwanda",
        currency: "Franc",
        continent: "Africa",
        localized: {
            name: "Rwanda",
            language: "Kinyarwanda",
            currency: "Franc",
            continent: "Afrika"
        }
    },
    {
        name: "Saint Kitts and Nevis",
        shortname: "KN",
        language: "English",
        currency: "East Caribbean Dollar",
        continent: "Caribbean",
        localized: {
            name: "Saint Kitts and Nevis",
            language: "English",
            currency: "East Caribbean Dollar",
            continent: "Caribe"
        }
    },
    {
        name: "Saint Lucia",
        shortname: "LC",
        language: "English",
        currency: "East Caribbean Dollar",
        continent: "Caribbean",
        localized: {
            name: "Saint Lucia",
            language: "English",
            currency: "East Caribbean Dollar",
            continent: "Caribe"
        }
    },
    {
        name: "Saint Vincent and the Grenadines",
        shortname: "VC",
        language: "English",
        currency: "East Caribbean Dollar",
        continent: "Caribbean",
        localized: {
            name: "Saint Vincent and the Grenadines",
            language: "English",
            currency: "East Caribbean Dollar",
            continent: "Caribe"
        }
    },
    {
        name: "Samoa",
        shortname: "WS",
        language: "Samoan",
        currency: "Tālā",
        continent: "Oceania",
        localized: {
            name: "Samoa",
            language: "Samoan",
            currency: "Tālā",
            continent: "Oceania"
        }
    },
    {
        name: "San Marino",
        shortname: "SM",
        language: "Italian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "San Marino",
            language: "Italiano",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "São Tomé and Principe",
        shortname: "ST",
        language: "Portuguese",
        currency: "Dobrador",
        continent: "Africa",
        localized: {
            name: "São Tomé e Príncipe",
            language: "Português",
            currency: "Dobra",
            continent: "Afrika"
        }
    },
    {
        name: "Saudi Arabia",
        shortname: "SA",
        language: "Arabic",
        currency: "Riyal",
        continent: "Asia",
        localized: {
            name: "السعودية",
            language: "العربية",
            currency: "ريال",
            continent: "آسيا"
        }
    },
    {
        name: "Senegal",
        shortname: "SN",
        language: "Wolof",
        currency: "West African CFA Franc",
        continent: "Africa",
        localized: {
            name: "Sénégal",
            language: "Wolof",
            currency: "Franc CFA de l'Afrique",
            continent: "Afrique"
        }
    },
    {
        name: "Serbia",
        shortname: "RS",
        language: "Serbian",
        currency: "Dinar",
        continent: "Europe",
        localized: {
            name: "Србија",
            language: "Српски",
            currency: "Динар",
            continent: "Европа"
        }
    },
    {
        name: "Seychelles",
        shortname: "SC",
        language: "Creole",
        currency: "Rupee",
        continent: "Africa",
        localized: {
            name: "Seychelles",
            language: "Créole",
            currency: "Rupee",
            continent: "Afrika"
        }
    },
    {
        name: "Sierra Leone",
        shortname: "SL",
        language: "English",
        currency: "Leone",
        continent: "Africa",
        localized: {
            name: "Sierra Leone",
            language: "English",
            currency: "Leone",
            continent: "Afrika"
        }
    },
    {
        name: "Singapore",
        shortname: "SG",
        language: "English",
        currency: "Singapore Dollar",
        continent: "Asia",
        localized: {
            name: "Singapore",
            language: "English",
            currency: "Singapore Dollar",
            continent: "Asia"
        }
    },
    {
        name: "Sint Maarten",
        shortname: "SX",
        language: "Dutch",
        currency: "Guilder",
        continent: "Caribbean",
        localized: {
            name: "Sint Maarten",
            language: "Nederlands",
            currency: "Gulden",
            continent: "Caribe"
        }
    },
    {
        name: "Slovakia",
        shortname: "SK",
        language: "Slovak",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Slovensko",
            language: "Slovencina",
            currency: "Euro",
            continent: "Európa"
        }
    },
    {
        name: "Slovenia",
        shortname: "SI",
        language: "Slovenian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Slovenija",
            language: "Slovenski jezik",
            currency: "Euro",
            continent: "Evropa"
        }
    },
    {
        name: "Solomon Islands",
        shortname: "SB",
        language: "Melanesian",
        currency: "Solomon Islands Dollar",
        continent: "Oceania",
        localized: {
            name: "Solomon Islands",
            language: "Melanesian",
            currency: "Solomon Islands Dollar",
            continent: "Oceania"
        }
    },
    {
        name: "Somalia",
        shortname: "SO",
        language: "Somali",
        currency: "Shilling",
        continent: "Africa",
        localized: {
            name: "Soomaaliya",
            language: "Soomaaliga",
            currency: "Shillings",
            continent: "Afrika"
        }
    },
    {
        name: "South Africa",
        shortname: "ZA",
        language: "Afrikaans",
        currency: "Rand",
        continent: "Africa",
        localized: {
            name: "Suid-Afrika",
            language: "Afrikaans",
            currency: "Rand",
            continent: "Afrika"
        }
    },
    {
        name: "South Africa",
        shortname: "ZA",
        language: "Afrikaans",
        currency: "Rand",
        continent: "Africa",
        localized: {
            name: "Suid-Afrika",
            language: "Afrikaans",
            currency: "Rand",
            continent: "Afrika"
        }
    },
    {
        name: "South Korea",
        shortname: "KR",
        language: "Korean",
        currency: "Won",
        continent: "Asia",
        localized: {
            name: "대한민국",
            language: "한국어",
            currency: "원",
            continent: "아시아"
        }
    },
    {
        name: "Spain",
        shortname: "ES",
        language: "Spanish",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "España",
            language: "Español",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Sri Lanka",
        shortname: "LK",
        language: "Sinhala",
        currency: "Rupee",
        continent: "Asia",
        localized: {
            name: "ශ්රී ලංකා",
            language: "සිංහල",
            currency: "රුපියල්",
            continent: "ஆசியா"
        }
    },
    {
        name: "Sudan",
        shortname: "SD",
        language: "Arabic",
        currency: "Pound",
        continent: "Africa",
        localized: {
            name: "السودان",
            language: "اللغة العربية",
            currency: "جنيه",
            continent: "أفريقيا"
        }
    },
    {
        name: "Suriname",
        shortname: "SR",
        language: "Dutch",
        currency: "Guilder",
        continent: "South America",
        localized: {
            name: "Suriname",
            language: "Nederlands",
            currency: "Gulden",
            continent: "Sur América"
        }
    },
    {
        name: "Sweden",
        shortname: "SE",
        language: "Swedish",
        currency: "Krona",
        continent: "Europe",
        localized: {
            name: "Sverige",
            language: "Svenska",
            currency: "Krona",
            continent: "Europa"
        }
    },
    {
        name: "Switzerland",
        shortname: "CH",
        language: "German",
        currency: "Franc",
        continent: "Europe",
        localized: {
            name: "Schweiz",
            language: "Deutsch",
            currency: "Franken",
            continent: "Europa"
        }
    },
    {
        name: "Syria",
        shortname: "SY",
        language: "Arabic",
        currency: "Pound",
        continent: "Asia",
        localized: {
            name: "سوريا",
            language: "اللغة العربية",
            currency: "ليرة سورية",
            continent: "آسيا"
        }
    },
    {
        name: "Taiwan",
        shortname: "TW",
        language: "Chinese",
        currency: "Dollar",
        continent: "Asia",
        localized: {
            name: "台灣",
            language: "中文",
            currency: "新台幣",
            continent: "亞洲"
        }
    },
    {
        name: "Tajikistan",
        shortname: "TJ",
        language: "Tajik",
        currency: "Somoni",
        continent: "Asia",
        localized: {
            name: "Тоҷикистон",
            language: "Тоҷикӣ",
            currency: "Сомони",
            continent: "Азия"
        }
    },
    {
        name: "Tanzania",
        shortname: "TZ",
        language: "Swahili",
        currency: "Shilling",
        continent: "Africa",
        localized: {
            name: "Tanzania",
            language: "Swahili",
            currency: "Shilingi",
            continent: "Afrika"
        }
    },
    {
        name: "Thailand",
        shortname: "TH",
        language: "Thai",
        currency: "Baht",
        continent: "Asia",
        localized: {
            name: "ประเทศไทย",
            language: "ภาษาไทย",
            currency: "บาท",
            continent: "เอเชีย"
        }
    },
    {
        name: "Timor-Leste",
        shortname: "TL",
        language: "Portuguese",
        currency: "Dollar",
        continent: "Asia",
        localized: {
            name: "Timor-Leste",
            language: "Português",
            currency: "Dólar",
            continent: "Asia"
        }
    },
    {
        name: "Togo",
        shortname: "TG",
        language: "French",
        currency: "Franc",
        continent: "Africa",
        localized: {
            name: "Togo",
            language: "Français",
            currency: "Franc",
            continent: "Afrique"
        }
    },
    {
        name: "Tonga",
        shortname: "TO",
        language: "Tongan",
        currency: "Pa'anga",
        continent: "Oceania",
        localized: {
            name: "Tonga",
            language: "Tongan",
            currency: "Pa'anga",
            continent: "Oceania"
        }
    },
    {
        name: "Trinidad and Tobago",
        shortname: "TT",
        language: "English",
        currency: "Dollar",
        continent: "Caribbean",
        localized: {
            name: "Trinidad and Tobago",
            language: "English",
            currency: "Dollar",
            continent: "Caribe"
        }
    },
    {
        name: "Tunisia",
        shortname: "TN",
        language: "Arabic",
        currency: "Dinar",
        continent: "Africa",
        localized: {
            name: "تونس",
            language: "اللغة العربية",
            currency: "دينار",
            continent: "أفريقيا"
        }
    },
    {
        name: "Turkey",
        shortname: "TR",
        language: "Turkish",
        currency: "Lira",
        continent: "Asia/Europe",
        localized: {
            name: "Türkiye",
            language: "Türkçe",
            currency: "Lira",
            continent: "Avrupa/Asya"
        }
    },
    {
        name: "Turkmenistan",
        shortname: "TM",
        language: "Turkmene",
        currency: "Manat",
        continent: "Asia",
        localized: {
            name: "Türkmenistan",
            language: "Turkmene",
            currency: "Manat",
            continent: "Asiya"
        }
    },
    {
        name: "Tuvalu",
        shortname: "TV",
        language: "Tuvaluan",
        currency: "Dollar",
        continent: "Oceania",
        localized: {
            name: "Tuvalu",
            language: "Tuvaluan",
            currency: "Dollar",
            continent: "Oceania"
        }
    },
    {
        name: "Uganda",
        shortname: "UG",
        language: "English",
        currency: "Shilling",
        continent: "Africa",
        localized: {
            name: "Uganda",
            language: "English",
            currency: "Shilling",
            continent: "Afrika"
        }
    },
    {
        name: "Ukraine",
        shortname: "UA",
        language: "Ukrainian",
        currency: "Hryvnia",
        continent: "Europe",
        localized: {
            name: "Україна",
            language: "Українська",
            currency: "Гривня",
            continent: "Євразія"
        }
    },
    {
        name: "United Arab Emirates",
        shortname: "AE",
        language: "Arabic",
        currency: "Dirham",
        continent: "Asia",
        localized: {
            name: "الإمارات العربية المتحدة",
            language: "اللغة العربية",
            currency: "د.إ.",
            continent: "آسيا"
        }
    },
    {
        name: "United Kingdom",
        shortname: "GB",
        language: "English",
        currency: "Pound",
        continent: "Europe",
        localized: {
            name: "United Kingdom",
            language: "English",
            currency: "Pound",
            continent: "Europe"
        }
    },
    {
        name: "United States",
        shortname: "US",
        language: "English",
        currency: "Dollar",
        continent: "North America",
        localized: {
            name: "United States",
            language: "English",
            currency: "Dollar",
            continent: "North America"
        }
    },
    {
        name: "Uruguay",
        shortname: "UY",
        language: "Spanish",
        currency: "Peso",
        continent: "South America",
        localized: {
            name: "Uruguay",
            language: "Español",
            currency: "Peso",
            continent: "Sur América"
        }
    },
    {
        name: "Uzbekistan",
        shortname: "UZ",
        language: "Uzbek",
        currency: "Som",
        continent: "Asia",
        localized: {
            name: "Ўзбекистон",
            language: "Ўзбек тили",
            currency: "Сум",
            continent: "Осиё"
        }
    },
    {
        name: "Vanuatu",
        shortname: "VU",
        language: "Bislama",
        currency: "Vatu",
        continent: "Oceania",
        localized: {
            name: "Vanuatu",
            language: "Bislama",
            currency: "Vatu",
            continent: "Oseania"
        }
    },
    {
        name: "Vatican City",
        shortname: "VA",
        language: "Italian",
        currency: "Euro",
        continent: "Europe",
        localized: {
            name: "Vaticano",
            language: "Italiano",
            currency: "Euro",
            continent: "Europa"
        }
    },
    {
        name: "Venezuela",
        shortname: "VE",
        language: "Spanish",
        currency: "Bolivar",
        continent: "South America",
        localized: {
            name: "Venezuela",
            language: "Español",
            currency: "Bolívar",
            continent: "Sur América"
        }
    },
    {
        name: "Vietnam",
        shortname: "VN",
        language: "Vietnamese",
        currency: "Dong",
        continent: "Asia",
        localized: {
            name: "Việt Nam",
            language: "Tiếng Việt",
            currency: "Đồng",
            continent: "Áo"
        }
    },
    {
        name: "Yemen",
        shortname: "YE",
        language: "Arabic",
        currency: "Rial",
        continent: "Middle East",
        localized: {
            name: "اليمن",
            language: "اللغة العربية",
            currency: "ريال يمنى",
            continent: "الشرق الأوسط"
        }
    },
    {
        name: "Zambia",
        shortname: "ZM",
        language: "English",
        currency: "Kwacha",
        continent: "Africa",
        localized: {
            name: "Zambia",
            language: "English",
            currency: "Kwacha",
            continent: "Afrika"
        }
    },
    {
        name: "Zimbabwe",
        shortname: "ZW",
        language: "English",
        currency: "Dollar",
        continent: "Africa",
        localized: {
            name: "Zimbabwe",
            language: "English",
            currency: "Dollar",
            continent: "Afrika"
        }
    }
];

export function getCountryByName(name: string): CountryData {
    const ret = {name: `Unknown (${name})`, shortname: "US", currency: "Unknown", language: "English", continent: "Unknown"};
    if (!Array.isArray(Countries) || Countries.length === 0) {
      console.error("Invalid or empty countries array");
      return ret;
    }
    const lowerCaseName = name.toLowerCase();
    for (const country of Countries) {
      if (country.name.toLowerCase() === lowerCaseName) {
        return country;
      }
    }
    console.warn(`No country found matching "${name}"`);
    return ret;
  }
  