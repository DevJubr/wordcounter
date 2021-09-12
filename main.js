let textc = document.getElementById('textc');

textc.addEventListener('input', function () {
    let text = this.value; 
    let letter = text.length;
    document.getElementById('char').innerHTML = letter;

    text = text.trim();
    let word = text.split(' ');
    let clinList = word.filter(function (elm) {
        return elm != ' ';
    })
    document.getElementById('word').innerHTML = clinList.length;
});

