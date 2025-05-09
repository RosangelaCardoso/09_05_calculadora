class themeSwitcher {
    constructor(){
        this.themetoggle=document.getElementById("theme-toggle")
        this.currentTheme=localStorage.getItem("theme")||"light"

        this.initTheme()
        this.initEventListners()
 }
initTheme() {
    if (
        this.currentTheme=== "dark" || (!localStorage.getItem("theme"))&& window.matchMedia
        ("prefers-color-scheme: dark)").matches)
    {
       document.documentElement.setAttribute("data-theme","dark")
       this.currentTheme= " dark" 
    } else {
        document.documentElement.setAttribute("data-theme")
        this.currentTheme="light"
    }
    localStorage.setItem("theme",this.currentTheme)
}
initEventListners(){
    this.themetoggle.addEventListener("click",()=>{
        this.toggletheme()
    })
 window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",
    (e) => {
        if(!localStorage.getItem("theme"))
            this.currentTheme= e.matches ? "dark":"light"
        this.initTheme()
    })
 
}
toggletheme() {
    if(this.currentTheme==="light"){
        document.documentElement.setAttribute("data-theme","dark")
        this.currentElement.removeAtribute("data-theme")
        this.currentTheme="light"
    }
    localStorage.setItem("theme",this.currentTheme)
    }
}
document.addEventListener("DOMContentLoaded",()=> {
    const themeSwitcher=new themeSwitcher()

})
