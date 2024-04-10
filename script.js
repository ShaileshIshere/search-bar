var input = document.querySelector("input");
var data = [
    {name: "yato", src: "https://i.pinimg.com/236x/ef/1d/53/ef1d5307d26ebfa7c7c5baa83bc41192.jpg"},
    {name: "ishtar", src: "https://i.pinimg.com/236x/75/5a/31/755a3100958135643308a1f726165fc4.jpg"},
    {name: "katen kyokotsu", src: "https://i.pinimg.com/236x/25/11/c9/2511c9e325a6934cfa483e15b912778f.jpg"},
    {name: "yamato", src: "https://i.pinimg.com/236x/52/b5/b3/52b5b30000d368188acb3b739588d8e6.jpg"},
    {name: "yamamoto", src: "https://i.pinimg.com/236x/3f/8f/0f/3f8f0f760830558660003a0b6847cc97.jpg"},
    {name: "shinobu", src: "https://i.pinimg.com/236x/8e/03/24/8e032413f320d542f95925c041d69ded.jpg"},
    {name: "katsuki", src: "https://i.pinimg.com/236x/eb/4e/29/eb4e29db070f171157b4db723145d0c3.jpg"},
    {name: "shunsui", src: "https://i.pinimg.com/236x/1e/62/4f/1e624fcbf313ac95d5a10ba77d03fb94.jpg"},
    {name: "kisuke", src: "https://i.pinimg.com/236x/b0/c5/bd/b0c5bd7a651b92f36e2c8518dc4562b8.jpg"},
    {name: "ishane", src: "https://i.pinimg.com/236x/33/9b/cd/339bcdbfc40fbd912517159b97901ef2.jpg"},
    {name: "rukiya", src: "https://i.pinimg.com/236x/30/88/66/3088661233845c3ff6f1fc9a302f33a0.jpg"},
    {name: "ishida", src: "https://i.pinimg.com/236x/12/b5/4c/12b54ca54f843798d796c690907194ac.jpg"},
    {name: "ishkandar", src: "https://i.pinimg.com/236x/92/ec/5c/92ec5c193c9c69db554c8d67920019ed.jpg"},
    {name: "renji", src: "https://i.pinimg.com/236x/ff/90/21/ff90219888700845c89af179694920fb.jpg"},
    {name: "Shikamaru", src: "https://i.pinimg.com/236x/6e/ee/ac/6eeeac066d3bb2beff680f95d531ee1e.jpg"},
    {name: "kaido", src: "https://i.pinimg.com/236x/18/84/c3/1884c3be265e39e47f756671607a44bd.jpg"},
    {name: "riruka", src: "https://i.pinimg.com/236x/ee/17/62/ee17621f70ff93f6d5f5dbf8a894c6be.jpg"},
    {name: "shinji", src: "https://i.pinimg.com/236x/0f/b4/25/0fb425cb3d2bf09a5cd221c3f0006eb8.jpg"},
];

var pers = "";
data.forEach(function(elem) {
    pers += `<div class="char">
                <div class="img">
                    <img src= ${elem.src}>
                </div>
                <h3>${elem.name}</h3>
            </div>`;
});

document.querySelector(".characters").innerHTML = pers;

input.addEventListener("input", function() {
    var matching = data.filter(function(elem) {
        return elem.name.startsWith(input.value);
    });
    var findUser = "";
    matching.forEach(function(elem) {
        findUser += `<div class="char">
                    <div class="img">
                        <img src= ${elem.src}>
                    </div>
                    <h3>${elem.name}</h3>
                </div>`;
    });
    document.querySelector(".characters").innerHTML = findUser;
})