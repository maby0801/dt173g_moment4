// DT173G Webbutveckling III
// Moment 4 - TypeScript
// Mattias Bygdeson
var Textfile = /** @class */ (function () {
    function Textfile() {
        this.fs = require('fs');
        this.sorted = [];
    }
    // Reads text-file and saves content
    Textfile.prototype.readFile = function (file) {
        this.text = this.fs.readFileSync(file, 'utf8');
        this.sortWords();
    };
    // Splits all words and sorts into an array with number of occurrences
    Textfile.prototype.sortWords = function () {
        var reg = /\n| /; // Strip of all new lines and blanks
        var clean = this.text.split(reg);
        var count = {};
        for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
            var i = clean_1[_i];
            count[i] = (count[i] || 0) + 1;
        }
        for (var key in count)
            this.sorted.push([key, count[key]]);
        this.sorted.sort(function (a, b) { return a[1] - b[1]; });
    };
    // Displays any number of most occuring words
    Textfile.prototype.presentWords = function (x) {
        this.sorted.reverse();
        console.log(this.sorted.slice(0, x));
    };
    return Textfile;
}());
var hitch = new Textfile();
hitch.readFile('hitch.txt');
hitch.presentWords(10);
