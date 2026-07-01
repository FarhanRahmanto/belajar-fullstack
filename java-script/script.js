// function perkenalan(nama, asalKampus){
//   console.log("Halo nama saya " + nama +" dari kampus " + asalKampus);
// }

// perkenalan("Farhan","UPNVYK");
// perkenalan("guntur","UGM");

// function bagiPatungan (totalTagihan,jumlahOrang){
//   let nominal = totalTagihan/jumlahOrang;

//   return nominal;
// }

// let bayarPerOrang = bagiPatungan(300000,3);
// console.log(bayarPerOrang);

// function cekKecukupanSaldo(saldoGopay,toalBelanja){
//   if(saldoGopay>= toalBelanja){
//     return true;
//   }

//   else{
//     return false;
//   }
// }

// let hasilCek = cekKecukupanSaldo(50000,65000)
// console.log("Apakahn saldo cuku?p "+ hasilCek);

// //Object
// let biodataKos = {
//   nama: "Joko",
//   uangsaku: 50000,
//   hobi: ["jogging","gaming"]
// }

// console.log("Halo saya " + biodataKos.nama + ", uang saku saya IDR " + biodataKos.uangsaku)
// console.log("Hobi saya "+ biodataKos.hobi[0]);

// let tagihanBulanan = {
//   namaTagihan: "Listrik Kos",
//   nominal : 50000,
//   statusbayar : false
// }

// tagihanBulanan.nominal = 75000;

// console.log(tagihanBulanan);

// let daftarKamar = [
//   {nomor: 101, penghuni:"Guntur", lunas: true},
//   {nomor:102, penghuni:"Alex", lunas: true}
// ]

// for(let i = 0; i< daftarKamar.length ; i++){
//   console.log("Kamar " + daftarKamar[i].nomor + " dihuni oleh " + daftarKamar[i].penghuni);
// }

let hitungSisaSaldo = (saldoAwal,Pengeluaran) => saldoAwal - Pengeluaran;

console.log(hitungSisaSaldo(100000, 35000));

let profilKosan = {
  namaPenghuni: "Farhan Haikal",
  asal: "Jakarta",
  nomorKamar: 203
};

let {namaPenghuni, nomorKamar} = profilKosan;

console.log(namaPenghuni);
console.log(nomorKamar);

let pemenangLomba = ["Alex","Guntur","Haikal"];

let [juara1,juara2] = pemenangLomba;

console.log("Juara 1 adalah " + juara1 + " Juara 2 adalah " + juara2);