const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
const tithis = [
  "कृष्ण प्रतिपदा",
  "कृष्ण द्वितीया",
  "कृष्ण तृतिया",
  "कृष्ण चतुर्थी",
  "कृष्ण पञ्चमी",
  "कृष्ण षष्ठी",
  "कृष्ण सप्तमी",
  "कृष्ण अष्टमी",
  "कृष्ण नवमी",
  "कृष्ण दशमी",
  "कृष्ण एकादशी",
  "कृष्ण द्वादशी",
  "कृष्ण त्रयोदशी",
  "कृष्ण चतुर्दशी",
  "औंसी",
  "शुक्ल प्रतिपदा",
  "शुक्ल द्वितीया",
  "शुक्ल तृतिया",
  "शुक्ल चतुर्थी",
  "शुक्ल पञ्चमी",
  "शुक्ल षष्ठी",
  "शुक्ल सप्तमी",
  "शुक्ल अष्टमी",
  "शुक्ल नवमी",
  "शुक्ल दशमी",
  "शुक्ल एकादशी",
  "शुक्ल द्वादशी",
  "शुक्ल त्रयोदशी",
  "शुक्ल चतुर्दशी",
  "पूर्णिमा"
];

const monthSeed = [
  {
    name: "वैशाख",
    year: 2083,
    days: 31,
    englishStart: "2026-04-14",
    events: {
      1: "नयाँ वर्ष",
      5: "लोकतन्त्र दिवस",
      11: "मातातीर्थ औंसी",
      18: "मजदुर दिवस",
      22: "मंगलचौथी व्रत",
      24: "किराँत समाज सुधार दिवस",
      25: "विश्व रेडक्रस दिवस",
      26: "कानून दिवस",
      30: "अपरा एकादशी व्रत",
      31: "प्रदोष व्रत"
    }
  },
  {
    name: "जेठ",
    year: 2083,
    days: 32,
    events: {
      1: "वृष संक्रान्ति",
      2: "बटसावित्री व्रत",
      3: "गोसाइकुण्ड स्नान आरम्भ",
      8: "जैविक विविधता दिवस",
      12: "गङ्गादशहरा व्रत",
      15: "गणतन्त्र दिवस",
      21: "विश्व वातावरण दिवस",
      29: "प्रदोष व्रत",
      31: "विश्व रक्तदाता दिवस"
    }
  },
  {
    name: "असार",
    year: 2083,
    days: 31,
    events: {
      1: "मिथुन संक्रान्ति",
      5: "योग दिवस",
      10: "निर्जला एकादशी",
      15: "धान दिवस / दहीचिउरा",
      20: "सहकारी दिवस",
      24: "गुरु पूर्णिमा",
      29: "भानु जयन्ती"
    }
  },
  {
    name: "साउन",
    year: 2083,
    days: 31,
    events: {
      1: "साउने संक्रान्ति",
      6: "साउन सोमबार",
      13: "साउन सोमबार",
      20: "साउन सोमबार",
      27: "साउन सोमबार"
    }
  },
  {
    name: "भदौ",
    year: 2083,
    days: 31,
    events: {
      3: "विश्व फोटोग्राफी दिवस",
      14: "जनै पूर्णिमा",
      15: "गाईजात्रा",
      23: "विश्व साक्षरता दिवस"
    }
  },
  {
    name: "आश्विन",
    year: 2083,
    days: 31,
    events: {
      5: "विश्व शान्ति दिवस",
      9: "विश्व फार्मासिस्ट दिवस",
      11: "विश्व पर्यटन दिवस",
      17: "घटस्थापना",
      24: "फूलपाती",
      25: "महाअष्टमी",
      26: "महानवमी",
      27: "विजया दशमी"
    }
  },
  {
    name: "कार्तिक",
    year: 2083,
    days: 29,
    events: {
      1: "कोजाग्रत पूर्णिमा",
      10: "कुकुर तिहार",
      11: "लक्ष्मी पूजा",
      12: "गोवर्धन पूजा",
      13: "भाइटीका",
      25: "फाल्गुनन्द जयन्ती",
      29: "छठ पर्व"
    }
  },
  {
    name: "मंसिर",
    year: 2083,
    days: 30,
    events: {
      1: "मंसिर संक्रान्ति",
      8: "पूर्णिमा",
      18: "अन्तर्राष्ट्रिय अपाङ्गता दिवस",
      24: "मानव अधिकार दिवस"
    }
  },
  {
    name: "पुष",
    year: 2083,
    days: 29,
    events: {
      1: "पुष संक्रान्ति",
      10: "क्रिसमस डे",
      15: "तमु ल्होसार",
      27: "पृथ्वी जयन्ती"
    }
  },
  {
    name: "माघ",
    year: 2083,
    days: 30,
    events: {
      1: "माघे संक्रान्ति",
      11: "अन्तर्राष्ट्रिय शिक्षा दिवस",
      12: "विश्व कुष्ठरोग दिवस",
      20: "विश्व सिमसार दिवस",
      22: "विश्व क्यान्सर दिवस"
    }
  },
  {
    name: "फागुन",
    year: 2083,
    days: 30,
    events: {
      7: "प्रजातन्त्र दिवस",
      14: "महाशिवरात्रि",
      17: "ग्याल्पो ल्होसार",
      22: "फागु पूर्णिमा"
    }
  },
  {
    name: "चैत",
    year: 2083,
    days: 30,
    events: {
      1: "चैत संक्रान्ति",
      8: "नारी दिवस",
      15: "राम नवमी",
      30: "वर्ष अन्त्य"
    }
  },
  {
    name: "वैशाख",
    year: 2084,
    days: 31,
    events: {
      1: "नयाँ वर्ष",
      11: "मातातीर्थ औंसी",
      18: "मजदुर दिवस"
    }
  }
];

function addDays(date, days) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

function formatDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function buildMonths(seed) {
  let start = new Date(`${seed[0].englishStart}T00:00:00`);
  return seed.map((month) => {
    const englishStart = formatDateKey(start);
    const end = addDays(start, month.days - 1);
    const englishRange = `${start.toLocaleDateString("en-US", { month: "long" })} - ${end.toLocaleDateString("en-US", { month: "long", year: "numeric" })}`;
    const built = {
      ...month,
      englishStart,
      englishRange,
      startOffset: start.getDay()
    };
    start = addDays(start, month.days);
    return built;
  });
}

const months = buildMonths(monthSeed);

