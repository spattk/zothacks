console.log("hey I am loaded");

var btn2 = document.createElement("input");
btn2.value = "CLOSE";

btn2.id = "close-modal";
btn2.type = "submit";


// Creating canvas
var canvas = document.createElement("canvas")
canvas.id = "bar-chart"
canvas.width = "800"
canvas.height = "450"

// lists = document.querySelectorAll('div')
// for (let i = 0; i < lists.length; i++) {
//     lists[i].innerHTML = '';
// }

lists = document.querySelectorAll("tr[valign='top']");

function changeName() {
    console.log("im clicked");
    // document.querySelector('#test').val = "changed";
}

let quarter = document.querySelector("h3[style='display: inline;']").textContent.split(" ")[0];

for (let i = 0; i < lists.length; i++) {
    // console.log(lists[i]);
    var cols = lists[i].childNodes;
    for (let j = 0; j < cols.length; j++) {
        if (j == 0 && cols[j].className == 'CourseTitle') {
            innerLists = cols[j].textContent;
            // console.log("innerlists", innerLists)
            department = innerLists.split(" ")[1];
            courseNumber = innerLists.split(" ")[3]
            // console.log(department, courseNumber)
        }

        if (j == 4) {
            let prof = cols[j].textContent;
            cols[j].innerHTML = `<a class='iknow' dept='${department}' course_number='${courseNumber}' 
            quarter='${quarter}' instructor='${prof}'>${prof}</a>`;
        }
    }
    // console.log(cols);
}

$('.iknow').on('click', function (e) {
    let department = e.target.getAttribute("dept");
    let number = e.target.getAttribute("course_number");
    let quarter = e.target.getAttribute("quarter");
    let instructor = e.target.getAttribute("instructor");

    console.log(department, number, quarter, instructor)

    // let instructor = "PATTIS,%20R."

    instructor = instructor.replace(" ", "%20")

    // let department = "I%26C%20SCI"
    department = department.replace("&", "%26")
    department = department.replace(" ", "%20")
    department = department.replace("/", "%2f")


    // let number = "33"
    number = number.replace(" ", "%20")
    // let year = "2019-20;2020-21" //possibly none
    // year = year.replace(" ", "%20")
    // let quarter = "Fall"         //possibly none
    // quarter = quarter.replace(" ", "%20")
    let APIURL = 'https://api.peterportal.org/rest/v0/grades/raw?'
    APIURL += 'instructor='
    APIURL += instructor
    APIURL += '&department='
    APIURL += department
    APIURL += '&number='
    APIURL += number
    // APIURL += '&quarter='
    // APIURL += quarter
    // APIURL += '&year='
    // APIURL += year
    console.log(APIURL);
    return fetch(APIURL)
        .then(res => res.json())
        .then(response => {
            let info = response;
            let totalA = 0
            let totalB = 0
            let totalC = 0
            let totalD = 0
            let totalF = 0
            let totalP = 0
            let totalNP = 0
            let averageGPA = 0
            for (let i = 0; i < info.length; i++) {
                totalA += info[i]["gradeACount"]
                totalB += info[i]["gradeBCount"]
                totalC += info[i]["gradeCCount"]
                totalD += info[i]["gradeDCount"]
                totalF += info[i]["gradeFCount"]
                totalP += info[i]["gradePCount"]
                totalNP += info[i]["gradeNPCount"]
                averageGPA += info[i]["averageGPA"]
            }
            averageGPA = averageGPA / info.length;
            averageGPA = averageGPA.toFixed(2)
            let totalStudents = totalA + totalB + totalC + totalD + totalF + totalP + totalNP
            console.log(totalA, totalB, totalC, totalD, totalF, totalNP, totalP, totalStudents, averageGPA);


            // document.body.appendChild(canvas);
            document.body.appendChild(btn2)
            var myDialog = document.createElement("dialog");


            document.body.appendChild(myDialog);

            var text = document.createTextNode(`Total Students: ${totalStudents}, 
            A = ${totalA}, B =  ${totalB}, C = ${totalC}, D = ${totalD}, F = ${totalF}, Pass = ${totalP}, NotPass = ${totalNP}, averageGPA = ${averageGPA}`);
            myDialog.appendChild(text);
            myDialog.appendChild(canvas);
            myDialog.appendChild(btn2);
            myDialog.showModal();

            new Chart(document.getElementById("bar-chart"), {
                type: 'bar',
                data: {
                    labels: ['A', 'B', 'C', 'D', 'F', 'P', 'NP', 'AvgGPA'],
                    datasets: [{
                        label: '# of Students',
                        data: [totalA, totalB, totalC, totalD, totalF, totalP, totalNP, averageGPA],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(153, 102, 255, 1)',

                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => {
            console.log("error", error)
        });
    // document.querySelector("#test").value = 'changing the btn'

});

$('body').on('click', function (e) {
    if (e.target.value == 'CLOSE') {
        let dialogs = document.querySelectorAll('dialog');
        for (let z = 0; z < dialogs.length; z++) {
            dialogs[z].remove();
            document.querySelector('canvas').remove();
        }
    }
});


console.log("wohoooo")

