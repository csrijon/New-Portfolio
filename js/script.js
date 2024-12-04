window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
})
window.addEventListener("scroll",() => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector("header");
    const headerHeight =header.offsetTop
    if (scrollPosition>headerHeight) { 
        header.classList.add("black")
    }else{
        header.classList.remove("black")
    }
})
