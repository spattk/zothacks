console.log("hey I am loaded");

// lists = document.querySelectorAll('div')
// for (let i = 0; i < lists.length; i++) {
//     lists[i].innerHTML = '';
// }

lists = document.querySelectorAll("tr[valign='top']");

for (let i = 0; i < lists.length; i++) {
    var cols = lists[i].childNodes;
    for(let j=0;j<cols.length;j++){
        if(j == 4){
            cols[j].innerHTML = '';
        }
    }
    console.log(cols);
}

console.log("wohoooo")