import ViewElement from "./ViewElement";

export default class Canvas extends ViewElement {
    context
    constructor(contextType) {
        super();
        this.domObject = document.createElement("canvas");
        this.domObject.style.flexGrow = 0;
        this.domObject.style.flexShrink = 0;
        this.context = this.domObject.getContext(contextType);
    }

    setSmoothing(enabled) {
        this.context.imageSmoothingEnabled = enabled;
    }


    drawImage(image) {
        this.context.drawImage(image, 0 , 0, this.width, this.height);
    }

    onClick(callback) {
        const domObject = this.domObject
        domObject.addEventListener("click" , function(e) {
            const rect = domObject.getBoundingClientRect();
            e.canvasX = e.clientX - rect.left;
            e.canvasY = e.clientY - rect.top;
            callback(e)
        })
    }
}