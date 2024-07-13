import { chair2, chair3, star, heart, chair4, chair5, table2, table3, table1, sofa2, sofa3, sofa4, steak1, bathroom, office, resto, resto1, office1, livingroom5, livingroom4, HAYpic, kettalpic, HAYlogo, kettallogo, elitislogo, lladrologo, poliformpic, elitispic, lladropic, poliformlogo, armchairpic, bedpic, chairpic, decorpic, lightingpic, sofapic, storagepic, tablepic, textilepic, toyspic } from "../public/image";
const items = [
    { src: chair2, name: "curve", type: "chairs", price: "320.00 TND", rating: 4.5 },
    { src: sofa2, name: "Can", type: "Sofas", price: "2,100.00 TND" },
    { src: chair3, name: "Belt", type: "Armchairs", price: "680.00 TND" },
    { src: table1, name: "Giro LR", type: "Tables", price: "449.00 TND", rating: 4.5 },
    { src: chair4, name: "Soft Edge", type: "Chairs", price: "440.00 TND" },
    { src: sofa3, name: "Palissade", type: "Sofas", price: "1,890.00 TND", rating: 4.5 },
    { src: table2, name: "Bitta", type: "Tables", price: "1,367.10 TND", oldPrice: "1,519.00 TND" },
    { src: chair5, name: "Albert", type: "Armchairs", price: "1,600.00 TND" },
    { src: sofa4, name: "Navana", type: "Sofas", price: "1,669.00 TND", oldPrice: "1,850.00 TND" },
    { src: table3, name: "Aruda", type: "Tables", price: "699.00 TND", rating: 4.5 }
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
    {src: tablepic, name:"tables"},
    {src: sofapic, name:"Sofas"},
    {src: armchairpic, name:"Armchairs"},
    {src: bedpic, name:"beds"},
    {src: storagepic, name:"storages"},
    {src: textilepic, name:"textiles"},
    {src: lightingpic, name:"lighting"},
    {src: toyspic, name:"toys"},
    {src: decorpic, name:"decor"},


]
 export {items,itemsblog,itemsarticle,brands,categories,} 