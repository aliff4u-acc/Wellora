const dataBerita = [
  {
    id: 1,
    judul: "Belajar DOM Javascript",
    deskripsi:
      "Ini adalah berita tentang tips dan trik javascript. Javascript adalah bahasa pemrograman yang sangat populer dan digunakan secara luas dalam pengembangan web. Dengan belajar javascript, Anda dapat membuat halaman web yang lebih interaktif dan menarik.",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    judul: "Website interaktif dengan DOM",
    deskripsi:
      "Ini adalah berita tentang tips dan trik javascript. Javascript adalah bahasa pemrograman yang sangat populer dan digunakan secara luas dalam pengembangan web. Dengan belajar javascript, Anda dapat membuat halaman web yang lebih interaktif dan menarik.",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    id: 3,
    judul: "Pemograman javascript untuk pemula",
    deskripsi:
      "Ini adalah berita tentang pemograman javascript untuk pemula. Javascript adalah bahasa pemrograman yang sangat populer dan digunakan secara luas dalam pengembangan web. Dengan belajar javascript, Anda dapat membuat halaman web yang lebih interaktif dan menarik.",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    judul: "Membuat aplikasi web dengan javascript",
    deskripsi:
      "Ini adalah berita tentang membuat aplikasi web dengan javascript. Javascript adalah bahasa pemrograman yang sangat populer dan digunakan secara luas dalam pengembangan web. Dengan belajar javascript, Anda dapat membuat aplikasi web yang lebih interaktif dan menarik.",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    judul: "tips dan trik javascript",
    deskripsi:
      "Ini adalah berita tentang tips dan trik javascript. Javascript adalah bahasa pemrograman yang sangat populer dan digunakan secara luas dalam pengembangan web. Dengan belajar javascript, Anda dapat membuat halaman web yang lebih interaktif dan menarik.",
    isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const template = document.getElementById("template"); //1
const daftarKartu = document.getElementById("daftar-kartu");

dataBerita.forEach(({ id, judul, deskripsi, isi }) => {
  // membuat salinan template html yang akan diisi dengan data berita//
  const templateClone = template.content.cloneNode(true);

  //mengambil element article dari salinan template dan mengisi datanta//
  const kartu = templateClone.querySelector("article");

  //mengisi data
  kartu.querySelector(".judul").textContent = judul;
  kartu.querySelector(".deskripsi").textContent = deskripsi;

  //menambahkan kartu ke dalam daftar kartu//
  daftarKartu.appendChild(kartu);
});

const detailBerita = document.getElementById("detail-berita");