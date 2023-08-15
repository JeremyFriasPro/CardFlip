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
        this.isShowingFront = this.isShowingFront ? false : true;
        if(this.isShowingFront){
            this.card.innerText = this.backContent;
        } else {
            this.card.innerText = this.frontContent;
        }
    }

}

const firstCard = new FlippingCard("This is the front side...", "Now you're on the back!");