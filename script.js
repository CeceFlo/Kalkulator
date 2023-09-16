function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function result() {
    let hasil = eval(document.getElementById("display").value)
    document.getElementById("display").value = hasil;

    //document.getElementById("display").value = eval(document.getElementById("display").value)
}

function hapus() {
    document.getElementById("display").value = "";
}