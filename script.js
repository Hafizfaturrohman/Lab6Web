const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombolAksi = document.getElementById("tombolAksi");

// Menangani event klik pada tombol
tombolAksi.addEventListener("click", function () {
    pesan.textContent = "Tombol berhasil diklik!";
    pesan.classList.add("pesan-aktif");

    const waktu = new Date().toLocaleTimeString("id-ID");
    judul.textContent = "Waktu sekarang: " + waktu;
});


const inputNama = document.getElementById("inputNama");
const hitungKarakter = document.getElementById("hitungKarakter");

// Menghitung karakter setiap kali pengguna mengetik
inputNama.addEventListener("input", function () {
    const jumlah = inputNama.value.length;
    hitungKarakter.textContent = "Jumlah karakter: " + jumlah;
});


const formValidasi = document.getElementById("formValidasi");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const umur = document.getElementById("umur");
const hasilValidasi = document.getElementById("hasilValidasi");

formValidasi.addEventListener("submit", function (event) {
    event.preventDefault();

    if (nama.value.trim() === "") {
        hasilValidasi.textContent = "Nama wajib diisi!";
        hasilValidasi.style.color = "red";
    } else if (email.value.trim() === "" || !email.validity.valid) {
        hasilValidasi.textContent = "Masukkan email yang valid!";
        hasilValidasi.style.color = "red";
    } else if (umur.value === "" || Number(umur.value) < 17 || Number(umur.value) > 100) {
        hasilValidasi.textContent = "Umur harus antara 17 sampai 100 tahun!";
        hasilValidasi.style.color = "red";
    } else {
        hasilValidasi.textContent = "Data berhasil divalidasi!";
        hasilValidasi.style.color = "green";
    }
});


const formTodo = document.getElementById("formTodo");
const inputTodo = document.getElementById("inputTodo");
const daftarTodo = document.getElementById("daftarTodo");
const pesanTodo = document.getElementById("pesanTodo");

formTodo.addEventListener("submit", function (event) {
    event.preventDefault();

    const tugas = inputTodo.value.trim();

    if (tugas === "") {
        pesanTodo.textContent = "Tugas tidak boleh kosong!";
        pesanTodo.style.color = "red";
        return;
    }

    const item = document.createElement("li");
    const teksTugas = document.createElement("span");
    const tombolHapus = document.createElement("button");

    teksTugas.textContent = tugas;
    tombolHapus.textContent = "Hapus";
    tombolHapus.type = "button";

    tombolHapus.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(teksTugas);
    item.appendChild(document.createTextNode(" "));
    item.appendChild(tombolHapus);

    daftarTodo.appendChild(item);

    pesanTodo.textContent = "Tugas berhasil ditambahkan!";
    pesanTodo.style.color = "green";

    inputTodo.value = "";
    inputTodo.focus();
});


const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const pilihanWorkshop = document.getElementById("pilihanWorkshop");
const hasilWorkshop = document.getElementById("hasilWorkshop");

formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    if (namaWorkshop.value.trim().length < 3) {
        hasilWorkshop.textContent = "Nama harus minimal 3 karakter!";
        hasilWorkshop.style.color = "red";
        return;
    }

    if (
        emailWorkshop.value.trim() === "" ||
        !emailWorkshop.validity.valid
    ) {
        hasilWorkshop.textContent = "Masukkan email yang valid!";
        hasilWorkshop.style.color = "red";
        return;
    }

    if (pilihanWorkshop.value === "") {
        hasilWorkshop.textContent = "Silakan pilih workshop!";
        hasilWorkshop.style.color = "red";
        return;
    }

    hasilWorkshop.textContent =
        "Pendaftaran berhasil! " +
        namaWorkshop.value.trim() +
        " terdaftar pada workshop " +
        pilihanWorkshop.value +
        ".";

    hasilWorkshop.style.color = "green";
});
