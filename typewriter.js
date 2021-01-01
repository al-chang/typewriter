class TypeWriter {
  constructor(strings, elementId, loop, speed) {
    this.strings = strings;
    this.element = document.getElementById(elementId);
    this.currentWord = 0;
    this.deleteWords = false;
    this.text = "";
    this.speed = speed;
    this.loop = loop;
  }

  // Function to type the words
  type() {
    let currentLetter = this.text.length;
    let delay = this.speed;

    // Check for deleting or typing words
    if (this.deleteWords) {
      delay = this.speed / 2;
      // Case where we are deleting
      this.text = this.strings[this.currentWord].substring(0, currentLetter - 1);
      this.element.innerHTML = this.text;
    } else {
      delay = this.speed;
      // Case where we are adding
      this.text = this.strings[this.currentWord].substring(0, currentLetter + 1);
      this.element.innerHTML = this.text;
    }

    // Check for reaching the end / start of word
    if (this.text.length === this.strings[this.currentWord].length) {
      // If we have typed the whole word, move to next word and start deleting
      this.deleteWords = true;
      delay = this.speed * 10;
      // If we do not want a loop, just end before deleting last word
      if (this.currentWord === this.strings.length - 1 && !this.loop) {
        return;
      }
    } else if (this.text.length === 0) {
      // If we are at the start of the word, start typing
      delay = this.speed * 10;
      this.currentWord++;

      this.deleteWords = false;
      if (this.currentWord === this.strings.length) {
        this.currentWord = 0;
      }
    }

    setTimeout(() => this.type(), delay);
  }
}
