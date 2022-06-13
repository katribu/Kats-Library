import {Books} from "/Books.js"
import {series} from "/seriesInfo.js"


function render() {
    document.getElementById("tog").innerHTML = throne.getSummary();
    document.getElementById("acotar").innerHTML = court.getSummary();
    document.getElementById("cc").innerHTML = crescent.getSummary();
    document.getElementById("hp").innerHTML = harry.getSummary();
    document.getElementById("twilight").innerHTML = vamp.getSummary();
    document.getElementById("hg").innerHTML = death.getSummary();
}

const throne = new Books(series.tog)
const court = new Books(series.acotar)
const crescent = new Books(series.cc)
const harry = new Books(series.hp)
const vamp = new Books(series.twilight)
const death = new Books(series.hg)
render()




// Random CODE//
document.getElementById("btn").addEventListener("click", function(){
document.getElementById("blah").textContent = "Happy Reading!"
})