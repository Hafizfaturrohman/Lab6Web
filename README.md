<table>
  <tr>
    <th colspan="2">DATA MAHASISWA</th>
  </tr>
  <tr>
    <td>Nama</td>
    <td>Hafiz Faturrohman</td>
  </tr>
  <tr>
    <td>NIM</td>
    <td>312210375</td>
  </tr>
</table>

# Lab6Web - JavaScript	DOM	dan	Event	Handling 


# H. Pertanyaan Evaluasi

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (*Document Object Model*) adalah representasi dokumen HTML dalam bentuk struktur objek yang dapat diakses dan dimanipulasi menggunakan JavaScript.

Manfaat DOM adalah memungkinkan JavaScript mengubah isi teks, mengatur tampilan elemen, menambahkan atau menghapus elemen HTML, serta membuat halaman web menjadi interaktif.

### 2. Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?

- **`getElementById()`** digunakan untuk mengambil satu elemen berdasarkan nilai atribut `id`.
- **`querySelector()`** digunakan untuk mengambil elemen pertama yang sesuai dengan selector CSS.
- **`querySelectorAll()`** digunakan untuk mengambil semua elemen yang sesuai dengan selector CSS dalam bentuk `NodeList`.

Contohnya, `getElementById("judul")` mengambil elemen dengan ID `judul`, `querySelector(".menu")` mengambil elemen pertama dengan class `menu`, sedangkan `querySelectorAll(".menu")` mengambil semua elemen dengan class `menu`.

### 3. Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?

`addEventListener()` berfungsi untuk memasang pendengar event pada elemen sehingga JavaScript dapat menjalankan fungsi ketika suatu kejadian terjadi.

Tiga contoh event adalah:

1. `click`, yaitu ketika elemen diklik.
2. `input`, yaitu ketika nilai input berubah akibat tindakan pengguna.
3. `submit`, yaitu ketika form dikirim.

### 4. Mengapa `event.preventDefault()` digunakan pada event submit form?

`event.preventDefault()` digunakan untuk mencegah tindakan bawaan browser ketika form dikirim, seperti mengirim form dan memuat ulang halaman. Dengan demikian, JavaScript dapat memeriksa data terlebih dahulu dan menampilkan hasil validasi tanpa harus memuat ulang halaman.

### 5. Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?

`textContent` digunakan untuk membaca atau mengubah isi teks suatu elemen. Teks yang dimasukkan akan diperlakukan sebagai teks biasa, sehingga lebih aman untuk menampilkan input pengguna.

Sementara itu, `innerHTML` digunakan untuk membaca atau mengubah isi HTML suatu elemen, termasuk tag HTML. Namun, penggunaan `innerHTML` dengan data dari pengguna yang tidak tepercaya dapat menimbulkan risiko serangan XSS (*Cross-Site Scripting*).

Oleh karena itu, `textContent` lebih disarankan jika hanya ingin menampilkan teks.

### 6. Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?

`classList.toggle()` digunakan untuk menambahkan class CSS jika class tersebut belum ada atau menghapusnya jika sudah ada. Dengan cara ini, JavaScript dapat mengubah tampilan elemen secara bergantian, misalnya mengaktifkan atau menonaktifkan warna latar belakang, tanpa harus mengubah seluruh aturan CSS.

Contohnya:

```javascript
const judul = document.getElementById("judul");

judul.classList.toggle("aktif");
```

Kode tersebut akan menambahkan class `aktif` jika belum ada dan menghapusnya jika sudah ada.

### 7. Sebutkan minimal tiga skenario pengujian validasi form.

Berikut beberapa skenario pengujian validasi form:

1. **Kolom wajib kosong:** pengguna mengirim form tanpa mengisi nama. Hasil yang diharapkan adalah pesan bahwa nama wajib diisi.
2. **Format email salah:** pengguna memasukkan email dengan format tidak valid. Hasil yang diharapkan adalah pesan kesalahan email.
3. **Umur di luar batas:** pengguna memasukkan umur kurang dari 17 tahun atau lebih dari 100 tahun. Hasil yang diharapkan adalah pesan bahwa umur harus berada dalam rentang 17–100 tahun.
4. **Data valid:** pengguna mengisi nama, email, dan umur dengan benar. Hasil yang diharapkan adalah pesan bahwa data berhasil divalidasi.

Pengujian tersebut bertujuan memastikan form dapat menerima data yang benar dan menolak data yang tidak memenuhi ketentuan validasi.
