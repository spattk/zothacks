
var btn = document.createElement("input");
btn.value = "Test Modal";
btn.id = "test";
btn.type = "submit";

// document.querySelector('body').append(btn);


var dialog = document.createElement("dialog");
dialog.innerHTML='<p>Greetings, one and all!</p>';
document.querySelector('body').append(dialog);

$('#test').on('click', function(e) {
    // console.log("askljdf;lkasjd;las;kdf");
    
});

