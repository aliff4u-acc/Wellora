// Data berita//
const IsiBerita = [
    {
        id: "0",
        judul: "berita-pertama",
        gambar: "asset/Nutrisi.jfif",
        tag: "Nutrisi",
        waktuBaca: "5 menit baca",
        tanggal: "14 Oktober 2026",
        info: "5 Langkah Memulai Pola Makan Sehat Tanpa Diet Menyiksa",
        isi: "Banyak orang mengira bahwa memulai hidup sehat berarti harus memotong drastis asupan kalori dan menahan rasa lapar berjam-jam. Faktanya, pendekatan ekstrem seperti itu sangat sulit dipertahankan dalam jangka panjang dan sering kali memicu efek yo-yo diet yang justru merugikan laju metabolisme tubuh Anda.",
        poin: [
            { subJudul: "1. Terapkan Prinsip Piring Sehat", isi: "Cobalah membagi piring makan Anda dengan rasio ideal: 50% diisi sayuran segar dan buah-buahan kaya serat, 25% protein berkualitas (seperti ikan laut, dada ayam, telur, tahu, atau tempe), dan 25% karbohidrat kompleks (nasi merah, ubi jalar, kentang kukus, atau oatmeal)." },
            { subJudul: "2. Jangan Pernah Lewatkan Sarapan Bergizi", isi: "Sarapan dengan paduan protein dan serat membantu menstabilkan kadar gula darah sejak pagi, mencegah lonjakan hormon insulin berlebih, serta secara efektif menekan dorongan mengonsumsi camilan manis berkalori kosong di siang hari." },
            { subJudul: "3. Cukupi Kebutuhan Air Sebelum Makan", isi: "Otak manusia sering kali keliru menafsirkan sinyal dehidrasi ringan sebagai rasa lapar. Membiasakan diri meminum segelas air putih hangat 15 menit sebelum jam makan utama terbukti melancarkan sekresi enzim pencernaan dan membantu mengontrol porsi makan secara alami." },
            { subJudul: "4. Gunakan Aturan Fleksibilitas 80/20", isi: "Hidup sehat harus dinikmati tanpa tekanan psikologis. Jadikan 80% dari apa yang Anda konsumsi adalah makanan utuh alami padat nutrisi, dan sisakan 20% ruang untuk menikmati hidangan favorit keluarga tanpa rasa bersalah." },
            { subJudul: "5. Pantau Asupan dengan Santai Lewat Wellora", isi: "Melalui fitur pencatatan pintar di aplikasi Wellora, Anda dapat memantau komposisi nutrisi harian secara praktis. Konsistensi kecil yang dilakukan setiap hari akan membawa transformasi besar dan langgeng bagi kesehatan tubuh Anda!" }
        ]
    },
    {
        id: "1",
        judul: "berita-kedua",
        gambar: "asset/Kebugaran.jfif",
        tag: "Kebugaran",
        waktuBaca: "5 menit baca",
        tanggal: "15 Oktober 2026",
        info: "Berapa Langkah Kaki yang Sebenarnya Dibutuhkan Tubuh?",
        isi: "Banyak orang mengira bahwa memulai hidup sehat berarti harus memotong drastis asupan kalori...",
        poin: [
            { subJudul: "1. Terapkan Prinsip Piring Sehat", isi: "Cobalah membagi piring makan Anda dengan rasio ideal..." }
        ]
    },
    {
        id: "2",
        judul: "berita-ketiga",
        gambar: "asset/Tidur.jfif",
        tag: "Pola Tidur",
        waktuBaca: "5 menit baca",
        tanggal: "16 Oktober 2026",
        info: "Rahasia Tidur Nyenyak Demi Produktivitas Maksimal",
        isi: "Tidur yang berkualitas adalah kunci utama untuk menjaga kesehatan fisik dan mental...",
        poin: [
            { subJudul: "1. Buat Jadwal Tidur Konsisten", isi: "Tubuh memiliki jam biologis alami. Usahakan tidur dan bangun di jam yang sama setiap hari..." }
        ]
    }
];

const artikelContainer = document.getElementById("artikel-container");
const templateArtikel = document.getElementById("template-artikel-card");

