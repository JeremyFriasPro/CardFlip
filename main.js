class FlippingCard {
    constructor(frontContent, backContent){
        this.frontContent = frontContent;
        this.backContent = backContent;
        this.isShowingFront = true;
        this.card = document.querySelector(".card");
        this.card.innerText = frontContent;
        this.card.addEventListener("click", this.flipCard.bind(this));
    }

    flipCard(){
        
    }

}

const firstCard = new FlippingCard("This is the front side...", "Now you're on the back!");