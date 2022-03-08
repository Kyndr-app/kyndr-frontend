const countries = [
  {
    code: "se",
    country: "Sweden",
    callingCode: "46",
  },
  {
    code: "no",
    country: "Norway",
    callingCode: "47",
  },
  {
    code: "fi",
    country: "Finland",
    callingCode: "358",
  },
  {
    code: "dk",
    country: "Denmark",
    callingCode: "45",
  },
  {
    code: "ad",
    country: "Andorra",
    callingCode: "376",
  },
  {
    code: "ae",
    country: "United Arab Emirates",
    callingCode: "971",
  },
  {
    code: "af",
    country: "Afghanistan",
    callingCode: "93",
  },
  {
    code: "al",
    country: "Albania",
    callingCode: "355",
  },
  {
    code: "am",
    country: "Armenia",
    callingCode: "374",
  },
  {
    code: "ao",
    country: "Angola",
    callingCode: "244",
  },
  {
    code: "aq",
    country: "Antarctica",
    callingCode: "672",
  },
  {
    code: "ar",
    country: "Argentina",
    callingCode: "54",
  },
  {
    code: "at",
    country: "Austria",
    callingCode: "43",
  },
  {
    code: "au",
    country: "Australia",
    callingCode: "61",
  },
  {
    code: "aw",
    country: "Aruba",
    callingCode: "297",
  },
  {
    code: "ax",
    country: "Aland Islands",
    callingCode: "358",
  },
  {
    code: "az",
    country: "Azerbaijan",
    callingCode: "994",
  },
  {
    code: "ba",
    country: "Bosnia and Herzegovina",
    callingCode: "387",
  },
  {
    code: "bd",
    country: "Bangladesh",
    callingCode: "880",
  },
  {
    code: "be",
    country: "Belgium",
    callingCode: "32",
  },
  {
    code: "bf",
    country: "Burkina Faso",
    callingCode: "226",
  },
  {
    code: "bg",
    country: "Bulgaria",
    callingCode: "359",
  },
  {
    code: "bh",
    country: "Bahrain",
    callingCode: "973",
  },
  {
    code: "bi",
    country: "Burundi",
    callingCode: "257",
  },
  {
    code: "bj",
    country: "Benin",
    callingCode: "229",
  },
  {
    code: "bl",
    country: "Saint Barthelemy",
    callingCode: "590",
  },
  {
    code: "bn",
    country: "Brunei",
    callingCode: "673",
  },
  {
    code: "bo",
    country: "Bolivia",
    callingCode: "591",
  },
  {
    code: "br",
    country: "Brazil",
    callingCode: "55",
  },
  {
    code: "bt",
    country: "Bhutan",
    callingCode: "975",
  },
  {
    code: "bv",
    country: "Bouvet Island",
    callingCode: "47",
  },
  {
    code: "bw",
    country: "Botswana",
    callingCode: "267",
  },
  {
    code: "by",
    country: "Belarus",
    callingCode: "375",
  },
  {
    code: "bz",
    country: "Belize",
    callingCode: "501",
  },
  {
    code: "cc",
    country: "Cocos Islands",
    callingCode: "61",
  },
  {
    code: "cd",
    country: "Democratic Republic of the Congo",
    callingCode: "243",
  },
  {
    code: "cf",
    country: "Central African Republic",
    callingCode: "236",
  },
  {
    code: "cg",
    country: "Republic of the Congo",
    callingCode: "242",
  },
  {
    code: "ch",
    country: "Switzerland",
    callingCode: "41",
  },
  {
    code: "ci",
    country: "Ivory Coast",
    callingCode: "225",
  },
  {
    code: "ck",
    country: "Cook Islands",
    callingCode: "682",
  },
  {
    code: "cl",
    country: "Chile",
    callingCode: "56",
  },
  {
    code: "cm",
    country: "Cameroon",
    callingCode: "237",
  },
  {
    code: "cn",
    country: "China",
    callingCode: "86",
  },
  {
    code: "co",
    country: "Colombia",
    callingCode: "57",
  },
  {
    code: "cr",
    country: "Costa Rica",
    callingCode: "506",
  },
  {
    code: "cu",
    country: "Cuba",
    callingCode: "53",
  },
  {
    code: "cv",
    country: "Cape Verde",
    callingCode: "238",
  },
  {
    code: "cw",
    country: "Curacao",
    callingCode: "599",
  },
  {
    code: "cx",
    country: "Christmas Island",
    callingCode: "61",
  },
  {
    code: "cy",
    country: "Cyprus",
    callingCode: "357",
  },
  {
    code: "cz",
    country: "Czech Republic",
    callingCode: "420",
  },
  {
    code: "de",
    country: "Germany",
    callingCode: "49",
  },
  {
    code: "dj",
    country: "Djibouti",
    callingCode: "253",
  },

  {
    code: "dz",
    country: "Algeria",
    callingCode: "213",
  },
  {
    code: "ec",
    country: "Ecuador",
    callingCode: "593",
  },
  {
    code: "ee",
    country: "Estonia",
    callingCode: "372",
  },
  {
    code: "eg",
    country: "Egypt",
    callingCode: "20",
  },
  {
    code: "eh",
    country: "Western Sahara",
    callingCode: "212",
  },
  {
    code: "er",
    country: "Eritrea",
    callingCode: "291",
  },
  {
    code: "es",
    country: "Spain",
    callingCode: "34",
  },
  {
    code: "et",
    country: "Ethiopia",
    callingCode: "251",
  },
  {
    code: "fj",
    country: "Fiji",
    callingCode: "679",
  },
  {
    code: "fk",
    country: "Falkland Islands",
    callingCode: "500",
  },
  {
    code: "fm",
    country: "Federated States of Micronesia",
    callingCode: "691",
  },
  {
    code: "fo",
    country: "Faroe Islands",
    callingCode: "298",
  },
  {
    code: "fr",
    country: "France",
    callingCode: "33",
  },
  {
    code: "ga",
    country: "Gabon",
    callingCode: "241",
  },
  {
    code: "gb",
    country: "United Kingdom",
    callingCode: "44",
  },
  {
    code: "ge",
    country: "Georgia",
    callingCode: "995",
  },
  {
    code: "gf",
    country: "French Guiana",
    callingCode: "594",
  },
  {
    code: "gg",
    country: "Guernsey",
    callingCode: "44",
  },
  {
    code: "gh",
    country: "Ghana",
    callingCode: "233",
  },
  {
    code: "gi",
    country: "Gibraltar",
    callingCode: "350",
  },
  {
    code: "gl",
    country: "Greenland",
    callingCode: "299",
  },
  {
    code: "gm",
    country: "Gambia",
    callingCode: "220",
  },
  {
    code: "gn",
    country: "Guinea",
    callingCode: "224",
  },
  {
    code: "gp",
    country: "Guadeloupe",
    callingCode: "590",
  },
  {
    code: "gq",
    country: "Equatorial Guinea",
    callingCode: "240",
  },
  {
    code: "gr",
    country: "Greece",
    callingCode: "30",
  },
  {
    code: "gs",
    country: "South Georgia and the South Sandwich Islands",
    callingCode: "500",
  },
  {
    code: "gt",
    country: "Guatemala",
    callingCode: "502",
  },
  {
    code: "gw",
    country: "Guinea-Bissau",
    callingCode: "245",
  },
  {
    code: "gy",
    country: "Guyana",
    callingCode: "592",
  },
  {
    code: "hk",
    country: "Hong Kong",
    callingCode: "852",
  },
  {
    code: "hm",
    country: "Heard Island and McDonald Islands",
    callingCode: "672",
  },
  {
    code: "hn",
    country: "Honduras",
    callingCode: "504",
  },
  {
    code: "hr",
    country: "Croatia",
    callingCode: "385",
  },
  {
    code: "ht",
    country: "Haiti",
    callingCode: "509",
  },
  {
    code: "hu",
    country: "Hungary",
    callingCode: "36",
  },
  {
    code: "id",
    country: "Indonesia",
    callingCode: "62",
  },
  {
    code: "ie",
    country: "Ireland",
    callingCode: "353",
  },
  {
    code: "in",
    country: "India",
    callingCode: "91",
  },
  {
    code: "io",
    country: "British Indian Ocean Territory",
    callingCode: "246",
  },
  {
    code: "iq",
    country: "Iraq",
    callingCode: "964",
  },
  {
    code: "ir",
    country: "Iran",
    callingCode: "98",
  },
  {
    code: "is",
    country: "Iceland",
    callingCode: "354",
  },
  {
    code: "it",
    country: "Italy",
    callingCode: "39",
  },
  {
    code: "je",
    country: "Jersey",
    callingCode: "44",
  },
  {
    code: "jm",
    country: "Jamaica",
    callingCode: "1",
  },
  {
    code: "jo",
    country: "Jordan",
    callingCode: "962",
  },
  {
    code: "jp",
    country: "Japan",
    callingCode: "81",
  },
  {
    code: "ke",
    country: "Kenya",
    callingCode: "254",
  },
  {
    code: "kg",
    country: "Kyrgyzstan",
    callingCode: "996",
  },
  {
    code: "kh",
    country: "Cambodia",
    callingCode: "855",
  },
  {
    code: "ki",
    country: "Kiribati",
    callingCode: "686",
  },
  {
    code: "km",
    country: "Comoros",
    callingCode: "269",
  },
  {
    code: "kn",
    country: "Saint Kitts and Nevis",
    callingCode: "1",
  },
  {
    code: "kp",
    country: "North Korea",
    callingCode: "850",
  },
  {
    code: "kr",
    country: "South Korea",
    callingCode: "82",
  },
  {
    code: "kw",
    country: "Kuwait",
    callingCode: "965",
  },
  {
    code: "ky",
    country: "Cayman Islands",
    callingCode: "1",
  },
  {
    code: "kz",
    country: "Kazakhstan",
    callingCode: "7",
  },
  {
    code: "la",
    country: "Laos",
    callingCode: "856",
  },
  {
    code: "lb",
    country: "Lebanon",
    callingCode: "961",
  },
  {
    code: "lc",
    country: "Saint Lucia",
    callingCode: "1",
  },
  {
    code: "li",
    country: "Liechtenstein",
    callingCode: "423",
  },
  {
    code: "lk",
    country: "Sri Lanka",
    callingCode: "94",
  },
  {
    code: "lr",
    country: "Liberia",
    callingCode: "231",
  },
  {
    code: "ls",
    country: "Lesotho",
    callingCode: "266",
  },
  {
    code: "lt",
    country: "Lithuania",
    callingCode: "370",
  },
  {
    code: "lu",
    country: "Luxembourg",
    callingCode: "352",
  },
  {
    code: "lv",
    country: "Latvia",
    callingCode: "371",
  },
  {
    code: "ly",
    country: "Libya",
    callingCode: "218",
  },
  {
    code: "ma",
    country: "Morocco",
    callingCode: "212",
  },
  {
    code: "mc",
    country: "Monaco",
    callingCode: "377",
  },
  {
    code: "md",
    country: "Moldova",
    callingCode: "373",
  },
  {
    code: "me",
    country: "Montenegro",
    callingCode: "382",
  },
  {
    code: "mf",
    country: "Saint Martin",
    callingCode: "590",
  },
  {
    code: "mg",
    country: "Madagascar",
    callingCode: "261",
  },
  {
    code: "mh",
    country: "Marshall Islands",
    callingCode: "692",
  },
  {
    code: "mk",
    country: "Macedonia",
    callingCode: "389",
  },
  {
    code: "ml",
    country: "Mali",
    callingCode: "223",
  },
  {
    code: "mm",
    country: "Myanmar",
    callingCode: "95",
  },
  {
    code: "mn",
    country: "Mongolia",
    callingCode: "976",
  },
  {
    code: "mo",
    country: "Macau",
    callingCode: "853",
  },
  {
    code: "mp",
    country: "Northern Mariana Islands",
    callingCode: "1",
  },
  {
    code: "mq",
    country: "Martinique",
    callingCode: "596",
  },
  {
    code: "mr",
    country: "Mauritania",
    callingCode: "222",
  },
  {
    code: "ms",
    country: "Montserrat",
    callingCode: "1",
  },
  {
    code: "mt",
    country: "Malta",
    callingCode: "356",
  },
  {
    code: "mu",
    country: "Mauritius",
    callingCode: "230",
  },
  {
    code: "mv",
    country: "Maldives",
    callingCode: "960",
  },
  {
    code: "mw",
    country: "Malawi",
    callingCode: "265",
  },
  {
    code: "mx",
    country: "Mexico",
    callingCode: "52",
  },
  {
    code: "my",
    country: "Malaysia",
    callingCode: "60",
  },
  {
    code: "mz",
    country: "Mozambique",
    callingCode: "258",
  },
  {
    code: "na",
    country: "Namibia",
    callingCode: "264",
  },
  {
    code: "nc",
    country: "New Caledonia",
    callingCode: "687",
  },
  {
    code: "ne",
    country: "Niger",
    callingCode: "227",
  },
  {
    code: "nf",
    country: "Norfolk Island",
    callingCode: "672",
  },
  {
    code: "ng",
    country: "Nigeria",
    callingCode: "234",
  },
  {
    code: "ni",
    country: "Nicaragua",
    callingCode: "505",
  },
  {
    code: "nl",
    country: "Netherlands",
    callingCode: "31",
  },
  {
    code: "np",
    country: "Nepal",
    callingCode: "977",
  },
  {
    code: "nr",
    country: "Nauru",
    callingCode: "674",
  },
  {
    code: "nu",
    country: "Niue",
    callingCode: "683",
  },
  {
    code: "nz",
    country: "New Zealand",
    callingCode: "64",
  },
  {
    code: "om",
    country: "Oman",
    callingCode: "968",
  },
  {
    code: "pa",
    country: "Panama",
    callingCode: "507",
  },
  {
    code: "pe",
    country: "Peru",
    callingCode: "51",
  },
  {
    code: "pf",
    country: "French Polynesia",
    callingCode: "689",
  },
  {
    code: "pg",
    country: "Papua New Guinea",
    callingCode: "675",
  },
  {
    code: "ph",
    country: "Philippines",
    callingCode: "63",
  },
  {
    code: "pk",
    country: "Pakistan",
    callingCode: "92",
  },
  {
    code: "pl",
    country: "Poland",
    callingCode: "48",
  },
  {
    code: "pm",
    country: "Saint Pierre and Miquelon",
    callingCode: "508",
  },
  {
    code: "pn",
    country: "Pitcairn",
    callingCode: "870",
  },
  {
    code: "pr",
    country: "Puerto Rico",
    callingCode: "1",
  },
  {
    code: "ps",
    country: "State of Palestine",
    callingCode: "970",
  },
  {
    code: "pt",
    country: "Portugal",
    callingCode: "351",
  },
  {
    code: "py",
    country: "Paraguay",
    callingCode: "595",
  },
  {
    code: "qa",
    country: "Qatar",
    callingCode: "974",
  },
  {
    code: "re",
    country: "Reunion",
    callingCode: "262",
  },
  {
    code: "ro",
    country: "Romania",
    callingCode: "40",
  },
  {
    code: "rs",
    country: "Serbia",
    callingCode: "381",
  },
  {
    code: "ru",
    country: "Russia",
    callingCode: "7",
  },
  {
    code: "rw",
    country: "Rwanda",
    callingCode: "250",
  },
  {
    code: "sa",
    country: "Saudi Arabia",
    callingCode: "966",
  },
  {
    code: "sb",
    country: "Solomon Islands",
    callingCode: "677",
  },
  {
    code: "sc",
    country: "Seychelles",
    callingCode: "248",
  },
  {
    code: "sd",
    country: "Sudan",
    callingCode: "249",
  },
  {
    code: "sg",
    country: "Singapore",
    callingCode: "65",
  },
  {
    code: "sh",
    country: "Saint Helena",
    callingCode: "290",
  },
  {
    code: "si",
    country: "Slovenia",
    callingCode: "386",
  },
  {
    code: "sj",
    country: "Svalbard and Jan Mayen",
    callingCode: "47",
  },
  {
    code: "sk",
    country: "Slovakia",
    callingCode: "421",
  },
  {
    code: "sl",
    country: "Sierra Leone",
    callingCode: "232",
  },
  {
    code: "sm",
    country: "San Marino",
    callingCode: "378",
  },
  {
    code: "sn",
    country: "Senegal",
    callingCode: "221",
  },
  {
    code: "so",
    country: "Somalia",
    callingCode: "252",
  },
  {
    code: "sr",
    country: "Suriname",
    callingCode: "597",
  },
  {
    code: "ss",
    country: "South Sudan",
    callingCode: "211",
  },
  {
    code: "st",
    country: "Sao Tome and Principe",
    callingCode: "239",
  },
  {
    code: "sv",
    country: "El Salvador",
    callingCode: "503",
  },
  {
    code: "sx",
    country: "Sint Maarten",
    callingCode: "3",
  },
  {
    code: "sy",
    country: "Syria",
    callingCode: "963",
  },
  {
    code: "sz",
    country: "Swaziland",
    callingCode: "268",
  },
  {
    code: "tc",
    country: "Turks and Caicos Islands",
    callingCode: "1",
  },
  {
    code: "td",
    country: "Chad",
    callingCode: "235",
  },
  {
    code: "tf",
    country: "French Southern Territories",
    callingCode: "262",
  },
  {
    code: "tg",
    country: "Togo",
    callingCode: "228",
  },
  {
    code: "th",
    country: "Thailand",
    callingCode: "66",
  },
  {
    code: "tj",
    country: "Tajikistan",
    callingCode: "992",
  },
  {
    code: "tk",
    country: "Tokelau",
    callingCode: "690",
  },
  {
    code: "tl",
    country: "Timor-Leste",
    callingCode: "670",
  },
  {
    code: "tm",
    country: "Turkmenistan",
    callingCode: "993",
  },
  {
    code: "tn",
    country: "Tunisia",
    callingCode: "216",
  },
  {
    code: "to",
    country: "Tonga",
    callingCode: "676",
  },
  {
    code: "tr",
    country: "Turkey",
    callingCode: "90",
  },
  {
    code: "tt",
    country: "Trinidad and Tobago",
    callingCode: "1",
  },
  {
    code: "tv",
    country: "Tuvalu",
    callingCode: "688",
  },
  {
    code: "tw",
    country: "Taiwan",
    callingCode: "886",
  },
  {
    code: "tz",
    country: "Tanzania",
    callingCode: "255",
  },
  {
    code: "ua",
    country: "Ukraine",
    callingCode: "380",
  },
  {
    code: "ug",
    country: "Uganda",
    callingCode: "256",
  },
  {
    code: "um",
    country: "United States Minor Outlying Islands",
    callingCode: "1",
  },
  {
    code: "us",
    country: "United States",
    callingCode: "1",
  },
  {
    code: "uy",
    country: "Uruguay",
    callingCode: "598",
  },
  {
    code: "uz",
    country: "Uzbekistan",
    callingCode: "998",
  },
  {
    code: "va",
    country: "Vatican City State",
    callingCode: "39",
  },
  {
    code: "vc",
    country: "Saint Vincent and the Grenadines",
    callingCode: "1",
  },
  {
    code: "ve",
    country: "Venezuela (Bolivarian Republic of)",
    callingCode: "58",
  },
  {
    code: "vg",
    country: "Virgin Islands (British)",
    callingCode: "1",
  },
  {
    code: "vi",
    country: "Virgin Islands (U.S.)",
    callingCode: "1",
  },
  {
    code: "vn",
    country: "Viet Nam",
    callingCode: "84",
  },
  {
    code: "vu",
    country: "Vanuatu",
    callingCode: "678",
  },
  {
    code: "wf",
    country: "Wallis and Futuna",
    callingCode: "681",
  },
  {
    code: "ws",
    country: "Samoa",
    callingCode: "685",
  },
  {
    code: "xk",
    country: "Kosovo",
    callingCode: "383",
  },
  {
    code: "ye",
    country: "Yemen",
    callingCode: "967",
  },
  {
    code: "yt",
    country: "Mayotte",
    callingCode: "262",
  },
  {
    code: "za",
    country: "South Africa",
    callingCode: "27",
  },
  {
    code: "zm",
    country: "Zambia",
    callingCode: "260",
  },
  {
    code: "zw",
    country: "Zimbabwe",
    callingCode: "263",
  },
].sort((a, b) => {
  return a.country.localeCompare(b.country);
});

export default countries;
