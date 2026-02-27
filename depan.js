function tampilkanKejutan() {
    // Sembunyikan pesan awal dan tombol
    document.getElementById('pesan').style.display = 'none';
    document.getElementById('btnKlik').style.display = 'none';
    
    // Tampilkan konten rahasia
    const konten = document.getElementById('kontenRahasia');
    konten.classList.remove('hidden');
    
    // Tambahan: Mengubah teks nama menjadi lebih berwarna
    const nama = document.getElementById('nama');
    nama.style.color = '#ff4d4d';
    nama.innerHTML = "SURPRISE! ❤️";
    
    // Kamu juga bisa menambahkan fungsi musik di sini jika mau
}
