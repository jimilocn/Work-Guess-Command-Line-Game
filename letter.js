var Letter = function (string) {
    this.character = string;
    this.guessed = false;
    this.print = function(){
        if (this.guessed) {
            return this.character
        }
        else{
            return "_"
        }
    };
    this.characterCheck = function (letterInput){
        if (this.character === letterInput){
            this.guessed=true;
        }
    }

}

module.exports = Letter;