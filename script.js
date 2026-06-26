const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:.2
});

sections.forEach((section)=>{
    observer.observe(section);
});

const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{
    if(window.scrollY > 60){
        nav.style.background = "#0d0d0d";
    }else{
        nav.style.background = "rgba(0,0,0,.55)";
    }
});