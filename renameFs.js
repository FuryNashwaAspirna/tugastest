//proses pemanggilan library fs
const fs = require('fs')

console.log('start reading a file...')
   
//proses readfile text.text menggunakan fs
fs.readFile('text.txt', 'utf-8', (err, content) => {
    //Untuk handle error
    if (err){
        console.log('error happend during reading the file')
        return console.log(err)
    }   
    
    //Lakukan sesuatu disini kalau berhasil 
    
    //Jika berhasil rename text.txt ke terserah.txt
    fs.rename('text.txt', 'terserah.txt', (err) => {
        if(err) console.log("Gagal rename!"+err);

        console.log("Berhasil")
    })

})

console.log('end of the file')
