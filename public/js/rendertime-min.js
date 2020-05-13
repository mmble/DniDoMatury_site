"use strict";import cd from"./countdown-min.js";let fED={2020:new Date("8 June 2020 9:00 GMT+02:00"),2021:new Date("4 May 2021 9:00 GMT+02:00"),2022:new Date("4 May 2022 9:00 GMT+02:00"),2023:new Date("4 May 2023 9:00 GMT+02:00"),2024:new Date("4 May 2024 9:00 GMT+02:00")};const wFs=[{3:"miesiąc",2:"dzień",1:"godzina",0:"minuta",4:"sekunda"},{3:"miesiące",2:"dni",1:"godziny",0:"minuty",4:"sekundy"},{3:"miesięcy",2:"dni",1:"godzin",0:"minut",4:"sekund"}],zFs=[{0:"został"},{0:"zostały"},{0:"zostało"}];let uURL=(e,t)=>{2!==e&&2020!==t?(history.pushState({},"",`/${wFs[1][e]}/${t}`),document.querySelector("link[rel=amphtml]").href=`/amp/${wFs[1][e]}/${t}`):2!==e?(history.pushState({},"","/"+wFs[1][e]),document.querySelector("link[rel=amphtml]").href="/amp/"+wFs[1][e]):2020!==t?(history.pushState({},"","/"+t),document.querySelector("link[rel=amphtml]").href="/amp/"+t):(history.pushState({},"","/"),document.querySelector("link[rel=amphtml]").href="/amp/")},cUs=(e,t,s)=>{s.preventDefault(),unit=t,document.querySelector(".checked").classList.remove("checked"),e.classList.add("checked"),document.title=`Ile zostało ${wFs[2][t]} do matury ${selYear}? - DniDoMatury.pl`,uURL(t,selYear),gTV(t,gUs(t)),sT()},cY=(e,t)=>{selYear=e,document.title=`Ile zostało ${wFs[2][t]} do matury ${selYear}? - DniDoMatury.pl`,uURL(t,selYear),sT();let s=2020===e?" 8 czerwca":" 4 maja",c=2020===e?" 29 czerwca":" 22 maja";document.querySelector("body > main > article > h2:nth-child(1) > b:nth-child(1)").innerHTML=s,document.querySelector("body > main > article > h2:nth-child(1) > b:nth-child(2)").innerHTML=c,2020===selYear?(document.querySelectorAll("body > header > nav > a")[0].href="/miesiące",document.querySelectorAll("body > header > nav > a")[1].href="/",document.querySelectorAll("body > header > nav > a")[2].href="/godziny",document.querySelectorAll("body > header > nav > a")[3].href="/minuty"):(document.querySelectorAll("body > header > nav > a")[0].href="/miesiące/"+selYear,document.querySelectorAll("body > header > nav > a")[1].href="/"+selYear,document.querySelectorAll("body > header > nav > a")[2].href="/godziny/"+selYear,document.querySelectorAll("body > header > nav > a")[3].href="/minuty/"+selYear)};document.querySelector("#months").addEventListener("click",e=>cUs(document.querySelector("#months"),3,e)),document.querySelector("#days").addEventListener("click",e=>cUs(document.querySelector("#days"),2,e)),document.querySelector("#hours").addEventListener("click",e=>cUs(document.querySelector("#hours"),1,e)),document.querySelector("#minutes").addEventListener("click",e=>cUs(document.querySelector("#minutes"),0,e)),document.getElementById("year-select").addEventListener("change",()=>cY(parseInt(document.getElementById("year-select").value,10),unit));const cWF=(e,t,s)=>1===e?t[0][s]:(e>21||e<5)&&e%10>1&&e%10<5?t[1][s]:t[2][s],aUs=[cd.MONTHS,cd.DAYS,cd.HOURS,cd.MINUTES,cd.SECONDS],gUs=e=>(3===e?aUs:2===e?aUs.slice(1):1===e?aUs.slice(2):0===e?aUs.slice(3):[]).reduce((e,t)=>e+t,0);let pcd=[,,],pY=0;const mDOM=document.querySelector("#timer > #mainUnit"),sDOM=document.querySelector("#timer > #subUnits"),tH=document.getElementById("timerHeader"),sT=e=>{let t=gTV(unit,gUs(unit));if(pcd[1]!==t[1]){let e=t[1];sDOM.innerHTML=e,sDOM.setAttribute("value",e)}if(pcd[0]!==t[0]){let e=t[0];mDOM.innerHTML=e,mDOM.setAttribute("value",e),pcd[2]===t[2]&&pY===selYear||(tH.innerHTML=`Do matury ${selYear} ${t[2]} `)}pcd=t,pY=selYear},gTV=(e,t)=>{let s,c,r,n=cd(fED[selYear],null,t,3);switch(e){case 3:r=cWF(n.months,zFs,0),s=`${n.months} ${cWF(n.months,wFs,3)} `,c=`${n.days} ${cWF(n.days,wFs,2)} i ${n.hours} ${cWF(n.hours,wFs,1)}`;break;case 2:r=cWF(n.days,zFs,0),s=`${n.days} ${cWF(n.days,wFs,2)} `,c=`${n.hours} ${cWF(n.hours,wFs,1)} i ${n.minutes} ${cWF(n.minutes,wFs,0)}`;break;case 1:r=cWF(n.hours,zFs,0),s=`${n.hours} ${cWF(n.hours,wFs,1)} `,c=`${n.minutes} ${cWF(n.minutes,wFs,0)} i ${n.seconds} ${cWF(n.seconds,wFs,4)}`;break;case 0:r=cWF(n.minutes,zFs,0),s=`${n.minutes} ${cWF(n.minutes,wFs,0)} `,c=`${n.seconds} ${cWF(n.seconds,wFs,4)}`}return[s,c,r]};sT(),setInterval(()=>{sT()},1e3);