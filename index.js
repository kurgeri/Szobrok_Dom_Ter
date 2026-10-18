let szobrok = {
  Nyugati: {
    0: "Csanád vezér legyőzi ajtonyt: Esemény", // id: név_adott személyfoglalkozása,a szobor ábrázolása
  },
  Keleti: {0 : "Pollack Mihály: Épitőművész" },
    Deli: { 0: "Schulek Frigyes: Épitőművész" },
};

let nyugati_ki = document.getElementById("nyugati")
let keleti_ki = document.getElementById("keleti")
let deli_ki = document.getElementById("deli")

let meglevo_szobrok = document.getElementById("meglevo_szobrok")
function kiirHozzaad()
{
//Frissités
nyugati_ki.innerHTML = "";
keleti_ki.innerHTML = ""; 
deli_ki.innerHTML = "";
meglevo_szobrok.innerHTML = "";

for(let i = 0 ; i < Object.keys(szobrok.Nyugati).length; i++)
{
nyugati_ki.innerHTML += `<p>${i+1}.   ${szobrok.Nyugati[i]}`
meglevo_szobrok.innerHTML += `<option>${szobrok.Nyugati[i]}</option>`

}
for(let i = 0 ; i < Object.keys(szobrok.Keleti).length; i++)
{
keleti_ki.innerHTML += `<p>${i+1}.    ${szobrok.Keleti[i]}`
meglevo_szobrok.innerHTML += `<option>${szobrok.
  Keleti[i]}</option>`

}
for(let i = 0 ; i < Object.keys(szobrok.Deli).length; i++)
{
deli_ki.innerHTML += `<p>${i+1}.    ${szobrok.Deli[i]}`
meglevo_szobrok.innerHTML += `<option>${szobrok.Deli[i]}</option>`

}
}
kiirHozzaad();

let uj_szobor = document.getElementById("hozzaad")
uj_szobor.addEventListener("click", uj_adat)
function uj_adat()
{
let uj_szobor_bevitel = document.getElementById("ujszobor").value

let irany = document.getElementById("irany").value
switch(irany)
{
 
  case "Nyugati":
    szobrok.Nyugati[String(parseInt(Object.keys(szobrok.Nyugati).length))] = uj_szobor_bevitel;
    break;
  case "Keleti":
    szobrok.Keleti[String(parseInt(Object.keys(szobrok.Keleti).length))] = uj_szobor_bevitel;
    break;
  case "Déli":
  
    szobrok.Deli[String(parseInt(Object.keys(szobrok.Deli).length))] = uj_szobor_bevitel;
    break;
    
    
}
document.getElementById("ujszobor").value = ""


kiirHozzaad();

}

let szobor_modositas = document.getElementById("modositas")
szobor_modositas.addEventListener("click", modositas)

function modositas()
{
  let modositott = document.getElementById("modosit").value
    console.log(meglevo_szobrok.value)
for(let i= 0; i < Object.keys(szobrok.Nyugati).length; i++)
{

if(szobrok.Nyugati[i] == meglevo_szobrok.value)
{
  szobrok.Nyugati[i] = modositott;

}
}
for(let i= 0; i < Object.keys(szobrok.Keleti).length; i++)
{
if(szobrok.Keleti[i] == meglevo_szobrok.value)
{
  szobrok.Keleti[i] = modositott;

}
}
for(let i= 0; i < Object.keys(szobrok.Deli).length; i++)
{
if(szobrok.Deli[i] == meglevo_szobrok.value)
{
  szobrok.Deli[i] = modositott;

}

}
document.getElementById("modosit").value = ""
kiirHozzaad()
}
let szobor_torles = document.getElementById("torles")
szobor_torles.addEventListener("click", torles)
function torles()
{
for(let i= 0; i < Object.keys(szobrok.Nyugati).length; i++)
{

if(szobrok.Nyugati[i] == meglevo_szobrok.value)
{
   delete szobrok.Nyugati[i]

}
}
for(let i= 0; i < Object.keys(szobrok.Keleti).length; i++)
{
if(szobrok.Keleti[i] == meglevo_szobrok.value)
{
 delete  szobrok.Keleti[i]

}
}
for(let i= 0; i < Object.keys(szobrok.Deli).length; i++)
{
if(szobrok.Deli[i] == meglevo_szobrok.value)
{
 delete szobrok.Deli[i]

}

}
kiirHozzaad();
}

