// DT173G Webbutveckling III
// Moment 4 - TypeScript
// Mattias Bygdeson

declare function require(name: string); // Make it possible to use require in TypeScript

class Textfile {
    public fs = require('fs');
    public text: string;
    public sorted = [];

    constructor() {

    }

    // Reads text-file and saves content
    readFile(file) {
        this.text = this.fs.readFileSync(file, 'utf8');
        this.sortWords();
    }

    // Splits all words and sorts into an array with number of occurrences
    sortWords() {
        let reg: RegExp = /\n| /; // Strip of all new lines and blanks
        let clean = this.text.split(reg);
        let count = {};

        for (let i of clean) {
            count[i] = (count[i] || 0) + 1;
        }

        for (let key in count) this.sorted.push([key, count[key]]);
        this.sorted.sort(function (a, b) { return a[1] - b[1] });
    }

    // Displays any number of most occuring words
    presentWords(x) {
        this.sorted.reverse();
        console.log(this.sorted.slice(0, x));
    }
}

var hitch = new Textfile();
hitch.readFile('hitch.txt');
hitch.presentWords(10);