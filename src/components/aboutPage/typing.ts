interface optionsType {
  "id"?       : number,
  "delay"?    : number,
  "backDelay"?: number,

}

class TypingText {
    constructor(selectEl : HTMLElement, options : optionsType) {
      this.options = options;
      this.content = this.options.textContent;
      this.el$   = selectEl;
      this.textArr = this.content;
      this.backAnimate = false;
  
      this.indexLetter = 0;
      this.indexWord = 0;
  
      this.currentId = this.getValueOrDefault("id", this.options, 1);
      this.delay = this.getValueOrDefault("delay", this.options, 100);
      this.backDelay = this.getValueOrDefault("backDelay", this.options, this.delay);
  
      if (this.currentId !== null) {
        this.typingAnimate();
      }
    }
  
    getValueOrDefault(name, option, defaultValue = null) {
      return typeof option[name] !== "undefined" ? option[name] : defaultValue;
    }
  
    typingAnimate() {
      this.animateTexting();
  
      setTimeout(() => {
        this.typingAnimate();
      }, this.backAnimate ? this.backDelay : this.delay);
    }
  
    setActiveWord() {
      const arrLen = this.textArr.length;
      return this.indexWord + 1 < arrLen ? (this.indexWord += 1) : (this.indexWord = 0);
    }
  
    animateText() {
      this.el$.innerHTML = "";
  
      for (let i = 0; i < this.indexLetter; i++) {
        const word = this.textArr[this.indexWord];
        this.el$.innerHTML += word[i];
      }
    }
  
    animateTexting() {
      if (this.indexLetter > this.textArr[this.indexWord].length) {
        this.backAnimate = true;
      }
  
      switch (this.backAnimate) {
        case true:
          this.indexLetter -= 1;
          this.animateText();
          break;
  
        case false:
          this.animateText();
          this.indexLetter += 1;
          break;
      }
  
      if (this.indexLetter <= 0) {
        this.backAnimate = false;
        this.indexLetter = 0;
        this.setActiveWord();
      }
    }
  }
  
  export default TypingText;