const tools = [
  {
    icon: "⇄",
    title: "Nepali <> English Date Converter",
    description: "Quickly convert BS and AD dates",
    preview: [["BS date", "वैशाख २२, २०८३"], ["AD date", "May 5, 2026"], ["Mode", "Approximate local seed"]]
  },
  {
    icon: "Au",
    title: "Gold & Silver Rate",
    description: "Daily bullion market snapshot",
    preview: [
      ["Gold Hallmark - tola", "Nrs. 298,600.00"],
      ["Gold Tajabi - tola", "Nrs. 0.00"],
      ["Silver - tola", "Nrs. 5,155.00"],
      ["Gold Hallmark - 10g", "Nrs. 256,000.00"],
      ["Silver - 10g", "Nrs. 4,420.00"],
      ["Last updated", "Thursday, May 07, 2026 - 10:45 AM"]
    ]
  },
  {
    icon: "ॐ",
    title: "Shubha Sait",
    description: "Auspicious time finder",
    preview: [["Good window", "11:42 AM - 1:18 PM"], ["Rahu kaal", "3:10 PM - 4:45 PM"], ["Direction", "पूर्व"]]
  },
  {
    icon: "प",
    title: "Nepali Panchang",
    description: "Tithi, nakshatra, yoga and karana",
    preview: [["Tithi", "कृष्ण चतुर्थी"], ["Nakshatra", "अनुराधा"], ["Yoga", "परिधि"]]
  },
  {
    icon: "♈",
    title: "Nepali Horoscope for the month",
    description: "Monthly rashi overview",
    preview: [["Rashi", "मेष"], ["Lucky color", "Crimson"], ["Focus", "Work and decisions"]]
  },
  {
    icon: "₨",
    title: "Vegetable and Fruit wholesale rates",
    description: "Kalimati daily wholesale snapshot",
    market: true,
    preview: [
      ["Published", "बैशाख २४, २०८३"],
      ["गोलभेडा ठूलो (भारतीय)", "के.जी. · रू ८५.०० - ९५.०० · औसत रू ९०.००"],
      ["गोलभेडा सानो (लोकल)", "के.जी. · रू ५०.०० - ६५.०० · औसत रू ५८.००"],
      ["गोलभेडा सानो (भारतीय)", "के.जी. · रू ४५.०० - ५०.०० · औसत रू ४७.५०"],
      ["गोलभेडा सानो (तराई)", "के.जी. · रू ४०.०० - ५०.०० · औसत रू ४५.००"],
      ["आलु रातो", "के.जी. · रू २२.०० - २८.०० · औसत रू २४.२५"],
      ["आलु रातो (भारतीय)", "के.जी. · रू २०.०० - २४.०० · औसत रू २२.२५"],
      ["प्याज सुकेको (भारतीय)", "के.जी. · रू ३९.०० - ४२.०० · औसत रू ४०.५०"],
      ["गाजर (लोकल)", "के.जी. · रू ४५.०० - ६०.०० · औसत रू ५२.५०"],
      ["गाजर (तराई)", "के.जी. · रू २८.०० - ४०.०० · औसत रू ३४.००"],
      ["बन्दा (लोकल)", "के.जी. · रू ३०.०० - ४०.०० · औसत रू ३३.३३"],
      ["बन्दा (नरिवल)", "के.जी. · रू २०.०० - ३०.०० · औसत रू २५.००"],
      ["काउली स्थानिय", "के.जी. · रू ४०.०० - ५०.०० · औसत रू ४५.००"],
      ["स्थानीय काउली (ज्यापु)", "के.जी. · रू ५०.०० - ६०.०० · औसत रू ५५.००"],
      ["सेतो मूला (हाइब्रीड)", "के.जी. · रू १५.०० - २०.०० · औसत रू १७.५०"],
      ["भन्टा लाम्चो", "के.जी. · रू ५०.०० - ६५.०० · औसत रू ५९.१७"],
      ["भन्टा डल्लो", "के.जी. · रू ६०.०० - ८०.०० · औसत रू ७०.००"],
      ["बोडी (तने)", "के.जी. · रू १००.०० - १२०.०० · औसत रू ११०.००"],
      ["मकै बोडी", "के.जी. · रू ८०.०० - ९०.०० · औसत रू ८५.००"],
      ["मटरकोशा", "के.जी. · रू ५०.०० - ६०.०० · औसत रू ५५.००"],
      ["घिउ सिमी (लोकल)", "के.जी. · रू ७०.०० - ९०.०० · औसत रू ८०.००"],
      ["घिउ सिमी (हाइब्रीड)", "के.जी. · रू ८०.०० - ९०.०० · औसत रू ८५.००"],
      ["घिउ सिमी (राजमा)", "के.जी. · रू ८०.०० - १००.०० · औसत रू ९०.००"],
      ["भटमासकोशा", "के.जी. · रू १५०.०० - १७०.०० · औसत रू १६२.५०"],
      ["तितो करेला", "के.जी. · रू ३०.०० - ५०.०० · औसत रू ३८.३३"],
      ["लौका", "के.जी. · रू ४५.०० - ६०.०० · औसत रू ५१.६७"],
      ["परवर (लोकल)", "के.जी. · रू ७०.०० - ८०.०० · औसत रू ७५.००"],
      ["परवर (तराई)", "के.जी. · रू ६०.०० - ७०.०० · औसत रू ६५.००"],
      ["घिरौला", "के.जी. · रू ६०.०० - ७५.०० · औसत रू ६८.००"],
      ["झिगूनी", "के.जी. · रू ७०.०० - ८०.०० · औसत रू ७५.००"],
      ["फर्सी पाकेको", "के.जी. · रू ५०.०० - ६०.०० · औसत रू ५५.००"],
      ["फर्सी हरियो (लाम्चो)", "के.जी. · रू ४०.०० - ५०.०० · औसत रू ४५.००"],
      ["हरियो फर्सी (डल्लो)", "के.जी. · रू ३०.०० - ५०.०० · औसत रू ३९.२९"],
      ["भिण्डी", "के.जी. · रू ७०.०० - ८०.०० · औसत रू ७५.००"],
      ["सखरखण्ड", "के.जी. · रू ६५.०० - ७५.०० · औसत रू ७०.००"],
      ["पिंडालू", "के.जी. · रू ४०.०० - ५०.०० · औसत रू ४५.००"],
      ["स्कूस", "के.जी. · रू ५०.०० - ६०.०० · औसत रू ५५.००"],
      ["रायो साग", "के.जी. · रू ७०.०० - ८०.०० · औसत रू ७५.००"],
      ["पालूगो साग", "के.जी. · रू ९०.०० - १००.०० · औसत रू ९५.००"],
      ["चमसूरको साग", "के.जी. · रू १००.०० - १२०.०० · औसत रू ११०.००"],
      ["तोरीको साग", "के.जी. · रू २५.०० - ३५.०० · औसत रू ३०.००"],
      ["मेथीको साग", "के.जी. · रू ९०.०० - १००.०० · औसत रू ९५.००"],
      ["प्याज हरियो", "के.जी. · रू १००.०० - १५०.०० · औसत रू १२३.३३"],
      ["च्याउ (कन्य)", "के.जी. · रू २३०.०० - २६०.०० · औसत रू २४८.००"],
      ["च्याउ (डल्ले)", "के.जी. · रू ३५०.०० - ४००.०० · औसत रू ३७५.००"],
      ["राजा च्याउ", "के.जी. · रू ३००.०० - ३२०.०० · औसत रू ३१०.००"],
      ["सिताके च्याउ", "के.जी. · रू ८००.०० - १,०००.०० · औसत रू ९००.००"],
      ["कुरीलो", "के.जी. · रू ४००.०० - ५००.०० · औसत रू ४५०.००"],
      ["न्यूरो", "के.जी. · रू ८०.०० - १००.०० · औसत रू ९०.००"],
      ["ब्रोकाउली", "के.जी. · रू ९०.०० - ११०.०० · औसत रू १००.००"],
      ["चुकुन्दर", "के.जी. · रू ५५.०० - ६५.०० · औसत रू ५८.७५"],
      ["सजिवन", "के.जी. · रू १३०.०० - १५०.०० · औसत रू १४०.००"],
      ["कोइरालो", "के.जी. · रू ३००.०० - ३५०.०० · औसत रू ३२५.००"],
      ["रातो बन्दा", "के.जी. · रू ४०.०० - ६०.०० · औसत रू ५०.००"],
      ["जिरीको साग", "के.जी. · रू ९०.०० - १००.०० · औसत रू ९५.००"],
      ["सेलरी", "के.जी. · रू १००.०० - १२०.०० · औसत रू ११०.००"],
      ["पार्सले", "के.जी. · रू २५०.०० - ३००.०० · औसत रू २७५.००"],
      ["सौफको साग", "के.जी. · रू ९०.०० - १००.०० · औसत रू ९५.००"],
      ["पुदीना", "के.जी. · रू ९०.०० - ११०.०० · औसत रू १००.००"],
      ["गान्टे मूला", "के.जी. · रू ४०.०० - ५०.०० · औसत रू ४५.००"],
      ["इमली", "के.जी. · रू १७०.०० - १८०.०० · औसत रू १७५.००"],
      ["तामा", "के.जी. · रू १३०.०० - १५०.०० · औसत रू १४०.००"],
      ["तोफु", "के.जी. · रू १३०.०० - १५०.०० · औसत रू १४०.००"],
      ["गुन्दुक", "के.जी. · रू २५०.०० - ३००.०० · औसत रू २७५.००"],
      ["स्याउ (झोले)", "के.जी. · रू २२०.०० - २५०.०० · औसत रू २३५.००"],
      ["स्याउ (फूजी)", "के.जी. · रू २५०.०० - ३००.०० · औसत रू २७५.००"],
      ["केरा", "दर्जन · रू १८०.०० - २२०.०० · औसत रू २००.००"],
      ["कागती", "के.जी. · रू ३७०.०० - ३८०.०० · औसत रू ३७५.००"],
      ["अनार", "के.जी. · रू ४००.०० - ४५०.०० · औसत रू ४२५.००"],
      ["अंगुर (हरियो)", "के.जी. · रू २५०.०० - ३००.०० · औसत रू २७५.००"],
      ["अंगुर (कालो)", "के.जी. · रू ४००.०० - ४५०.०० · औसत रू ४२५.००"],
      ["तरबुजा (हरियो)", "के.जी. · रू ३५.०० - ४५.०० · औसत रू ४०.००"],
      ["भुई कटहर", "प्रति गोटा · रू २३०.०० - २५०.०० · औसत रू २४०.००"],
      ["काक्रो (लोकल)", "के.जी. · रू ६०.०० - ७०.०० · औसत रू ६५.००"],
      ["काक्रो (हाइब्रीड)", "के.जी. · रू ४०.०० - ५०.०० · औसत रू ४६.२५"],
      ["काक्रो (लोकल क्रस)", "के.जी. · रू ६०.०० - ८०.०० · औसत रू ७१.२५"],
      ["रुख कटहर", "के.जी. · रू ६०.०० - ७०.०० · औसत रू ६५.००"],
      ["नासपाती (चाइनिज)", "के.जी. · रू २२०.०० - २५०.०० · औसत रू २३५.००"],
      ["मेवा (नेपाली)", "के.जी. · रू ७०.०० - ८०.०० · औसत रू ७५.००"],
      ["मेवा (भारतीय)", "के.जी. · रू ८०.०० - ९०.०० · औसत रू ८५.००"],
      ["आभोकाडो", "के.जी. · रू ७००.०० - ८००.०० · औसत रू ७५०.००"],
      ["अदुवा", "के.जी. · रू ८०.०० - १००.०० · औसत रू ९०.००"],
      ["खु्र्सानी सुकेको", "के.जी. · रू ४००.०० - ४५०.०० · औसत रू ४२५.००"],
      ["खु्र्सानी हरियो", "के.जी. · रू १००.०० - १२०.०० · औसत रू १११.६७"],
      ["खुर्सानी हरियो (माछे)", "के.जी. · रू ५०.०० - ६०.०० · औसत रू ५५.००"],
      ["खुर्सानी हरियो (अकबरे)", "के.जी. · रू ५००.०० - ६००.०० · औसत रू ५५०.००"],
      ["भेडे खु्र्सानी", "के.जी. · रू ५०.०० - ७०.०० · औसत रू ६२.००"],
      ["लसुन हरियो", "के.जी. · रू १९०.०० - २००.०० · औसत रू १९५.००"],
      ["हरियो धनिया", "के.जी. · रू ५०.०० - ८०.०० · औसत रू ६०.००"],
      ["लसुन सुकेको चाइनिज", "के.जी. · रू १७०.०० - १९०.०० · औसत रू १८०.००"],
      ["लसुन सुकेको नेपाली", "के.जी. · रू ८०.०० - ९०.०० · औसत रू ८५.००"]
    ]
  },
  {
    icon: "⛽",
    title: "Fuel Prices",
    description: "Petrol, diesel and LP gas rates",
    preview: [["Petrol", "NRs 217.0/L"], ["Applies to", "Kathmandu, Pokhara, Dipayal"], ["Updated", "2026-05-02"]]
  }
];

let exchangeRates = [
  ["USD", "U.S. Dollar", "1", "150.51", "151.11"],
  ["CNY", "Chinese Yuan", "1", "22.13", "22.22"],
  ["EUR", "European Euro", "1", "177.07", "177.77"],
  ["GBP", "UK Pound Sterling", "1", "204.87", "205.68"],
  ["JPY", "Japanese Yen", "10", "9.63", "9.66"],
  ["AUD", "Australian Dollar", "1", "109.21", "109.65"],
  ["CAD", "Canadian Dollar", "1", "110.45", "110.89"]
];

let fuelRows = [
  ["Petrol", "NRs 217.0/L", "Kathmandu, Pokhara, Dipayal"],
  ["Diesel", "NRs 225.0/L", "Kathmandu, Pokhara, Dipayal"],
  ["LP Gas", "NRs 2160.0/cyl", "Nationwide domestic cylinder"]
];

let fuelUpdatedAt = window.NEPAL_PATRO_DAILY_DATA?.fuel?.updatedAt || "2026-05-08";
let marketRows = tools.find((tool) => tool.market)?.preview || [];
let marketUpdatedAt = window.NEPAL_PATRO_DAILY_DATA?.market?.updatedAt || "बैशाख २४, २०८३";
const goldHistory = [314000, 318000, 316000, 322000, 315000, 311000, 309000, 296000, 286000, 294000, 290000, 298600];
const silverHistory = [4860, 4920, 5010, 4980, 5060, 5120, 5080, 5155, 5090, 5180, 5115, 5155];

const horoscopeData = {
  mesh: ["मेष", "Mesh", "Career improves with steady follow-through. Income can stabilize, but avoid impulsive spending. Good for clearing pending work and reconnecting with seniors.", "Work, income, confidence", "Orange", "2"],
  brish: ["वृष", "Brish", "A balanced month for family and finances. Routine discipline helps more than big risks. Take care of sleep and digestion.", "Family, savings, health", "White", "6"],
  mithun: ["मिथुन", "Mithun", "New contacts and learning bring momentum. Keep paperwork clean and avoid scattered decisions in business.", "Networking, study, trade", "Green", "5"],
  karkat: ["कर्कट", "Karkat", "Expenses may rise, but the second half can bring relief. Keep communication gentle in home and married life.", "Budgeting, home, patience", "Cream", "7"],
  singha: ["सिंह", "Singha", "Leadership improves when you delegate. Good for visibility, interviews and public-facing work.", "Reputation, leadership, work", "Gold", "1"],
  kanya: ["कन्या", "Kanya", "Practical planning wins this month. Health routines, study and accounts need small daily attention.", "Planning, health, accounts", "Navy", "4"],
  tula: ["तुला", "Tula", "Partnerships need fairness and clear boundaries. Creative and relationship matters improve with patience.", "Partnership, design, romance", "Pink", "6"],
  brischik: ["वृश्चिक", "Brischik", "Avoid overthinking and hidden conflict. Good for research, repayment plans and quiet focused work.", "Research, debts, discipline", "Maroon", "9"],
  dhanu: ["धनु", "Dhanu", "Travel, learning and advisory work look promising. Keep promises realistic and expenses measured.", "Travel, learning, advice", "Yellow", "3"],
  makar: ["मकर", "Makar", "Career progress is possible through senior support and strategy. Be calm with coworkers and keep health steady.", "Career, strategy, discipline", "Blue", "8"],
  kumbha: ["कुम्भ", "Kumbha", "Ideas feel fresh, but execution needs structure. Friends and groups can open useful doors.", "Ideas, friends, systems", "Sky blue", "4"],
  meen: ["मीन", "Meen", "A reflective but useful month. Trust intuition, protect energy and choose steady financial decisions over quick gains.", "Intuition, finance, rest", "Sea green", "7"]
};

