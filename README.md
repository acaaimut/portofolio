# ⚡ Modern Portfolio Website (Portofolio Web Interaktif)

Website portofolio profesional, modern, dan berkinerja tinggi yang dirancang dengan estetika visual tingkat lanjut (*Dark/Light Mode*, *Glassmorphism*, *Micro-interactions*, dan latar belakang animasi partikel).

---

## ✨ Fitur Utama

1. **Desain Visual Kelas Dunia (*Premium Aesthetics*)**:
   - Skema warna elegan berbasis CSS Variables (*Dark Mode default* & *Light Mode toggle*).
   - Efek Glassmorphism transparan dengan *backdrop-filter blur*.
   - Animasi partikel konstelasi interaktif pada latar belakang `<canvas>`.
   - Efek mesin tik (*typewriter*) pada judul profil.
   - Efek *hover* halus, kartu glowing, dan micro-animations.

2. **Dukungan Multi-Bahasa (*Dual Language ID / EN*)**:
   - Pengalihan instan antara **Bahasa Indonesia** dan **English** dengan tombol toggle di navbar.
   - Pilihan bahasa dan tema tersimpan otomatis di `localStorage`.

3. **Showcase Proyek Lengkap dengan Filter Kategori**:
   - Filter instan: *Semua*, *Web App*, *AI & Machine Learning*, *Mobile / IoT*, dan *UI/UX Design*.
   - Modal detail interaktif untuk melihat arsitektur, daftar fitur, teknologi, link live demo, dan source code.

4. **Matriks Keahlian (*Interactive Skill Matrix*)**:
   - Progress bar animasi yang bergerak saat masuk ke dalam viewport layar.
   - Pita berjalan (*Infinite Tech Marquee*) menampilkan ikon teknologi modern.

5. **Timeline Karir Interaktif**:
   - Tab ganti cepat antara **Pengalaman Kerja** dan **Pendidikan & Sertifikasi**.

6. **Slider Rekomendasi / Testimoni**:
   - Carousel testimonial otomatis dengan kontrol navigasi dot.

7. **Modal Resume / CV & Formulir Kontak**:
   - Tampilan CV siap cetak atau simpan ke PDF.
   - Formulir kontak interaktif dengan validasi input dan notifikasi toast.

---

## 📁 Struktur File

```
d:/tes/
├── index.html        # Struktur HTML5 semantik & SEO-friendly
├── styles.css        # Desain sistem responsif, Dark/Light Mode, & animasi
├── script.js         # Logika interaktif, partikel, i18n, modal, & animasi
├── data.js           # Konfigurasi data portofolio (Nama, Keahlian, Proyek, dll.)
└── README.md         # Panduan penggunaan dan kustomisasi
```

---

## 🛠️ Cara Menjalankan & Membuka

Anda dapat membuka portofolio ini langsung di browser favorit Anda:

1. **Cara Langsung**:
   - Buka file `index.html` langsung dengan klik dua kali atau drag-and-drop ke Google Chrome / Edge / Firefox.

2. **Menggunakan Local Server (Direkomendasikan)**:
   - Jika Anda memiliki ekstensi **Live Server** di VS Code / Cursor: Klik kanan pada `index.html` lalu pilih **Open with Live Server**.
   - Atau jalankan dengan Node.js / npx di terminal:
     ```bash
     npx serve .
     ```
     atau
     ```bash
     python -m http.server 3000
     ```
     Lalu buka `http://localhost:3000` di browser.

---

## ✏️ Cara Mengubah Data Portofolio Anda

Buka file **`data.js`**. Anda dapat mengubah:
- **`profile`**: Ganti nama, gelar, deskripsi bio, email, nomor telepon, dan link media sosial (GitHub, LinkedIn, dll.).
- **`skills`**: Tambahkan atau ubah teknologi dan persentase keahlian.
- **`projects`**: Tambahkan proyek baru dengan judul, deskripsi, teknologi (`tags`), link demo, dan link GitHub.
- **`experiences`**: Masukkan riwayat pekerjaan dan pencapaian Anda.
- **`education`**: Masukkan riwayat pendidikan dan sertifikasi.
- **`testimonials`**: Tambahkan testimoni rekan kerja atau klien Anda.

---

## 🚀 Panduan Deploy Online (Gratis)

- **Vercel / Netlify**: Cukup hubungkan repository GitHub atau drag-and-drop folder ini ke dasbor Netlify Drop / Vercel.
- **GitHub Pages**: Buat repository di GitHub, push semua file ke branch `main`, lalu aktifkan **GitHub Pages** di tab *Settings > Pages*.
