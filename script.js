const filmek = [
    {
        cim: "Így neveld a sárkányodat",
        mufaj: "fantasy"
    },
    {
        cim: "Shrek",
        mufaj: "vigjatek"
    },
    {
        cim: "Pókember",
        mufaj: "akcio"
    },
    {
        cim: "Az",
        mufaj: "horror"
    },
    {
        cim: "Alien",
        mufaj: "horror"
    },
    {
        cim: "Vissza a jövőbe",
        mufaj: "vigjatek"
    },
    {
        cim: "Merida, a bátor",
        mufaj: "gyerek"
    },
    
    {
        cim: "Halálos iramban",
        mufaj: "akcio"
    },
    {
        cim: "Forrest Gump",
        mufaj: "vigjatek"
    },
    {
        cim: "Vasember",
        mufaj: "akcio"
    },
    {
        cim: "Predátor",
        mufaj: "horror"
    },    

    {
        cim: "A kaptár",
        mufaj: "akcio"
    },
    {
        cim: "Csillagok háborúja",
        mufaj: "akcio"
    },
    {
        cim: "Gyűrűk ura",
        mufaj: "fantasy"
    },
    {
        cim: "WALL-E",
        mufaj: "gyerek"
    },


    
];

function ajanlFilm() {

    let valasztottMufaj = document.getElementById("mufaj").value;

    let lehetosegek = filmek;

    if (valasztottMufaj !== "mind") {
        lehetosegek = filmek.filter(
            film => film.mufaj === valasztottMufaj
        );
    }

    let film = lehetosegek[
        Math.floor(Math.random() * lehetosegek.length)
    ];

    document.getElementById("ajanlas").innerHTML =
        "🎬 Neked ezt ajánljuk: <strong>" + film.cim + "</strong>";
}


function kereses() {

    let keresett = document
        .getElementById("kereses")
        .value
        .toLowerCase();

    let filmekKartyai = document.querySelectorAll(".film");

    filmekKartyai.forEach(film => {

        let cim = film.dataset.cim.toLowerCase();

        if (cim.includes(keresett)) {
            film.style.display = "block";
        } else {
            film.style.display = "none";
        }

    });
}