const panchangGuidance = [
  ["Brahma Muhurta", "4:31 AM - 5:15 AM", "Prayer, mantra, study"],
  ["Abhijit Muhurat", "11:42 AM - 12:34 PM", "Important starts"],
  ["Vijaya Muhurat", "2:18 PM - 3:10 PM", "Travel, official work"],
  ["Godhuli Muhurat", "6:21 PM - 6:45 PM", "Puja, family rituals"],
  ["Amrit Kaal", "8:06 PM - 9:34 PM", "Spiritual work"]
];

const inauspiciousTimes = [
  ["Rahu Kaal", "10:21 AM - 12:02 PM"],
  ["Yamaganda", "3:24 PM - 5:04 PM"],
  ["Gulika Kaal", "7:00 AM - 8:41 AM"],
  ["Dur Muhurat", "8:52 AM - 9:44 AM"]
];

const saitRows = [
  ["Daily puja", "Brahma Muhurta", "4:31 AM - 5:15 AM", "Best quiet window for japa, study and sankalpa."],
  ["New work", "Abhijit Muhurat", "11:42 AM - 12:34 PM", "General-purpose shubha window when no specific muhurat is available."],
  ["Travel", "Vijaya Muhurat", "2:18 PM - 3:10 PM", "Good for departures, paperwork and formal visits."],
  ["Griha puja", "Godhuli Muhurat", "6:21 PM - 6:45 PM", "Gentle evening window for household rituals."],
  ["Avoid", "Rahu Kaal", "10:21 AM - 12:02 PM", "Avoid starting new ventures unless unavoidable."]
];

const nakshatras = ["अनुराधा", "ज्येष्ठा", "मूल", "पूर्वाषाढा", "उत्तराषाढा", "श्रवण", "धनिष्ठा"];
const yogas = ["परिधि", "शिव", "सिद्ध", "साध्य", "शुभ", "शुक्ल", "ब्रह्म"];
const karanas = ["वणिज", "विष्टि", "बव", "बालव", "कौलव", "तैतिल", "गर"];
const rashis = ["मेष", "वृष", "मिथुन", "कर्कट", "सिंह", "कन्या", "तुला", "वृश्चिक", "धनु", "मकर", "कुम्भ", "मीन"];
const colors = ["Crimson", "Sapphire", "White", "Ruby", "Indigo", "Pearl"];
const bsMonthNames = ["वैशाख", "जेठ", "असार", "साउन", "भदौ", "आश्विन", "कार्तिक", "मंसिर", "पुष", "माघ", "फागुन", "चैत"];
const converterStartYear = 2000;
const converterEndYear = 2090;
const converterAnchor = {
  bsYear: 2083,
  bsMonth: 1,
  bsDay: 1,
  adDate: new Date("2026-04-14T00:00:00")
};

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const storedLanguage = localStorage.getItem("nepalPatro:language");
const storedCalendarMode = localStorage.getItem("nepalPatro:calendarMode");

let activeMonthIndex = 0;
let activeDay = null;
let appLanguage = ["en", "ne"].includes(storedLanguage) ? storedLanguage : "en";
let calendarMode = ["bs", "ad"].includes(storedCalendarMode) ? storedCalendarMode : "bs";

const calendarGrid = document.querySelector("#calendarGrid");
const monthLabel = document.querySelector("#monthLabel");
const monthSubLabel = document.querySelector("#monthSubLabel");
const monthSelect = document.querySelector("#monthSelect");
const modalBackdrop = document.querySelector("#modalBackdrop");
const toolBackdrop = document.querySelector("#toolBackdrop");
const noteBox = document.querySelector("#personalNote");
const navLinks = document.querySelectorAll(".nav-pills a");
const sectionLinks = document.querySelectorAll("[data-section-link]");
const appSections = document.querySelectorAll(".page");
const languageButtons = document.querySelectorAll("[data-language]");
const calendarModeButtons = document.querySelectorAll("[data-calendar-mode]");
const validSections = ["calendar", "events", "tools", "rates", "gold-silver", "market", "fuel", "horoscope", "date-converter", "panchang", "shubha-sait"];
const dailyDataKey = "nepalPatro:dailyDataCheckedAt";
const dailyDataVersionKey = "nepalPatro:dailyDataVersion";
const dailyDataCacheKey = "nepalPatro:dailyDataCache";
const dataSourceStatusKey = "nepalPatro:dailyDataSource";
let dailyDataSnapshot = window.NEPAL_PATRO_DAILY_DATA || null;
let goldSilverRows = window.NEPAL_PATRO_DAILY_DATA?.gold?.preview || tools[1].preview;
let goldUpdatedAt = window.NEPAL_PATRO_DAILY_DATA?.gold?.updatedAt || "Thursday, May 07, 2026 - 10:45 AM";

const translations = {
  en: {
    navCalendar: "Calendar",
    navEvents: "Events",
    navTools: "Tools",
    navRates: "Rates",
    navGoldSilver: "Gold/Silver",
    navMarket: "Market",
    navFuel: "Fuel",
    navHoroscope: "Horoscope",
    navDateConverter: "Date Converter",
    navPanchang: "Panchang",
    navShubhaSait: "Shubha Sait",
    todayInNepal: "Today in Nepal",
    weatherSummary: "Kathmandu · Clear",
    nextEvent: "Next event",
    twoDaysAway: "2 days away",
    shubhaSait: "Shubha sait",
    bestWindow: "Best window starts",
    gold: "Gold",
    fineGold: "Fine gold per tola",
    fuel: "Fuel",
    fuelArea: "KTM/Pokhara/Dipayal petrol",
    dateConverter: "Date converter",
    preview: "Preview",
    upcoming: "Upcoming",
    nextDates: "Next dates",
    exchangeRates: "Nepal exchange rates",
    forexSnapshot: "NRB Forex Snapshot",
    currency: "Currency",
    unit: "Unit",
    buy: "Buy",
    sell: "Sell",
    refreshData: "Refresh",
    dailyBullion: "Daily bullion",
    goldSilverPrice: "Gold / Silver Price",
    nepaliRupees: "NPR",
    goldHallmarkTola: "Gold Hallmark - Tola",
    silverTola: "Silver - Tola",
    marketRates: "Kalimati wholesale",
    vegetableFruitRates: "Vegetable and Fruit wholesale rates",
    fuelPrices: "Nepal Oil Corporation",
    fuelPricesTitle: "Fuel Prices",
    monthlyRashifal: "Monthly Rashifal",
    nepaliHoroscope: "Nepali Horoscope for the month",
    selectRashi: "Select rashi",
    convertDates: "BS ⇄ AD Converter",
    bsToAd: "Nepali to English",
    adToBs: "English to Nepali",
    convert: "Convert",
    quickTools: "Quick tools",
    dailyUtilities: "Daily utilities",
    panchang: "Panchang",
    saveNote: "Save note",
    saved: "Saved",
    chooseMonth: "Choose month",
    noFestival: "No major festival",
    eventNote: "is highlighted for this date. Use this panel to review panchang, market signals and your personal reminder without leaving the calendar.",
    cleanDayNote: "A clean day view for panchang, rashi, market hints and personal notes.",
    todaysSignals: "Today's signals",
    tithi: "Tithi",
    nakshatra: "Nakshatra",
    yoga: "Yoga",
    karana: "Karana",
    goodTime: "Good time",
    sunrise: "Sunrise",
    sunset: "Sunset",
    moonTimes: "Moonrise / Moonset",
    paksha: "Paksha",
    krishnaPaksha: "Krishna Paksha",
    inauspiciousTimes: "Avoid starting new work",
    dailyGuidance: "Daily guidance",
    auspiciousPlanner: "Auspicious time planner",
    saitNotice: "For marriage, bratabandha, griha prabesh and other sanskar-level decisions, confirm with a family priest or official patro before finalizing.",
    toolPreview: "Tool preview",
    overview: "Overview",
    notes: "Notes",
    festival: "Festival",
    rashi: "Rashi",
    luckyColor: "Lucky color",
    marketNote: "Market note",
    personalNote: "Personal note",
    notePlaceholder: "Add a reminder for this day"
  },
  ne: {
    navCalendar: "पात्रो",
    navEvents: "कार्यक्रम",
    navTools: "टुल्स",
    navRates: "दर",
    navGoldSilver: "सुन/चाँदी",
    navMarket: "बजार",
    navFuel: "इन्धन",
    navHoroscope: "राशिफल",
    navDateConverter: "मिति परिवर्तन",
    navPanchang: "पञ्चाङ्ग",
    navShubhaSait: "शुभ साइत",
    todayInNepal: "आज नेपालमा",
    weatherSummary: "काठमाडौं · सफा",
    nextEvent: "आउँदो दिन",
    twoDaysAway: "२ दिन बाँकी",
    shubhaSait: "शुभ साइत",
    bestWindow: "उत्तम समय सुरु",
    gold: "सुन",
    fineGold: "प्रतितोला छापावाल",
    fuel: "इन्धन",
    fuelArea: "काठमाडौं/पोखरा/दिपायल पेट्रोल",
    dateConverter: "मिति परिवर्तन",
    preview: "हेर्नुहोस्",
    upcoming: "आउँदै",
    nextDates: "आउँदा दिनहरु",
    exchangeRates: "नेपाल विनिमय दर",
    forexSnapshot: "NRB विनिमय दर",
    currency: "मुद्रा",
    unit: "इकाई",
    buy: "खरिद",
    sell: "बिक्री",
    refreshData: "रिफ्रेस",
    dailyBullion: "दैनिक सुनचाँदी",
    goldSilverPrice: "सुन / चाँदी मूल्य",
    nepaliRupees: "नेरु",
    goldHallmarkTola: "छापावाल सुन - तोला",
    silverTola: "चाँदी - तोला",
    marketRates: "कालीमाटी थोक",
    vegetableFruitRates: "तरकारी तथा फलफूल थोक दर",
    fuelPrices: "नेपाल आयल निगम",
    fuelPricesTitle: "इन्धन मूल्य",
    monthlyRashifal: "मासिक राशिफल",
    nepaliHoroscope: "मासिक नेपाली राशिफल",
    selectRashi: "राशि छान्नुहोस्",
    convertDates: "वि.सं. ⇄ ई.सं. परिवर्तन",
    bsToAd: "नेपालीबाट अंग्रेजी",
    adToBs: "अंग्रेजीबाट नेपाली",
    convert: "परिवर्तन",
    quickTools: "दैनिक टुल्स",
    dailyUtilities: "उपयोगी सेवा",
    panchang: "पञ्चाङ्ग",
    saveNote: "नोट राख्नुहोस्",
    saved: "सेभ भयो",
    chooseMonth: "महिना छान्नुहोस्",
    noFestival: "मुख्य पर्व छैन",
    eventNote: "यो मितिमा विशेष रूपमा देखाइएको छ। पात्रो नछोडी पञ्चाङ्ग, बजार संकेत र आफ्नो रिमाइन्डर हेर्न सक्नुहुन्छ।",
    cleanDayNote: "पञ्चाङ्ग, राशि, बजार संकेत र व्यक्तिगत नोटका लागि सफा दिन विवरण।",
    todaysSignals: "आजको संकेत",
    tithi: "तिथि",
    nakshatra: "नक्षत्र",
    yoga: "योग",
    karana: "करण",
    goodTime: "शुभ समय",
    sunrise: "सूर्योदय",
    sunset: "सूर्यास्त",
    moonTimes: "चन्द्रोदय / चन्द्रास्त",
    paksha: "पक्ष",
    krishnaPaksha: "कृष्ण पक्ष",
    inauspiciousTimes: "नयाँ काम सुरु नगर्ने समय",
    dailyGuidance: "दैनिक मार्गदर्शन",
    auspiciousPlanner: "शुभ समय योजना",
    saitNotice: "विवाह, ब्रतबन्ध, गृह प्रवेश र अन्य संस्कारका लागि अन्तिम निर्णय गर्नुअघि पारिवारिक पुरोहित वा आधिकारिक पात्रो पुष्टि गर्नुहोस्।",
    toolPreview: "टुल पूर्वावलोकन",
    overview: "सारांश",
    notes: "नोट",
    festival: "पर्व",
    rashi: "राशि",
    luckyColor: "शुभ रङ",
    marketNote: "बजार संकेत",
    personalNote: "व्यक्तिगत नोट",
    notePlaceholder: "यो दिनको लागि रिमाइन्डर थप्नुहोस्"
  }
};

