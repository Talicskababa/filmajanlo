const filmek = [
    {
        cim: "Így neveld a sárkányodat",
        mufaj: "fantasy",
        kategoria: "Fantasy • Kaland",
        ertekeles: "8.1",
        kep: "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_.jpg",
        link: "https://videa.hu/videok/film-animacio/igy.neveld.a.sarkanyodat-vps.mp4-mp4-8lHCJdSoIWAEA18s"
    },
    {
        cim: "Shrek",
        mufaj: "vigjatek fantasy",
        kategoria: "Vígjáték • Fantasy",
        ertekeles: "7.9",
        kep: "https://m.media-amazon.com/images/S/pv-target-images/e58c803d1a924c61dde4a8abca71b6dcc133ee45919ea9404d350844a1326aa0.jpg",
        link: "https://videa.hu/videok/film-animacio/shrek-teljes-film-1080p-fhd-fiona-hu-NEJnYxJz5eW4wcB9"
    },
    {
        cim: "Pókember",
        mufaj: "akcio",
        kategoria: "Akció • Kaland",
        ertekeles: "8.0",
        kep: "https://play-lh.googleusercontent.com/MvfGP_wh_Peqm5w0LJEaohuWPItwxkAFoIaj3SeVOc08_OEH468DEGChvF2dCudUj6Xy",
        link: "https://videa.hu/videok/pokember-2002-akcio-amerikai-elizabeth-banks-c7i1TJP2iClTJsFx"
    },
    {
        cim: "Az",
        mufaj: "horror",
        kategoria: "Horror • Thriller",
        ertekeles: "7.3",
        kep: "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_.jpg",
        link: "https://videa.hu/videok/film-animacio/az-1-SgG2KJDRGPdJgW6E"
    },
    {
        cim: "Alien",
        mufaj: "horror",
        kategoria: "Sci-fi • Horror",
        ertekeles: "8.4",
        kep: "https://a.ltrbxd.com/resized/sm/upload/8v/f1/qw/aa/bg7K6VtUG7Ew70gQj6SSroD5d4R-0-230-0-345-crop.jpg?v=a932f9e98e",
        link: "https://videa.hu/videok/film-animacio/alien-1-a-nyolcadik-utas-117-perc-18-even-aluliak-szamara-nem-aj-CxHsobRhUbbE9Gnc"
    },
    {
        cim: "Vissza a jövőbe",
        mufaj: "vigjatek",
        kategoria: "Sci-fi • Vígjáték",
        ertekeles: "8.5",
        kep: "https://m.media-amazon.com/images/I/71n7NWuyrPL._AC_UF894,1000_QL80_.jpg",
        link: "https://videa.hu/videok/film-animacio/vissza-a-jovobe-1-hd-film-animacio-Usbd4N9i7x6WTdlR"
    },
    {
        cim: "Merida, a bátor",
        mufaj: "gyerek",
        kategoria: "Gyerek • Kaland",
        ertekeles: "7.1",
        kep: "https://cdn.centerforinquiry.org/images/blog_images/brave-poster.jpg",
        link: "https://videa.hu/videok/film-animacio/merida-a-bator-2012-TSE8Wq9ray3BuqA5"
    },
    {
        cim: "Halálos iramban",
        mufaj: "akcio",
        kategoria: "Akció • Krimi",
        ertekeles: "6.8",
        kep: "https://static.wikia.nocookie.net/fastandfurious/images/8/87/Fast_One_Poster.jpg",
        link: "https://videa.hu/videok/jarmuvek/halalos-iramban-teljes-film-jarmuvek-WZyWnC91eOSXIkmo"
    },
    {
        cim: "Forrest Gump",
        mufaj: "vigjatek",
        kategoria: "Vígjáték • Romantikus",
        ertekeles: "8.8",
        kep: "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_.jpg",
        link: "https://videa.hu/videok/film-animacio/forest-gump-film-animacio-MURrxvzdMu2rDah7"
    },
    {
        cim: "Vasember",
        mufaj: "akcio",
        kategoria: "Akció • Sci-fi",
        ertekeles: "7.9",
        kep: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
        link: "https://videa.hu/videok/film-animacio/vasember-2.-teljes-film-magyarul-qy58x2TFTbUnua40"
    },
    {
        cim: "Predátor",
        mufaj: "akcio horror",
        kategoria: "Akció • Horror",
        ertekeles: "7.8",
        kep: "https://www.mafab.hu/static/2025/279/09/648120_1759821196.086.jpg",
        link: "https://videa.hu/videok/film-animacio/predator-bwTNKIqV8yd4zN8U"
    },
    {
        cim: "Kaptár",
        mufaj: "akcio horror",
        kategoria: "Akció • Horror",
        ertekeles: "6.6",
        kep: "https://m.media-amazon.com/images/M/MV5BYmI3YjJkN2ItY2ZmYS00Y2JhLTk2YTQtYzE5YWU5ODI1MzJmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        link: "http://videa.hu/videok/film-animacio/a-kaptar-2026-film-animacio-6VVmup5eDTgbQABH"
    },
    {
        cim: "Csillagok háborúja",
        mufaj: "akcio",
        kategoria: "Akció • Kaland",
        ertekeles: "6.5",
        kep: "https://www.komar.de/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/import/vd-046-p.jpg",
        link: "https://videa.hu/videok/film-animacio/star-wars-iv.-csillagok-haboruja-film-animacio-WPjBnMQzDVJtkfpc"
    },
    {
        cim: "Gyűrűk ura",
        mufaj: "fantasy",
        kategoria: "Fantasy • Kaland",
        ertekeles: "8.9",
        kep: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg",
        link: "https://videa.hu/videok/film-animacio/a-gyuruk-ura-1-gyuru-film-animacio-vYiNHmYBmEmBq7ty"
    },
    {
        cim: "WALL•E",
        mufaj: "gyerek",
        kategoria: "Sci-fi • Gyerek",
        ertekeles: "8.4",
        kep: "https://upload.wikimedia.org/wikipedia/en/4/4c/WALL-E_poster.jpg",
        link: "https://videa.hu/videok/film-animacio/walle-teljes-film-magyar-disney-movie-2008-magya-vzsT3MPk5FQWTnj7"
    },
    {
        cim: "Oroszlánkirály",
        mufaj: "gyerek",
        kategoria: "Gyerek • Musical",
        ertekeles: "8.5",
        kep: "https://lumiere-a.akamaihd.net/v1/images/p_thelionking_19752_1_0b9de87b.jpeg",
        link: "https://videa.hu/videok/film-animacio/az-oroszlankiraly-1994-1080p-mhd-mese-DA1X6dywGEK66mV5"
    },
    {
        cim: "Halálsoron",
        mufaj: "fantasy",
        kategoria: "Fantasy • Dráma",
        ertekeles: "8.6",
        kep: "https://www.mafab.hu/static/profiles/2014/293/10/43998_134.jpg",
        link: "https://videa.hu/videok/film-animacio/stephen-king-halalsoron.-1999.-188-perc.-amerikai-fantasztikus-thriller-q6i740aH2WIayv3j"
    },
    {
        cim: "A kör",
        mufaj: "horror",
        kategoria: "Horror • Misztikus",
        ertekeles: "7.1",
        kep: "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/344/2026/02/23171639/AeRpUynJKDpJveklBJipOYrVxCS-683x1024.jpg",
        link: "https://videa.hu/videok/film-animacio/a-kor-2002-amerikai-horror-rhjkEYwaMzfdst7Q"
    }
];

