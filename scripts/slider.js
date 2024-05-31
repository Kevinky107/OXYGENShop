class Slider {
    
    constructor(id) {
        this._id = id;
        this._element = document.getElementById(id);
        this._photos = this.element.children;
        this._numPhotos = this._photos.length;
        this._currentPhoto = 0;

        this.showPhoto();

        const lBtn = this._element.appendChild(document.createElement("button"));
        const rBtn = this._element.appendChild(document.createElement("button"));

        lBtn.className = "slider__leftBtn";
        rBtn.className = "slider__rightBtn";

        lBtn.textContent = "◀";
        rBtn.textContent = "▶";

        const index = this._element.appendChild(document.createElement("div"));
        index.className = "slider__index";

        const slider = this;

        for(let i = 0; i < this._numPhotos; i++) {
            let x = index.appendChild(document.createElement("p"))
            x.className = "slider__index__point";
            x.textContent = "•";
            x.addEventListener("click", function() {
                index.children[slider._currentPhoto].className = "slider__index__point";
                slider.clickPhoto(i);
                index.children[slider._currentPhoto].className = "slider__index__point selected";
            });
        }

        index.children[this._currentPhoto].className = "slider__index__point selected";

        function nextImage(){
            index.children[slider._currentPhoto].className = "slider__index__point";
            slider.nextPhoto();
            index.children[slider._currentPhoto].className = "slider__index__point selected";
        }

        function previousImage(){
            index.children[slider._currentPhoto].className = "slider__index__point";
            slider.previousPhoto();
            index.children[slider._currentPhoto].className = "slider__index__point selected";
        }

        lBtn.addEventListener("click", function() {
            previousImage();
        });

        rBtn.addEventListener("click", function() {
            nextImage();
        });

        setInterval(() => {
            nextImage();
        }, 10000);

    }

    get id() {
        return this._id;
    }

    get element() {
        return this._element;
    }

    get photos() {
        return this._photos;
    }

    get numPhotos() {
        return this._photos.length;
    }

    get currentPhoto() {
        return this._currentPhoto;
    }

    hidePhoto(){
        this._photos[this._currentPhoto].style.display = "none";
    }

    showPhoto(){
        this._photos[this._currentPhoto].style.display = "block";
    }

    clickPhoto(n){
        this.hidePhoto();
        this._currentPhoto = n;
        this.showPhoto();
    }

    nextPhoto(){
        this.hidePhoto();
        this._currentPhoto < this._numPhotos-1 ? this._currentPhoto++ : this._currentPhoto = 0;
        this.showPhoto();
    }

    previousPhoto(){
        this.hidePhoto();
        this._currentPhoto > 0 ? this._currentPhoto-- : this._currentPhoto = this._numPhotos-1;
        this.showPhoto();
    }

}

const images = new Slider("images");