const eventTranslations = {
  "नयाँ वर्ष": "Nepali New Year",
  "लोकतन्त्र दिवस": "Democracy Day",
  "मातातीर्थ औंसी": "Matatirtha Aunsi",
  "मजदुर दिवस": "Labour Day",
  "मंगलचौथी व्रत": "Mangal Chauthi Brata",
  "किराँत समाज सुधार दिवस": "Kirat Social Reform Day",
  "विश्व रेडक्रस दिवस": "World Red Cross Day",
  "कानून दिवस": "Law Day",
  "अपरा एकादशी व्रत": "Apara Ekadashi Brata",
  "प्रदोष व्रत": "Pradosh Brata",
  "वृष संक्रान्ति": "Vrish Sankranti",
  "बटसावित्री व्रत": "Bata Savitri Brata",
  "गोसाइकुण्ड स्नान आरम्भ": "Gosaikunda Bathing Begins",
  "जैविक विविधता दिवस": "Biodiversity Day",
  "गङ्गादशहरा व्रत": "Ganga Dashahara Brata",
  "गणतन्त्र दिवस": "Republic Day",
  "विश्व वातावरण दिवस": "World Environment Day",
  "विश्व रक्तदाता दिवस": "World Blood Donor Day",
  "मिथुन संक्रान्ति": "Mithun Sankranti",
  "योग दिवस": "Yoga Day",
  "निर्जला एकादशी": "Nirjala Ekadashi",
  "धान दिवस / दहीचिउरा": "National Paddy Day / Dahi Chiura",
  "सहकारी दिवस": "Cooperative Day",
  "गुरु पूर्णिमा": "Guru Purnima",
  "भानु जयन्ती": "Bhanu Jayanti",
  "साउने संक्रान्ति": "Saune Sankranti",
  "साउन सोमबार": "Sawan Somwar",
  "विश्व फोटोग्राफी दिवस": "World Photography Day",
  "जनै पूर्णिमा": "Janai Purnima",
  "गाईजात्रा": "Gaijatra",
  "विश्व साक्षरता दिवस": "International Literacy Day",
  "विश्व शान्ति दिवस": "World Peace Day",
  "विश्व फार्मासिस्ट दिवस": "World Pharmacists Day",
  "विश्व पर्यटन दिवस": "World Tourism Day",
  "घटस्थापना": "Ghatasthapana",
  "फूलपाती": "Fulpati",
  "महाअष्टमी": "Maha Ashtami",
  "महानवमी": "Maha Nawami",
  "विजया दशमी": "Vijaya Dashami",
  "कोजाग्रत पूर्णिमा": "Kojagrat Purnima",
  "कुकुर तिहार": "Kukur Tihar",
  "लक्ष्मी पूजा": "Laxmi Puja",
  "गोवर्धन पूजा": "Govardhan Puja",
  "भाइटीका": "Bhai Tika",
  "फाल्गुनन्द जयन्ती": "Falgunanda Jayanti",
  "छठ पर्व": "Chhath Parva",
  "मंसिर संक्रान्ति": "Mangsir Sankranti",
  "पूर्णिमा": "Purnima",
  "अन्तर्राष्ट्रिय अपाङ्गता दिवस": "International Day of Persons with Disabilities",
  "मानव अधिकार दिवस": "Human Rights Day",
  "पुष संक्रान्ति": "Poush Sankranti",
  "क्रिसमस डे": "Christmas Day",
  "तमु ल्होसार": "Tamu Lhosar",
  "पृथ्वी जयन्ती": "Prithvi Jayanti",
  "माघे संक्रान्ति": "Maghe Sankranti",
  "अन्तर्राष्ट्रिय शिक्षा दिवस": "International Day of Education",
  "विश्व कुष्ठरोग दिवस": "World Leprosy Day",
  "विश्व सिमसार दिवस": "World Wetlands Day",
  "विश्व क्यान्सर दिवस": "World Cancer Day",
  "प्रजातन्त्र दिवस": "Democracy Day",
  "महाशिवरात्रि": "Maha Shivaratri",
  "ग्याल्पो ल्होसार": "Gyalpo Lhosar",
  "फागु पूर्णिमा": "Fagu Purnima",
  "चैत संक्रान्ति": "Chaitra Sankranti",
  "नारी दिवस": "Women's Day",
  "राम नवमी": "Ram Nawami",
  "वर्ष अन्त्य": "Year End"
};

const monthTranslations = {
  "वैशाख": "Baisakh",
  "जेठ": "Jestha",
  "असार": "Asar",
  "साउन": "Shrawan",
  "भदौ": "Bhadra",
  "आश्विन": "Ashwin",
  "कार्तिक": "Kartik",
  "मंसिर": "Mangsir",
  "पुष": "Poush",
  "माघ": "Magh",
  "फागुन": "Falgun",
  "चैत": "Chaitra"
};

const tithiTranslations = {
  "कृष्ण प्रतिपदा": "Krishna Pratipada",
  "कृष्ण द्वितीया": "Krishna Dwitiya",
  "कृष्ण तृतिया": "Krishna Tritiya",
  "कृष्ण चतुर्थी": "Krishna Chaturthi",
  "कृष्ण पञ्चमी": "Krishna Panchami",
  "कृष्ण षष्ठी": "Krishna Shasthi",
  "कृष्ण सप्तमी": "Krishna Saptami",
  "कृष्ण अष्टमी": "Krishna Ashtami",
  "कृष्ण नवमी": "Krishna Nawami",
  "कृष्ण दशमी": "Krishna Dashami",
  "कृष्ण एकादशी": "Krishna Ekadashi",
  "कृष्ण द्वादशी": "Krishna Dwadashi",
  "कृष्ण त्रयोदशी": "Krishna Trayodashi",
  "कृष्ण चतुर्दशी": "Krishna Chaturdashi",
  "औंसी": "Aunsi",
  "शुक्ल प्रतिपदा": "Shukla Pratipada",
  "शुक्ल द्वितीया": "Shukla Dwitiya",
  "शुक्ल तृतिया": "Shukla Tritiya",
  "शुक्ल चतुर्थी": "Shukla Chaturthi",
  "शुक्ल पञ्चमी": "Shukla Panchami",
  "शुक्ल षष्ठी": "Shukla Shasthi",
  "शुक्ल सप्तमी": "Shukla Saptami",
  "शुक्ल अष्टमी": "Shukla Ashtami",
  "शुक्ल नवमी": "Shukla Nawami",
  "शुक्ल दशमी": "Shukla Dashami",
  "शुक्ल एकादशी": "Shukla Ekadashi",
  "शुक्ल द्वादशी": "Shukla Dwadashi",
  "शुक्ल त्रयोदशी": "Shukla Trayodashi",
  "शुक्ल चतुर्दशी": "Shukla Chaturdashi",
  "पूर्णिमा": "Purnima"
};

const termTranslations = {
  ...tithiTranslations,
  "अनुराधा": "Anuradha",
  "ज्येष्ठा": "Jyeshtha",
  "मूल": "Mula",
  "पूर्वाषाढा": "Purva Ashadha",
  "उत्तराषाढा": "Uttara Ashadha",
  "श्रवण": "Shravana",
  "धनिष्ठा": "Dhanishta",
  "परिधि": "Paridhi",
  "शिव": "Shiva",
  "सिद्ध": "Siddha",
  "साध्य": "Sadhya",
  "शुभ": "Shubha",
  "शुक्ल": "Shukla",
  "ब्रह्म": "Brahma",
  "वणिज": "Vanija",
  "विष्टि": "Vishti",
  "बव": "Bava",
  "बालव": "Balava",
  "कौलव": "Kaulava",
  "तैतिल": "Taitila",
  "गर": "Gara",
  "मेष": "Aries",
  "वृष": "Taurus",
  "मिथुन": "Gemini",
  "कर्कट": "Cancer",
  "सिंह": "Leo",
  "कन्या": "Virgo",
  "तुला": "Libra",
  "वृश्चिक": "Scorpio",
  "धनु": "Sagittarius",
  "मकर": "Capricorn",
  "कुम्भ": "Aquarius",
  "मीन": "Pisces"
};

