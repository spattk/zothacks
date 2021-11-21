
var btn = document.createElement("input");
btn.value = "Test Modal";
btn.id = "test";
btn.type = "submit";

document.querySelector('body').append(btn);

$('#test').on('click', function(e) {
    console.log("askljdf;lkasjd;las;kdf");
});

