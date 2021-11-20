info = '[{"year":"2018-19","quarter":"FALL","department":"I&C SCI","department_name":"Information and Computer Science","number":"33","code":36620,"section":"A","title":"INTERMEDIATE PRGRMG","instructor":"PATTIS, R.","type":"LEC","gradeACount":125,"gradeBCount":72,"gradeCCount":31,"gradeDCount":16,"gradeFCount":33,"gradePCount":1,"gradeNPCount":0,"gradeWCount":1,"averageGPA":2.84}]'

obj = JSON.parse(info);

console.log(obj[0]['department'])