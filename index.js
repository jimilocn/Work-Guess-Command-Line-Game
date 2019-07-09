// function to pull word from an array of options and pass into word.js

var Word = require("./word")
var Letter = require("./letter")
var inquirer = require("inquirer")

var wordChoices = ["Chicago", "New York", "Los Angelos", "Miami"];
var wordToGuess = ""
var pickWord = function () {
    var computerPickWord = wordChoices[Math.floor(Math.random() * wordChoices.length)]

    wordToGuess = new Word;
    for (i=0; i<computerPickWord.length; i++){
        wordToGuess.new.push(new Letter(computerPickWord[i]))
    }
    console.log(wordToGuess)

    
}

pickWord();