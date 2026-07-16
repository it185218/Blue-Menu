// blue — the beach bar · Εκδοχή Β translations (gr / en / bg / de / ro / tr)
// The canonical menu-data.js keeps bilingual "GR / EN" strings; this overlay
// supplies the other languages, plus Greek or English where the canonical
// string carries only one language (e.g. cocktail recipes are English-only).
// Missing fields fall back to the English part of the canonical string.
// Item keys: '<section id>|<greek part of the item name>'.

const FLAG_GR =
  '<svg class="flag" viewBox="0 0 27 18" width="26" height="17" aria-hidden="true">' +
  '<rect width="27" height="18" fill="#0D5EAF"/>' +
  '<path d="M0 3h27v2H0zM0 7h27v2H0zM0 11h27v2H0zM0 15h27v2H0z" fill="#FFF"/>' +
  '<rect width="10" height="10" fill="#0D5EAF"/>' +
  '<path d="M4 0h2v10H4zM0 4h10v2H0z" fill="#FFF"/></svg>';

const FLAG_GB =
  '<svg class="flag" viewBox="0 0 60 36" width="26" height="17" preserveAspectRatio="none" aria-hidden="true">' +
  '<rect width="60" height="36" fill="#012169"/>' +
  '<path d="M0 0 60 36M60 0 0 36" stroke="#FFF" stroke-width="7"/>' +
  '<path d="M0 0 60 36M60 0 0 36" stroke="#C8102E" stroke-width="3"/>' +
  '<path d="M30 0v36M0 18h60" stroke="#FFF" stroke-width="12"/>' +
  '<path d="M30 0v36M0 18h60" stroke="#C8102E" stroke-width="7"/></svg>';

const FLAG_BG =
  '<svg class="flag" viewBox="0 0 27 18" width="26" height="17" aria-hidden="true">' +
  '<rect width="27" height="6" fill="#FFF"/>' +
  '<rect y="6" width="27" height="6" fill="#00966E"/>' +
  '<rect y="12" width="27" height="6" fill="#D62612"/></svg>';

const FLAG_DE =
  '<svg class="flag" viewBox="0 0 27 18" width="26" height="17" aria-hidden="true">' +
  '<rect width="27" height="6" fill="#000"/>' +
  '<rect y="6" width="27" height="6" fill="#DD0000"/>' +
  '<rect y="12" width="27" height="6" fill="#FFCE00"/></svg>';

const FLAG_RO =
  '<svg class="flag" viewBox="0 0 27 18" width="26" height="17" aria-hidden="true">' +
  '<rect width="9" height="18" fill="#002B7F"/>' +
  '<rect x="9" width="9" height="18" fill="#FCD116"/>' +
  '<rect x="18" width="9" height="18" fill="#CE1126"/></svg>';

const FLAG_TR =
  '<svg class="flag" viewBox="0 0 27 18" width="26" height="17" aria-hidden="true">' +
  '<rect width="27" height="18" fill="#E30A17"/>' +
  '<circle cx="10.5" cy="9" r="4.6" fill="#FFF"/>' +
  '<circle cx="11.7" cy="9" r="3.7" fill="#E30A17"/>' +
  '<polygon points="16,6.8 16.53,8.27 18.09,8.32 16.86,9.28 17.29,10.78 16,9.9 14.71,10.78 15.14,9.28 13.91,8.32 15.47,8.27" fill="#FFF"/></svg>';

