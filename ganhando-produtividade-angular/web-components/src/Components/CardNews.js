// class CardNews extends HTMLElement{
//     constructor(){
//         super();

//         const shadow = this.attachShadow({mode: "open"});
//         shadow.innerHTML = "<h1> Hello World</h1>";
//     }
// }
// customElements.define("card-news", CardNews);

class CardNews extends HTMLElement{
    constructor(){
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");
    
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("contet");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_left");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/imgs/Default_pfp.png";
        newsImage.alt = "wallpaper-darth-vader.jpg";

        
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }
    styles(){
        const style = document.createElement("style");
        style.textContent = `
        .card{
            width: 80%;
            box-shadow: 5px 5px 15px 0px rgba(0,0,0,0.5);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 20px;
        }
        .card_left{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 20px;
        }
        .card_left > span{
            font-size: 15px;
            font-weight: 500;
            color: rgb(218, 218, 218);
        }
        .card_left > a{
            margin-top: 10px;
            font-size: 20px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        .card_left > p{
            color: gray;
        }
        img{
            width: 300px;
            padding: 5px;
        }
    `;
    return style;
    }
   

}

customElements.define("card-news", CardNews);