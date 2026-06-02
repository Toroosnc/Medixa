# MEDIXA — Sistem Informasi Kesehatan Indonesia

## Overview
MEDIXA adalah platform kesehatan terpadu berbasis web untuk membantu masyarakat Indonesia mengelola kesehatan, dengan fitur BMI, informasi obat, peta rumah sakit, dan sistem donasi.

## Tech Stack
- **Backend**: PHP 8.2 (built-in server, port 5000)
- **Database**: SQLite via PDO (`data/medixa.db`)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Icons**: Lucide Icons (CDN)
- **Fonts**: Google Fonts — Poppins
- **Map**: Leaflet.js 1.9.4 + OpenStreetMap + Overpass API
- **Email**: PHP native `mail()` with HTML template + SQLite log
- **Session**: PHP native sessions

## Project Structure
```
/
├── index.php                   → Redirect ke home.php
├── home.php                    → Landing page (animasi, session-aware)
├── login.php                   → Halaman login
├── register.php                → Halaman register
├── profile.php                 → Profil user, riwayat BMI + obat, wallpaper changer
├── style.css                   → Global stylesheet (CRLF — append only via bash)
│
├── api/
│   ├── config.php              → DB init, session helpers, sendDonasiEmail(), admin seeds
│   ├── auth_login.php          → POST: login handler
│   ├── auth_register.php       → POST: register handler
│   ├── auth_logout.php         → Logout + redirect
│   ├── bmi_save.php            → POST: simpan riwayat BMI
│   ├── profile_update.php      → POST: update profil + wallpaper
│   ├── donasi_kirim.php        → POST: kirim donasi + trigger email notifikasi
│   ├── admin_auth.php          → POST: admin login handler
│   ├── admin_toggle_user.php   → POST: aktifkan/nonaktifkan user
│   └── admin_penerima_action.php → POST: approve/reject/delete penerima
│
├── fitur/
│   ├── kalkulatorBMI.php       → Kalkulator BMI (simpan ke DB jika login)
│   ├── pintarObat.php          → Info 27 obat (search + riwayat)
│   ├── rumahSakit.php          → Peta rumah sakit Surakarta (Leaflet.js)
│   ├── donasi.php              → Halaman donasi (hero, penerima cards, form)
│   └── style_fitur.css         → Styles khusus fitur
│
├── includes/
│   └── navbar.php              → Navbar dinamis + hamburger mobile drawer
│
├── admin/
│   ├── login.php               → Admin login (dark UI)
│   ├── dashboard.php           → Dashboard admin (statistik utama)
│   ├── pengguna.php            → Manajemen pengguna (aktif/nonaktif)
│   ├── penerima.php            → Manajemen penerima donasi (approve/reject)
│   ├── laporan_donasi.php      → Laporan donasi (grafik, tabel, email log, CSV)
│   ├── preview_email.php       → Preview template email konfirmasi donasi
│   ├── admin_style.php         → CSS shared admin panel (responsive)
│   └── admin_sidebar.php       → Sidebar + hamburger mobile JS
│
└── data/
    └── medixa.db               → SQLite database (auto-created)
```

## Database Schema
| Tabel | Kolom Utama |
|-------|-------------|
| `users` | id, nama, email, phone, password, role, aktif, wallpaper, created_at |
| `bmi_history` | id, user_id, berat, tinggi, bmi, kategori, created_at |
| `donasi` | id, nama_donatur, email_donatur, jumlah, pesan, status, created_at |
| `penerima_donasi` | id, user_id, nama, penyakit, deskripsi, target, terkumpul, foto, status |
| `obat_history` | id, user_id, nama_obat, kategori, created_at |
| `email_log` | id, to_email, to_name, subject, type, status, error_msg, donasi_id, created_at |

## Admin Accounts
| Username | Password | Email |
|----------|----------|-------|
| admin1 | V3425002 | admin1@medixa.id |
| admin2 | V3425004 | admin2@medixa.id |
| admin3 | V3425042 | admin3@medixa.id |
| admin4 | V3425088 | admin4@medixa.id |

## Key Features
1. **Kalkulator BMI** — Hitung BMI, simpan riwayat per user
2. **Pintar Obat** — 27 obat dengan search + simpan riwayat pencarian
3. **Rumah Sakit Terdekat** — Leaflet.js + Overpass API radius 5km Surakarta
4. **Donasi** — Form donasi, kartu penerima, progress bar target
5. **Email Notifikasi** — Template HTML cantik, dikirim via PHP mail(), log di DB
6. **Auth** — Login, Register, Logout, Update profil, Wallpaper changer
7. **Admin Panel** — Manajemen user/penerima, laporan donasi, email log, export CSV
8. **Responsivitas** — Mobile (≤480px), Tablet (≤768px), Laptop — semua halaman

## Notes
- `style.css` punya CRLF line endings (Windows) — gunakan `cat >> style.css << 'EOF'` untuk append, jangan edit tool
- `sendDonasiEmail()` ada di `api/config.php` — dipanggil otomatis setelah donasi masuk
- Email log tercatat di tabel `email_log` — bisa dilihat di `/admin/laporan_donasi.php`
- Di environment Replit dev, `mail()` mungkin return false (no SMTP) tapi log tetap tercatat
