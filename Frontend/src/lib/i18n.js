/**
 * AgriSense AI — bilingual content (English / हिंदी)
 * All user facing text lives here so the whole portal can switch language
 * instantly, without any network request.
 */

const en = {
  code: "en",
  htmlLang: "en",
  strip: {
    govt: "Government of India",
    ministry: "Ministry of Agriculture & Farmers Welfare",
    skip: "Skip to main content",
    screenReader: "Screen Reader Access",
    fontSize: "Text size",
    decrease: "Decrease text size",
    normal: "Normal text size",
    increase: "Increase text size",
    contrast: "High contrast",
    contrastOn: "Turn high contrast on",
    contrastOff: "Turn high contrast off",
    language: "Language",
  },
  brand: {
    name: "AgriSense AI",
    short: "AgriSense AI",
    sub: "Smart Farming Support System",
    pilot: "Pilot Demo",
    emblemAlt: "National emblem of India",
  },
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    dashboard: "Dashboard",
    alerts: "Alerts",
    contact: "Contact",
    help: "Help",
    menu: "Menu",
    closeMenu: "Close menu",
    openMenu: "Open menu",
  },
  hero: {
    badge: "Government supported pilot project",
    title: "AgriSense AI",
    tagline: "Smart Farming Support System for Indian Farmers",
    intro:
      "AgriSense AI is a simple digital service that helps farmers take better decisions in the field. It works on small mobile phones and slow internet.",
    points: [
      "Helps farmers improve crop production",
      "Gives irrigation advice — when and how much water to give",
      "Detects crop diseases from a photo of the leaf",
      "Provides local weather and rainfall updates",
    ],
    ctaServices: "View Services",
    ctaDashboard: "Open Dashboard",
    imageAlt:
      "Indian farmer standing in a green wheat field during morning hours",
    imageCaption: "Field data collected by village level IoT soil sensors.",
    helplineLabel: "Kisan Call Centre (toll free)",
    helpline: "1800-180-1551",
  },
  notices: {
    title: "Latest Updates",
    tag: "New",
    items: [
      "Kharif 2026 advisory for wheat and paddy is now available in Hindi.",
      "Soil health card data can now be linked with your AgriSense AI account.",
      "Village level pilot started in 12 districts of 6 states.",
      "Free disease detection camp at Krishi Vigyan Kendra every Monday.",
    ],
  },
  about: {
    heading: "About AgriSense AI",
    whatTitle: "What is AgriSense AI?",
    whatText:
      "AgriSense AI is a government supported digital system that helps farmers make better farming decisions using Artificial Intelligence (AI) and small field sensors (IoT). Sensors placed in the field read soil and weather conditions. The system studies this data and gives simple advice in your own language.",
    whatText2:
      "No technical knowledge is needed. Advice is shown in short sentences, with clear colours — green means safe, yellow means be careful, red means act today.",
    whoTitle: "Who can use it?",
    who: [
      {
        title: "Farmers",
        text: "To get daily advice on water, fertilizer, crop and weather.",
      },
      {
        title: "Agriculture Officers",
        text: "To monitor village and block level field data.",
      },
      {
        title: "Village Level Workers",
        text: "To help farmers who cannot read or use a smartphone.",
      },
    ],
    benefitsTitle: "Benefits",
    benefits: [
      "Better crop yield",
      "Less water usage",
      "Early disease detection",
      "Smart fertilizer usage",
      "Weather based planning",
      "Lower farming cost",
    ],
    statsTitle: "Pilot at a glance",
    stats: [
      { value: "12", label: "Districts covered" },
      { value: "480", label: "Villages connected" },
      { value: "26,500", label: "Registered farmers" },
      { value: "1,120", label: "Field sensors installed" },
    ],
  },
  services: {
    heading: "Our Services",
    sub: "Seven simple services. Choose any service to know more.",
    open: "Know more",
    availability: "Available in English and Hindi",
    items: {
      irrigation: {
        title: "Smart Irrigation Advisory",
        text: "Tells you when to irrigate and how much water is needed.",
        detail:
          "Uses soil moisture, temperature and rain forecast to decide the correct watering time. Saves water and electricity.",
      },
      crop: {
        title: "Crop Recommendation",
        text: "Suggests the best crop based on your soil and weather.",
        detail:
          "Considers soil type, N-P-K values, pH and season to suggest crops that give good returns in your area.",
      },
      fertilizer: {
        title: "Fertilizer Guidance",
        text: "Recommends the correct fertilizer and correct quantity.",
        detail:
          "Prevents over use of urea and other fertilizers. Shows dose per acre in simple words.",
      },
      disease: {
        title: "Disease Detection",
        text: "Detects crop diseases from a photo of the leaf.",
        detail:
          "Take a photo of the affected leaf. The system names the disease and suggests low cost treatment.",
      },
      weather: {
        title: "Weather Information",
        text: "Shows local weather, rainfall and temperature updates.",
        detail:
          "Block level forecast for the next 5 days, with warnings for heavy rain, hailstorm and heat wave.",
      },
      yield: {
        title: "Yield Prediction",
        text: "Estimates how much crop production you may get.",
        detail:
          "Helps in planning storage, transport and sale of produce before harvest time.",
      },
      helpdesk: {
        title: "Farmer Help Desk",
        text: "A simple AI assistant for your farming questions.",
        detail:
          "Ask a question by typing or by voice. Answers are given in simple Hindi or English.",
      },
    },
  },
  dashboard: {
    heading: "Farm Dashboard",
    sub: "Live readings from the sensors installed in your field.",
    stateLabel: "State",
    districtLabel: "District",
    villageLabel: "Village",
    updated: "Last updated",
    refresh: "Refresh data",
    refreshing: "Refreshing…",
    legend: "Colour meaning",
    legendOk: "Green — Good",
    legendWarn: "Yellow — Warning",
    legendBad: "Red — Needs action",
    pumpOn: "Turn pump ON",
    pumpOff: "Turn pump OFF",
    pumpNote: "Pump can also be operated by SMS: send PUMP ON to 51969.",
    sensors: {
      moisture: { label: "Soil Moisture", note: "Below required level" },
      temperature: { label: "Temperature", note: "Normal for the season" },
      humidity: { label: "Humidity", note: "Normal" },
      ph: { label: "Soil pH", note: "Slightly acidic, acceptable" },
      nitrogen: { label: "Nitrogen (N)", note: "Low — add urea" },
      phosphorus: { label: "Phosphorus (P)", note: "Sufficient" },
      potassium: { label: "Potassium (K)", note: "Sufficient" },
      rain: { label: "Rain Forecast", note: "Rain expected in 6 hours" },
      pump: { label: "Pump Status", note: "Motor is not running" },
    },
    status: {
      ok: "Good",
      warn: "Warning",
      bad: "Needs action",
      on: "ON",
      off: "OFF",
    },
  },
  alerts: {
    heading: "Alerts & Recommendations",
    sub: "Read the list from top to bottom. Red items need action today.",
    filterAll: "All",
    filterBad: "Needs action",
    filterWarn: "Warning",
    filterOk: "Good",
    action: "What to do",
    time: "Received",
    none: "No alerts in this category.",
    printBtn: "Print this list",
    items: {
      irrigation: {
        title: "Irrigation needed tomorrow morning",
        action:
          "Give water to the wheat field between 6 AM and 8 AM. About 25 mm water is enough.",
      },
      nitrogen: {
        title: "Nitrogen level is low in your soil",
        action:
          "Apply 20 kg urea per acre after the next irrigation. Do not apply on dry soil.",
      },
      rain: {
        title: "Rain expected in the next 6 hours",
        action:
          "Do not spray pesticide today. Keep harvested produce under cover.",
      },
      crop: {
        title: "Wheat crop is suitable for this soil",
        action:
          "Sow HD-2967 or HD-3086 variety. Both suit this soil and weather.",
      },
      fertilizer: {
        title: "Apply fertilizer after irrigation",
        action: "Fertilizer works better on wet soil. Wait 24 hours after water.",
      },
      disease: {
        title: "Yellow rust risk in wheat is increasing",
        action:
          "Check leaves every morning. If yellow powder is seen, contact the Krishi Vigyan Kendra.",
      },
    },
    timeAgo: {
      irrigation: "Today, 6:10 AM",
      nitrogen: "Today, 5:45 AM",
      rain: "Today, 7:20 AM",
      crop: "Yesterday, 4:30 PM",
      fertilizer: "Yesterday, 11:15 AM",
      disease: "Today, 7:35 AM",
    },
  },
  contact: {
    heading: "Contact Us",
    sub: "Write your problem in simple words. We reply within 3 working days.",
    name: "Your Name",
    namePh: "For example: Ramesh Kumar",
    email: "Email Address",
    emailPh: "For example: ramesh@example.com",
    mobile: "Mobile Number",
    mobilePh: "10 digit mobile number",
    subject: "Subject",
    subjects: [
      "Irrigation advice",
      "Crop or fertilizer question",
      "Disease detection",
      "Sensor / device problem",
      "Other",
    ],
    message: "Your Message",
    messagePh: "Write your question or problem here",
    submit: "Submit",
    submitting: "Submitting…",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
    invalidMobile: "Please enter a 10 digit mobile number",
    successTitle: "Your message has been registered",
    successText: "Please note your reference number for follow up.",
    refLabel: "Reference Number",
    another: "Send another message",
    officeTitle: "Office Address",
    office: [
      "AgriSense AI Project Cell",
      "Krishi Bhawan, Dr. Rajendra Prasad Road",
      "New Delhi – 110001, India",
    ],
    emailTitle: "Official Email",
    officialEmail: "support-agrisense[at]gov[dot]in",
    phoneTitle: "Helpline",
    phone: "1800-180-1551 (Toll Free)",
    hoursTitle: "Working Hours",
    hours: "Monday to Saturday, 9:30 AM – 6:00 PM",
  },
  help: {
    button: "Help",
    title: "How to use this portal",
    steps: [
      "Choose your language at the top: English or हिंदी.",
      "Use the big buttons in the menu to move between sections.",
      "Open Dashboard to see soil, water and weather readings of your field.",
      "Open Alerts to see what to do today. Red means act today.",
      "If you need a person to help you, call the toll free number below.",
    ],
    callTitle: "Need help on phone?",
    call: "Kisan Call Centre: 1800-180-1551 (Toll Free, 6 AM to 10 PM)",
    close: "Close",
    textSizeTip: "Text too small? Use A+ at the top of the page.",
  },
  footer: {
    ministry: "Ministry of Agriculture & Farmers Welfare",
    govt: "Government of India",
    owned:
      "Content owned and maintained by the AgriSense AI Project Cell, Ministry of Agriculture & Farmers Welfare, Government of India.",
    disclaimer:
      "Disclaimer: This portal is a Smart India Hackathon pilot demonstration. Data shown is sample data and not an official Government record.",
    linksTitle: "Important Links",
    links: [
      "Privacy Policy",
      "Accessibility Statement",
      "Terms & Conditions",
      "Website Policies",
      "Sitemap",
    ],
    servicesTitle: "Services",
    contactTitle: "Contact",
    updated: "Last updated on",
    visitors: "Visitors",
    bestViewed:
      "Best viewed in latest versions of Chrome, Firefox, Edge and Safari. Works on 2G/3G networks.",
  },
};

