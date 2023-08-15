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
        this.toggleBool();
        if(this.isShowingFront){
            this.card.innerText = this.frontContent;
            this.card.style.backgroundColor = "rgb(102, 107, 255)";
        } else {
            this.card.innerText = this.backContent;
            this.card.style.backgroundColor = "rgb(68, 72, 172)";
        }
    }

    toggleBool(){
        this.isShowingFront = this.isShowingFront ? false : true;
    }

}

const firstCard = new FlippingCard("This is the front side...", "Now you're on the back!");