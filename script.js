// Tangkap semua tautan di dalam header
const headerLinks = document.querySelectorAll("header a");

// Tambahkan event listener ke setiap tautan di header
headerLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Mencegah tautan mengarahkan ke halaman baru secara langsung

    const targetId = link.getAttribute("href"); // Ambil ID tujuan dari atribut href

    if (targetId) {
      const targetElement = document.querySelector(targetId); // Temukan elemen dengan ID yang sesuai
      if (targetElement) {
        // Animasikan pergeseran scroll ke elemen tujuan
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth", // Efek animasi scroll
        });
      }
    }
  });
});

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 500;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
    })
}

document.querySelector('.mobile-toggle').addEventListener('click', function () {
  document.querySelector('.nav-list').classList.toggle('active');
});