const hi = {
  code: "hi",
  htmlLang: "hi",
  strip: {
    govt: "भारत सरकार",
    ministry: "कृषि एवं किसान कल्याण मंत्रालय",
    skip: "मुख्य सामग्री पर जाएँ",
    screenReader: "स्क्रीन रीडर सुविधा",
    fontSize: "अक्षर का आकार",
    decrease: "अक्षर छोटे करें",
    normal: "सामान्य आकार",
    increase: "अक्षर बड़े करें",
    contrast: "उच्च कंट्रास्ट",
    contrastOn: "उच्च कंट्रास्ट चालू करें",
    contrastOff: "उच्च कंट्रास्ट बंद करें",
    language: "भाषा",
  },
  brand: {
    name: "एग्रीसेंस एआई",
    short: "एग्रीसेंस एआई",
    sub: "स्मार्ट कृषि सहायता प्रणाली",
    pilot: "पायलट डेमो",
    emblemAlt: "भारत का राष्ट्रीय प्रतीक",
  },
  nav: {
    home: "मुख्य पृष्ठ",
    about: "परिचय",
    services: "सेवाएँ",
    dashboard: "डैशबोर्ड",
    alerts: "चेतावनी",
    contact: "संपर्क",
    help: "सहायता",
    menu: "मेन्यू",
    closeMenu: "मेन्यू बंद करें",
    openMenu: "मेन्यू खोलें",
  },
  hero: {
    badge: "सरकार समर्थित पायलट परियोजना",
    title: "एग्रीसेंस एआई",
    tagline: "भारतीय किसानों के लिए स्मार्ट कृषि सहायता प्रणाली",
    intro:
      "एग्रीसेंस एआई एक सरल डिजिटल सेवा है जो किसानों को खेत में सही निर्णय लेने में मदद करती है। यह छोटे मोबाइल फोन और धीमे इंटरनेट पर भी चलती है।",
    points: [
      "फसल का उत्पादन बढ़ाने में मदद करता है",
      "सिंचाई की सलाह देता है — कब और कितना पानी देना है",
      "पत्ती की फोटो से फसल के रोग की पहचान करता है",
      "आपके क्षेत्र के मौसम और वर्षा की जानकारी देता है",
    ],
    ctaServices: "सेवाएँ देखें",
    ctaDashboard: "डैशबोर्ड खोलें",
    imageAlt: "सुबह के समय हरे गेहूँ के खेत में खड़ा भारतीय किसान",
    imageCaption: "खेत का डेटा गाँव स्तर पर लगे आईओटी सेंसर से लिया जाता है।",
    helplineLabel: "किसान कॉल सेंटर (निःशुल्क)",
    helpline: "1800-180-1551",
  },
  notices: {
    title: "नवीनतम सूचनाएँ",
    tag: "नया",
    items: [
      "खरीफ 2026 के लिए गेहूँ और धान की सलाह अब हिंदी में उपलब्ध है।",
      "मृदा स्वास्थ्य कार्ड का डेटा अब आपके एग्रीसेंस खाते से जोड़ा जा सकता है।",
      "6 राज्यों के 12 जिलों में गाँव स्तर पर पायलट शुरू हुआ।",
      "कृषि विज्ञान केंद्र में हर सोमवार निःशुल्क रोग पहचान शिविर।",
    ],
  },
  about: {
    heading: "एग्रीसेंस एआई के बारे में",
    whatTitle: "एग्रीसेंस एआई क्या है?",
    whatText:
      "एग्रीसेंस एआई एक सरकार समर्थित डिजिटल प्रणाली है जो कृत्रिम बुद्धिमत्ता (एआई) और खेत में लगे छोटे सेंसर (आईओटी) की सहायता से किसानों को बेहतर निर्णय लेने में मदद करती है। खेत में लगे सेंसर मिट्टी और मौसम की जानकारी लेते हैं। प्रणाली इस जानकारी को समझकर आपकी भाषा में सरल सलाह देती है।",
    whatText2:
      "इसके लिए किसी तकनीकी जानकारी की आवश्यकता नहीं है। सलाह छोटे वाक्यों और स्पष्ट रंगों में दिखाई जाती है — हरा अर्थात ठीक, पीला अर्थात सावधान, लाल अर्थात आज ही काम करें।",
    whoTitle: "कौन उपयोग कर सकता है?",
    who: [
      {
        title: "किसान",
        text: "पानी, खाद, फसल और मौसम की प्रतिदिन सलाह लेने के लिए।",
      },
      {
        title: "कृषि अधिकारी",
        text: "गाँव और ब्लॉक स्तर के खेत डेटा की निगरानी के लिए।",
      },
      {
        title: "ग्राम स्तरीय कर्मचारी",
        text: "उन किसानों की मदद के लिए जो पढ़ नहीं सकते या स्मार्टफोन नहीं चला सकते।",
      },
    ],
    benefitsTitle: "लाभ",
    benefits: [
      "फसल की अच्छी पैदावार",
      "पानी की कम खपत",
      "रोग की जल्दी पहचान",
      "उर्वरक का सही उपयोग",
      "मौसम के अनुसार योजना",
      "खेती की लागत में कमी",
    ],
    statsTitle: "पायलट एक नज़र में",
    stats: [
      { value: "12", label: "जिले शामिल" },
      { value: "480", label: "गाँव जुड़े" },
      { value: "26,500", label: "पंजीकृत किसान" },
      { value: "1,120", label: "खेत सेंसर लगे" },
    ],
  },
  services: {
    heading: "हमारी सेवाएँ",
    sub: "सात सरल सेवाएँ। अधिक जानने के लिए कोई भी सेवा चुनें।",
    open: "अधिक जानें",
    availability: "हिंदी और अंग्रेज़ी दोनों में उपलब्ध",
    items: {
      irrigation: {
        title: "स्मार्ट सिंचाई सलाह",
        text: "बताता है कि कब सिंचाई करनी है और कितना पानी देना है।",
        detail:
          "मिट्टी की नमी, तापमान और वर्षा के अनुमान से सही समय बताता है। इससे पानी और बिजली दोनों की बचत होती है।",
      },
      crop: {
        title: "फसल चयन सलाह",
        text: "आपकी मिट्टी और मौसम के अनुसार सबसे अच्छी फसल बताता है।",
        detail:
          "मिट्टी का प्रकार, एन-पी-के मात्रा, पीएच और मौसम देखकर लाभदायक फसल सुझाता है।",
      },
      fertilizer: {
        title: "उर्वरक सलाह",
        text: "सही खाद और उसकी सही मात्रा बताता है।",
        detail:
          "यूरिया और अन्य खाद के अधिक उपयोग को रोकता है। प्रति एकड़ मात्रा सरल शब्दों में बताता है।",
      },
      disease: {
        title: "रोग पहचान",
        text: "पत्ती की फोटो से फसल के रोग की पहचान करता है।",
        detail:
          "प्रभावित पत्ती की फोटो लें। प्रणाली रोग का नाम और कम लागत का उपचार बताती है।",
      },
      weather: {
        title: "मौसम जानकारी",
        text: "स्थानीय मौसम, वर्षा और तापमान की जानकारी देता है।",
        detail:
          "अगले 5 दिनों का ब्लॉक स्तरीय पूर्वानुमान, तेज़ वर्षा, ओलावृष्टि और लू की चेतावनी के साथ।",
      },
      yield: {
        title: "उपज अनुमान",
        text: "अनुमान बताता है कि फसल से कितना उत्पादन मिलेगा।",
        detail:
          "कटाई से पहले भंडारण, ढुलाई और बिक्री की योजना बनाने में सहायक।",
      },
      helpdesk: {
        title: "किसान सहायता केंद्र",
        text: "खेती के सवालों के लिए सरल एआई सहायक।",
        detail:
          "प्रश्न लिखकर या बोलकर पूछें। उत्तर सरल हिंदी या अंग्रेज़ी में मिलेगा।",
      },
    },
  },
  dashboard: {
    heading: "खेत डैशबोर्ड",
    sub: "आपके खेत में लगे सेंसर से प्राप्त वर्तमान जानकारी।",
    stateLabel: "राज्य",
    districtLabel: "जिला",
    villageLabel: "गाँव",
    updated: "अंतिम बार अपडेट",
    refresh: "जानकारी ताज़ा करें",
    refreshing: "ताज़ा हो रहा है…",
    legend: "रंगों का अर्थ",
    legendOk: "हरा — ठीक है",
    legendWarn: "पीला — सावधान",
    legendBad: "लाल — कार्रवाई करें",
    pumpOn: "पंप चालू करें",
    pumpOff: "पंप बंद करें",
    pumpNote: "पंप को एसएमएस से भी चलाया जा सकता है: 51969 पर PUMP ON भेजें।",
    sensors: {
      moisture: { label: "मिट्टी में नमी", note: "आवश्यक स्तर से कम है" },
      temperature: { label: "तापमान", note: "मौसम के अनुसार सामान्य" },
      humidity: { label: "हवा में नमी", note: "सामान्य" },
      ph: { label: "मिट्टी का पीएच", note: "हल्का अम्लीय, स्वीकार्य" },
      nitrogen: { label: "नाइट्रोजन (N)", note: "कम — यूरिया डालें" },
      phosphorus: { label: "फॉस्फोरस (P)", note: "पर्याप्त" },
      potassium: { label: "पोटैशियम (K)", note: "पर्याप्त" },
      rain: { label: "वर्षा की संभावना", note: "6 घंटे में वर्षा संभव" },
      pump: { label: "पंप की स्थिति", note: "मोटर बंद है" },
    },
    status: {
      ok: "ठीक",
      warn: "सावधान",
      bad: "कार्रवाई करें",
      on: "चालू",
      off: "बंद",
    },
  },
  alerts: {
    heading: "चेतावनी एवं सलाह",
    sub: "सूची को ऊपर से नीचे पढ़ें। लाल रंग वाले काम आज ही करें।",
    filterAll: "सभी",
    filterBad: "कार्रवाई करें",
    filterWarn: "सावधान",
    filterOk: "ठीक",
    action: "क्या करें",
    time: "प्राप्त समय",
    none: "इस श्रेणी में कोई चेतावनी नहीं है।",
    printBtn: "यह सूची प्रिंट करें",
    items: {
      irrigation: {
        title: "कल सुबह सिंचाई की आवश्यकता है",
        action:
          "गेहूँ के खेत में सुबह 6 से 8 बजे के बीच पानी दें। लगभग 25 मिमी पानी पर्याप्त है।",
      },
      nitrogen: {
        title: "मिट्टी में नाइट्रोजन की मात्रा कम है",
        action:
          "अगली सिंचाई के बाद प्रति एकड़ 20 किलो यूरिया डालें। सूखी मिट्टी में न डालें।",
      },
      rain: {
        title: "अगले 6 घंटे में वर्षा की संभावना है",
        action: "आज कीटनाशक का छिड़काव न करें। कटी हुई फसल को ढककर रखें।",
      },
      crop: {
        title: "इस मिट्टी के लिए गेहूँ की फसल उपयुक्त है",
        action:
          "एचडी-2967 या एचडी-3086 किस्म बोएँ। दोनों इस मिट्टी और मौसम के अनुकूल हैं।",
      },
      fertilizer: {
        title: "सिंचाई के बाद उर्वरक डालें",
        action:
          "गीली मिट्टी में खाद अधिक असर करती है। पानी देने के 24 घंटे बाद डालें।",
      },
      disease: {
        title: "गेहूँ में पीला रतुआ रोग का खतरा बढ़ रहा है",
        action:
          "हर सुबह पत्तियाँ देखें। पीला चूर्ण दिखे तो कृषि विज्ञान केंद्र से संपर्क करें।",
      },
    },
    timeAgo: {
      irrigation: "आज, प्रातः 6:10",
      nitrogen: "आज, प्रातः 5:45",
      rain: "आज, प्रातः 7:20",
      crop: "कल, सायं 4:30",
      fertilizer: "कल, प्रातः 11:15",
      disease: "आज, प्रातः 7:35",
    },
  },
  contact: {
    heading: "संपर्क करें",
    sub: "अपनी समस्या सरल शब्दों में लिखें। हम 3 कार्य दिवस में उत्तर देते हैं।",
    name: "आपका नाम",
    namePh: "उदाहरण: रमेश कुमार",
    email: "ईमेल पता",
    emailPh: "उदाहरण: ramesh@example.com",
    mobile: "मोबाइल नंबर",
    mobilePh: "10 अंकों का मोबाइल नंबर",
    subject: "विषय",
    subjects: [
      "सिंचाई सलाह",
      "फसल या उर्वरक संबंधी प्रश्न",
      "रोग पहचान",
      "सेंसर / यंत्र की समस्या",
      "अन्य",
    ],
    message: "आपका संदेश",
    messagePh: "अपना प्रश्न या समस्या यहाँ लिखें",
    submit: "जमा करें",
    submitting: "भेजा जा रहा है…",
    required: "यह जानकारी आवश्यक है",
    invalidEmail: "कृपया सही ईमेल पता लिखें",
    invalidMobile: "कृपया 10 अंकों का मोबाइल नंबर लिखें",
    successTitle: "आपका संदेश दर्ज कर लिया गया है",
    successText: "आगे की जानकारी के लिए यह संदर्भ संख्या नोट कर लें।",
    refLabel: "संदर्भ संख्या",
    another: "दूसरा संदेश भेजें",
    officeTitle: "कार्यालय का पता",
    office: [
      "एग्रीसेंस एआई परियोजना प्रकोष्ठ",
      "कृषि भवन, डॉ. राजेंद्र प्रसाद रोड",
      "नई दिल्ली – 110001, भारत",
    ],
    emailTitle: "आधिकारिक ईमेल",
    officialEmail: "support-agrisense[at]gov[dot]in",
    phoneTitle: "हेल्पलाइन",
    phone: "1800-180-1551 (निःशुल्क)",
    hoursTitle: "कार्य समय",
    hours: "सोमवार से शनिवार, प्रातः 9:30 – सायं 6:00",
  },
  help: {
    button: "सहायता",
    title: "इस पोर्टल का उपयोग कैसे करें",
    steps: [
      "ऊपर अपनी भाषा चुनें: English या हिंदी।",
      "मेन्यू के बड़े बटनों से अलग-अलग भाग देखें।",
      "अपने खेत की मिट्टी, पानी और मौसम की जानकारी के लिए डैशबोर्ड खोलें।",
      "आज क्या करना है, यह जानने के लिए चेतावनी भाग देखें। लाल का अर्थ है आज ही करें।",
      "यदि किसी व्यक्ति से बात करनी हो तो नीचे दिए निःशुल्क नंबर पर कॉल करें।",
    ],
    callTitle: "फोन पर सहायता चाहिए?",
    call: "किसान कॉल सेंटर: 1800-180-1551 (निःशुल्क, प्रातः 6 से रात 10 बजे तक)",
    close: "बंद करें",
    textSizeTip: "अक्षर छोटे लग रहे हैं? ऊपर दिए A+ बटन का उपयोग करें।",
  },
  footer: {
    ministry: "कृषि एवं किसान कल्याण मंत्रालय",
    govt: "भारत सरकार",
    owned:
      "इस पोर्टल की सामग्री एग्रीसेंस एआई परियोजना प्रकोष्ठ, कृषि एवं किसान कल्याण मंत्रालय, भारत सरकार द्वारा संचालित है।",
    disclaimer:
      "अस्वीकरण: यह पोर्टल स्मार्ट इंडिया हैकाथॉन का पायलट प्रदर्शन है। यहाँ दिखाया गया डेटा नमूना डेटा है, सरकारी अभिलेख नहीं।",
    linksTitle: "महत्वपूर्ण लिंक",
    links: [
      "गोपनीयता नीति",
      "सुगम्यता विवरण",
      "नियम एवं शर्तें",
      "वेबसाइट नीतियाँ",
      "साइट मानचित्र",
    ],
    servicesTitle: "सेवाएँ",
    contactTitle: "संपर्क",
    updated: "अंतिम अद्यतन",
    visitors: "आगंतुक",
    bestViewed:
      "क्रोम, फ़ायरफ़ॉक्स, एज और सफारी के नवीनतम संस्करणों में सर्वोत्तम। 2G/3G नेटवर्क पर भी चलता है।",
  },
};

export const dict = { en, hi };
