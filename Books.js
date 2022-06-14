import {series} from "./seriesInfo.js"

function Books(data) {
    Object.assign(this,data)

    this.getSummary = function(){
        const {title, author, spice, mate, books, lead, coverArt} = this;
        return ` <div class = "bookContainer">
        <h3 class = "title">${title}</h3>
        <div class = "coverArt"><img src = ${coverArt}></div>
        <p class = "author">${author}</p>
        <p class = "books">${books}</p>
        <p class = "lead">${lead}</p>
        <p class = "mate">${mate}</p>
        <p class = "spice">${spice}</p>
    </div>`

    }
}

export {Books}
