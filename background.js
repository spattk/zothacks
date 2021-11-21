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

// let quarter = document.querySelector("h3[style='display: inline;']").textContent.split(" ")[0];
quarter='winter'

for (let i = 0; i < lists.length; i++) {
    console.log(lists[i]);
    var cols = lists[i].childNodes;
    for(let j=0;j<cols.length;j++){
        if(j == 0 && cols[j].className == 'CourseTitle'){
            innerLists = cols[j].textContent;
            department = innerLists.split(" ")[1];
            courseNumber = innerLists.split(" ")[3]
            // console.log(department, courseNumber)
        }
            
        if(j == 4){
            let prof = cols[j].innerHTML;
            console.log(prof)
            cols[j].innerHTML = `<a class="iknow" dept=${department} course_number=${courseNumber} quarter=${quarter} instructor=${prof}>${prof}</a>`;
        }
    }
    // console.log(cols);
}

$('.iknow').on('click', function(e) {
    // console.log(e.target.attributes);
    // document.querySelector("#test").value = 'changing the btn'
});

console.log("wohoooo")

