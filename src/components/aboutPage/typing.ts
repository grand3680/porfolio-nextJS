interface optionsType {
  "id"?        : number,
  "delay"?     : number,
  "backDelay"? : number,
  "txtContent" : string[],
}

class TypingText {
  options     : optionsType;
  el$         : HTMLElement;
  textArr     : string[];
  backAnimate : boolean;

  indexLetter : number;
  indexWord   : number;

  currentId   : number = 1;
  delay       : number = 125;
  backDelay   : number = 125;

  constructor(selectEl : HTMLElement, options : optionsType) {
    this.options     = options;
    this.el$         = selectEl;
    this.textArr     = options.txtContent;
    this.backAnimate = false;

    this.indexLetter = 0;
    this.indexWord   = 0;

    this.currentId = typeof options.id        != 'undefined' ? options.id        : this.currentId;
    this.delay     = typeof options.delay     != 'undefined' ? options.delay     : this.delay;
    this.backDelay = typeof options.backDelay != 'undefined' ? options.backDelay : this.backDelay;
    
    this.typingAnimate();
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
    if (this.indexLetter > this.textArr[this.indexWord].length) this.backAnimate = true;

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