const toolTranslations = {
  "Nepali <> English Date Converter": "नेपाली <> अंग्रेजी मिति परिवर्तन",
  "Quickly convert BS and AD dates": "वि.सं. र ई.सं. मिति छिटो परिवर्तन",
  "Gold & Silver Rate": "सुनचाँदी दर",
  "Daily bullion market snapshot": "दैनिक सुनचाँदी बजार संकेत",
  "Shubha Sait": "शुभ साइत",
  "Auspicious time finder": "शुभ समय खोजी",
  "Nepali Panchang": "नेपाली पञ्चाङ्ग",
  "Tithi, nakshatra, yoga and karana": "तिथि, नक्षत्र, योग र करण",
  "Nepali Horoscope for the month": "मासिक नेपाली राशिफल",
  "Monthly rashi overview": "मासिक राशि संकेत",
  "Vegetable and Fruit wholesale rates": "तरकारी तथा फलफूल थोक दर",
  "Kalimati daily wholesale snapshot": "कालीमाटी दैनिक थोक मूल्य",
  "Fuel Prices": "इन्धन मूल्य",
  "Petrol, diesel and LP gas rates": "पेट्रोल, डिजेल र एलपी ग्यास दर",
  "BS date": "वि.सं. मिति",
  "AD date": "ई.सं. मिति",
  "Mode": "मोड",
  "Fine gold": "छापावाल सुन",
  "Tejabi gold": "तेजाबी सुन",
  "Silver": "चाँदी",
  "Gold Hallmark - tola": "छापावाल सुन - तोला",
  "Gold Tajabi - tola": "तेजाबी सुन - तोला",
  "Silver - tola": "चाँदी - तोला",
  "Gold Hallmark - 10g": "छापावाल सुन - १० ग्राम",
  "Silver - 10g": "चाँदी - १० ग्राम",
  "Last updated": "अन्तिम अद्यावधिक",
  "Good window": "शुभ समय",
  "Rahu kaal": "राहु काल",
  "Direction": "दिशा",
  "Tithi": "तिथि",
  "Nakshatra": "नक्षत्र",
  "Yoga": "योग",
  "Rashi": "राशि",
  "Lucky color": "शुभ रङ",
  "Focus": "केन्द्र",
  "Petrol": "पेट्रोल",
  "Diesel": "डिजेल",
  "LP Gas": "एलपी ग्यास",
  "Applies to": "लागू हुने क्षेत्र",
  "Updated": "अद्यावधिक",
  "Lucky number": "शुभ अंक"
};

const marketLabelTranslations = {
  "Published": "Published",
  "गोलभेडा ठूलो (भारतीय)": "Large tomato (Indian)",
  "गोलभेडा सानो (लोकल)": "Small tomato (Local)",
  "गोलभेडा सानो (भारतीय)": "Small tomato (Indian)",
  "गोलभेडा सानो (तराई)": "Small tomato (Terai)",
  "आलु रातो": "Red potato",
  "आलु रातो (भारतीय)": "Red potato (Indian)",
  "प्याज सुकेको (भारतीय)": "Dry onion (Indian)",
  "गाजर (लोकल)": "Carrot (Local)",
  "गाजर (तराई)": "Carrot (Terai)",
  "बन्दा (लोकल)": "Cabbage (Local)",
  "बन्दा (नरिवल)": "Cabbage (Nariwal)",
  "काउली स्थानिय": "Cauliflower (Local)",
  "स्थानीय काउली (ज्यापु)": "Cauliflower (Jyapu)",
  "सेतो मूला (हाइब्रीड)": "White radish (Hybrid)",
  "भन्टा लाम्चो": "Long eggplant",
  "भन्टा डल्लो": "Round eggplant",
  "बोडी (तने)": "Long bean",
  "मकै बोडी": "Corn bean",
  "मटरकोशा": "Green peas",
  "घिउ सिमी (लोकल)": "Flat bean (Local)",
  "घिउ सिमी (हाइब्रीड)": "Flat bean (Hybrid)",
  "घिउ सिमी (राजमा)": "Flat bean (Rajma)",
  "भटमासकोशा": "Soybean pods",
  "तितो करेला": "Bitter gourd",
  "लौका": "Bottle gourd",
  "परवर (लोकल)": "Pointed gourd (Local)",
  "परवर (तराई)": "Pointed gourd (Terai)",
  "घिरौला": "Ridge gourd",
  "झिगूनी": "Sponge gourd",
  "फर्सी पाकेको": "Ripe pumpkin",
  "फर्सी हरियो (लाम्चो)": "Green pumpkin (Long)",
  "हरियो फर्सी (डल्लो)": "Green pumpkin (Round)",
  "भिण्डी": "Okra",
  "सखरखण्ड": "Sweet potato",
  "पिंडालू": "Taro root",
  "स्कूस": "Chayote squash",
  "रायो साग": "Mustard greens",
  "पालूगो साग": "Spinach",
  "चमसूरको साग": "Chamsur greens",
  "तोरीको साग": "Mustard greens",
  "मेथीको साग": "Fenugreek greens",
  "प्याज हरियो": "Spring onion",
  "च्याउ (कन्य)": "Oyster mushroom",
  "च्याउ (डल्ले)": "Button mushroom",
  "राजा च्याउ": "King mushroom",
  "सिताके च्याउ": "Shiitake mushroom",
  "कुरीलो": "Asparagus",
  "न्यूरो": "Fiddlehead fern",
  "ब्रोकाउली": "Broccoli",
  "चुकुन्दर": "Beetroot",
  "सजिवन": "Drumstick",
  "कोइरालो": "Koiralo flower",
  "रातो बन्दा": "Red cabbage",
  "जिरीको साग": "Dill greens",
  "सेलरी": "Celery",
  "पार्सले": "Parsley",
  "सौफको साग": "Fennel greens",
  "पुदीना": "Mint",
  "गान्टे मूला": "Knob radish",
  "इमली": "Tamarind",
  "तामा": "Bamboo shoot",
  "तोफु": "Tofu",
  "गुन्दुक": "Gundruk",
  "स्याउ (झोले)": "Apple (Jhole)",
  "स्याउ (फूजी)": "Apple (Fuji)",
  "केरा": "Banana",
  "कागती": "Lemon",
  "अनार": "Pomegranate",
  "अंगुर (हरियो)": "Green grapes",
  "अंगुर (कालो)": "Black grapes",
  "तरबुजा (हरियो)": "Watermelon",
  "भुई कटहर": "Pineapple",
  "काक्रो (लोकल)": "Cucumber (Local)",
  "काक्रो (हाइब्रीड)": "Cucumber (Hybrid)",
  "काक्रो (लोकल क्रस)": "Cucumber (Local cross)",
  "रुख कटहर": "Jackfruit",
  "नासपाती (चाइनिज)": "Pear (Chinese)",
  "मेवा (नेपाली)": "Papaya (Nepali)",
  "मेवा (भारतीय)": "Papaya (Indian)",
  "आभोकाडो": "Avocado",
  "अदुवा": "Ginger",
  "खु्र्सानी सुकेको": "Dry chili",
  "खु्र्सानी हरियो": "Green chili",
  "खुर्सानी हरियो (माछे)": "Green chili (Mache)",
  "खुर्सानी हरियो (अकबरे)": "Akabare chili",
  "भेडे खु्र्सानी": "Capsicum",
  "लसुन हरियो": "Green garlic",
  "हरियो धनिया": "Coriander",
  "लसुन सुकेको चाइनिज": "Dry garlic (Chinese)",
  "लसुन सुकेको नेपाली": "Dry garlic (Nepali)"
};

const marketSignalTranslations = {
  "Vegetables softer": "तरकारी नरम",
  "Gold steady": "सुन स्थिर",
  "Forex mixed": "विनिमय मिश्रित"
};

function t(key) {
  return translations[appLanguage][key] || translations.en[key] || key;
}

function localizeEvent(value) {
  return appLanguage === "en" ? eventTranslations[value] || value : value;
}

function localizeMonthName(value) {
  return appLanguage === "en" ? monthTranslations[value] || value : value;
}

function formatBsNumber(value) {
  return appLanguage === "en" ? String(value) : toNepaliNumber(value);
}

function formatBsDate(month, day) {
  return `${localizeMonthName(month.name)} ${formatBsNumber(day)}, ${formatBsNumber(month.year)}`;
}

function formatBsMonthYear(month) {
  return `${localizeMonthName(month.name)} ${formatBsNumber(month.year)}`;
}

function localizeTerm(value) {
  return appLanguage === "en" ? termTranslations[value] || value : value;
}

function localizeToolText(value) {
  return appLanguage === "ne" ? toolTranslations[value] || value : value;
}

function localizeToolPreviewValue(value) {
  if (appLanguage === "ne") {
    return toolTranslations[value] || value;
  }
  if (value === "वैशाख २२, २०८३") return "Baisakh 22, 2083";
  if (value === "पूर्व") return "East";
  if (value === "मेष") return "Aries";
  return localizeTerm(value);
}

function toEnglishNumber(value) {
  return String(value).replace(/[०-९]/g, (digit) => String(nepaliDigits.indexOf(digit)));
}

function localizeMarketLabel(label) {
  if (appLanguage === "ne") {
    return label;
  }
  return marketLabelTranslations[label] || label;
}

function localizeMarketSignal(value) {
  return appLanguage === "ne" ? marketSignalTranslations[value] || value : value;
}

function localizeMarketValue(value, label) {
  if (appLanguage === "ne") {
    return value;
  }
  if (label === "Published") {
    return "Baisakh 24, 2083";
  }
  return toEnglishNumber(value)
    .replaceAll("के.जी.", "kg")
    .replaceAll("दर्जन", "dozen")
    .replaceAll("प्रति गोटा", "each")
    .replaceAll("रू", "Rs")
    .replaceAll("औसत", "avg");
}

function produceIcon(label) {
  const text = label.toLowerCase();
  if (label === "Published") return "calendar";
  if (/गोलभेडा|tomato/.test(text)) return "tomato";
  if (/आलु|potato|सखरखण्ड|sweet/.test(text)) return "potato";
  if (/प्याज|onion/.test(text)) return "onion";
  if (/गाजर|carrot/.test(text)) return "carrot";
  if (/बन्दा|cabbage|रायो|पालूगो|चमसूर|तोरी|मेथी|साग|greens|spinach/.test(text)) return "greens";
  if (/काउली|cauliflower|ब्रोकाउली|broccoli/.test(text)) return "cauliflower";
  if (/भन्टा|eggplant/.test(text)) return "eggplant";
  if (/बोडी|सिमी|bean|peas|मटर/.test(text)) return "beans";
  if (/करेला|लौका|परवर|घिरौला|झिगूनी|फर्सी|भिण्डी|स्कूस|काक्रो|gourd|pumpkin|okra|squash|cucumber/.test(text)) return "gourd";
  if (/च्याउ|mushroom/.test(text)) return "mushroom";
  if (/स्याउ|apple|अनार|pomegranate/.test(text)) return "apple";
  if (/केरा|banana/.test(text)) return "banana";
  if (/कागती|lemon/.test(text)) return "lemon";
  if (/अंगुर|grape/.test(text)) return "grapes";
  if (/तरबुजा|watermelon/.test(text)) return "watermelon";
  if (/कटहर|pineapple|jackfruit/.test(text)) return "pineapple";
  if (/नासपाती|pear/.test(text)) return "pear";
  if (/मेवा|papaya|आभोकाडो|avocado/.test(text)) return "tropical";
  if (/अदुवा|ginger/.test(text)) return "ginger";
  if (/खुर्सानी|चिली|chili|capsicum/.test(text)) return "chili";
  if (/लसुन|garlic/.test(text)) return "garlic";
  if (/धनिया|coriander|पुदीना|mint|parsley|celery|fennel|dill/.test(text)) return "herbs";
  return "produce";
}