const I18N = {
  langs: [
    { code: 'gr', label: 'Ελληνικά', flag: FLAG_GR },
    { code: 'en', label: 'English', flag: FLAG_GB },
    { code: 'bg', label: 'Български', flag: FLAG_BG },
    { code: 'de', label: 'Deutsch', flag: FLAG_DE },
    { code: 'ro', label: 'Română', flag: FLAG_RO },
    { code: 'tr', label: 'Türkçe', flag: FLAG_TR },
  ],

  ui: {
    pick: 'Γλώσσα · Language · Език · Sprache · Limbă · Dil',
    back: { gr: 'Πίσω', en: 'Back', bg: 'Назад', de: 'Zurück', ro: 'Înapoi', tr: 'Geri' },
    minNote: {
      gr: 'ΕΛΑΧΙΣΤΗ ΚΑΤΑΝΑΛΩΣΗ ΑΝΑ ΑΤΟΜΟ 5.00€',
      en: 'MINIMUM CONSUMPTION PER PERSON 5.00€',
      bg: 'МИНИМАЛНА КОНСУМАЦИЯ НА ЧОВЕК 5.00€',
      de: 'MINDESTVERZEHR PRO PERSON 5.00€',
      ro: 'CONSUM MINIM DE PERSOANĂ 5.00€',
      tr: 'KİŞİ BAŞI MİNİMUM TÜKETİM 5.00€',
    },
    inspectorRole: {
      gr: 'Αγορανομικός Υπεύθυνος', en: 'Market Inspection Manager', bg: 'Отговорник търговски надзор',
      de: 'Marktaufsichtsverantwortlicher', ro: 'Responsabil control comercial', tr: 'Piyasa denetim sorumlusu',
    },
    inspectorName: {
      gr: 'Β. Καραθανάσης', en: 'V. Karathanasis', bg: 'В. Каратанасис',
      de: 'V. Karathanasis', ro: 'V. Karathanasis', tr: 'V. Karathanasis',
    },
    legal: {
      gr: [
        'Το κατάστημα είναι υποχρεωμένο να διαθέτει έντυπα διαμαρτυρίας σε ειδική θήκη, δίπλα στην έξοδο.',
        'Οι τιμές μας περιλαμβάνουν όλους τους νόμιμους φόρους.',
        'Ο πελάτης δεν είναι υποχρεωμένος να πληρώσει εάν η επιχείρηση δεν παρουσιάσει νόμιμη απόδειξη.',
        'Εάν έχετε οποιαδήποτε τροφική αλλεργία, παρακαλούμε ενημερώστε μας.',
      ],
      en: [
        'The establishment must keep printed complaint forms in a special box near the exit.',
        'Our prices include all legal taxes & fees.',
        'The customer is not obligated to pay if the establishment does not provide a legal receipt.',
        'If you have any food allergies, please let us know beforehand.',
      ],
      bg: [
        'Заведението е длъжно да разполага с формуляри за оплаквания в специална кутия до изхода.',
        'Цените включват всички законови данъци и такси.',
        'Клиентът не е длъжен да плати, ако заведението не издаде законна касова бележка.',
        'Ако имате хранителни алергии, моля уведомете ни предварително.',
      ],
      de: [
        'Das Lokal ist verpflichtet, Beschwerdeformulare in einer speziellen Box neben dem Ausgang bereitzuhalten.',
        'Unsere Preise enthalten alle gesetzlichen Steuern und Abgaben.',
        'Der Gast ist nicht verpflichtet zu zahlen, wenn das Lokal keinen gültigen Kassenbeleg ausstellt.',
        'Bitte informieren Sie uns im Voraus über etwaige Lebensmittelallergien.',
      ],
      ro: [
        'Localul este obligat să pună la dispoziție formulare de reclamații într-o cutie specială, lângă ieșire.',
        'Prețurile includ toate taxele și impozitele legale.',
        'Clientul nu este obligat să plătească dacă localul nu emite un bon fiscal legal.',
        'Dacă aveți alergii alimentare, vă rugăm să ne informați din timp.',
      ],
      tr: [
        'İşletme, çıkışın yanındaki özel kutuda şikâyet formları bulundurmakla yükümlüdür.',
        'Fiyatlarımıza tüm yasal vergiler dahildir.',
        'İşletme yasal fiş sunmazsa müşteri ödeme yapmak zorunda değildir.',
        'Gıda alerjiniz varsa lütfen önceden bize bildirin.',
      ],
    },
  },

  sections: {
    rofimata: { name: { gr: 'Ροφήματα', en: 'Beverages', bg: 'Напитки', de: 'Getränke', ro: 'Băuturi', tr: 'İçecekler' } },
    fresh: {
      name: { gr: 'Φρέσκοι Χυμοί', en: 'Fresh Juices', bg: 'Фреш сокове', de: 'Frische Säfte', ro: 'Fresh-uri', tr: 'Taze Meyve Suları' },
      note: { gr: 'Ποτήρι', en: 'Glass', bg: 'Чаша', de: 'Glas', ro: 'Pahar', tr: 'Bardak' },
    },
    juices: {
      name: { gr: 'Χυμοί', en: 'Juices', bg: 'Сокове', de: 'Säfte', ro: 'Sucuri', tr: 'Meyve Suları' },
      note: { gr: 'Κουτί 330ml', en: 'Juice Box 330ml', bg: 'Кутия 330мл', de: 'Packung 330ml', ro: 'Cutie 330ml', tr: 'Kutu 330ml' },
    },
    soft: { name: { gr: 'Αναψυκτικά', en: 'Refreshments', bg: 'Безалкохолни', de: 'Erfrischungsgetränke', ro: 'Răcoritoare', tr: 'Meşrubatlar' } },
    food: {
      name: { gr: 'Φαγητό', en: 'Food & Snacks', bg: 'Храна и снаксове', de: 'Essen & Snacks', ro: 'Mâncare & Gustări', tr: 'Yemek & Atıştırmalık' },
      foot: { gr: '* Γκούντα, Ζαμπόν, Γαλοπούλα', en: '* Gouda, Ham, Turkey', bg: '* Гауда, шунка, пуешко', de: '* Gouda, Schinken, Pute', ro: '* Gouda, șuncă, curcan', tr: '* Gouda, jambon, hindi' },
    },
    pizza: { name: { gr: 'Πίτσα', en: 'Pizza', bg: 'Пица', de: 'Pizza', ro: 'Pizza', tr: 'Pizza' } },
    icecream: { name: { gr: 'Παγωτά', en: 'Ice Cream', bg: 'Сладолед', de: 'Eis', ro: 'Înghețată', tr: 'Dondurma' } },
    wine: {
      name: { gr: 'Κρασιά', en: 'Wine List', bg: 'Вина', de: 'Weine', ro: 'Vinuri', tr: 'Şaraplar' },
      note: { gr: 'Φιάλη · Ποτήρι', en: 'Bottle · Glass', bg: 'Бутилка · Чаша', de: 'Flasche · Glas', ro: 'Sticlă · Pahar', tr: 'Şişe · Kadeh' },
    },
    cocktails: { name: { gr: 'Κοκτέιλ', en: 'Cocktails', bg: 'Коктейли', de: 'Cocktails', ro: 'Cocktailuri', tr: 'Kokteyller' } },
    premium: { name: { gr: 'Premium Κοκτέιλ', en: 'Premium Cocktails', bg: 'Premium коктейли', de: 'Premium-Cocktails', ro: 'Cocktailuri premium', tr: 'Premium kokteyller' } },
    spirits: { name: { gr: 'Ποτά', en: 'Spirits', bg: 'Алкохол', de: 'Spirituosen', ro: 'Băuturi spirtoase', tr: 'Alkollü İçkiler' } },
    beer: { name: { gr: 'Μπύρες', en: 'Beer', bg: 'Бира', de: 'Bier', ro: 'Bere', tr: 'Bira' } },
    energy: { name: { gr: 'Energy', en: 'Energy Drinks', bg: 'Енергийни напитки', de: 'Energy-Drinks', ro: 'Energizante', tr: 'Enerji İçecekleri' } },
  },

  subheads: {
    'Λευκά': { gr: 'Λευκά', en: 'White', bg: 'Бели', de: 'Weißweine', ro: 'Albe', tr: 'Beyaz' },
    'Ροζέ': { gr: 'Ροζέ', en: 'Rosé', bg: 'Розе', de: 'Rosé', ro: 'Rosé', tr: 'Roze' },
    'Αφρώδεις Οίνοι': { gr: 'Αφρώδεις Οίνοι', en: 'Sparkling Wines', bg: 'Пенливи вина', de: 'Schaumweine', ro: 'Vinuri spumante', tr: 'Köpüklü şaraplar' },
    'Σαμπάνια': { gr: 'Σαμπάνια', en: 'Champagne', bg: 'Шампанско', de: 'Champagner', ro: 'Șampanie', tr: 'Şampanya' },
    'Βαρέλι': { gr: 'Βαρέλι', en: 'Draft Beer', bg: 'Наливна бира', de: 'Fassbier', ro: 'Bere draft', tr: 'Fıçı bira' },
  },

  items: {
    // ΡΟΦΗΜΑΤΑ
    'rofimata|Νες Καφέ': { n: { bg: 'Нес кафе' }, d: { bg: 'Разтворимо кафе, топло, с или без мляко', de: 'Löslicher Kaffee, heiß, mit oder ohne Milch', ro: 'Cafea instant, caldă, cu sau fără lapte', tr: 'Hazır kahve, sıcak, sütlü veya sütsüz' } },
    'rofimata|Νες Καφέ Φραπέ': { n: { bg: 'Фрапе' }, d: { bg: 'Класическото гръцко студено разбито кафе с гъста пяна', de: 'Der klassische griechische eisgeschüttelte Kaffee mit dichtem Schaum', ro: 'Clasica cafea grecească rece, agitată, cu spumă bogată', tr: 'Bol köpüklü klasik Yunan usulü çalkalanmış soğuk kahve' } },
    'rofimata|Φρέντο Εσπρέσο': { n: { bg: 'Фредо еспресо' }, d: { bg: 'Двойно еспресо, разбито с лед', de: 'Doppelter Espresso, mit Eis geschüttelt', ro: 'Espresso dublu agitat cu gheață', tr: 'Buzla çalkalanmış duble espresso' } },
    'rofimata|Φρέντο Καπουτσίνο': { n: { bg: 'Фредо капучино' }, d: { bg: 'Студено двойно еспресо с охладена млечна пяна', de: 'Kalter doppelter Espresso mit gekühltem Milchschaum', ro: 'Espresso dublu rece cu spumă de lapte răcită', tr: 'Soğuk süt köpüğüyle buzlu duble espresso' } },
    'rofimata|Εσπρέσο': { n: { bg: 'Еспресо' }, d: { bg: 'Отбрана смес, единично или двойно', de: 'Erlesene Mischung, einfach oder doppelt', ro: 'Amestec ales, simplu sau dublu', tr: 'Seçkin harman, tek veya duble' } },
    'rofimata|Καπουτσίνο': { n: { bg: 'Капучино' }, d: { bg: 'Еспресо с кадифена топла млечна пяна', de: 'Espresso mit samtigem heißem Milchschaum', ro: 'Espresso cu spumă catifelată de lapte cald', tr: 'Kadife gibi sıcak süt köpüklü espresso' } },
    'rofimata|Σοκολάτα Κρύα': { n: { bg: 'Студен шоколад', de: 'Eisschokolade', ro: 'Ciocolată rece', tr: 'Soğuk çikolata' }, d: { bg: 'Богат студен шоколад', de: 'Reichhaltige kalte Schokolade', ro: 'Ciocolată rece intensă', tr: 'Yoğun soğuk çikolata' } },
    'rofimata|Σοκολάτα Ζεστή': { n: { bg: 'Топъл шоколад', de: 'Heiße Schokolade', ro: 'Ciocolată caldă', tr: 'Sıcak çikolata' }, d: { bg: 'Богат топъл шоколад', de: 'Reichhaltige heiße Schokolade', ro: 'Ciocolată caldă intensă', tr: 'Yoğun sıcak çikolata' } },
    // ΦΡΕΣΚΟΙ ΧΥΜΟΙ
    'fresh|Πορτοκάλι': { n: { bg: 'Портокал', de: 'Orange', ro: 'Portocale', tr: 'Portakal' }, d: { bg: 'Прясно изцедени портокали', de: 'Frisch gepresste Orangen des Tages', ro: 'Portocale proaspăt stoarse', tr: 'Günlük taze sıkılmış portakal' } },
    'fresh|Λεμόνι': { n: { bg: 'Лимон', de: 'Zitrone', ro: 'Lămâie', tr: 'Limon' }, d: { bg: 'Прясна лимонада, подсладена по вкус', de: 'Frische Limonade, Süße nach Wahl', ro: 'Limonadă proaspătă, îndulcită după gust', tr: 'Taze limonata, isteğe göre şekerli' } },
    'fresh|Ροδάκινο': { n: { bg: 'Праскова', de: 'Pfirsich', ro: 'Piersici', tr: 'Şeftali' }, d: { bg: 'Пресен сок от узрели праскови', de: 'Frischer Saft aus reifen Pfirsichen', ro: 'Suc proaspăt din piersici coapte', tr: 'Olgun şeftaliden taze sıkma su' } },
    'fresh|Κοκτέιλ': { n: { bg: 'Микс', de: 'Cocktail', ro: 'Cocktail', tr: 'Karışık meyve' }, d: { bg: 'Микс от пресни сезонни плодове', de: 'Mix aus frischen Früchten der Saison', ro: 'Mix de fructe proaspete de sezon', tr: 'Taze mevsim meyveleri karışımı' } },
    // ΧΥΜΟΙ
    'juices|Πορτοκάλι': { n: { bg: 'Портокал', de: 'Orange', ro: 'Portocale', tr: 'Portakal' }, d: { bg: '100% портокалов сок', de: '100% Orangensaft', ro: 'Suc de portocale 100%', tr: '%100 portakal suyu' } },
    'juices|Μπανάνα': { n: { bg: 'Банан', de: 'Banane', ro: 'Banane', tr: 'Muz' }, d: { bg: 'Гладък кремообразен бананов нектар', de: 'Cremiger Bananennektar', ro: 'Nectar cremos de banane', tr: 'Kremamsı muz nektarı' } },
    'juices|Ροδάκινο': { n: { gr: 'Ροδάκινο 250ml', bg: 'Праскова 250мл', de: 'Pfirsich 250ml', ro: 'Piersici 250ml', tr: 'Şeftali 250ml' }, d: { bg: 'Прасковен нектар', de: 'Pfirsichnektar', ro: 'Nectar de piersici', tr: 'Şeftali nektarı' } },
    'juices|Μόσιον': { n: { bg: 'Motion' }, d: { bg: 'Мултивитаминов плодов сок', de: 'Multivitamin-Fruchtsaft', ro: 'Suc multivitamine', tr: 'Multivitamin meyve suyu' } },
    'juices|Βύσσινο': { n: { gr: 'Βύσσινο 250ml', bg: 'Вишна 250мл', de: 'Sauerkirsche 250ml', ro: 'Vișine 250ml', tr: 'Vişne 250ml' }, d: { bg: 'Традиционен вишнев сок', de: 'Traditioneller Sauerkirschsaft', ro: 'Suc tradițional de vișine', tr: 'Geleneksel vişne suyu' } },
    // ΑΝΑΨΥΚΤΙΚΑ
    'soft|Κόκα Κόλα': { n: { bg: 'Кока-Кола' }, d: { bg: 'Класик, лайт или зиро, 330мл', de: 'Classic, Light oder Zero, 330ml', ro: 'Clasică, light sau zero, 330ml', tr: 'Klasik, light veya zero, 330ml' } },
    'soft|Πορτοκαλάδα': { n: { bg: 'Оранжада', de: 'Orangenlimonade', ro: 'Orangeadă', tr: 'Portakallı gazoz' }, d: { bg: 'Газирана или негазирана оранжада, 330мл', de: 'Mit oder ohne Kohlensäure, 330ml', ro: 'Carbogazoasă sau plată, 330ml', tr: 'Gazlı veya gazsız, 330ml' } },
    'soft|Λεμονάδα': { n: { bg: 'Лимонада', de: 'Zitronenlimonade', ro: 'Limonadă', tr: 'Limonlu gazoz' }, d: { bg: 'Освежаваща лимонада, 330мл', de: 'Erfrischende Limonade, 330ml', ro: 'Limonadă răcoritoare, 330ml', tr: 'Ferahlatıcı limonata, 330ml' } },
    'soft|Σπράιτ': { n: { bg: 'Спрайт' }, d: { bg: 'Газирана напитка лимон-лайм, 330мл', de: 'Zitronen-Limetten-Limonade, 330ml', ro: 'Suc carbogazos lămâie-lime, 330ml', tr: 'Limon-misket limonlu gazoz, 330ml' } },
    'soft|Σόδα': { n: { bg: 'Сода', de: 'Soda', ro: 'Sifon', tr: 'Soda' }, d: { bg: 'Газирана вода, 330мл', de: 'Sprudelwasser, 330ml', ro: 'Apă carbogazoasă, 330ml', tr: 'Gazlı su, 330ml' } },
    'soft|Ροζ Σόδα': { n: { bg: 'Розова сода', de: 'Pink Soda', ro: 'Sodă roz', tr: 'Pembe soda' }, d: { bg: 'Освежаваща розова сода, 330мл', de: 'Erfrischende pinke Limonade, 330ml', ro: 'Sodă roz răcoritoare, 330ml', tr: 'Ferahlatıcı pembe soda, 330ml' } },
    'soft|Κρύο Τσάι Λεμόνι': { n: { bg: 'Студен чай лимон', de: 'Eistee Zitrone', ro: 'Ceai rece lămâie', tr: 'Limonlu soğuk çay' }, d: { bg: 'Студен чай с лимон, 330мл', de: 'Eistee mit Zitrone, 330ml', ro: 'Ceai rece cu lămâie, 330ml', tr: 'Limonlu soğuk çay, 330ml' } },
    'soft|Κρύο Τσάι Ροδάκινο': { n: { bg: 'Студен чай праскова', de: 'Eistee Pfirsich', ro: 'Ceai rece piersici', tr: 'Şeftalili soğuk çay' }, d: { bg: 'Студен чай с праскова, 330мл', de: 'Eistee mit Pfirsich, 330ml', ro: 'Ceai rece cu piersici, 330ml', tr: 'Şeftalili soğuk çay, 330ml' } },
    'soft|Κρύο Τσάι Green Passion Fruit': { n: { bg: 'Зелен студен чай маракуя', de: 'Eistee Green Passion Fruit', ro: 'Ceai verde rece Passion Fruit', tr: 'Yeşil soğuk çay Passion Fruit' }, d: { bg: 'Зелен студен чай с маракуя, без захар, 500мл', de: 'Grüner Eistee mit Passionsfrucht, zuckerfrei, 500ml', ro: 'Ceai verde rece cu fructul pasiunii, fără zahăr, 500ml', tr: 'Şekersiz, passion fruit aromalı yeşil soğuk çay, 500ml' } },
    'soft|Μεταλλικό Νερό': { n: { bg: 'Минерална вода', de: 'Mineralwasser', ro: 'Apă minerală', tr: 'Doğal kaynak suyu' }, d: { bg: 'Натурална минерална вода, 500мл', de: 'Natürliches Mineralwasser, 500ml', ro: 'Apă minerală naturală, 500ml', tr: 'Doğal kaynak suyu, 500ml' } },
    // FOOD & SNACKS
    'food|Ελληνική Σαλάτα': { n: { bg: 'Гръцка салата', de: 'Griechischer Salat', ro: 'Salată grecească', tr: 'Yunan salatası' }, d: { bg: 'Маруля, домат, краставица, каперси, зелена чушка, лук, маслини, сирене фета, риган, зехтин, оцет', de: 'Salat, Tomate, Gurke, Kapern, grüne Paprika, Zwiebel, Oliven, Feta, Oregano, Olivenöl, Essig', ro: 'Salată verde, roșii, castravete, capere, ardei verde, ceapă, măsline, feta, oregano, ulei de măsline, oțet', tr: 'Marul, domates, salatalık, kapari, yeşil biber, soğan, zeytin, feta peyniri, kekik, zeytinyağı, sirke' } },
    'food|Σαλάτα Του Σεφ': { n: { bg: 'Салата на шефа', de: 'Chefsalat', ro: 'Salata șefului', tr: 'Şef salatası' }, d: { bg: 'Маруля, домат, краставица, морков, зелена чушка, гауда, шунка, пуешко, яйце, майонеза', de: 'Salat, Tomate, Gurke, Karotte, grüne Paprika, Gouda, Schinken, Pute, Ei, Mayonnaise', ro: 'Salată verde, roșii, castravete, morcov, ardei verde, gouda, șuncă, curcan, ou, maioneză', tr: 'Marul, domates, salatalık, havuç, yeşil biber, gouda, jambon, hindi, yumurta, mayonez' } },
    'food|Σαλάτα Του Καίσαρα': { n: { bg: 'Салата Цезар', de: 'Caesar Salat', ro: 'Salată Caesar', tr: 'Sezar salatası' }, d: { bg: 'Маруля, домат, морков, пиле, крутони, пармезан, сос Цезар', de: 'Salat, Tomate, Karotte, Hähnchen, Croutons, Parmesan, Caesar-Dressing', ro: 'Salată verde, roșii, morcov, pui, crutoane, parmezan, dressing Caesar', tr: 'Marul, domates, havuç, tavuk, kruton, parmesan, Sezar sos' } },
    'food|Σαλάτα Του Ψαρά': { n: { bg: 'Рибарска салата', de: 'Fischersalat', ro: 'Salata pescarului', tr: 'Balıkçı salatası' }, d: { bg: 'Маруля, домат, морков, каперси, филе от риба тон, сос лимон-зехтин', de: 'Salat, Tomate, Karotte, Kapern, Thunfischfilet, Zitronen-Öl-Dressing', ro: 'Salată verde, roșii, morcov, capere, file de ton, sos lămâie-ulei', tr: 'Marul, domates, havuç, kapari, ton balığı fileto, limon-zeytinyağı sos' } },
    'food|Μπέργκερ': { n: { bg: 'Бургер' }, d: { bg: '100% телешко или пилешко, майонеза, маруля, домат, кетчуп, пържени картофи', de: '100% Rind oder Hähnchen, Mayonnaise, Salat, Tomate, Ketchup, Pommes frites', ro: '100% vită sau pui, maioneză, salată, roșii, ketchup, cartofi prăjiți', tr: '%100 dana veya tavuk, mayonez, marul, domates, ketçap, patates kızartması' } },
    'food|Κλαμπ Σάντουιτς': { n: { bg: 'Клуб сандвич', ro: 'Club sandwich', tr: 'Club sandviç' }, d: { bg: 'Маруля, гауда, пуешко, шунка, домат, майонеза, пържени картофи', de: 'Salat, Gouda, Pute, Schinken, Tomate, Mayonnaise, Pommes frites', ro: 'Salată, gouda, curcan, șuncă, roșii, maioneză, cartofi prăjiți', tr: 'Marul, gouda, hindi, jambon, domates, mayonez, patates kızartması' } },
    'food|Κλαμπ Κοτόπουλο': { n: { bg: 'Клуб сандвич с пиле', de: 'Chicken Club Sandwich', ro: 'Club sandwich cu pui', tr: 'Tavuklu club sandviç' }, d: { bg: 'Пиле на скара, маруля, гауда, бекон, домат, майонеза, пържени картофи', de: 'Gegrilltes Hähnchen, Salat, Gouda, Bacon, Tomate, Mayonnaise, Pommes frites', ro: 'Pui la grătar, salată, gouda, bacon, roșii, maioneză, cartofi prăjiți', tr: 'Izgara tavuk, marul, gouda, bacon, domates, mayonez, patates kızartması' } },
    'food|Μπαγκέτα Με Κοτόπουλο': { n: { bg: 'Багета с пиле', de: 'Hähnchen-Baguette', ro: 'Baghetă cu pui', tr: 'Tavuklu baget' }, d: { bg: 'Пиле, маруля, пармезан, горчичен сос', de: 'Hähnchen, Salat, Parmesan, Senfsauce', ro: 'Pui, salată, parmezan, sos de muștar', tr: 'Tavuk, marul, parmesan, hardal sos' } },
    'food|Πατάτες Τηγανητές Μερίδα': { n: { bg: 'Порция пържени картофи', de: 'Portion Pommes frites', ro: 'Porție de cartofi prăjiți', tr: 'Porsiyon patates kızartması' }, d: { bg: 'Хрупкави, прясно изпържени', de: 'Knusprig, frisch frittiert', ro: 'Crocanți, proaspăt prăjiți', tr: 'Çıtır çıtır, taze kızartılmış' } },
    'food|Γιαούρτι Με Φρούτα, Μέλι & Ξηρούς Καρπούς': { n: { bg: 'Йогурт с плодове, мед и ядки', de: 'Joghurt mit Früchten, Honig & Nüssen', ro: 'Iaurt cu fructe, miere și nuci', tr: 'Meyveli, ballı ve kuruyemişli yoğurt' }, d: { bg: 'Цедено кисело мляко със сезонни плодове, мед и ядки', de: 'Abgetropfter Joghurt mit Saisonfrüchten, Honig und Nüssen', ro: 'Iaurt grecesc cu fructe de sezon, miere și nuci', tr: 'Mevsim meyveleri, bal ve kuruyemişle süzme yoğurt' } },
    'food|Φρουτοσαλάτα': { n: { bg: 'Плодова салата', de: 'Obstsalat', ro: 'Salată de fructe', tr: 'Meyve salatası' }, d: { bg: 'Пресни сезонни плодове', de: 'Frische Früchte der Saison', ro: 'Fructe proaspete de sezon', tr: 'Taze mevsim meyveleri' } },
    'food|Φρουτοσαλάτα Μεγάλη': { n: { bg: 'Голяма плодова салата', de: 'Obstsalat groß', ro: 'Salată de fructe mare', tr: 'Büyük meyve salatası' }, d: { bg: 'Голяма порция пресни сезонни плодове', de: 'Große Portion frischer Saisonfrüchte', ro: 'Porție mare de fructe proaspete de sezon', tr: 'Büyük porsiyon taze mevsim meyveleri' } },
    'food|Τοστ Διάφορα*': { n: { bg: 'Тост*', de: 'Toast*', ro: 'Toast*', tr: 'Tost*' }, d: { bg: 'С гауда, шунка или пуешко', de: 'Mit Gouda, Schinken oder Pute', ro: 'Cu gouda, șuncă sau curcan', tr: 'Gouda, jambon veya hindili' } },
    'food|Κρύα Σάντουιτς*': { n: { bg: 'Студен сандвич*', de: 'Kaltes Sandwich*', ro: 'Sandviș rece*', tr: 'Soğuk sandviç*' }, d: { bg: 'С гауда, шунка или пуешко', de: 'Mit Gouda, Schinken oder Pute', ro: 'Cu gouda, șuncă sau curcan', tr: 'Gouda, jambon veya hindili' } },
    'food|Χοτ Ντογκ': { n: { bg: 'Хот-дог' }, d: { bg: 'Кренвирш в меко хлебче', de: 'Würstchen im weichen Brötchen', ro: 'Crenvurst în chiflă pufoasă', tr: 'Yumuşak ekmekte sosis' } },
    // ΠΙΤΣΑ
    'pizza|Μαργαρίτα': { n: { bg: 'Маргарита' }, d: { bg: 'Доматен сос, моцарела, риган', de: 'Tomatensauce, Mozzarella, Oregano', ro: 'Sos de roșii, mozzarella, oregano', tr: 'Domates sos, mozarella, kekik' } },
    'pizza|Πεπερόνι': { n: { bg: 'Пеперони' }, d: { bg: 'Доматен сос, моцарела, пеперони', de: 'Tomatensauce, Mozzarella, Pepperoni-Salami', ro: 'Sos de roșii, mozzarella, pepperoni', tr: 'Domates sos, mozarella, pepperoni' } },
    'pizza|Σπέσιαλ': { n: { bg: 'Специална', de: 'Spezial', ro: 'Specială', tr: 'Özel' }, d: { bg: 'Шунка, бекон, гъби, чушки, моцарела', de: 'Schinken, Bacon, Champignons, Paprika, Mozzarella', ro: 'Șuncă, bacon, ciuperci, ardei, mozzarella', tr: 'Jambon, bacon, mantar, biber, mozarella' } },
    'pizza|Κοτόπουλο': { n: { bg: 'С пиле', de: 'Hähnchen', ro: 'Cu pui', tr: 'Tavuklu' }, d: { bg: 'Пиле на скара, чушки, моцарела, барбекю сос', de: 'Gegrilltes Hähnchen, Paprika, Mozzarella, BBQ-Sauce', ro: 'Pui la grătar, ardei, mozzarella, sos BBQ', tr: 'Izgara tavuk, biber, mozarella, barbekü sos' } },
    // ΠΑΓΩΤΑ
    'icecream|Γρανίτα': { n: { bg: 'Гранита' }, d: { bg: 'Ледена плодова гранита', de: 'Eisige Fruchtgranita', ro: 'Granita cu fructe', tr: 'Buzlu meyve granitası' } },
    'icecream|Μιλκ Σέικ': { n: { bg: 'Милкшейк' }, d: { bg: 'Кремообразен милкшейк със сладолед, различни вкусове', de: 'Cremiger Milchshake mit Eis, verschiedene Sorten', ro: 'Milkshake cremos cu înghețată, diverse arome', tr: 'Dondurmalı kremamsı milkshake, çeşitli aromalar' } },
    'icecream|Κύπελο': { n: { bg: 'Чашка', de: 'Eisbecher', ro: 'Cupă de înghețată', tr: 'Bardakta dondurma' }, d: { bg: 'Сладолед в чашка, вкусове на деня', de: 'Eis im Becher, Sorten des Tages', ro: 'Înghețată la cupă, aromele zilei', tr: 'Bardakta dondurma, günün çeşitleri' } },
    'icecream|Χωνάκι 1 Μπάλα': { n: { bg: 'Фунийка 1 топка', de: 'Waffel 1 Kugel', ro: 'Cornet cu o cupă', tr: 'Külah 1 top' }, d: { bg: 'Хрупкава фунийка с една топка сладолед', de: 'Knusprige Waffel mit einer Kugel Eis', ro: 'Cornet crocant cu o cupă de înghețată', tr: 'Bir top dondurmalı çıtır külah' } },
    // ΚΡΑΣΙΑ
    'wine|Κτήμα Βιβλία Χώρα': { n: { bg: 'Ktima Vivlia Chora' }, d: { gr: 'Κτήμα Βιβλία Χώρα', bg: 'Изба Vivlia Chora', de: 'Weingut Vivlia Chora', ro: 'Crama Vivlia Chora', tr: 'Vivlia Chora bağları' } },
    'wine|Οίσυμη': { n: { bg: 'Oisymi' }, d: { bg: 'Charismatic Wines Karamperidi' } },
    'wine|Γλυκιά Μελωδία': { n: { bg: 'Glykia Melodia' }, d: { bg: 'Charismatic Wines Karamperidi' } },
    'wine|Μαλαγουζιά': { n: { bg: 'Malagouzia' }, d: { bg: 'Symeonidis' } },
    'wine|Variété': { d: { gr: 'Λαλίκος', bg: 'Lalikos' } },
    'wine|Moscato d’Asti': { d: { gr: 'Ημίγλυκος αφρώδης οίνος, Ιταλία', bg: 'Полусладко пенливо вино, Италия', de: 'Halbsüßer Schaumwein, Italien', ro: 'Vin spumant demidulce, Italia', tr: 'Yarı tatlı köpüklü şarap, İtalya' } },
    'wine|Moët & Chandon Blanc': { d: { gr: 'Γαλλική σαμπάνια brut', bg: 'Френско шампанско брут', de: 'Französischer Brut-Champagner', ro: 'Șampanie franceză brut', tr: 'Fransız brüt şampanya' } },
    'wine|Moët & Chandon Ice': { d: { gr: 'Σαμπάνια για σερβίρισμα με πάγο', bg: 'Шампанско, създадено да се сервира с лед', de: 'Champagner zum Servieren auf Eis', ro: 'Șampanie creată pentru a fi servită cu gheață', tr: 'Buzla servis için şampanya' } },
    // ΚΟΚΤΕΙΛ
    'cocktails|Negroni': { d: { gr: 'Τζιν, Campari, κόκκινο βερμούτ', bg: 'Джин, Кампари, червен вермут', de: 'Gin, Campari, roter Wermut', ro: 'Gin, Campari, vermut roșu', tr: 'Cin, Campari, kırmızı vermut' } },
    'cocktails|Margarita': { d: { gr: 'Τεκίλα, triple sec, λάιμ', bg: 'Текила, трипъл сек, лайм', de: 'Tequila, Triple Sec, Limette', ro: 'Tequila, triple sec, lime', tr: 'Tekila, triple sec, misket limonu' } },
    'cocktails|Strawberry Cooler': { d: { gr: 'Βότκα, ροζέ κρασί, σιρόπι φράουλα, λάιμ, γκρέιπφρουτ, σόδα', bg: 'Водка, вино розе, ягодов сироп, лайм, грейпфрут, сода', de: 'Wodka, Roséwein, Erdbeersirup, Limette, Grapefruit, Soda', ro: 'Vodcă, vin rose, sirop de căpșuni, lime, grepfrut, sifon', tr: 'Votka, roze şarap, çilek şurubu, misket limonu, greyfurt, soda' } },
    'cocktails|Mojito': { d: { gr: 'Λευκό ρούμι, σιρόπι ζάχαρης, σόδα, λάιμ, δυόσμος', bg: 'Бял ром, захарен сироп, сода, лайм, мента', de: 'Weißer Rum, Zuckersirup, Soda, Limette, Minze', ro: 'Rom alb, sirop de zahăr, sifon, lime, mentă', tr: 'Beyaz rom, şeker şurubu, soda, misket limonu, nane' } },
    'cocktails|Daiquiri': { d: { gr: 'Ρούμι, triple sec, λάιμ, σιρόπι ζάχαρης', bg: 'Ром, трипъл сек, лайм, захарен сироп', de: 'Rum, Triple Sec, Limette, Zuckersirup', ro: 'Rom, triple sec, lime, sirop de zahăr', tr: 'Rom, triple sec, misket limonu, şeker şurubu' } },
    'cocktails|Cosmopolitan': { d: { gr: 'Βότκα, triple sec, χυμός κράνμπερι, λάιμ', bg: 'Водка, трипъл сек, сок от червени боровинки, лайм', de: 'Wodka, Triple Sec, Cranberrysaft, Limette', ro: 'Vodcă, triple sec, suc de merișoare, lime', tr: 'Votka, triple sec, kızılcık suyu, misket limonu' } },
    'cocktails|Caipirinha': { d: { gr: 'Κασάσα, λάιμ, καστανή ζάχαρη', bg: 'Кашаса, лайм, кафява захар', de: 'Cachaça, Limette, brauner Zucker', ro: 'Cachaça, lime, zahăr brun', tr: 'Cachaça, misket limonu, esmer şeker' } },
    'cocktails|Cuba Libre': { d: { gr: 'Ρούμι Havana, λάιμ, σιρόπι ζάχαρης, Coca-Cola', bg: 'Ром Havana, лайм, захарен сироп, Кока-Кола', de: 'Havana-Rum, Limette, Zuckersirup, Coca-Cola', ro: 'Rom Havana, lime, sirop de zahăr, Coca-Cola', tr: 'Havana rom, misket limonu, şeker şurubu, Coca-Cola' } },
    'cocktails|Zombie': { d: { gr: 'Λευκό, μαύρο και παλαιωμένο ρούμι, Cointreau, μπράντι, χυμός ανανά, χυμός πορτοκάλι, γρεναδίνη, φρέσκος χυμός λάιμ', bg: 'Бял, тъмен и отлежал ром, Cointreau, бренди, ананасов сок, портокалов сок, гренадин, пресен сок от лайм', de: 'Weißer, dunkler und gereifter Rum, Cointreau, Brandy, Ananassaft, Orangensaft, Grenadine, frischer Limettensaft', ro: 'Rom alb, negru și maturat, Cointreau, brandy, suc de ananas, suc de portocale, grenadină, suc proaspăt de lime', tr: 'Beyaz, koyu ve yıllanmış rom, Cointreau, brendi, ananas suyu, portakal suyu, nar şurubu, taze misket limonu suyu' } },
    'cocktails|Mai Tai': { d: { gr: 'Λευκό και παλαιωμένο ρούμι, λικέρ πορτοκάλι, σιρόπι αμύγδαλο, φρέσκος χυμός λάιμ', bg: 'Бял и отлежал ром, портокалов ликьор, бадемов сироп, пресен сок от лайм', de: 'Weißer und gereifter Rum, Orangenlikör, Mandelsirup, frischer Limettensaft', ro: 'Rom alb și maturat, lichior de portocale, sirop de migdale, suc proaspăt de lime', tr: 'Beyaz ve yıllanmış rom, portakal likörü, badem şurubu, taze misket limonu suyu' } },
    'cocktails|Blue Lagoon': { d: { gr: 'Βότκα, λικέρ blue curaçao, φρέσκος χυμός λάιμ, Sprite', bg: 'Водка, ликьор блу кюрасо, пресен сок от лайм, Спрайт', de: 'Wodka, Blue-Curaçao-Likör, frischer Limettensaft, Sprite', ro: 'Vodcă, lichior blue curaçao, suc proaspăt de lime, Sprite', tr: 'Votka, blue curaçao likörü, taze misket limonu suyu, Sprite' } },
    'cocktails|Kiwi Cooler': { d: { gr: 'Τζιν, ακτινίδιο, πράσινο μήλο, Cointreau, φρέσκος χυμός λάιμ', bg: 'Джин, киви, зелена ябълка, Cointreau, пресен сок от лайм', de: 'Gin, Kiwi, grüner Apfel, Cointreau, frischer Limettensaft', ro: 'Gin, kiwi, măr verde, Cointreau, suc proaspăt de lime', tr: 'Cin, kivi, yeşil elma, Cointreau, taze misket limonu suyu' } },
    'cocktails|Bramble': { d: { gr: 'Τζιν, χυμός λεμόνι, απλό σιρόπι, λικέρ βατόμουρο', bg: 'Джин, лимонов сок, захарен сироп, къпинов ликьор', de: 'Gin, Zitronensaft, Zuckersirup, Brombeerlikör', ro: 'Gin, suc de lămâie, sirop simplu, lichior de mure', tr: 'Cin, limon suyu, şeker şurubu, böğürtlen likörü' } },
    'cocktails|Piña Colada': { d: { gr: 'Λευκό και μαύρο ρούμι, χυμός ανανά, πουρές καρύδας, φρέσκος χυμός λάιμ, Malibu', bg: 'Бял и тъмен ром, ананасов сок, кокосово пюре, пресен сок от лайм, Malibu', de: 'Weißer und dunkler Rum, Ananassaft, Kokospüree, frischer Limettensaft, Malibu', ro: 'Rom alb și negru, suc de ananas, piure de cocos, suc proaspăt de lime, Malibu', tr: 'Beyaz ve koyu rom, ananas suyu, hindistan cevizi püresi, taze misket limonu suyu, Malibu' } },
    'cocktails|Blue Coconut Margarita': { d: { gr: 'Τεκίλα, blue curaçao, χυμός λάιμ, κρέμα καρύδας, νιφάδες καρύδας', bg: 'Текила, блу кюрасо, сок от лайм, кокосов крем, кокосови стърготини', de: 'Tequila, Blue Curaçao, Limettensaft, Kokoscreme, Kokosflocken', ro: 'Tequila, blue curaçao, suc de lime, cremă de cocos, fulgi de cocos', tr: 'Tekila, blue curaçao, misket limonu suyu, hindistan cevizi kreması, hindistan cevizi rendesi' } },
    'cocktails|Orange Margarita': { d: { gr: 'Tequila blanco, σμέουρα, χυμός πορτοκάλι, λάιμ', bg: 'Текила бланко, малини, портокалов сок, лайм', de: 'Tequila Blanco, Himbeeren, Orangensaft, Limette', ro: 'Tequila blanco, zmeură, suc de portocale, lime', tr: 'Tekila blanco, ahududu, portakal suyu, misket limonu' } },
    'cocktails|Paloma': { d: { gr: 'Λευκή τεκίλα, Cointreau, σόδα γκρέιπφρουτ, σιρόπι δυόσμου', bg: 'Бяла текила, Cointreau, грейпфрутова сода, ментов сироп', de: 'Weiße Tequila, Cointreau, Grapefruit-Soda, Minzsirup', ro: 'Tequila albă, Cointreau, sifon de grepfrut, sirop de mentă', tr: 'Beyaz tekila, Cointreau, greyfurt sodası, nane şurubu' } },
    'cocktails|Blue Hawaiian': { d: { gr: 'Γάλα καρύδας, blue curaçao, λευκό ρούμι, χυμός ανανά', bg: 'Кокосово мляко, блу кюрасо, бял ром, ананасов сок', de: 'Kokosmilch, Blue Curaçao, weißer Rum, Ananassaft', ro: 'Lapte de cocos, blue curaçao, rom alb, suc de ananas', tr: 'Hindistan cevizi sütü, blue curaçao, beyaz rom, ananas suyu' } },
    'cocktails|Wide Strawberry': { d: { gr: 'Βότκα, λάιμ, σιρόπι αμύγδαλο, λικέρ φράουλα', bg: 'Водка, лайм, бадемов сироп, ягодов ликьор', de: 'Wodka, Limette, Mandelsirup, Erdbeerlikör', ro: 'Vodcă, lime, sirop de migdale, lichior de căpșuni', tr: 'Votka, misket limonu, badem şurubu, çilek likörü' } },
    'cocktails|Porn Star': { d: { gr: 'Βότκα, λάιμ, σιρόπι βανίλια, φρούτο του πάθους', bg: 'Водка, лайм, ванилов сироп, маракуя', de: 'Wodka, Limette, Vanillesirup, Passionsfrucht', ro: 'Vodcă, lime, sirop de vanilie, fructul pasiunii', tr: 'Votka, misket limonu, vanilya şurubu, passion fruit' } },
    'cocktails|Sex On The Beach': { d: { gr: 'Βότκα, φρέσκος χυμός πορτοκάλι, σναπς πορτοκάλι, γρεναδίνη', bg: 'Водка, пресен портокалов сок, портокалов шнапс, гренадин', de: 'Wodka, frischer Orangensaft, Orangenschnaps, Grenadine', ro: 'Vodcă, suc proaspăt de portocale, șnaps de portocale, grenadină', tr: 'Votka, taze portakal suyu, portakal şnapsı, nar şurubu' } },
    'cocktails|Tequila Sunrise': { d: { gr: 'Τεκίλα, φρέσκος χυμός πορτοκάλι, γρεναδίνη', bg: 'Текила, пресен портокалов сок, гренадин', de: 'Tequila, frischer Orangensaft, Grenadine', ro: 'Tequila, suc proaspăt de portocale, grenadină', tr: 'Tekila, taze portakal suyu, nar şurubu' } },
    // PREMIUM
    'premium|Sugarland Summer Freeze': { d: { gr: 'Ρούμι Don Papa, χυμός λάιμ, φράουλες', bg: 'Ром Don Papa, сок от лайм, ягоди', de: 'Don-Papa-Rum, Limettensaft, Erdbeeren', ro: 'Rom Don Papa, suc de lime, căpșuni', tr: 'Don Papa rom, misket limonu suyu, çilek' } },
    'premium|Pink Dream': { d: { gr: 'Βότκα Belvedere, λικέρ σμέουρο, σιρόπι ζάχαρης, χυμός λεμόνι, orange bitters', bg: 'Водка Belvedere, малинов ликьор, захарен сироп, лимонов сок, портокалов битер', de: 'Belvedere-Wodka, Himbeerlikör, Zuckersirup, Zitronensaft, Orange Bitters', ro: 'Vodcă Belvedere, lichior de zmeură, sirop de zahăr, suc de lămâie, bitter de portocale', tr: 'Belvedere votka, ahududu likörü, şeker şurubu, limon suyu, portakal biteri' } },
    'premium|Sweet Passion': { d: { gr: 'Metaxa 7★, χυμός λάιμ, Sprite ή τόνικ', bg: 'Metaxa 7★, сок от лайм, Спрайт или тоник', de: 'Metaxa 7★, Limettensaft, Sprite oder Tonic', ro: 'Metaxa 7★, suc de lime, Sprite sau apă tonică', tr: 'Metaxa 7★, misket limonu suyu, Sprite veya tonik' } },
    'premium|Tropical Spring Punch': { d: { gr: 'Τζιν Empress 1908, χυμός ανανά, χυμός λάιμ', bg: 'Джин Empress 1908, ананасов сок, сок от лайм', de: 'Empress-1908-Gin, Ananassaft, Limettensaft', ro: 'Gin Empress 1908, suc de ananas, suc de lime', tr: 'Empress 1908 cin, ananas suyu, misket limonu suyu' } },
    'premium|Banana Drama': { d: { gr: 'Βότκα Grey Goose, χυμός λεμόνι, λικέρ μπανάνα, blue curaçao', bg: 'Водка Grey Goose, лимонов сок, бананов ликьор, блу кюрасо', de: 'Grey-Goose-Wodka, Zitronensaft, Bananenlikör, Blue Curaçao', ro: 'Vodcă Grey Goose, suc de lămâie, lichior de banane, blue curaçao', tr: 'Grey Goose votka, limon suyu, muz likörü, blue curaçao' } },
    'premium|Blood Moon': { d: { gr: 'Τζιν Empress 1908, Aperol, λικέρ maraschino, χυμός πορτοκάλι', bg: 'Джин Empress 1908, Аперол, ликьор мараскино, портокалов сок', de: 'Empress-1908-Gin, Aperol, Maraschino-Likör, Orangensaft', ro: 'Gin Empress 1908, Aperol, lichior maraschino, suc de portocale', tr: 'Empress 1908 cin, Aperol, maraschino likörü, portakal suyu' } },
    // ΠΟΤΑ
    'spirits|Johnnie Walker Red Label': { d: { bg: 'Блендирано шотландско уиски', de: 'Blended Scotch Whisky', ro: 'Whisky scoțian blended', tr: 'Harman İskoç viskisi' } },
    'spirits|Haig': { d: { bg: 'Блендирано шотландско уиски', de: 'Blended Scotch Whisky', ro: 'Whisky scoțian blended', tr: 'Harman İskoç viskisi' } },
    'spirits|Chivas': { d: { bg: '12-годишно премиум блендирано уиски', de: '12-jähriger Premium Blended Scotch', ro: 'Scotch blended premium de 12 ani', tr: '12 yıllık premium harman İskoç viskisi' } },
    'spirits|Johnnie Walker Black Label': { d: { bg: '12-годишно блендирано уиски', de: '12-jähriger Blended Scotch', ro: 'Scotch blended de 12 ani', tr: '12 yıllık harman İskoç viskisi' } },
    'spirits|Absolut': { d: { bg: 'Шведска водка', de: 'Schwedischer Wodka', ro: 'Vodcă suedeză', tr: 'İsveç votkası' } },
    'spirits|Grey Goose': { d: { bg: 'Френска премиум водка', de: 'Französischer Premium-Wodka', ro: 'Vodcă premium franceză', tr: 'Fransız premium votka' } },
    'spirits|Gordon’s Gin': { d: { bg: 'Класически лондонски сух джин', de: 'Klassischer London Dry Gin', ro: 'London dry gin clasic', tr: 'Klasik London dry cin' } },
    'spirits|Tanqueray': { d: { bg: 'Четирикратно дестилиран лондонски сух джин', de: 'Vierfach destillierter London Dry Gin', ro: 'London dry gin distilat de patru ori', tr: 'Dört kez damıtılmış London dry cin' } },
    'spirits|Bacardi': { d: { bg: 'Бял ром', de: 'Weißer Rum', ro: 'Rom alb', tr: 'Beyaz rom' } },
    'spirits|Martini': { d: { bg: 'Бианко, росо или екстра драй', de: 'Bianco, Rosso oder Extra Dry', ro: 'Bianco, rosso sau extra dry', tr: 'Bianco, rosso veya extra dry' } },
    'spirits|Jose Cuervo': { d: { bg: 'Мексиканска текила', de: 'Mexikanische Tequila', ro: 'Tequila mexicană', tr: 'Meksika tekilası' } },
    'spirits|Ούζο': { n: { bg: 'Узо' }, d: { bg: 'Традиционна гръцка анасонова ракия', de: 'Traditioneller griechischer Anisschnaps', ro: 'Băutură tradițională grecească cu anason', tr: 'Geleneksel Yunan anason rakısı' } },
    'spirits|Gordon’s Space': { d: { bg: 'Готова напитка с джин', de: 'Fertiggemixtes Gin-Getränk', ro: 'Băutură gata preparată pe bază de gin', tr: 'Cin bazlı hazır içecek' } },
    // ΜΠΥΡΕΣ
    'beer|Σολ': { n: { gr: 'Σολ 330ml', bg: 'Sol 330мл' }, d: { bg: 'Лека мексиканска лагер бира', de: 'Leichtes mexikanisches Lager', ro: 'Lager mexican ușor', tr: 'Hafif Meksika birası' } },
    'beer|Κορόνα': { n: { gr: 'Κορόνα 330ml', bg: 'Corona 330мл' }, d: { bg: 'Мексиканска лагер, сервира се с лайм', de: 'Mexikanisches Lager, serviert mit Limette', ro: 'Lager mexican, servit cu lime', tr: 'Misket limonuyla servis edilen Meksika birası' } },
    'beer|Χάινεκεν': { n: { gr: 'Χάινεκεν 330ml', bg: 'Heineken 330мл' }, d: { bg: 'Холандска премиум лагер', de: 'Niederländisches Premium-Lager', ro: 'Lager premium olandez', tr: 'Hollanda premium bira' } },
    'beer|Μύθος': { n: { gr: 'Μύθος 330ml', bg: 'Mythos 330мл' }, d: { bg: 'Гръцка светла лагер', de: 'Griechisches helles Lager', ro: 'Lager grecesc blond', tr: 'Yunan sarı birası' } },
    'beer|Άλφα': { n: { gr: 'Άλφα 330ml', bg: 'Alfa 330мл' }, d: { bg: 'Класическа гръцка лагер', de: 'Klassisches griechisches Lager', ro: 'Lager grecesc clasic', tr: 'Klasik Yunan birası' } },
    'beer|Βεργίνα': { n: { gr: 'Βεργίνα 330ml', bg: 'Vergina 330мл' }, d: { bg: 'Гръцка премиум лагер', de: 'Griechisches Premium-Lager', ro: 'Lager premium grecesc', tr: 'Yunan premium birası' } },
    'beer|Amstel Radler 330ml': { n: { bg: 'Amstel Radler 330мл' }, d: { bg: 'Бира с натурален лимонов сок', de: 'Bier mit natürlichem Zitronensaft', ro: 'Bere cu suc natural de lămâie', tr: 'Doğal limon sulu bira' } },
    'beer|Stella Artois 330ml': { n: { bg: 'Stella Artois 330мл' }, d: { bg: 'Белгийски пилзнер', de: 'Belgisches Pils', ro: 'Pilsner belgian', tr: 'Belçika pilsner' } },
    'beer|Ποτήρι 0.3L': { n: { bg: 'Чаша 0.3л', de: 'Glas 0.3L', ro: 'Pahar 0.3L', tr: 'Bardak 0.3L' }, d: { bg: 'Наливна светла лагер', de: 'Helles Fassbier', ro: 'Bere blondă la draft', tr: 'Fıçıdan sarı bira' } },
    'beer|Ποτήρι 0.4L': { n: { bg: 'Чаша 0.4л', de: 'Glas 0.4L', ro: 'Pahar 0.4L', tr: 'Bardak 0.4L' }, d: { bg: 'Наливна светла лагер', de: 'Helles Fassbier', ro: 'Bere blondă la draft', tr: 'Fıçıdan sarı bira' } },
    // ENERGY
    'energy|Red Bull': { d: { bg: 'Енергийна напитка', de: 'Energy-Drink', ro: 'Băutură energizantă', tr: 'Enerji içeceği' } },
  },
};
