let szobrok = {
  Nyugati: {
    0: "Csanád vezér legyőzi ajtonyt: Esemény", // id:  név_adott személyfoglalkozása,a szobor ábrázolása
  },
  Keleti: {0 : "Pollack Mihály: Épitőművész" },
    Deli: { 0: "Schulek Frigyes: Épitőművész" },
};

let nyugati_ki = document.getElementById("nyugati")
let keleti_ki = document.getElementById("keleti")
let deli_ki = document.getElementById("deli")

for(let i = 0 ; i < Object.keys(szobrok.Nyugati).length; i++)
{
nyugati_ki.innerHTML += `<p>${szobrok.Nyugati[i]}`
}
for(let i = 0 ; i < Object.keys(szobrok.Keleti).length; i++)
{
keleti_ki.innerHTML += `<p>${szobrok.Keleti[i]}`
}
for(let i = 0 ; i < Object.keys(szobrok.Deli).length; i++)
{
deli_ki.innerHTML += `<p>${szobrok.Deli[i]}`
}



