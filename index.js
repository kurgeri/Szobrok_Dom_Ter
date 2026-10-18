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
let hiba_uz = document.getElementById("hiba")
let hiba_uz2 = document.getElementById("hiba2")
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
console.log(szobrok);
}
kiirHozzaad();

let uj_szobor = document.getElementById("hozzaad")
uj_szobor.addEventListener("click", uj_adat)
function uj_adat()
{
let uj_szobor_bevitel = document.getElementById("ujszobor").value
if(ugyanaz_e(uj_szobor_bevitel) == true)
{
hiba_uz.innerHTML = "HIBA! Nem lehet két egyforma szobor"
}
else if(ures_e(uj_szobor_bevitel) == true)
{
  hiba_uz.innerHTML = "HIBA! Nem lehet üres elem"
}
else{
hiba_uz.innerHTML = "";
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

}
function ugyanaz_e(adat)
{
  let ugyanaz = false;
for(let i = 0 ; i < Object.keys(szobrok.Nyugati).length; i++)
{
if(adat == szobrok.Nyugati[i])
{
  ugyanaz = true;
}
}
for(let i = 0 ; i < Object.keys(szobrok.Keleti).length; i++)
{
if(adat == szobrok.Keleti[i])
{
 ugyanaz = true;
}
}
for(let i = 0 ; i < Object.keys(szobrok.Deli).length; i++)
{
if(adat == szobrok.Deli[i])
{
ugyanaz = true;
}

}
return ugyanaz;
}

function ures_e(adat)
{
  if(adat == "")
  {
    return true
  }
  else{
    return false;
  }
}

let szobor_modositas = document.getElementById("modositas")
szobor_modositas.addEventListener("click", modositas)

function modositas()
{
  let modositott = document.getElementById("modosit").value
  if(ugyanaz_e(modositott) == true)
{
hiba_uz2.innerHTML = "HIBA! Nem lehet két egyforma szobor"
}
else if(ures_e(modositott) == true)
{
  hiba_uz2.innerHTML = "HIBA! Nem lehet üres elem"
}
else{
  hiba_uz.innerHTML = "";
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
}
function ujraIndexel(object) {
  let elemek = Object.values(object);
  let ujObject = {};
  for (let i = 0; i < elemek.length; i++) {
    ujObject[i] = elemek[i]; 
  }
  console.log(elemek)
  return ujObject;
}
let szobor_torles = document.getElementById("torles")
szobor_torles.addEventListener("click", torles)
function torles()
{
for(let i= 0; i <= Object.keys(szobrok.Nyugati).length; i++)
{

if(szobrok.Nyugati[i] == meglevo_szobrok.value )
{
   delete szobrok.Nyugati[i]

}
}
szobrok.Nyugati = ujraIndexel(szobrok.Nyugati);
for(let i= 0; i <= Object.keys(szobrok.Keleti).length; i++)
{
if(szobrok.Keleti[i] == meglevo_szobrok.value)
{
 delete  szobrok.Keleti[i]

}
}
szobrok.Keleti = ujraIndexel(szobrok.Keleti);
for(let i= 0; i <= Object.keys(szobrok.Deli).length; i++)
{
if(szobrok.Deli[i] == meglevo_szobrok.value)
{
 delete szobrok.Deli[i]

}

}
szobrok.Deli = ujraIndexel(szobrok.Deli);
kiirHozzaad();
}

