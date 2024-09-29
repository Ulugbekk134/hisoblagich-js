//1
// var number = prompt("Son kiriting ");
// var newNumber = number.toString().split('').reverse().join('');
// alert(newNumber);
// console.log(newNumber);

//2
// var son = Number(prompt("Son kirirting "));
// if (son > 99 && son <= 999) {
//     let neww = son.toString();
//     let strnumber = neww[1] + neww[0] + neww[2];
//     alert(strnumber);
// } else console.log("uch honali son kiriting");

//3
// var son = Number(prompt("Son kirirting "));
// if (son > 99 && son <= 999) {
//     let neww = son.toString();
//     let strnumber = neww[0] + neww[2] + neww[1];
//     alert(strnumber);
// } else console.log("uch honali son kiriting");

//4

// var son = Number(prompt("Son kirirting "));
// if (son <= 9999) {
//     let neww = son.toString();
//     let strnumber = neww[0];
//     alert(strnumber);
// } else console.log("uch honali son kiriting");

//uy ishi
//5

let minutt = Number(prompt("Kun boshidan boshlab qancha minut o'tganini yozsangiz secundga hisob lab beraman"));
if (minutt > 0 && minutt <= 999) {
    let sekundlar = minutt * 60;
    alert("Kun boshidan boshlab to'liq " + sekundlar + "sekund o'tdi");
} else
    alert(
        "To'g'ri minut kiriting iltimos o'yin qilmang o'yin qilsangiz dasturimiz bizilib qoladi♻️😒😓"
    );

//6

let minuts = Number(prompt("Kun boshidan boshlab qancha soat o'tgani yozing secunga aylantiramaiz"));
if (minuts > 0 && minuts <= 999) {
    let sekundlarr = minuts * 3600;
    alert("Kun boshidan boshlab to'liq " + sekundlarr + "secund o'tdi");
} else
    alert(
        "To'g'ri minut kiriting iltimos o'yin qilmang o'yin qilsangiz dasturimiz bizilib qoladi♻️😒😓"
    );

//7







//7
//Foydalanuvchidan qancha soat o'tganini so'raymiz
let soat = Number(prompt("Kun boshidan beri qancha soat o'tdi?"));

// Soatni tekshiramiz: 0 dan katta va 24 soatdan oshmasligi kerak
if (soat >= 0 && soat <= 24) {
    // Soatni minutga va so'ngra sekundga aylantiramiz
    let minut = soat * 60; // 1 soat = 60 minut
    let sekundlar = minut * 60; // 1 minut = 60 sekund
    let qolganSekundlar = sekundlar % 60; // Qolgan sekundlarni hisoblaymiz

    alert(
        "Kun boshidan boshlab to'liq " +
        Math.floor(sekundlar / 60) + // To'liq minutlarni ko'rsatamiz
        " minut va " +
        qolganSekundlar +
        " sekund o'tdi."
    );
} else {
    // Xatolik xabarini chiqaramiz
    alert(
        "To'g'ri soat kiriting, iltimos. O'yin qilmang, aks holda dastur buzilib qoladi! ♻️😒😓"
    );
}
