// If Statement

let quiz = 80;

if (quiz > 75){
    console.log('Anda Telah Lulus')
}
// else if statement

let nilai = 70;

if (nilai>= 75){
    console.log('Anda Telah Lulus')
}
else if (nilai <= 74){
    console.log('Anda Tidak Lulus')
}

// Nested if
var score = 77;

if (score >= 40){
    if(score >=65){
        if(score >=86){
        console.log('Nilai anda sangat aman ');

    }
    else{
        console.log('Nilai anda aman aja')
    }
    }

    else{
        console.log('Nilai anda cukup aman');
    }
}

else {
    console.log('Nilai anda sangat tidak aman');
}

// Switch case 
const jenisminumanfav = "dingin"

switch (jenisminumanfav){
    case "panas":
        console.log("Teh tarik enak")
    break
    case "dingin":
        console.log("Thai tea mantap")
    break
    case "anget":
        console.log("Susu milo hangat bowleh")    
    break
    case "terserah":
        console.log("pilih aja jangan ribet")
    default:
        console.log("kayaknya gak ada jenis lain lagi")
}

// for statement

const makanan = ["pertama :nasi goreng", "kedua: bakmi ayam", "ketiga: kue cokelat"]
for(let index = 0; index < makanan.length; index++){ 
    console.log("Makanan kesukaan " + makanan[index]);

}

// while 
let i = 5;

while(i>0)
{
    console.log("Beli 10 gratis",i);
    i--;
}

// do while

var perintah = 2;

// perulangan while-do
while(perintah > 0){
    console.log("Ayo makan!");
    perintah--;
}

// perulangan do-while
do{
    console.log("Gak usah makan lagi!!");
    perintah--;
} 
while(perintah > 0)

// function

function belanja(barang,hargabarang){
    console.log("ini barangnya", barang);
    console.log("Harganya",hargabarang,"10.000");
};

var barang = "tepung";
belanja("tapung",1);