function currencyFlag(code) {
  return {
    USD: "🇺🇸",
    CNY: "🇨🇳",
    EUR: "🇪🇺",
    GBP: "🇬🇧",
    JPY: "🇯🇵",
    AUD: "🇦🇺",
    CAD: "🇨🇦"
  }[code] || "🏳";
}

function appendProduceIcon(parent, label) {
  const icon = makeElement("span", `produce-icon produce-${produceIcon(label)}`);
  icon.setAttribute("aria-hidden", "true");
  parent.append(icon);
}

function getTodayKey() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

function updateToolPreview(title, preview) {
  const tool = tools.find((item) => item.title === title);
  if (tool && Array.isArray(preview)) {
    tool.preview = preview;
  }
}

function clearNode(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

function makeElement(tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  if (text !== undefined && text !== null) {
    element.textContent = String(text);
  }
  return element;
}

function getCachedDailyData() {
  try {
    const cached = JSON.parse(localStorage.getItem(dailyDataCacheKey) || "null");
    return cached?.data || null;
  } catch {
    return null;
  }
}

function setCachedDailyData(data) {
  localStorage.setItem(dailyDataCacheKey, JSON.stringify({
    checkedAt: getTodayKey(),
    data
  }));
}

function isSameDayCacheUsable() {
  try {
    const cached = JSON.parse(localStorage.getItem(dailyDataCacheKey) || "null");
    return cached?.checkedAt === getTodayKey() && cached?.data;
  } catch {
    return false;
  }
}

function applyDailyData(data) {
  if (!data) {
    return;
  }

  dailyDataSnapshot = data;

  if (data.gold) {
    updateToolPreview("Gold & Silver Rate", data.gold.preview);
    goldSilverRows = data.gold.preview || goldSilverRows;
    goldUpdatedAt = data.gold.updatedAt || data.gold.lastUpdated || data.updatedAt || goldUpdatedAt;
    document.querySelector("#goldInsightValue").textContent = data.gold.insight || goldSilverRows[0]?.[1] || "";
  }

  if (data.fuel) {
    updateToolPreview("Fuel Prices", data.fuel.preview);
    fuelRows = data.fuel.rows || data.fuel.preview || fuelRows;
    fuelUpdatedAt = data.fuel.updatedAt || data.updatedAt || fuelUpdatedAt;
    document.querySelector("#fuelInsightValue").textContent = data.fuel.insight || fuelRows[0]?.[1] || "";
  }

  if (data.market?.preview) {
    updateToolPreview("Vegetable and Fruit wholesale rates", data.market.preview);
    marketRows = data.market.preview;
    marketUpdatedAt = data.market.updatedAt || data.updatedAt || marketUpdatedAt;
  }

  if (data.horoscope?.items) {
    Object.assign(horoscopeData, data.horoscope.items);
  }

  if (data.forex?.rates) {
    exchangeRates = data.forex.rates;
    document.querySelector("#forexUpdatedBadge").textContent = data.forex.badge || data.forex.updatedAt || data.updatedAt || "Today";
  }
}

async function getDailyData() {
  if (isSameDayCacheUsable()) {
    return getCachedDailyData();
  }

  if (window.location.protocol === "file:") {
    return window.NEPAL_PATRO_DAILY_DATA || null;
  }

  try {
    const apiResponse = await fetch("/api/daily-data", { cache: "no-store" });
    if (apiResponse.ok) {
      localStorage.setItem(dataSourceStatusKey, "api");
      return apiResponse.json();
    }
  } catch {
    localStorage.setItem(dataSourceStatusKey, "fallback");
  }

  const response = await fetch("data/daily-data.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Daily data unavailable");
  }
  return response.json();
}

async function forceRefreshDailyData() {
  localStorage.removeItem(dailyDataKey);
  localStorage.removeItem(dailyDataCacheKey);
  try {
    const data = await getDailyData();
    applyDailyData(data);
    if (data) {
      setCachedDailyData(data);
      localStorage.setItem(dailyDataKey, getTodayKey());
      if (data.updatedAt) {
        localStorage.setItem(dailyDataVersionKey, data.updatedAt);
      }
    }
    renderAll();
  } catch (error) {
    console.warn(error);
  }
}

async function refreshDailyDataOncePerDay() {
  const today = getTodayKey();
  const embeddedVersion = window.NEPAL_PATRO_DAILY_DATA?.updatedAt || "";
  const checkedToday = localStorage.getItem(dailyDataKey) === today;
  const sameVersion = localStorage.getItem(dailyDataVersionKey) === embeddedVersion;

  if (checkedToday && (isSameDayCacheUsable() || sameVersion)) {
    applyDailyData(getCachedDailyData() || window.NEPAL_PATRO_DAILY_DATA);
    renderAll();
    return;
  }

  try {
    const data = await getDailyData();
    applyDailyData(data);
    if (data) {
      setCachedDailyData(data);
    }
    localStorage.setItem(dailyDataKey, today);
    if (data?.updatedAt) {
      localStorage.setItem(dailyDataVersionKey, data.updatedAt);
    }
    renderAll();
  } catch (error) {
    console.warn(error);
  }
}

function toNepaliNumber(value) {
  return String(value).replace(/\d/g, (digit) => nepaliDigits[Number(digit)]);
}

function formatEnglishDate(month, day) {
  const date = new Date(`${month.englishStart}T00:00:00`);
  date.setDate(date.getDate() + day - 1);
  return date;
}

function formatReadableDate(date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function formatCompactAdDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  });
}

function formatFullAdDate(date) {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function getBsMonthDays(year, month) {
  const index = month - 1;
  const base = [31, 32, 31, 31, 31, 31, 29, 30, 29, 30, 30, 30];
  const variant = base.slice();
  if (year % 4 === 0) variant[2] = 32;
  if (year % 3 === 0) variant[6] = 30;
  if (year % 5 === 0) variant[8] = 30;
  if (year % 7 === 0) variant[10] = 29;
  if (year === 2083) {
    return monthSeed[index]?.days || variant[index];
  }
  return variant[index];
}

function countDaysFromBsAnchor(year, month, day) {
  let total = 0;
  if (year >= converterAnchor.bsYear) {
    for (let y = converterAnchor.bsYear; y < year; y += 1) {
      for (let m = 1; m <= 12; m += 1) total += getBsMonthDays(y, m);
    }
    for (let m = 1; m < month; m += 1) total += getBsMonthDays(year, m);
    total += day - 1;
    return total;
  }

  for (let y = year; y < converterAnchor.bsYear; y += 1) {
    for (let m = 1; m <= 12; m += 1) total -= getBsMonthDays(y, m);
  }
  for (let m = 1; m < month; m += 1) total += getBsMonthDays(year, m);
  total += day - 1;
  return total;
}

function convertBsToAd(year, month, day) {
  const boundedYear = Math.max(converterStartYear, Math.min(converterEndYear, year));
  const boundedMonth = Math.max(1, Math.min(12, month));
  const maxDay = getBsMonthDays(boundedYear, boundedMonth);
  const boundedDay = Math.max(1, Math.min(maxDay, day));
  const offset = countDaysFromBsAnchor(boundedYear, boundedMonth, boundedDay);
  return {
    year: boundedYear,
    month: boundedMonth,
    day: boundedDay,
    date: addDays(converterAnchor.adDate, offset)
  };
}

function convertAdToBs(date) {
  const target = new Date(`${formatDateKey(date)}T00:00:00`);
  const dayMs = 24 * 60 * 60 * 1000;
  let remaining = Math.round((target - converterAnchor.adDate) / dayMs);
  let year = converterAnchor.bsYear;
  let month = converterAnchor.bsMonth;
  let day = converterAnchor.bsDay;

  if (remaining >= 0) {
    while (remaining > 0 && year <= converterEndYear) {
      const daysInMonth = getBsMonthDays(year, month);
      const canMove = Math.min(remaining, daysInMonth - day + 1);
      day += canMove;
      remaining -= canMove;
      if (day > daysInMonth) {
        day = 1;
        month += 1;
        if (month > 12) {
          month = 1;
          year += 1;
        }
      }
    }
  } else {
    while (remaining < 0 && year >= converterStartYear) {
      day -= 1;
      remaining += 1;
      if (day < 1) {
        month -= 1;
        if (month < 1) {
          month = 12;
          year -= 1;
        }
        day = getBsMonthDays(year, month);
      }
    }
  }

  return { year, month, day };
}

function formatConverterBsDate(year, month, day) {
  const name = localizeMonthName(bsMonthNames[month - 1]);
  return `${name} ${formatBsNumber(day)}, ${formatBsNumber(year)}`;
}

function getDayData(month, day) {
  const date = formatEnglishDate(month, day);
  const lunarPending = month.year >= 2084;
  return {
    day,
    nepaliDay: toNepaliNumber(day),
    englishDay: date.getDate(),
    englishDate: formatReadableDate(date),
    weekday: date.getDay(),
    event: lunarPending && day !== 1 ? "" : month.events[day] || "",
    tithi: lunarPending ? "2084 lunar data pending" : tithis[(day + 16) % tithis.length],
    nakshatra: nakshatras[day % nakshatras.length],
    yoga: yogas[(day + 2) % yogas.length],
    karana: karanas[(day + 4) % karanas.length],
    rashi: rashis[day % rashis.length],
    color: colors[day % colors.length],
    market: day % 3 === 0 ? "Vegetables softer" : day % 2 === 0 ? "Gold steady" : "Forex mixed"
  };
}

function renderCalendar() {
  const month = months[activeMonthIndex];
  monthLabel.textContent = calendarMode === "ad"
    ? `${month.englishRange} (${formatBsMonthYear(month)})`
    : `${formatBsMonthYear(month)} (${month.englishRange})`;
  monthSubLabel.textContent = "";
  const calendarNotice = document.querySelector("#calendarNotice");
  const showNotice = month.year >= 2084;
  calendarNotice.hidden = !showNotice;
  calendarNotice.textContent = showNotice
    ? appLanguage === "ne"
      ? "वि.सं. २०८४ का चन्द्रमास, तिथि र चाडपर्व सम्बन्धी विवरण आधिकारिक नयाँ पात्रो सार्वजनिक भएपछि अद्यावधिक गरिनेछ।"
      : "Lunar-calendar festivals, tithi and moon-phase dependent details for BS 2084 will be updated when the official new patro is announced."
    : "";
  monthSelect.value = String(activeMonthIndex);
  monthSelect.setAttribute("aria-label", t("chooseMonth"));
  clearNode(calendarGrid);

  for (let i = 0; i < month.startOffset; i += 1) {
    const empty = document.createElement("div");
    empty.className = "day-cell empty";
    calendarGrid.append(empty);
  }

  for (let day = 1; day <= month.days; day += 1) {
    const data = getDayData(month, day);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "day-cell";
    button.setAttribute("role", "gridcell");
    button.setAttribute("aria-label", `${formatBsDate(month, day)}, ${data.englishDate}`);

    if (activeMonthIndex === 0 && day === 22) {
      button.classList.add("today");
    }

    if (data.weekday === 6) {
      button.classList.add("weekend");
    }

    if (localStorage.getItem(`note:${month.year}-${month.name}-${day}`)) {
      button.classList.add("has-note");
    }

    const primaryDay = calendarMode === "ad" ? data.englishDay : formatBsNumber(day);
    const secondaryDay = calendarMode === "ad" ? formatBsNumber(day) : data.englishDay;
    const secondaryLabel = calendarMode === "ad" ? `${secondaryDay} BS` : secondaryDay;

    const dayTop = makeElement("span", "day-top");
    dayTop.append(makeElement("span", "nepali-day", primaryDay));
    dayTop.append(makeElement("span", "english-day", secondaryLabel));
    button.append(dayTop);

    if (data.event) {
      button.append(makeElement("span", "event-chip", localizeEvent(data.event)));
    }

    button.append(makeElement("span", "tithi", data.tithi === "2084 lunar data pending" ? (appLanguage === "ne" ? "तिथि पछि अद्यावधिक" : "Tithi pending") : localizeTerm(data.tithi)));

    button.addEventListener("click", () => openDayModal(month, data));
    calendarGrid.append(button);
  }
}

function renderMonthPicker() {
  clearNode(monthSelect);
  months.forEach((month, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = calendarMode === "ad" ? month.englishRange : formatBsMonthYear(month);
    monthSelect.append(option);
  });
}

function renderTools() {
  const toolList = document.querySelector("#toolList");
  clearNode(toolList);
  tools.forEach((tool, index) => {
    const button = makeElement("button", "tool-link");
    button.type = "button";
    button.dataset.toolIndex = String(index);
    button.setAttribute("aria-label", localizeToolText(tool.title));
    const icon = makeElement("span", "tool-icon", tool.icon);
    icon.setAttribute("aria-hidden", "true");
    const textWrap = document.createElement("span");
    textWrap.append(makeElement("strong", "", localizeToolText(tool.title)));
    textWrap.append(makeElement("span", "", localizeToolText(tool.description)));
    button.append(icon, textWrap);
    toolList.append(button);
  });

  toolList.querySelectorAll(".tool-link").forEach((button) => {
    button.addEventListener("click", () => {
      const tool = tools[Number(button.dataset.toolIndex)];
      const route = {
        "Nepali <> English Date Converter": "date-converter",
        "Gold & Silver Rate": "gold-silver",
        "Shubha Sait": "shubha-sait",
        "Nepali Panchang": "panchang",
        "Nepali Horoscope for the month": "horoscope",
        "Vegetable and Fruit wholesale rates": "market",
        "Fuel Prices": "fuel"
      }[tool.title];
      if (route) {
        navigateToSection(route);
      } else {
        openToolModal(tool);
      }
    });
  });
}

function renderRates() {
  const rateList = document.querySelector("#exchangeRates");
  clearNode(rateList);
  exchangeRates.forEach(([code, label, unit, buy, sell]) => {
    const row = document.createElement("tr");
    const currencyCell = document.createElement("td");
    const labelRow = makeElement("strong", "currency-label");
    labelRow.append(makeElement("span", "flag-icon", currencyFlag(code)));
    labelRow.append(makeElement("span", "", code));
    currencyCell.append(labelRow);
    currencyCell.append(makeElement("span", "", label));
    row.append(currencyCell);
    row.append(makeElement("td", "", unit));
    row.append(makeElement("td", "numeric", buy));
    row.append(makeElement("td", "numeric", sell));
    rateList.append(row);
  });
}

function drawLineChart(svg, values, color, unitPrefix = "") {
  clearNode(svg);
  const width = 520;
  const height = 220;
  const pad = 34;
  const min = Math.min(...values);
  const max = Math.max(...values);
  const spread = max - min || 1;
  const points = values.map((value, index) => {
    const x = pad + (index * (width - pad * 2)) / (values.length - 1);
    const y = height - pad - ((value - min) / spread) * (height - pad * 2);
    return [x, y, value];
  });
  [min, Math.round((min + max) / 2), max].forEach((tick) => {
    const y = height - pad - ((tick - min) / spread) * (height - pad * 2);
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", String(pad));
    line.setAttribute("x2", String(width - pad));
    line.setAttribute("y1", String(y));
    line.setAttribute("y2", String(y));
    line.setAttribute("class", "chart-grid-line");
    svg.append(line);
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", "8");
    text.setAttribute("y", String(y + 4));
    text.setAttribute("class", "chart-tick");
    text.textContent = `${unitPrefix}${tick.toLocaleString("en-US")}`;
    svg.append(text);
  });
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", points.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x} ${y}`).join(" "));
  path.setAttribute("class", "chart-line");
  path.setAttribute("stroke", color);
  svg.append(path);
  points.forEach(([x, y]) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", String(x));
    circle.setAttribute("cy", String(y));
    circle.setAttribute("r", "4.5");
    circle.setAttribute("class", "chart-dot");
    circle.setAttribute("fill", color);
    svg.append(circle);
  });
}

