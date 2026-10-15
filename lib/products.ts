export type ProductCategory = {
  slug: string
  name: string
  group: 'Eco paper' | 'Compostable' | 'Containers' | 'Hotel & more'
  tag: string
  description: string
  image?: string
  items: string[]
}

export const productGroups = ['All', 'Eco paper', 'Compostable', 'Containers', 'Hotel & more'] as const

export const productCategories: ProductCategory[] = [
  {
    slug: 'brown-kraft-paper',
    name: 'Brown Kraft Paper',
    group: 'Eco paper',
    tag: 'Recyclable',
    description: 'Natural-look packaging that suits cafés, bowls and grab-and-go menus.',
    image: '/images/kraft.png',
    items: ['Lunch boxes', 'Salad & soup bowls', 'Paper bags', 'Burger boxes', 'Food trays', 'Hot cups'],
  },
  {
    slug: 'white-paper',
    name: 'White Paper',
    group: 'Eco paper',
    tag: 'Food grade',
    description: 'Clean, bright packaging that lets your logo and food stand out.',
    image: '/images/white-paper.png',
    items: ['Hot & cold cups', 'Paper bowls', 'Takeaway boxes', 'Cup lids', 'Napkins', 'Straws'],
  },
  {
    slug: 'bagasse',
    name: 'Bagasse',
    group: 'Compostable',
    tag: 'Biodegradable',
    description: 'Sturdy sugarcane-fibre containers that handle hot, oily and wet food.',
    image: '/images/bagasse.png',
    items: ['Clamshell boxes', 'Compartment trays', 'Plates', 'Bowls', 'Cup lids'],
  },
  {
    slug: 'corn-starch',
    name: 'Corn Starch',
    group: 'Compostable',
    tag: 'Eco friendly',
    description: 'Plant-based cutlery and lidded boxes, a direct swap for plastic.',
    image: '/images/cornstarch.png',
    items: ['Spoons, forks & knives', 'Cutlery sets', 'Lidded food boxes', 'Sauce cups'],
  },
  {
    slug: 'cassava',
    name: 'Cassava Packaging',
    group: 'Compostable',
    tag: 'Plant based',
    description: 'Bags made from cassava starch that break down naturally.',
    image: '/images/cassava.png',
    items: ['Shopping bags', 'Garbage bags', 'Laundry bags'],
  },
  {
    slug: 'aluminium',
    name: 'Aluminium Containers',
    group: 'Containers',
    tag: 'Recyclable',
    description: 'Oven-safe trays for catering, baking and hot meal delivery.',
    image: '/images/aluminium.png',
    items: ['Foil trays with lids', 'Round containers', 'Baking pans', 'Aluminium foil rolls'],
  },
  {
    slug: 'plastic',
    name: 'Plastic Packaging',
    group: 'Containers',
    tag: 'Food grade',
    description: 'Clear, leak-proof options for drinks, sauces and chilled food.',
    image: '/images/plastic.png',
    items: ['Cups & dome lids', 'Thinwall containers', 'Sauce cups', 'Cling wrap', 'Plastic bags'],
  },
  {
    slug: 'oxium',
    name: 'Oxium Packaging',
    group: 'Containers',
    tag: 'Oxo-degradable',
    description: 'Degradable plastic bags for retail and takeaway counters.',
    image: '/images/oxium.png',
    items: ['Takeaway bags', 'Shopping bags', 'Food bags'],
  },
  {
    slug: 'bakery',
    name: 'Bakery Packaging',
    group: 'Hotel & more',
    tag: 'Food grade',
    description: 'Boxes, bags and liners for cakes, breads and pastries.',
    image: '/images/bakery.png',
    items: ['Cake boxes', 'Pastry bags', 'Cupcake liners', 'Cake boards', 'Bread bags'],
  },
  {
    slug: 'candles',
    name: 'Candles',
    group: 'Hotel & more',
    tag: 'Hotel supply',
    description: 'Pillar candles and tea lights for hotels, villas and events.',
    image: '/images/candles.png',
    items: ['Tea lights', 'Pillar candles', 'Floating candles', 'Chafing fuel'],
  },
  {
    slug: 'protective-equipment',
    name: 'Protective Equipment',
    group: 'Hotel & more',
    tag: 'Hygiene',
    description: 'Everyday hygiene essentials for kitchens and service staff.',
    image: '/images/protective.png',
    items: ['Gloves', 'Face masks', 'Hair nets', 'Aprons'],
  },
]
