class Slider {
    
    constructor(id) {
        this._id = id;
        this._element = document.getElementById(id);
        this._photos = this.element.children;
        this._numPhotos = this._photos.length;
        this._currentPhoto = 0;

        this.showPhoto();
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

    getPhoto(n) {
        return this._photos[n];
    }

    get numPhotos() {
        return this._photos.length;
    }

    get currentPhoto() {
        return this._currentPhoto;
    }

    addPhoto(newPhoto) {
        this._photos.push(newPhoto);
    }

    hidePhoto(){
        this._photos[this._currentPhoto].style.display = "none";
    }

    showPhoto(){
        this._photos[this._currentPhoto].style.display = "block";
    }

    clickPhoto(i){
        this.hidePhoto();
        this._currentPhoto = i;
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

const lBtn = images.element.appendChild(document.createElement("button"))
const rBtn = images.element.appendChild(document.createElement("button"))

lBtn.className = "slider__leftBtn";
rBtn.className = "slider__rightBtn";

lBtn.textContent = "◀";
rBtn.textContent = "▶";

const index = images.element.appendChild(document.createElement("div"))
index.className = "slider__index";

for(let i = 0; i < images._numPhotos; i++) {
    let x = index.appendChild(document.createElement("p"))
    x.className = "slider__index__point";
    x.textContent = "•";
    x.onclick = function() {
        index.children[images.currentPhoto].className = "slider__index__point";
        images.clickPhoto(i)
        index.children[images.currentPhoto].className = "slider__index__point selected";
    };
}

index.children[images.currentPhoto].className = "slider__index__point selected";

function nextImage(){
    index.children[images.currentPhoto].className = "slider__index__point";
    images.nextPhoto()
    index.children[images.currentPhoto].className = "slider__index__point selected";
}

function previousImage(){
    index.children[images.currentPhoto].className = "slider__index__point";
    images.nextPhoto()
    index.children[images.currentPhoto].className = "slider__index__point selected";
}

lBtn.onclick = function() {
    previousImage();
};

rBtn.onclick = function() {
    nextImage();
};

setInterval(() => {
    nextImage();
}, 10000);