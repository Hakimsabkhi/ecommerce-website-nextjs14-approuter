import {tableamanger,cuisine,salon,chambreparent,chambreenfant, chair2,marvin,dianne,kristin,facebook,X,instagram,linkedin, chair3,giftcard1,giftcard2, star, heart, chair4, chair5, table2, table3, table1, sofa2, sofa3, sofa4, steak1, bathroom, office, resto, resto1, office1, livingroom5, livingroom4, HAYpic, kettalpic, HAYlogo, kettallogo, elitislogo, lladrologo, poliformpic, elitispic, lladropic, poliformlogo, armchairpic, bedpic, chairpic, decorpic, lightingpic, sofapic, storagepic, tablepic, textilepic, toyspic, bedroom1, bedroom2, coffe, food1, food2, kitchen, livingroom1, livingroom2, mags, skygarden,frames, chair10, chair11, chair12, chair13, chair14, chair15, chair16, chair6, chair7, chair8, chair9, chair17,  } from "../public/image";

const items = [
    { src: chair2, name: "curve", type: "chairs", price: "320.00 TND", rating: 4.5 },
    { src: sofa2, name: "Can", type: "Sofas", price: "2,100.00 TND", rating: 4.5 },
    { src: chair3, name: "Belt", type: "Armchairs", price: "680.00 TND", rating: 4.5 },
    { src: table1, name: "Giro LR", type: "Tables", price: "449.00 TND", rating: 4.5 },
    { src: chair4, name: "Soft Edge", type: "Chairs", price: "440.00 TND", rating: 4.5 },
    { src: sofa3, name: "Palissade", type: "Sofas", price: "1,890.00 TND", rating: 4.5 },
    { src: table2, name: "Bitta", type: "Tables", price: "1,367.10 TND", oldPrice: "1,519.00 TND", rating: 4.5 },
    { src: chair5, name: "Albert", type: "Armchairs", price: "1,600.00 TND", rating: 4.5 },
    { src: sofa4, name: "Navana", type: "Sofas", price: "1,669.00 TND", oldPrice: "1,850.00 TND" , rating: 4.5},
    { src: table3, name: "Aruda", type: "Tables", price: "699.00 TND", rating: 4.5 }
];
const itemsFilter = [
    { src: chair6, name: "Revolt", type: "chairs", price: "275.00 TND", rating: 5 },
    { src: chair7, name: "Avana", type: "Chairs", price: "458.00 TND", oldPrice: "538.00 TND", rating: 5 },
    { src: chair8, name: "Sophie", type: "chairs", price: "520.00 TND", rating: 5 },
    { src: chair9, name: "Curve", type: "chairs", price: "320.00 TND", rating: 4.5 },
    { src: chair10, name: "Curve", type: "Chairs", price: "320.00 TND" , rating: 5},
    { src: chair11, name: "16 side", type: "chairs", price: "295.00 TND", rating: 5 },
    { src: chair12, name: "12 side", type: "chairs", price: "339.00 TND", oldPrice: "375.00 TND", rating: 5 },
    { src: chair13, name: "Soft Edge", type: "chairs", price: "440.00 TND" , rating: 5},
    { src: chair14, name: "Result", type: "chairs", price: "279.00 TND", oldPrice: "310.00 TND", rating: 5 },
    { src: chair15, name: "Frames Upholstered", type: "chairs", price: "399.00 TND", rating: 5 },
    { src: chair16, name: "Hal Wood", type: "chairs", price: "625.00 TND", rating: 5 },
    { src: chair17, name: "Fauteuil Direction", type: "chairs", price: "372.00 TND", rating: 5 }
];
const itemsblog =[
    {src: steak1, date:"Decoration / 26 May 2023", title: "In the heart of Valencia", text: "As an alternative theory, (and because latin scholars do this sort of thing) someone tracked down a ..." },
    {src: bathroom, date:"Furniture / 09 May 2023", title: "Ethimo mountain style", text: "So how did the classical latin become so incohere,t? According to McClintock, a 15th century typeset.." },
    {src: office, date:"Wooden accessories / 30 Apr 2023", title: "For clear thinking", text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-tr..." },
    {src: resto, date:"Furniture / 28 Mar 2023", titlexl: "Expands furniture resources", text: "As an alternative theory, (and because latin scholars do this sort of thing) someone tracked down a ..." },
    {src: resto1, date:"design trends / 18 Apr 2023", title: "The clean series", text: "So when is it okey to use lorem ipsum? first, lorem ipsum works well for staging. It's like the prop..." },
    {src: office1, date:"Inspiration / 26 May 2023", title: "here comes autumn", text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-tr..." },
    {src: livingroom4, date:"Decoration / 03 Apr 2023", title: "luxury bed now available", text: "As an alternative theory, (and because latin scholars do this sort of thing) someone tracked down a ..." },
    {src: livingroom5, date:"Furniture / 28 Mar 2023", titlexl: "Expands furniture resources", text: "So how did the classical latin become so incohere,t? According to McClintock, a 15th century typeset.." }
];
const itemsFurniture = [
    { src: mags, name: "Mags", type: "Sofas", price: "3,620.00 TND",rating:"4,5"  },
    { src: skygarden, name: "Skygarden", type: "Lighting", price: "780.00 TND",rating:"4,5" },
    { src: frames, name: "Frames Upholstered", type: "Chairs", price: "399.00 TND",rating:"4,5" },
];    
const itemsarticle = [
    { src: steak1, date: "Decoration / 26 May 2023", title: "In the heart of Valencia", text: "As an alternative theory, (and because latin scholars do this sort of thing) someone tracked down a ..." },
    { src: bathroom, date: "Furniture / 09 May 2023", title: "Ethimo mountain style", text: "So how did the classical latin become so incohere,t? According to McClintock, a 15th century typeset.." },
    { src: office, date: "Wooden accessories / 30 Apr 2023", title: "For clear thinking", text: "The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-tr..." },
    { src: resto, date: "Furniture / 28 Mar 2023", title: "Flowing serpentines ", text: "As an alternative theory, (and because latin scholars do this sort of thing) someone tracked down a ..." },

];
const brands = [
    { src: HAYpic, logo: HAYlogo, name: "Hay", place: "Barcelona / Spain" },
    { src: kettalpic, logo: kettallogo, name: "Kettal", place: "Barcelona / Spain" },
    { src: elitispic, logo: elitislogo, name: "Elitis", place: "Tolosa / france" },
    { src: lladropic, logo: lladrologo, name: "llardo", place: "Valencia / Spain" },
    { src: poliformpic, logo: poliformlogo, name: "Poliform", place: "Como / Italy" }
];
const categories = [
    {src: chairpic, name:"Chairs"},
    {src: tablepic, name:"Tables"},
    {src: sofapic, name:"Sofas"},
    {src: armchairpic, name:"Armchairs"},
    {src: bedpic, name:"Beds"},
    {src: storagepic, name:"Storages"},
    {src: textilepic, name:"Textiles"},
    {src: lightingpic, name:"Lighting"},
    {src: toyspic, name:"Toys"},
    {src: decorpic, name:"Decor"},


];
const productCollection = [
    {titre:"GLADOM",description:"The new common language will be more simple and regular than the existing languages."},
    {titre:"HALLAN",description:"The new common language will be more simple and regular than the existing languages."},
];
const collection = [
    {src:tableamanger,name:"TABLES A MANGER"},
    {src:cuisine,name:"CUISINE"},
    {src:chambreparent,name:"CHAMBRE A COUCHER PARENT"},
    {src:chambreenfant,name:"CHAMBRE A COUCHER ENFANT"},
    {src:salon,name:"SALON"},
]
const cards = [
    {src:giftcard1 ,name:"e-Gift cards",text1:"Purshase online and the e-Gift Card is sent straight to their inbox!",text2:"Purshase e-Gift cards up to 1 000 TND in valure"},
    {src:giftcard2 ,name:"Gift cards",text1:"Purshase in-store and it's ready fro gifting! Just pick the valure of the card",text2:"Purshase e-Gift cards up to 500 TND in valure"}
];
const members = [
    {src:marvin, name:"Marvin mcKinney", title:"CEO,co-founde", facebook:facebook, X:X,linkedin:linkedin, },
    {src:dianne, name:"Dianne Russel", title:"CEO,co-founde", facebook:facebook, X:X,linkedin:linkedin, instagram:instagram},
    {src:kristin, name:"Kristin Watsony", title:"CEO,co-founde", facebook:facebook, X:X,linkedin:linkedin, },
]
const noHeaderFooterUrls = ['/signin'];
 export {items,itemsblog,collection,itemsarticle,noHeaderFooterUrls,itemsFilter,brands,categories,productCollection,cards,itemsFurniture,members} 