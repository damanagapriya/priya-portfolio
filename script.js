/* ==========================
   AI Portfolio Script
========================== */

// Typing Effect

const words=[
    "Generative AI",
    "Google ADK",
    "Vertex AI",
    "Multi-Agent Systems",
    "FastAPI",
    "Google Cloud"
    ];
  
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  
  const typing = document.getElementById("typing");
  
  function typeEffect(){
  
      const currentWord = words[wordIndex];
  
      if(!deleting){
  
          typing.textContent = currentWord.substring(0,charIndex+1);
  
          charIndex++;
  
          if(charIndex===currentWord.length){
  
              deleting=true;
  
              setTimeout(typeEffect,1200);
  
              return;
          }
  
      }else{
  
          typing.textContent=currentWord.substring(0,charIndex-1);
  
          charIndex--;
  
          if(charIndex===0){
  
              deleting=false;
  
              wordIndex++;
  
              if(wordIndex===words.length){
  
                  wordIndex=0;
              }
  
          }
  
      }
  
      setTimeout(typeEffect,deleting?60:120);
  
  }
  
  typeEffect();
  
  
  // Navbar Shadow
  
  window.addEventListener("scroll",()=>{
  
  const header=document.querySelector("header");
  
  if(window.scrollY>30){
  
  header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";
  
  }else{
  
  header.style.boxShadow="none";
  
  }
  
  });
  
  
  // Smooth Scroll
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  
  anchor.addEventListener("click",function(e){
  
  e.preventDefault();
  
  document.querySelector(this.getAttribute("href")).scrollIntoView({
  
  behavior:"smooth"
  
  });
  
  });
  
  });
  
  
  // Dark Light Mode
  
  const toggle=document.querySelector(".theme-toggle");
  
  let dark=true;
  
  toggle.onclick=()=>{
  
  if(dark){
  
  document.body.style.background="#ffffff";
  
  document.body.style.color="#111";
  
  toggle.innerHTML="<i class='fa-solid fa-sun'></i>";
  
  dark=false;
  
  }else{
  
  document.body.style.background="#020617";
  
  document.body.style.color="#F8FAFC";
  
  toggle.innerHTML="<i class='fa-solid fa-moon'></i>";
  
  dark=true;
  
  }
  
  };
  const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.onclick=()=>{

nav.classList.toggle("active");

}
/* Scroll Reveal */

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{
    
    if(entry.isIntersecting){
    
    entry.target.classList.add("show");
    
    }
    
    });
    
    });
    
    document.querySelectorAll(".hidden").forEach(el=>{
    
    observer.observe(el);
    
    });
/* Progress Bar */

window.addEventListener("scroll",()=>{

    const totalHeight=document.documentElement.scrollHeight-window.innerHeight;
    
    const progress=(window.scrollY/totalHeight)*100;
    
    document.getElementById("progress-bar").style.width=progress+"%";
    
    });
    window.onload=()=>{

        document.getElementById("loader").style.display="none";
        
        }
        const topBtn=document.getElementById("topBtn");

        window.addEventListener("scroll",()=>{
        
        if(window.scrollY>500){
        
        topBtn.style.display="block";
        
        }else{
        
        topBtn.style.display="none";
        
        }
        
        });
        
        topBtn.onclick=()=>{
        
        window.scrollTo({
        
        top:0,
        
        behavior:"smooth"
        
        });
        
        }