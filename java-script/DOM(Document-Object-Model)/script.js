const tombolTeks = document.getElementById("btn-ubah-teks");
const paragraf = document.getElementById("text-deskripsi");
const judul = document.getElementById("judul-utama");
const backgorund = document.getElementById("btn-ganti-warna");

tombolTeks.addEventListener('click',() =>{
  paragraf.innerText = "Kamu berhasil mengubah teks menggunakan javascript"
})

backgorund.addEventListener('click', () => {
  judul.classList.toggle('merah');
})