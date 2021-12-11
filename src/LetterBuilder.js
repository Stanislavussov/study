function Letter() {
  this.start = "Dear..."
  this.article = "I am writing to..."
  this.end = "Your sincerely"
}


function LetterAbBuilder() {
  this.letter = new Letter()


  this.addStart = function(data) {
    this.letter.start = data
    return this
  }

  this.addArticle = function(data) {
    this.letter.article = data
    return this
  }

  this.addEnd = function(data) {
    this.letter.end = data
    return this
  }

  this.build = function() {
    return this.letter
  }

  this.createText = function() {
    this.letter.text = `
      ${this.letter.start}
      ${this.letter.article}
      ${this.letter.end}
    `
    return this
  }
}

const LetterBuilder = () => {

  const myLetter = new LetterAbBuilder()
    .addStart("Dear Stas")
    .addArticle("sdasdasdsad")
    .addEnd("I hope you have fun")
    .createText()
    .build()

  return (
    <div>
      {myLetter.text}
    </div>
  )
}

export default LetterBuilder