var form = document.forms.namedItem("fileinfo");
form.action("/upload")
form.addEventListener('submit', function(ev) {

   // var oOutput = document.querySelector("div"),
        oData = new FormData(form);

    oData.append("CustomField", "This is some extra data");

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "/upload", true);
    oReq.onload = function(oEvent) {
        if (oReq.status == 200) {
            console.log("YES");
           // oOutput.innerHTML = "Uploaded!";
        } else {
            console.log("no");
           // oOutput.innerHTML = "Error " + oReq.status + " occurred when trying to upload your file.<br \/>";
        }
    };

    oReq.send(oData);
    ev.preventDefault();
}, false);