function renderFilmek() {
    let filmListaContainer = document.getElementById("filmLista");
    filmListaContainer.innerHTML = "";

    for (let film of filmek) {
        let filmDiv = document.createElement("div");
        filmDiv.className = "film";
        filmDiv.setAttribute("data-mufaj", film.mufaj);
        filmDiv.setAttribute("data-cim", film.cim);

        filmDiv.innerHTML = `
            <a href="${film.link}" class="film_link" target="_blank">
                <div class="plakat">
                    <img src="${film.kep}" alt="${film.cim}">
                </div>
                <h3>${film.cim}</h3>
                <p>${film.kategoria}</p>
                <span>⭐ ${film.ertekeles}</span>
            </a>
        `;

        filmListaContainer.appendChild(filmDiv);
    }
}

window.onload = renderFilmek;

function ajanlFilm() {
    let valasztottMufaj = document.getElementById("mufaj").value;
    let filmekElemek = document.querySelectorAll(".film");

    for (let film of filmekElemek) {
        let mufaj = film.dataset.mufaj.split(" ");
        if (valasztottMufaj === "mind" || mufaj.includes(valasztottMufaj)) {
            film.style.display = "block";
        } else {
            film.style.display = "none";
        }
    }
}

function kereses() {
    let keresett = document.getElementById("kereses").value.toLowerCase();

    let filmekKartyai = document.querySelectorAll(".film");

    for (let film of filmekKartyai) {
        let cim = film.dataset.cim.toLowerCase();

        if (cim.includes(keresett)) {
            film.style.display = "block";
        } else {
            film.style.display = "none";
        }
    }
}