function renderGoldSilver() {
  const rows = document.querySelector("#goldSilverRows");
  clearNode(rows);
  goldSilverRows.forEach(([label, value]) => {
    if (/last updated/i.test(label)) {
      goldUpdatedAt = value;
      return;
    }
    const row = makeElement("div", "price-row");
    row.append(makeElement("span", "", localizeToolText(label)));
    row.append(makeElement("strong", "", localizeToolPreviewValue(value)));
    rows.append(row);
  });

  const firstPrice = goldSilverRows.find(([label]) => label === "Gold Hallmark - tola")?.[1] || "";
  const silverPrice = goldSilverRows.find(([label]) => label === "Silver - tola")?.[1] || "";
  document.querySelector("#goldUpdatedText").textContent = `${localizeToolText("Last updated")}: ${localizeToolPreviewValue(goldUpdatedAt)}`;
  document.querySelector("#goldChartValue").textContent = localizeToolPreviewValue(firstPrice);
  document.querySelector("#silverChartValue").textContent = localizeToolPreviewValue(silverPrice);
  drawLineChart(document.querySelector("#goldLineChart"), goldHistory, "#315f9f", "Rs ");
  drawLineChart(document.querySelector("#silverLineChart"), silverHistory, "#767a86", "Rs ");
}

function renderMarket() {
  const container = document.querySelector("#marketRows");
  clearNode(container);
  document.querySelector("#marketUpdatedText").textContent = `${localizeToolText("Last updated")}: ${localizeMarketValue(marketUpdatedAt, "Published")}`;
  marketRows.filter(([label]) => label !== "Published").forEach(([label, value]) => {
    const card = makeElement("article", "market-card");
    const title = makeElement("span", "market-name");
    appendProduceIcon(title, label);
    title.append(makeElement("strong", "", localizeMarketLabel(label)));
    card.append(title);
    card.append(makeElement("p", "", localizeMarketValue(value, label)));
    container.append(card);
  });
}

function renderFuel() {
  const container = document.querySelector("#fuelRows");
  clearNode(container);
  document.querySelector("#fuelUpdatedText").textContent = `${localizeToolText("Last updated")}: ${fuelUpdatedAt}`;
  fuelRows.filter(([label]) => !["Applies to", "Updated"].includes(label)).forEach(([label, value, area]) => {
    const card = makeElement("article", "fuel-card");
    card.append(makeElement("span", "fuel-icon", label === "LP Gas" ? "LPG" : label === "Diesel" ? "DSL" : "MS"));
    card.append(makeElement("strong", "", localizeToolText(label)));
    card.append(makeElement("p", "", value));
    card.append(makeElement("small", "", area || "Kathmandu, Pokhara, Dipayal"));
    container.append(card);
  });
}

function renderHoroscopeOptions() {
  const select = document.querySelector("#rashiSelect");
  const current = select.value || "meen";
  clearNode(select);
  Object.entries(horoscopeData).forEach(([key, value]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = appLanguage === "ne" ? value[0] : value[1];
    select.append(option);
  });
  select.value = current;
}

function renderHoroscope() {
  renderHoroscopeOptions();
  const key = document.querySelector("#rashiSelect").value || "meen";
  const data = horoscopeData[key] || horoscopeData.meen;
  const card = document.querySelector("#horoscopeCard");
  clearNode(card);
  card.append(makeElement("p", "eyebrow", appLanguage === "ne" ? data[0] : data[1]));
  card.append(makeElement("h2", "", appLanguage === "ne" ? `${data[0]} राशि` : `${data[1]} Rashi`));
  card.append(makeElement("p", "", data[2]));
  const meta = makeElement("div", "horoscope-meta");
  [["Focus", data[3]], ["Lucky color", data[4]], ["Lucky number", data[5]]].forEach(([label, value]) => {
    const item = makeElement("span", "");
    item.append(makeElement("small", "", localizeToolText(label)));
    item.append(makeElement("strong", "", value));
    meta.append(item);
  });
  card.append(meta);
}

function renderMiniList(targetId, rows) {
  const container = document.querySelector(targetId);
  clearNode(container);
  rows.forEach(([title, time, note]) => {
    const row = makeElement("div", "mini-row");
    row.append(makeElement("strong", "", title));
    row.append(makeElement("span", "", time));
    if (note) row.append(makeElement("small", "", note));
    container.append(row);
  });
}

function renderPanchangDetails() {
  renderMiniList("#inauspiciousTimes", inauspiciousTimes);
  renderMiniList("#dailyGuidance", panchangGuidance);
}

function renderShubhaSait() {
  const container = document.querySelector("#saitRows");
  clearNode(container);
  saitRows.forEach(([category, title, time, note]) => {
    const card = makeElement("article", "sait-card");
    card.append(makeElement("span", "eyebrow", category));
    card.append(makeElement("strong", "", title));
    card.append(makeElement("p", "", time));
    card.append(makeElement("small", "", note));
    container.append(card);
  });
}

function renderEvents() {
  const month = months[activeMonthIndex];
  const eventList = document.querySelector("#eventList");
  const upcoming = Object.entries(month.events)
    .map(([day, title]) => ({ day: Number(day), title }))
    .filter((item) => activeMonthIndex !== 0 || item.day >= 22)
    .slice(0, 5);

  document.querySelector("#eventCountBadge").textContent = String(upcoming.length);
  clearNode(eventList);
  upcoming.forEach((item) => {
    const data = getDayData(month, item.day);
    const button = makeElement("button", "event-row");
    button.type = "button";
    button.dataset.eventDay = String(item.day);
    const textWrap = document.createElement("span");
    textWrap.append(makeElement("strong", "", localizeEvent(item.title)));
    textWrap.append(makeElement("span", "", data.englishDate));
    button.append(textWrap);
    button.append(makeElement("span", "event-date", calendarMode === "ad" ? formatCompactAdDate(formatEnglishDate(month, item.day)) : formatBsNumber(item.day)));
    eventList.append(button);
  });

  eventList.querySelectorAll(".event-row").forEach((button) => {
    const day = Number(button.dataset.eventDay);
    button.addEventListener("click", () => openDayModal(month, getDayData(month, day)));
  });
}

function renderBsMonthOptions() {
  const select = document.querySelector("#bsMonthInput");
  const currentValue = select.value || "1";
  clearNode(select);
  bsMonthNames.forEach((name, index) => {
    const option = document.createElement("option");
    option.value = String(index + 1);
    option.textContent = localizeMonthName(name);
    select.append(option);
  });
  select.value = currentValue;
}