// Cek apakah elemen ada (berarti sedang di halaman utama/beranda)
if (artikelContainer && templateArtikel) {
    // Pastikan container bersih
    artikelContainer.textContent = "";

    IsiBerita.forEach((berita) => {
        // Clone cetakan kartu
        const clone = templateArtikel.content.cloneNode(true);
        
        // Isi data gambar
        const img = clone.querySelector(".card-image");
        img.src = berita.gambar;
        img.alt = berita.tag;
        
        // Isi teks meta dan judul
        clone.querySelector(".artikel-tag").textContent = berita.tag;
        clone.querySelector(".reading-time").textContent = berita.waktuBaca;
        clone.querySelector(".artikel-card-title").textContent = berita.info;
        
        // Membatasi panjang deskripsi agar layout kartu tetap rapi
        const cuplikanDeskripsi = berita.isi.length > 120 
            ? berita.isi.substring(0, 120) + "..." 
            : berita.isi;
        clone.querySelector(".artikel-card-description").textContent = cuplikanDeskripsi;
        
        // Set href link langsung menggunakan id berita
        clone.querySelector(".artikel-card-link").href = `detail-berita.html?id=${berita.id}`;
        
        // Masukkan kartu yang sudah diisi ke dalam container
        artikelContainer.appendChild(clone);
    });
}

const detailBerita = document.getElementById("detail-berita.html");

if (detailBerita) {
    const parameter = new URLSearchParams(window.location.search);
    const idBerita = parameter.get("id"); 
    const berita = IsiBerita.find((item) => item.id === idBerita);
    
    if (berita) {
        // Mengisi teks statis dengan aman menggunakan textContent
        document.getElementById("detail-gambar").src = berita.gambar;
        document.getElementById("detail-tag").textContent = berita.tag;
        
        // Untuk icon + teks waktu, kita tetap bisa pakai trik textContent dengan bantuan elemen <span> atau biarkan innerHTML HANYA untuk layout dasar non-data
        document.getElementById("detail-waktu").innerHTML = `<i class="fa-regular fa-clock"></i> ${berita.waktuBaca} &nbsp; &nbsp; <i class="fa-regular fa-calendar"></i> ${berita.tanggal}`;
        
        document.getElementById("detail-judul").textContent = berita.info;
        document.getElementById("detail-deskripsi").textContent = berita.isi;
        
        // --- PROSES CLONE TEMPLATE UNTUK POIN BERITA ---
        const poinContainer = document.getElementById("poin-berita-container");
        const templatePoin = document.getElementById("template-poin-berita");
        
        // Pastikan container bersih sebelum diisi
        poinContainer.textContent = "";

        if (templatePoin) {
            berita.poin.forEach((poin) => {
                // Clone cetakan
                const clonePoin = templatePoin.content.cloneNode(true);
                
                // Isi cetakan dengan data secara aman
                clonePoin.querySelector(".artikel-subtitle-berita").textContent = poin.subJudul;
                clonePoin.querySelector(".artikel-deskripsi-berita").textContent = poin.isi;
                
                // Masukkan cetakan yang sudah diisi ke layar
                poinContainer.appendChild(clonePoin);
            });
        }

        detailBerita.hidden = false;
    } else {
        document.getElementById("detail-judul").textContent = "Artikel tidak ditemukan!";
        detailBerita.hidden = false;
    }
}
const semuaTombolLink = document.querySelectorAll(".artikel-card-link");

semuaTombolLink.forEach((tombol, index) => {
    tombol.href = `detail-berita.html?id=${index}`;
});


document.getElementById("bmi-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);

    if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0) {
        alert("Masukkan berat dan tinggi badan yang valid.");
        return;
    }
    const tinggiM = tinggi / 100; // Konversi tinggi dari cm ke meter
    const bmi = berat / (tinggiM * tinggiM);
    document.querySelector(".result-value").textContent = bmi.toFixed(2);

let kategori = '';
let warnaKategori = '';

if (bmi < 18.5) {
    kategori = 'Kekurangan Berat Badan';
    warnaKategori = 'blue';
} else if (bmi >= 18.5 && bmi < 24.9) {
    kategori = 'Normal (Sehat)';
    warnaKategori = 'green';
} else if (bmi >= 25 && bmi < 29.9) {
    kategori = 'Kelebihan Berat Badan';
    warnaKategori = 'orange';
}

    document.querySelector(".result-value").textContent = bmi.toFixed(2);

    const kategoriElement = document.querySelector(".result-category");
    kategoriElement.textContent = kategori;
    kategoriElement.style.color = warnaKategori;
    kategoriElement.style.fontWeight = 'bold';
});