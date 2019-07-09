var Word = function () {
    this.new = [];
    this.returnString = function() {
        var displayWord = ""
        for (i=0; i<this.new.length; i++){
           var char = this.new[i].print();
          displayWord = displayWord.concat(char)
        }
        return(displayWord)
    }
    this.define = function(letterInput) {
        // for loop to call for every letter oarray with object and verify the letterimput
        for (i=0; i<this.new.length; i++){
            this.new[i].characterCheck(letterInput);
    }

}
}

module.exports = Word
