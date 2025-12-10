import { Product } from './types';

export const CA = "G1R86UMivoFhjwTwgqMpsZyH7925GHUSdXSgCA8Vpump";
export const X_COMMUNITY = "https://x.com/i/communities/1998766270024744971";
export const PUMP_FUN_LINK = `https://pump.fun/${CA}`;

export const MOCK_COUCHES: Product[] = [
  {
    id: 'ebay-1',
    title: 'Restoration Hardware Maxwell Leather Sofa - Italian Brompton Cocoa',
    price: 15.5,
    currency: 'SOL',
    location: 'Beverly Hills, CA',
    image: 'https://pbs.twimg.com/media/G70V8LpakAAmxnj?format=jpg&name=240x240',
    description: 'Authentic RH Maxwell sofa in Italian Brompton Cocoa leather. Deep seated classic. 8 feet long. Original price was over $4k. Has some scratches from normal use which adds to the patina. Pick up only, bring a truck.',
    seller: 'LuxuryResale',
    isSponsored: true,
    timeAgo: '2 hours ago',
    condition: 'Used - Good'
  },
  {
    id: 'ebay-2',
    title: 'Free Curb Alert: Heavily Used Loveseat',
    price: 0,
    currency: 'FREE',
    location: 'Henderson, NV',
    image: 'https://pbs.twimg.com/media/G70U_FhXEAAmiv7?format=jpg&name=240x240',
    description: 'Putting this out on the curb. First come first serve. Has a distinct smell and several stains. Structure is surprisingly intact. Great for a garage or frat house. Do not knock, just take it.',
    seller: 'GarageCleaner',
    isCommunity: true,
    timeAgo: '15 mins ago',
    condition: 'For Parts/Not Working'
  },
  {
    id: 'ebay-3',
    title: 'IKEA KIVIK Sectional 4-Seat - Hillared Anthracite',
    price: 25000,
    currency: '$COUCH',
    location: 'Austin, TX',
    image: 'https://pbs.twimg.com/media/G70UHCVWgAA_m8Z?format=jpg&name=360x360',
    description: 'Selling my IKEA Kivik. Covers are removable and washable. Super comfortable memory foam cushions. Just upgraded to a Lovesac. Minor fading on the left armrest from sunlight.',
    seller: 'TechBro_ATX',
    timeAgo: '1 day ago',
    condition: 'Used - Very Good'
  },
  {
    id: 'ebay-4',
    title: 'Vintage Faux Leather Recliner - Black',
    price: 0.8,
    currency: 'SOL',
    location: 'Chicago, IL',
    image: 'https://pbs.twimg.com/media/G70OvnhXsAAZo5q?format=png&name=240x240',
    description: '70s style vintage recliner. The mechanism still works perfectly. The "leather" is peeling in some spots (see photos). Very comfortable for gaming or napping. Cash or SOL only.',
    seller: 'VintageFinds',
    timeAgo: '4 hours ago',
    condition: 'Used - Fair'
  },
  {
    id: 'ebay-5',
    title: 'West Elm Harmony Sofa - Distressed Velvet',
    price: 12000,
    currency: '$COUCH',
    location: 'Brooklyn, NY',
    image: 'https://pbs.twimg.com/media/G70OYdPaMAM2bC2?format=jpg&name=360x360',
    description: 'West Elm Harmony sofa in Golden Oak distressed velvet. Extra deep seats. Down-filled cushions. Looks amazing in a mid-century modern living room. Pet free, smoke free home.',
    seller: 'HipsterHome',
    timeAgo: '3 days ago',
    condition: 'Used - Like New'
  },
  {
    id: 'ebay-6',
    title: 'Custom Upholstered Floral Sofa - Grandmother Style',
    price: 2.5,
    currency: 'SOL',
    location: 'Palm Beach, FL',
    image: 'https://pbs.twimg.com/media/G70Nttxa0AALj4M?format=jpg&name=360x360',
    description: 'Heavy duty vintage sofa with original floral upholstery. Solid wood frame. They don\'t make them like this anymore. Pristine condition, plastic covers were just removed.',
    seller: 'EstateSalesUser',
    timeAgo: '5 hours ago',
    condition: 'Used - Excellent'
  },
  {
    id: 'ebay-7',
    title: 'Modern Office Bench / Waiting Room Sofa',
    price: 150,
    currency: 'USDC',
    location: 'San Francisco, CA',
    image: 'https://pbs.twimg.com/media/G70NmQiaMAESchd?format=jpg&name=360x360',
    description: 'Commercial grade blue fabric bench. Came from a startup office that closed down. Very firm seating. Steel legs. Minimalist design.',
    seller: 'OfficeLiquidator',
    timeAgo: '1 week ago',
    condition: 'Open Box'
  },
  {
    id: 'ebay-8',
    title: 'Beige Sectional - Slightly Stained',
    price: 4.20,
    currency: 'SOL',
    location: 'Miami, FL',
    image: 'https://i.ebayimg.com/images/g/QFoAAeSw-XVoqfKL/s-l500.webp',
    description: 'Comfy sectional, good for napping. Has a few coffee stains that might come out. Selling because I am moving to Puerto Rico for tax reasons.',
    seller: 'CryptoChad',
    timeAgo: '1 day ago',
    condition: 'Used - Fair'
  },
  {
    id: 'ebay-9',
    title: 'Brown Faux Leather Sleeper',
    price: 6900,
    currency: '$COUCH',
    location: 'Denver, CO',
    image: 'https://i.ebayimg.com/images/g/86MAAeSwIjBoIyuf/s-l500.webp',
    description: 'Great sleeper sofa for guests you don\'t want staying too long. The faux leather is peeling a bit but it adds character. heavy duty frame.',
    seller: 'MountainMan',
    timeAgo: '3 hours ago',
    condition: 'Used - Good'
  },
  {
    id: 'ebay-10',
    title: 'Grey L-Shape Modern Sofa',
    price: 12,
    currency: 'SOL',
    location: 'Seattle, WA',
    image: 'https://i.ebayimg.com/images/g/Pr4AAeSw~GdpKxY~/s-l500.webp',
    description: 'Modern grey sectional. Fits perfectly in a high-rise apartment. Very firm cushions. Only selling because I bought a bigger one with memecoin profits.',
    seller: 'TechWhale',
    timeAgo: '5 hours ago',
    condition: 'Used - Like New'
  },
  {
    id: 'ebay-11',
    title: 'Comfy Blue Fabric 3-Seater',
    price: 150,
    currency: 'USDC',
    location: 'Atlanta, GA',
    image: 'https://i.ebayimg.com/images/g/qtkAAeSwA0BpAhHe/s-l500.webp',
    description: 'Solid blue couch. No tears, just standard wear. Good for a family room or gaming setup. Must pick up, I cannot deliver.',
    seller: 'PeachState',
    timeAgo: '2 days ago',
    condition: 'Used - Good'
  },
  {
    id: 'ebay-12',
    title: 'Reclining Loveseat - Grandma approved',
    price: 33000,
    currency: '$COUCH',
    location: 'Phoenix, AZ',
    image: 'https://i.ebayimg.com/images/g/K7UAAeSwfcBo55cl/s-l500.webp',
    description: 'Super plush recliner. Mechanisms work great. Fall asleep in seconds. The color is... unique. Very durable fabric.',
    seller: 'RetireeResale',
    timeAgo: '6 hours ago',
    condition: 'Used - Very Good'
  },
  {
    id: 'ebay-13',
    title: 'Classic Chesterfield - Worn Look',
    price: 5,
    currency: 'SOL',
    location: 'Boston, MA',
    image: 'https://i.ebayimg.com/images/g/QQ8AAeSwagNpFh~j/s-l500.webp',
    description: 'Classic style. Has some wear and tear but structurally sound. Gives a very scholarly vibe to your living room. Heavy.',
    seller: 'OldMoney',
    timeAgo: '12 hours ago',
    condition: 'Used - Fair'
  }
];