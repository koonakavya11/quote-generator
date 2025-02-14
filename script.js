let btn = document.getElementById("quote_btn")
// console.log(btn)
btn = addEventListener("click",()=>{
    let fetchdata = async()=>{
        let data = await fetch("https://dummyjson.com/quotes/random")
        // console.log(data)
        let quote_obj = await data.json()
        // console.log(quote_obj)
        let quote = quote_obj.quote
        let auth = quote_obj.author
        let text = document.getElementById("text")
        let author= document.getElementById("author")
        text.innerHTML =`<q>${quote}</q>`
        author.innerHTML =`- ${auth}`
}
fetchdata()
})