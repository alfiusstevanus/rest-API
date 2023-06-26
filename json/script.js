//objek ke json

// let mahasiswa = {
//     "nama" : "alfius stevanus",
//     "nrp" : "162021018",
//     "email" : "alfius@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa))

//json ke objek

// let xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let mahasiswa = JSON.parse(this.responseText) //merubah json ke objek
//         console.log(mahasiswa)
//     }
// }
// xhr.open('GET','coba.json', true)
// xhr.send()

//dengan jquery
$.getJSON('coba.json',function(response){
    console.log(response)
})
