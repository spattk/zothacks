console.log("hey I am loaded");


// lists = document.querySelectorAll('div')
// for (let i = 0; i < lists.length; i++) {
//     lists[i].innerHTML = '';
// }

lists = document.querySelectorAll("tr[valign='top']");

function changeName() {
    console.log("im clicked");
    // document.querySelector('#test').val = "changed";
}

for (let i = 0; i < lists.length; i++) {
    var cols = lists[i].childNodes;
    for(let j=0;j<cols.length;j++){
        if(j == 4){
            let prof = cols[j].innerHTML;
            cols[j].innerHTML = `<a class='iknow' val1='1' val2='2' val3='3'>${prof}</a>`;
        }
    }
    console.log(cols);
}

$('.iknow').on('click', function(e) {
    console.log(e.target.attributes);
    document.querySelector("#test").value = 'changing the btn'
});

console.log("wohoooo")