function renderDateConverterPage() {
  renderBsMonthOptions();
  document.querySelector("#converterRange").textContent = appLanguage === "ne"
    ? `वि.सं. ${toNepaliNumber(converterStartYear)}-${toNepaliNumber(converterEndYear)}`
    : `BS ${converterStartYear}-${converterEndYear}`;
}

function runBsToAdConversion() {
  const yearInput = document.querySelector("#bsYearInput");
  const monthInput = document.querySelector("#bsMonthInput");
  const dayInput = document.querySelector("#bsDayInput");
  const converted = convertBsToAd(Number(yearInput.value), Number(monthInput.value), Number(dayInput.value));
  yearInput.value = String(converted.year);
  monthInput.value = String(converted.month);
  dayInput.value = String(converted.day);
  document.querySelector("#bsToAdResult").textContent = `${formatConverterBsDate(converted.year, converted.month, converted.day)} = ${formatFullAdDate(converted.date)}`;
}

function runAdToBsConversion() {
  const input = document.querySelector("#adDateInput");
  const date = input.value ? new Date(`${input.value}T00:00:00`) : new Date("2026-05-05T00:00:00");
  const converted = convertAdToBs(date);
  document.querySelector("#adToBsResult").textContent = `${formatFullAdDate(date)} = ${formatConverterBsDate(converted.year, converted.month, converted.day)}`;
}

function openToolModal(tool) {
  const previewGrid = document.querySelector("#toolPreviewGrid");
  document.querySelector("#toolTitle").textContent = localizeToolText(tool.title);
  document.querySelector("#toolDescription").textContent = localizeToolText(tool.description);
  previewGrid.classList.toggle("market-grid", Boolean(tool.market));
  clearNode(previewGrid);
  tool.preview.forEach(([label, value]) => {
    const item = document.createElement("div");
    const labelWrap = makeElement("span", "market-name");
    if (tool.market) {
      appendProduceIcon(labelWrap, label);
    }
    labelWrap.append(makeElement("span", "", tool.market ? localizeMarketLabel(label) : localizeToolText(label)));
    item.append(labelWrap);
    item.append(makeElement("strong", "", tool.market ? localizeMarketValue(value, label) : localizeToolPreviewValue(value)));
    previewGrid.append(item);
  });
  toolBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function openDayModal(month, data) {
  activeDay = `${month.year}-${month.name}-${data.day}`;
  document.querySelector("#modalNepaliDay").textContent = calendarMode === "ad" ? data.englishDay : formatBsNumber(data.day);
  document.querySelector("#modalMonth").textContent = calendarMode === "ad"
    ? data.englishDate
    : formatBsMonthYear(month);
  document.querySelector("#modalTitle").textContent = data.event ? localizeEvent(data.event) : localizeTerm(data.tithi);
  document.querySelector("#modalEnglishDate").textContent = calendarMode === "ad"
    ? formatBsDate(month, data.day)
    : data.englishDate;
  document.querySelector("#modalRashi").textContent = localizeTerm(data.rashi);
  document.querySelector("#modalColor").textContent = data.color;
  document.querySelector("#modalMarket").textContent = localizeMarketSignal(data.market);
  document.querySelector("#modalTithi").textContent = localizeTerm(data.tithi);
  document.querySelector("#modalNakshatra").textContent = localizeTerm(data.nakshatra);
  document.querySelector("#modalYoga").textContent = localizeTerm(data.yoga);
  document.querySelector("#modalKarana").textContent = localizeTerm(data.karana);
  document.querySelector("#modalFestival").textContent = data.event ? localizeEvent(data.event) : t("noFestival");
  document.querySelector("#modalNote").textContent = data.event
    ? `${localizeEvent(data.event)} ${t("eventNote")}`
    : t("cleanDayNote");
  noteBox.value = localStorage.getItem(`note:${activeDay}`) || "";
  document.querySelector("#saveNote").textContent = t("saveNote");
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = "";
}

function closeToolModal() {
  toolBackdrop.hidden = true;
  document.body.style.overflow = "";
}

function syncMonthView(index) {
  activeMonthIndex = index;
  renderMonthPicker();
  renderCalendar();
  renderConverter();
  renderEvents();
}

function renderHero() {
  const month = months[0];
  const data = getDayData(month, 22);
  document.querySelector("#calendarTitle").textContent = calendarMode === "ad"
    ? formatFullAdDate(formatEnglishDate(month, 22))
    : `${formatBsNumber(data.day)} ${localizeMonthName(month.name)} ${formatBsNumber(month.year)}`;
  document.querySelector(".hero-copy").textContent = calendarMode === "ad"
    ? `${formatBsDate(month, data.day)} · ${localizeTerm(data.tithi)}`
    : `${data.englishDate} · ${localizeTerm(data.tithi)}`;
}

function renderConverter() {
  const month = months[activeMonthIndex];
  const rawDay = Number(document.querySelector("#converterInput").value);
  const day = Math.max(1, Math.min(month.days, rawDay || 22));
  const date = formatEnglishDate(month, day);
  const bsDate = formatBsDate(month, day);
  const adDate = date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  document.querySelector("#converterResult").textContent = calendarMode === "ad"
    ? `${adDate} ≈ ${bsDate}`
    : `${bsDate} ≈ ${adDate}`;
}

function updateLanguage() {
  document.documentElement.lang = appLanguage === "ne" ? "ne" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
  document.querySelector("#todayTithi").textContent = localizeTerm("कृष्ण चतुर्थी");
  document.querySelector("#todayNakshatra").textContent = localizeTerm("अनुराधा");
  document.querySelector("#todayYoga").textContent = localizeTerm("परिधि");
  document.querySelector("#nextEventTitle").textContent = localizeEvent("किराँत समाज सुधार दिवस");
  document.querySelector("#saveNote").textContent = t("saveNote");
  renderDateConverterPage();
}

function updateControlStates() {
  document.body.dataset.calendarMode = calendarMode;
  languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.language === appLanguage);
    button.setAttribute("aria-pressed", String(button.dataset.language === appLanguage));
  });
  calendarModeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.calendarMode === calendarMode);
    button.setAttribute("aria-pressed", String(button.dataset.calendarMode === calendarMode));
  });
}

function renderAll() {
  updateLanguage();
  updateControlStates();
  renderHero();
  renderConverter();
  renderMonthPicker();
  renderCalendar();
  renderTools();
  renderRates();
  renderGoldSilver();
  renderMarket();
  renderFuel();
  renderHoroscope();
  renderPanchangDetails();
  renderShubhaSait();
  renderDateConverterPage();
  runBsToAdConversion();
  runAdToBsConversion();
  renderEvents();
  updateActiveNav();
}

function updateActiveNav() {
  const sectionId = getCurrentSectionId();
  navLinks.forEach((link) => {
    if (link.dataset.sectionLink === sectionId) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function getCurrentSectionId() {
  const requested = window.location.hash.replace("#", "");
  return validSections.includes(requested) ? requested : "calendar";
}

function navigateToSection(sectionId, options = {}) {
  const nextSection = validSections.includes(sectionId) ? sectionId : "calendar";
  const target = document.querySelector(`#${nextSection}`);
  if (!target) {
    return;
  }

  if (window.location.hash !== `#${nextSection}`) {
    history.pushState(null, "", `#${nextSection}`);
  }

  appSections.forEach((section) => {
    section.classList.toggle("active", section.id === nextSection);
    section.classList.remove("section-focus");
  });
  target.classList.add("section-focus");
  window.scrollTo({ top: 0, left: 0, behavior: options.instant ? "auto" : "smooth" });
  target.focus({ preventScroll: true });
  updateActiveNav();
}

document.querySelector("#prevMonth").addEventListener("click", () => {
  syncMonthView((activeMonthIndex - 1 + months.length) % months.length);
});

document.querySelector("#nextMonth").addEventListener("click", () => {
  syncMonthView((activeMonthIndex + 1) % months.length);
});

monthSelect.addEventListener("change", () => {
  syncMonthView(Number(monthSelect.value));
});

sectionLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navigateToSection(link.dataset.sectionLink);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appLanguage = button.dataset.language;
    localStorage.setItem("nepalPatro:language", appLanguage);
    renderAll();
  });
});

calendarModeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calendarMode = button.dataset.calendarMode;
    localStorage.setItem("nepalPatro:calendarMode", calendarMode);
    renderAll();
  });
});

document.querySelector("#todayButton").addEventListener("click", () => {
  syncMonthView(0);
  const today = document.querySelector(".day-cell.today");
  today?.scrollIntoView({ behavior: "smooth", block: "center" });
});

document.querySelector("#closeModal").addEventListener("click", closeModal);
document.querySelector("#closeToolModal").addEventListener("click", closeToolModal);
modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop) {
    closeModal();
  }
});
toolBackdrop.addEventListener("click", (event) => {
  if (event.target === toolBackdrop) {
    closeToolModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalBackdrop.hidden) {
    closeModal();
  }
  if (event.key === "Escape" && !toolBackdrop.hidden) {
    closeToolModal();
  }
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    tab.classList.add("active");
    document.querySelector(`[data-panel="${tab.dataset.tab}"]`).classList.add("active");
  });
});

document.querySelector("#saveNote").addEventListener("click", () => {
  if (!activeDay) {
    return;
  }
  localStorage.setItem(`note:${activeDay}`, noteBox.value.trim());
  renderCalendar();
  document.querySelector("#saveNote").textContent = t("saved");
  setTimeout(() => {
    document.querySelector("#saveNote").textContent = t("saveNote");
  }, 1200);
});

document.querySelector("#convertButton").addEventListener("click", () => {
  const month = months[activeMonthIndex];
  const rawDay = Number(document.querySelector("#converterInput").value);
  const day = Math.max(1, Math.min(month.days, rawDay || 1));
  document.querySelector("#converterInput").value = String(day);
  renderConverter();
});

document.querySelector("#convertBsToAd").addEventListener("click", runBsToAdConversion);
document.querySelector("#convertAdToBs").addEventListener("click", runAdToBsConversion);
document.querySelector("#bsYearInput").addEventListener("input", runBsToAdConversion);
document.querySelector("#bsMonthInput").addEventListener("change", runBsToAdConversion);
document.querySelector("#bsDayInput").addEventListener("input", runBsToAdConversion);
document.querySelector("#adDateInput").addEventListener("input", runAdToBsConversion);
document.querySelector("#rashiSelect").addEventListener("change", renderHoroscope);
document.querySelectorAll("[data-refresh-button]").forEach((button) => {
  button.addEventListener("click", async () => {
    const original = button.textContent;
    button.textContent = appLanguage === "ne" ? "रिफ्रेस हुँदै..." : "Refreshing...";
    button.disabled = true;
    await forceRefreshDailyData();
    button.disabled = false;
    button.textContent = original;
  });
});

window.addEventListener("hashchange", () => {
  navigateToSection(getCurrentSectionId(), { instant: true });
});
window.addEventListener("load", () => {
  if (!window.location.hash || window.location.hash === "#") {
    window.scrollTo({ top: 0, left: 0 });
  } else {
    navigateToSection(getCurrentSectionId(), { instant: true });
  }
});

renderAll();
refreshDailyDataOncePerDay();
