// blue — the beach bar · menu data (GR/EN)
// Mirrors menu-data.js from the Claude Design project; loaded as a classic
// script so the page also works when opened directly from disk (file://).
// Item fields: n = name, p = price, d = description, h = subheading row.

const MIN_NOTE = 'ΕΛΑΧΙΣΤΗ ΚΑΤΑΝΑΛΩΣΗ ΑΝΑ ΑΤΟΜΟ 5.00€ · MINIMUM CONSUMPTION PER PERSON 5.00€';

const SECTIONS = [
{id:'rofimata', nav:'Ροφήματα', t:'ΡΟΦΗΜΑΤΑ | BEVERAGES', items:[
 {n:'Νες Καφέ / Nescafé', p:'5.00€'},
 {n:'Νες Καφέ Φραπέ / Nescafé Frappé', p:'5.00€'},
 {n:'Ελληνικός Καφές / Greek Coffee', p:'4.00€'},
 {n:'Φίλτρου (Γαλλικός) / Filter Coffee', p:'4.50€'},
 {n:'Εσπρέσο / Espresso', p:'4.00€'},
 {n:'Φρέντο Εσπρέσο / Freddo Espresso', p:'5.00€'},
 {n:'Καπουτσίνο / Cappuccino', p:'5.00€'},
 {n:'Φρέντο Καπουτσίνο / Freddo Cappuccino', p:'5.50€'},
 {n:'Σοκολάτα / Chocolate', p:'5.50€'},
 {n:'Κρύο Τσάι / Ice Tea 330ml', p:'5.00€'},
 {n:'Κρύο Τσάι / Ice Tea 500ml', p:'6.00€'}
]},
{id:'fresh', nav:'Φρέσκοι Χυμοί', t:'ΦΥΣΙΚΟΙ ΧΥΜΟΙ | FRESH JUICES', note:'Ποτήρι / Glass', items:[
 {n:'Πορτοκάλι / Orange', p:'6.00€'},
 {n:'Λεμόνι / Lemon', p:'5.00€'},
 {n:'Ροδάκινο / Peach', p:'6.00€'},
 {n:'Κοκτέιλ / Cocktail', p:'6.50€'}
]},
{id:'juices', nav:'Χυμοί', t:'ΧΥΜΟΙ | JUICES', note:'Κουτί / Juice Box 330ml', items:[
 {n:'Πορτοκάλι / Orange', p:'5.00€'},
 {n:'Μπανάνα / Banana', p:'5.00€'},
 {n:'Ροδάκινο / Peach 250ml', p:'5.00€'},
 {n:'Μόσιον / Motion', p:'5.00€'},
 {n:'Βύσσινο / Sour Cherry 250ml', p:'4.00€'}
]},
{id:'soft', nav:'Αναψυκτικά', t:'ΑΝΑΨΥΚΤΙΚΑ | REFRESHMENTS', note:'Κουτί / Can 330ml', items:[
 {n:'Κόκα Κόλα / Coca-Cola', p:'5.00€'},
 {n:'Πορτοκαλάδα / Orangeade', p:'5.00€'},
 {n:'Λεμονάδα / Lemonade', p:'5.00€'},
 {n:'Σπράιτ / Sprite', p:'5.00€'},
 {n:'Σόδα / Soda', p:'5.00€'},
 {n:'Μεταλλικό Νερό / Mineral Water 0.5L', p:'1.00€'},
 {n:'Μεταλλικό Νερό / Mineral Water 1.5L', p:'2.00€'}
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
 {n:'Πατάτες Τηγανητές Μερίδα / French Fries Portion', p:'4.00€'},
 {n:'Γιαούρτι Με Φρούτα, Μέλι & Ξηρούς Καρπούς / Yogurt With Fruits, Honey & Nuts', p:'6.50€'},
 {n:'Φρουτοσαλάτα / Fruit Salad', p:'7.00€'},
 {n:'Φρουτοσαλάτα Μεγάλη / Fruit Salad Large', p:'10.00€'},
 {n:'Τοστ Διάφορα* / Toasted Sandwich*', p:'4.00€'},
 {n:'Κρύα Σάντουιτς* / Cold Sandwich*', p:'4.00€'},
 {n:'Χοτ Ντογκ / Hot Dog', p:'4.00€'}
]},
{id:'icecream', nav:'Παγωτά', t:'ΠΑΓΩΤΑ | ICE CREAM', items:[
 {n:'Γρανίτα / Granita', p:'5.00€'},
 {n:'Μιλκ Σέικ / Milkshake', p:'7.00€'},
 {n:'Κύπελο / Paper Cup', p:'2.50€'},
 {n:'Χωνάκι 1 Μπάλα / Cone 1 Ball', p:'2.50€'}
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
 {n:'Moscato d’Asti', p:'45.00€ · 6.00€'},
 {h:'Σαμπάνια | Champagne'},
 {n:'Moët & Chandon Blanc', p:'120.00€'},
 {n:'Moët & Chandon Ice', p:'150.00€'}
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
 {n:'Johnnie Walker Red Label', p:'8.00€'},
 {n:'Haig', p:'8.00€'},
 {n:'Chivas', p:'10.00€'},
 {n:'Johnnie Walker Black Label', p:'10.00€'},
 {n:'Absolut', p:'8.00€'},
 {n:'Grey Goose', p:'12.00€'},
 {n:'Gordon’s Gin', p:'8.00€'},
 {n:'Tanqueray', p:'8.00€'},
 {n:'Bacardi', p:'8.00€'},
 {n:'Martini', p:'8.00€'},
 {n:'Jose Cuervo', p:'8.00€'},
 {n:'Ούζο / Ouzo', p:'7.00€'},
 {n:'Gordon’s Space', p:'7.00€'}
]},
{id:'beer', nav:'Μπύρες', t:'ΜΠΥΡΑ | BEER', items:[
 {n:'Σολ / Sol 330ml', p:'7.00€'},
 {n:'Κορόνα / Corona 330ml', p:'7.00€'},
 {n:'Χάινεκεν / Heineken 330ml', p:'5.50€'},
 {n:'Μύθος / Mythos 330ml', p:'5.50€'},
 {n:'Άλφα / Alfa 330ml', p:'5.50€'},
 {n:'Βεργίνα / Vergina 330ml', p:'5.50€'},
 {n:'Amstel Radler 330ml', p:'5.50€'},
 {n:'Stella Artois 330ml', p:'6.00€'},
 {h:'Βαρέλι | Draft Beer'},
 {n:'Ποτήρι 0.3L / Glass 0.3L', p:'5.00€'},
 {n:'Ποτήρι 0.4L / Glass 0.4L', p:'6.00€'}
]},
{id:'energy', nav:'Energy', t:'ENERGY DRINKS', items:[
 {n:'Red Bull', p:'6.00€'}
]}
];

const LEGAL = [
 'Το κατάστημα είναι υποχρεωμένο να διαθέτει έντυπα διαμαρτυρίας σε ειδική θήκη, δίπλα στην έξοδο / The establishment must keep printed complaint forms in a special box near the exit.',
 'Οι τιμές μας περιλαμβάνουν όλους τους νόμιμους φόρους / Our prices include all legal taxes & fees.',
 'Ο πελάτης δεν είναι υποχρεωμένος να πληρώσει εάν η επιχείρηση δεν παρουσιάσει νόμιμη απόδειξη / The customer is not obligated to pay if the establishment does not provide a legal receipt.',
 'Εάν έχετε οποιαδήποτε τροφική αλλεργία, παρακαλούμε ενημερώστε μας / If you have any food allergies, please let us know beforehand.'
];

const INSPECTOR = 'Αγορανομικός Υπεύθυνος / Market Inspection Manager: Β. Καραθανάσης / V. Karathanasis';
