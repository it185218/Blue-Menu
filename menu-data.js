// blue — the beach bar · menu data (GR/EN)
// Mirrors menu-data.js from the Claude Design project; loaded as a classic
// script so the page also works when opened directly from disk (file://).
// Item fields: n = name, p = price, d = description, h = subheading row.

const MIN_NOTE = 'ΕΛΑΧΙΣΤΗ ΚΑΤΑΝΑΛΩΣΗ ΑΝΑ ΑΤΟΜΟ 5.00€ · MINIMUM CONSUMPTION PER PERSON 5.00€';

const SECTIONS = [
{id:'rofimata', nav:'Ροφήματα', t:'ΡΟΦΗΜΑΤΑ | BEVERAGES', items:[
 {n:'Νες Καφέ / Nescafé', p:'5.00€', d:'Στιγμιαίος καφές, ζεστός, με ή χωρίς γάλα / Instant coffee, hot, with or without milk', img:'images/nescafe.webp'},
 {n:'Νες Καφέ Φραπέ / Nescafé Frappé', p:'5.00€', d:'Ο κλασικός ελληνικός κρύος χτυπητός καφές με πλούσιο αφρό / The classic Greek iced shaken coffee with rich foam', img:'images/frappe.webp'},
 {n:'Φρέντο Εσπρέσο / Freddo Espresso', p:'5.00€', d:'Διπλός espresso χτυπημένος με πάγο / Double espresso shaken over ice', img:'images/freddo-espresso.webp'},
 {n:'Φρέντο Καπουτσίνο / Freddo Cappuccino', p:'5.50€', d:'Κρύος διπλός espresso με παγωμένο αφρόγαλα / Iced double espresso topped with chilled milk foam', img:'images/freddo-cappuccino.webp'},
 {n:'Εσπρέσο / Espresso', p:'4.00€', d:'Εκλεκτό χαρμάνι σε μονή ή διπλή δόση / Fine espresso blend, single or double shot', img:'images/espresso.webp'},
 {n:'Καπουτσίνο / Cappuccino', p:'5.00€', d:'Espresso με βελούδινο ζεστό αφρόγαλα / Espresso with velvety steamed milk foam', img:'images/cappuccino.webp'},
 {n:'Σοκολάτα Κρύα / Iced Chocolate', p:'5.50€', d:'Πλούσια παγωμένη σοκολάτα / Rich iced chocolate', img:'images/chocolate-cold.webp'},
 {n:'Σοκολάτα Ζεστή / Hot Chocolate', p:'5.50€', d:'Πλούσια ζεστή σοκολάτα / Rich hot chocolate', img:'images/chocolate-hot.webp'}
]},
{id:'fresh', nav:'Φρέσκοι Χυμοί', t:'ΦΥΣΙΚΟΙ ΧΥΜΟΙ | FRESH JUICES', note:'Ποτήρι / Glass', items:[
 {n:'Πορτοκάλι / Orange', p:'6.00€', d:'Φρεσκοστυμμένα πορτοκάλια ημέρας / Freshly squeezed oranges of the day'},
 {n:'Λεμόνι / Lemon', p:'5.00€', d:'Φρέσκια λεμονάδα με επιλογή ζάχαρης / Fresh lemonade, sweetened to taste'},
 {n:'Ροδάκινο / Peach', p:'6.00€', d:'Φρέσκος χυμός από ώριμα ροδάκινα / Fresh juice from ripe peaches'},
 {n:'Κοκτέιλ / Cocktail', p:'6.50€', d:'Μείγμα φρέσκων φρούτων εποχής / Blend of fresh seasonal fruits'}
]},
{id:'juices', nav:'Χυμοί', t:'ΧΥΜΟΙ | JUICES', note:'Κουτί / Juice Box 330ml', items:[
 {n:'Πορτοκάλι / Orange', p:'5.00€', d:'100% χυμός πορτοκάλι / 100% orange juice'},
 {n:'Μπανάνα / Banana', p:'5.00€', d:'Πλούσιος κρεμώδης χυμός μπανάνας / Smooth, creamy banana nectar'},
 {n:'Ροδάκινο / Peach 250ml', p:'5.00€', d:'Νέκταρ ροδάκινο / Peach nectar'},
 {n:'Μόσιον / Motion', p:'5.00€', d:'Πολυβιταμινούχος χυμός φρούτων / Multivitamin fruit juice'},
 {n:'Βύσσινο / Sour Cherry 250ml', p:'4.00€', d:'Παραδοσιακή βυσσινάδα / Traditional sour cherry juice'}
]},
{id:'soft', nav:'Αναψυκτικά', t:'ΑΝΑΨΥΚΤΙΚΑ | REFRESHMENTS', note:'Κουτί / Can 330ml', items:[
 {n:'Κόκα Κόλα / Coca-Cola', p:'5.00€', d:'Κλασική, light ή zero / Classic, light or zero', img:'images/coca-cola.webp'},
 {n:'Πορτοκαλάδα / Orangeade', p:'5.00€', d:'Πορτοκαλάδα με ανθρακικό ή χωρίς / Sparkling or still orangeade', img:'images/fanta-orange.webp'},
 {n:'Λεμονάδα / Lemonade', p:'5.00€', d:'Δροσιστική λεμονάδα / Refreshing lemonade', img:'images/fanta-lemon.webp'},
 {n:'Σπράιτ / Sprite', p:'5.00€', d:'Αναψυκτικό λεμόνι-λάιμ / Lemon-lime soda', img:'images/sprite.webp'},
 {n:'Σόδα / Soda', p:'5.00€', d:'Ανθρακούχο νερό / Sparkling soda water', img:'images/soda.webp'},
 {n:'Ροζ Σόδα / Pink Soda', p:'5.00€', d:'Δροσιστική ροζ σόδα / Refreshing pink soda', img:'images/pink-soda.webp'},
 {n:'Κρύο Τσάι Λεμόνι / Ice Tea Lemon 330ml', p:'5.00€', d:'Παγωμένο τσάι λεμόνι / Lemon iced tea', img:'images/ice-tea-lemon.webp'},
 {n:'Κρύο Τσάι Ροδάκινο / Ice Tea Peach 500ml', p:'6.00€', d:'Παγωμένο τσάι ροδάκινο / Peach iced tea', img:'images/ice-tea-peach.webp'},
 {n:'Μεταλλικό Νερό / Mineral Water 0.5L', p:'1.00€', d:'Φυσικό μεταλλικό νερό / Natural mineral water', img:'images/water.webp'}
]},
{id:'food', nav:'Φαγητό', t:'FOOD & SNACKS', foot:'* Γκούντα, Ζαμπόν, Γαλοπούλα / Gouda, Ham, Turkey', items:[
 {n:'Ελληνική Σαλάτα / Greek Salad', p:'8.00€', d:'Μαρούλι, ντομάτα, αγγούρι, κάπαρη, πράσινη πιπεριά, κρεμμύδι, ελιές, φέτα, ρίγανη, ελαιόλαδο, ξύδι / Lettuce, tomato, cucumber, capers, green pepper, onion, olives, feta, oregano, olive oil, vinegar'},
 {n:'Σαλάτα Του Σεφ / Chef’s Salad', p:'8.00€', d:'Μαρούλι, ντομάτα, αγγούρι, καρότο, πράσινη πιπεριά, γκούντα, ζαμπόν, γαλοπούλα, αυγό, μαγιονέζα / Lettuce, tomato, cucumber, carrot, green pepper, Gouda, ham, turkey, egg, mayonnaise'},
 {n:'Σαλάτα Του Καίσαρα / Caesar’s Salad', p:'9.00€', d:'Μαρούλι, ντομάτα, καρότο, κοτόπουλο, κρουτόν, παρμεζάνα, σως Καίσαρα / Lettuce, tomato, carrot, chicken, croutons, Parmesan, Caesar’s dressing'},
 {n:'Σαλάτα Του Ψαρά / Fisherman’s Salad', p:'8.00€', d:'Μαρούλι, ντομάτα, καρότο, κάπαρη, φιλέτο τόνου, σως λαδολέμονο / Lettuce, tomato, carrot, capers, tuna fillet, lemon-oil sauce'},
 {n:'Μπέργκερ / Burger', p:'9.00€', d:'100% μοσχάρι ή κοτόπουλο, μαγιονέζα, μαρούλι, ντομάτα, κέτσαπ, πατάτες τηγανητές / 100% beef or chicken, mayonnaise, lettuce, tomato, ketchup, French fries'},
 {n:'Κλαμπ Σάντουιτς / Club Sandwich', p:'8.00€', d:'Μαρούλι, γκούντα, γαλοπούλα, ζαμπόν, ντομάτα, μαγιονέζα, πατάτες τηγανητές / Lettuce, Gouda, turkey, ham, tomato, mayonnaise, French fries'},
 {n:'Κλαμπ Κοτόπουλο / Chicken Club Sandwich', p:'10.00€', d:'Ψητό κοτόπουλο, μαρούλι, γκούντα, μπέικον, ντομάτα, μαγιονέζα, πατάτες τηγανητές / Grilled chicken, lettuce, Gouda, bacon, tomato, mayonnaise, French fries'},
 {n:'Μπαγκέτα Με Κοτόπουλο / Chicken Baguette', p:'5.00€', d:'Κοτόπουλο, μαρούλι, παρμεζάνα, σως μουστάρδας / Chicken, lettuce, Parmesan, mustard sauce'},
 {n:'Πατάτες Τηγανητές Μερίδα / French Fries Portion', p:'4.00€', d:'Τραγανές, φρεσκοτηγανισμένες / Crispy, freshly fried'},
 {n:'Γιαούρτι Με Φρούτα, Μέλι & Ξηρούς Καρπούς / Yogurt With Fruits, Honey & Nuts', p:'6.50€', d:'Στραγγιστό γιαούρτι με φρούτα εποχής, μέλι και ξηρούς καρπούς / Strained yogurt with seasonal fruit, honey and nuts'},
 {n:'Φρουτοσαλάτα / Fruit Salad', p:'7.00€', d:'Φρέσκα φρούτα εποχής / Fresh seasonal fruit'},
 {n:'Φρουτοσαλάτα Μεγάλη / Fruit Salad Large', p:'10.00€', d:'Μεγάλη μερίδα με φρέσκα φρούτα εποχής / Large portion of fresh seasonal fruit'},
 {n:'Τοστ Διάφορα* / Toasted Sandwich*', p:'4.00€', d:'Με γκούντα, ζαμπόν ή γαλοπούλα / With Gouda, ham or turkey'},
 {n:'Κρύα Σάντουιτς* / Cold Sandwich*', p:'4.00€', d:'Με γκούντα, ζαμπόν ή γαλοπούλα / With Gouda, ham or turkey'},
 {n:'Χοτ Ντογκ / Hot Dog', p:'4.00€', d:'Λουκάνικο σε αφράτο ψωμάκι / Sausage in a soft bun'}
]},
{id:'pizza', nav:'Πίτσα', t:'ΠΙΤΣΑ | PIZZA', items:[
 {n:'Μαργαρίτα / Margherita', p:'9.00€', d:'Σάλτσα ντομάτας, μοτσαρέλα, ρίγανη / Tomato sauce, mozzarella, oregano'},
 {n:'Πεπερόνι / Pepperoni', p:'10.00€', d:'Σάλτσα ντομάτας, μοτσαρέλα, πεπερόνι / Tomato sauce, mozzarella, pepperoni'},
 {n:'Σπέσιαλ / Special', p:'11.00€', d:'Ζαμπόν, μπέικον, μανιτάρια, πιπεριές, μοτσαρέλα / Ham, bacon, mushrooms, peppers, mozzarella'},
 {n:'Κοτόπουλο / Chicken', p:'11.00€', d:'Ψητό κοτόπουλο, πιπεριές, μοτσαρέλα, σως μπάρμπεκιου / Grilled chicken, peppers, mozzarella, BBQ sauce'}
]},
{id:'icecream', nav:'Παγωτά', t:'ΠΑΓΩΤΑ | ICE CREAM', items:[
 {n:'Γρανίτα / Granita', p:'5.00€', d:'Παγωμένη γρανίτα σε γεύσεις φρούτων / Icy fruit granita'},
 {n:'Μιλκ Σέικ / Milkshake', p:'7.00€', d:'Κρεμώδες μιλκσέικ με παγωτό σε διάφορες γεύσεις / Creamy ice-cream milkshake, assorted flavors'},
 {n:'Κύπελο / Paper Cup', p:'2.50€', d:'Παγωτό σε κύπελο, γεύσεις ημέρας / Ice cream cup, flavors of the day'},
 {n:'Χωνάκι 1 Μπάλα / Cone 1 Ball', p:'2.50€', d:'Τραγανό χωνάκι με μία μπάλα παγωτό / Crispy cone with one scoop'}
]},
{id:'wine', nav:'Κρασιά', t:'ΚΡΑΣΙΑ | WINE LIST', note:'Φιάλη / Bottle · Ποτήρι / Glass', items:[
 {h:'Λευκά | White'},
 {n:'Κτήμα Βιβλία Χώρα / Ktima Vivlia Chora', d:'Vivlia Chora Estate', p:'50.00€ · 7.00€'},
 {n:'Οίσυμη / Oisymi', d:'Χαρισματικοί Οίνοι Καραμπερίδη / Charismatic Wines Karamperidi', p:'45.00€ · 7.00€'},
 {n:'Γλυκιά Μελωδία / Glykia Melodia', d:'Χαρισματικοί Οίνοι Καραμπερίδη / Charismatic Wines Karamperidi', p:'45.00€ · 7.00€'},
 {n:'Μαλαγουζιά / Malagouzia', d:'Συμεωνίδης / Symeonidis', p:'45.00€ · 7.00€'},
 {h:'Ροζέ | Rosé'},
 {n:'Γλυκιά Μελωδία / Glykia Melodia', d:'Χαρισματικοί Οίνοι Καραμπερίδη / Charismatic Wines Karamperidi', p:'45.00€ · 7.00€'},
 {n:'Variété', d:'Λαλίκος / Lalikos', p:'45.00€ · 7.00€'},
 {h:'Αφρώδεις Οίνοι | Sparkling Wines'},
 {n:'Moscato d’Asti', p:'45.00€ · 6.00€', d:'Ημίγλυκος αφρώδης οίνος, Ιταλία / Semi-sweet sparkling wine, Italy'},
 {h:'Σαμπάνια | Champagne'},
 {n:'Moët & Chandon Blanc', p:'120.00€', d:'Γαλλική σαμπάνια brut / French brut Champagne'},
 {n:'Moët & Chandon Ice', p:'150.00€', d:'Σαμπάνια για σερβίρισμα με πάγο / Champagne made to be served over ice'}
]},
{id:'cocktails', nav:'Κοκτέιλ', t:'ΚΟΚΤΕΙΛ | COCKTAILS', items:[
 {n:'Negroni', p:'10.00€', d:'Gin, Campari, red vermouth'},
 {n:'Margarita', p:'9.00€', d:'Tequila, triple sec, lime'},
 {n:'Strawberry Cooler', p:'10.00€', d:'Vodka, rosé wine, strawberry syrup, lime, grapefruit, soda'},
 {n:'Mojito', p:'9.00€', d:'White rum, sugar syrup, soda, lime, mint'},
 {n:'Daiquiri', p:'10.00€', d:'Rum, triple sec, lime, sugar syrup'},
 {n:'Cosmopolitan', p:'10.00€', d:'Vodka, triple sec, cranberry juice, lime'},
 {n:'Caipirinha', p:'9.00€', d:'Cachaça, lime, brown sugar'},
 {n:'Cuba Libre', p:'10.00€', d:'Havana rum, lime, sugar syrup, Coca-Cola'},
 {n:'Zombie', p:'12.00€', d:'White rum, brown rum, aged rum, Cointreau, brandy, pineapple juice, orange juice, grenadine, fresh lime juice'},
 {n:'Mai Tai', p:'10.00€', d:'White rum, aged rum, orange liqueur, almond syrup, fresh lime juice'},
 {n:'Blue Lagoon', p:'10.00€', d:'Vodka, blue curaçao liqueur, fresh lime juice, Sprite'},
 {n:'Kiwi Cooler', p:'10.00€', d:'Gin, kiwi, green apple, Cointreau, fresh lime juice'},
 {n:'Bramble', p:'10.00€', d:'Gin, lemon juice, simple syrup, blackberry liqueur'},
 {n:'Piña Colada', p:'12.00€', d:'White rum, brown rum, pineapple juice, coconut purée, fresh lime juice, Malibu'},
 {n:'Blue Coconut Margarita', p:'10.00€', d:'Tequila, blue curaçao, lime juice, coconut cream, coconut flakes'},
 {n:'Orange Margarita', p:'10.00€', d:'Tequila blanco, raspberries, orange juice, lime'},
 {n:'Paloma', p:'10.00€', d:'White tequila, Cointreau, grapefruit soda, mint syrup'},
 {n:'Blue Hawaiian', p:'10.00€', d:'Coconut milk, blue curaçao, white rum, pineapple juice'},
 {n:'Wide Strawberry', p:'10.00€', d:'Vodka, lime, almond syrup, strawberry liqueur'},
 {n:'Porn Star', p:'10.00€', d:'Vodka, lime, vanilla syrup, passion fruit'},
 {n:'Sex On The Beach', p:'10.00€', d:'Vodka, fresh orange juice, orange schnapps, grenadine'},
 {n:'Tequila Sunrise', p:'9.00€', d:'Tequila, fresh orange juice, grenadine'}
]},
{id:'premium', nav:'Premium', t:'PREMIUM ΚΟΚΤΕΙΛ | PREMIUM COCKTAILS', items:[
 {n:'Sugarland Summer Freeze', p:'14.00€', d:'Don Papa rum, lime juice, strawberries'},
 {n:'Pink Dream', p:'14.00€', d:'Belvedere vodka, raspberry liqueur, sugar syrup, lemon juice, orange bitters'},
 {n:'Sweet Passion', p:'14.00€', d:'Metaxa 7★, lime juice, Sprite or tonic'},
 {n:'Tropical Spring Punch', p:'14.00€', d:'Empress 1908 gin, pineapple juice, lime juice'},
 {n:'Banana Drama', p:'14.00€', d:'Grey Goose vodka, lemon juice, banana liqueur, blue curaçao'},
 {n:'Blood Moon', p:'14.00€', d:'Empress 1908 gin, Aperol, maraschino liqueur, orange juice'}
]},
{id:'spirits', nav:'Ποτά', t:'ΠΟΤΑ | SPIRITS', items:[
 {n:'Johnnie Walker Red Label', p:'8.00€', d:'Blended Scotch ουίσκι / Blended Scotch whisky'},
 {n:'Haig', p:'8.00€', d:'Blended Scotch ουίσκι / Blended Scotch whisky'},
 {n:'Chivas', p:'10.00€', d:'Premium blended Scotch 12 ετών / 12-year-old premium blended Scotch'},
 {n:'Johnnie Walker Black Label', p:'10.00€', d:'Blended Scotch 12 ετών / 12-year-old blended Scotch'},
 {n:'Absolut', p:'8.00€', d:'Σουηδική βότκα / Swedish vodka'},
 {n:'Grey Goose', p:'12.00€', d:'Γαλλική premium βότκα / French premium vodka'},
 {n:'Gordon’s Gin', p:'8.00€', d:'Κλασικό London dry gin / Classic London dry gin'},
 {n:'Tanqueray', p:'8.00€', d:'London dry gin τετραπλής απόσταξης / Four-times distilled London dry gin'},
 {n:'Bacardi', p:'8.00€', d:'Λευκό ρούμι / White rum'},
 {n:'Martini', p:'8.00€', d:'Bianco, rosso ή extra dry / Bianco, rosso or extra dry'},
 {n:'Jose Cuervo', p:'8.00€', d:'Μεξικάνικη τεκίλα / Mexican tequila'},
 {n:'Ούζο / Ouzo', p:'7.00€', d:'Παραδοσιακό ελληνικό απόσταγμα με γλυκάνισο / Traditional Greek anise spirit'},
 {n:'Gordon’s Space', p:'7.00€', d:'Έτοιμο ποτό με βάση το gin / Gin-based ready-to-drink mix'}
]},
{id:'beer', nav:'Μπύρες', t:'ΜΠΥΡΑ | BEER', items:[
 {n:'Σολ / Sol 330ml', p:'7.00€', d:'Ελαφριά μεξικάνικη lager / Light Mexican lager'},
 {n:'Κορόνα / Corona 330ml', p:'7.00€', d:'Μεξικάνικη lager, σερβίρεται με λάιμ / Mexican lager, served with lime'},
 {n:'Χάινεκεν / Heineken 330ml', p:'5.50€', d:'Ολλανδική premium lager / Dutch premium lager'},
 {n:'Μύθος / Mythos 330ml', p:'5.50€', d:'Ελληνική ξανθιά lager / Greek golden lager'},
 {n:'Άλφα / Alfa 330ml', p:'5.50€', d:'Κλασική ελληνική lager / Classic Greek lager'},
 {n:'Βεργίνα / Vergina 330ml', p:'5.50€', d:'Ελληνική premium lager / Greek premium lager'},
 {n:'Amstel Radler 330ml', p:'5.50€', d:'Μπύρα με φυσικό χυμό λεμονιού / Beer with natural lemon juice'},
 {n:'Stella Artois 330ml', p:'6.00€', d:'Βελγική pilsner / Belgian pilsner'},
 {h:'Βαρέλι | Draft Beer'},
 {n:'Ποτήρι 0.3L / Glass 0.3L', p:'5.00€', d:'Βαρελίσια ξανθιά μπύρα / Draft golden lager'},
 {n:'Ποτήρι 0.4L / Glass 0.4L', p:'6.00€', d:'Βαρελίσια ξανθιά μπύρα / Draft golden lager'}
]},
{id:'energy', nav:'Energy', t:'ENERGY DRINKS', items:[
 {n:'Red Bull', p:'6.00€', d:'Ενεργειακό ποτό / Energy drink'}
]}
];

const LEGAL = [
 'Το κατάστημα είναι υποχρεωμένο να διαθέτει έντυπα διαμαρτυρίας σε ειδική θήκη, δίπλα στην έξοδο / The establishment must keep printed complaint forms in a special box near the exit.',
 'Οι τιμές μας περιλαμβάνουν όλους τους νόμιμους φόρους / Our prices include all legal taxes & fees.',
 'Ο πελάτης δεν είναι υποχρεωμένος να πληρώσει εάν η επιχείρηση δεν παρουσιάσει νόμιμη απόδειξη / The customer is not obligated to pay if the establishment does not provide a legal receipt.',
 'Εάν έχετε οποιαδήποτε τροφική αλλεργία, παρακαλούμε ενημερώστε μας / If you have any food allergies, please let us know beforehand.'
];

const INSPECTOR = 'Αγορανομικός Υπεύθυνος / Market Inspection Manager: Β. Καραθανάσης / V. Karathanasis';
