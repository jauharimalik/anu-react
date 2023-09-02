# Aplikasi Manajemen Pengguna

Aplikasi Manajemen Pengguna adalah sebuah aplikasi sederhana yang memungkinkan Anda untuk mendaftarkan pengguna baru dan melihat daftar pengguna yang sudah terdaftar. Aplikasi ini dibangun dengan menggunakan React.js dan Redux untuk manajemen state.

## Daftar Isi
- [Penggunaan](#penggunaan)
- [Instalasi](#instalasi)
- [Konfigurasi](#konfigurasi)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Penjelasan Singkat](#penjelasan-singkat)
- [Dokumentasi Teknis](#dokumentasi-teknis)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## Penggunaan

Untuk menggunakan aplikasi ini, ikuti langkah-langkah berikut:

1. Clone repositori ini ke dalam komputer Anda.
2. Buka terminal dan navigasikan ke direktori tempat Anda menyimpan repositori ini.
3. Jalankan perintah `npm install` untuk menginstal semua dependensi yang diperlukan.
4. Jalankan perintah `npm start` untuk memulai aplikasi.
5. Buka browser Anda dan akses `http://localhost:3000` untuk melihat aplikasi.

## Instalasi

Jika Anda ingin menginstal aplikasi ini di server atau lingkungan produksi, ikuti langkah-langkah berikut:

1. Clone repositori ini ke server Anda.
2. Buka terminal di server dan navigasikan ke direktori tempat Anda menyimpan repositori ini.
3. Jalankan perintah `npm install` untuk menginstal semua dependensi yang diperlukan.
4. Konfigurasi server dan database yang diperlukan.
5. Jalankan aplikasi dengan bantuan server Node.js atau menggunakan server web seperti Nginx atau Apache.

## Konfigurasi

Anda dapat mengkonfigurasi beberapa pengaturan dasar aplikasi ini melalui berkas-berkas berikut:

- **store.js**: Anda dapat mengubah penyimpanan data, seperti mengganti penyimpanan ke database eksternal.

## Teknologi yang Digunakan

Aplikasi ini dibangun dengan menggunakan teknologi-teknologi berikut:

- React.js
- Redux
- React Router
- Bcrypt.js
- React-Datepicker

## Penjelasan Singkat

Aplikasi ini memungkinkan Anda untuk:
- Mendaftarkan pengguna baru dengan informasi seperti nama, email, nomor WhatsApp, tingkat akun, peran, status, kata sandi, dan tanggal efektif.
- Melihat daftar pengguna yang sudah terdaftar dengan rincian seperti ID Pengguna, Nama Pengguna, Email, Nomor WhatsApp, Tingkat Akun, Peran, Status, Kata Sandi Terenkripsi, Tanggal Pendaftaran, dan Tanggal Efektif.

## Dokumentasi Teknis

### Struktur Aplikasi

Aplikasi ini terdiri dari beberapa komponen utama:
- **App.js**: Komponen utama yang menentukan rute aplikasi dan menyediakan penyedia Redux.
- **Navbar.js**: Komponen navigasi untuk mengakses halaman Pendaftaran dan Daftar Pengguna.
- **Regis.js**: Komponen untuk mendaftarkan pengguna baru dengan validasi dan pengamanan kata sandi.
- **List.js**: Komponen untuk menampilkan daftar pengguna yang sudah terdaftar.

### Penyimpanan Data

Data pengguna disimpan dalam Redux Store dan juga di-cache di Local Storage untuk mempertahankan data saat penyegaran halaman.

### Validasi Data

Aplikasi ini memiliki validasi data yang ketat untuk memastikan semua informasi yang dimasukkan oleh pengguna adalah benar dan aman.

## Kontribusi

Anda dapat berkontribusi pada pengembangan aplikasi ini dengan mengirimkan pull request atau melaporkan masalah (issues) melalui GitHub.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT - lihat berkas [LICENSE.md](LICENSE.md) untuk detailnya.

Terima kasih telah menggunakan Aplikasi Manajemen Pengguna!
