//alert("denemöe999")
/*
sd
f
sdf
sd
f
sd */
// alert("pop-up1");
// window.alert("pop-up2");
// document.writeln("Sayfada göster<br/>");
// window.document.writeln("Sayfada göster");

// console.log("console log");
// console.error("console log");
// console.warn("console log");
// console.info("console log");

// single thread

// var degiskenAdi=44;
// console.log(degiskenAdi);
// console.log(typeof degiskenAdi);

// var degiskenAdi55=44.23;
// console.log(degiskenAdi55);
// console.log(typeof degiskenAdi55);

// var $degiskenAdi55="Merhabalar Güzel insanlar";
// console.log($degiskenAdi55);
// console.log(typeof $degiskenAdi55);

// var _$degiskenAdi55=true;
// console.log(_$degiskenAdi55);
// console.log(typeof _$degiskenAdi55);

//var 44&~_$degiskenAdi55=true;

// var _$degiskenAdi55=[];
// var _$degiskenAdi55={};

// Hoisting
// carName="Audi";
// var carName;

///////////////////////////////////////////// 
// let
// let deneme=44;
// console.log(deneme);
// deneme=66;
// console.log(deneme);

// const
// const deneme99=14525;
// deneme99=66666;

///////////////////////////////////////////// 
// Operatör
// + - * / % ++ --
// &&=VE ||=VEYA  ! DEĞİL
// let number1=12;
// let number2=5;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

// =   ATAMA
// ==  EŞİT (Türüne bakmadan)
// === EŞİT (Türüne bakarak)

///////////////////////////////////////////// 
// let userName=Number(prompt("Lütfen sayı giriniz"));
// console.log(userName);

///////////////////////////////////////////// 
// NaN: Not A Number
// console.log(3/4);
// console.log(3/"asd");

// // infinity
// console.log(0/5);
// console.log(5/0);

// // undefined
// let data;
// console.log(data);

// new 
// null
// zero
/////////////////////////////////////////////
//Örnek-1
// Kullanıcıdan aldığımız 2 sayıyı toplayan JS kodu yazınız ?

//Örnek-2
/* 
Kullanıcıdan aldığımız sayıyı dereceden fahrenhyat'a çeviren JS kodu yazınız ?
Formül: (derece*9/5)+32 
*/
// let degree, fahrenhayt;
// degree = Number(prompt("Lütfen derece için sayı giriniz"));
// fahrenhayt = ((degree * 9 / 5) + 32);
// console.log(degree + " derece: " + fahrenhayt + " fahranhayttır");
// console.log(`${degree} derece: ${fahrenhayt} fahranhayttır`);

//Örnek-3
// y=3x+4k ==>1.dereceden 2 bilinmeyenli denklem algoritması
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?

// örnek-4 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))

/////////////////////////////////////////////
// Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.abs(-25));
// console.log(Math.pow(6,2));

// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.1));
// console.log(Math.round(3.4));
// console.log(Math.round(3.5));

// console.log(Math.min(4,5,6,1,1000));
// console.log(Math.max(4,5,6,1,1000));

// console.log(Math.sin(45));
// console.log(Math.asin(1));

// console.log(Math.floor(Math.random()*9+1));

// Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
// NOT: cast kullalım ?

// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

/////////////////////////////////////////////
// String
// let vocabulary="Javascript ÖĞreniyorum Javascript ";
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);

// console.log(vocabulary.toLowerCase());
// console.log(vocabulary.toUpperCase());

// console.log(vocabulary.startsWith("J"));
// console.log(vocabulary.endsWith(" "));

// console.log(vocabulary.charAt(0));
// console.log(vocabulary.indexOf("Javascript"));
// console.log(vocabulary.lastIndexOf("Javascript"));

// console.log(vocabulary.substring(1));
// console.log(vocabulary.substring(0,3)); // 0<=X<=3-1

// vocabulary=vocabulary.concat("sona ekle");
// console.log(vocabulary); 

// vocabulary=vocabulary.replace(vocabulary,"yeni değiştir");
// console.log(vocabulary); // 0<=X<=3-1

// ÖDEV NOT:5 adımı beraber yapalım
// kullanıcı tarafından girilen bir kelimenin (prompt)
//let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith()) 
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())



/////////////////////////////////////////////
// Function

// // 1- parametresizReturnsuz
// function parametresizReturnsuz() {
//     console.log("parametresiz Returnsuz");
// }
// parametresizReturnsuz();

// // 2- parametresizReturnsuz
// function parametreliReturnsuz(number) {
//     console.log("parametreli Returnsuz: " + Math.pow(number, 2));
// }
// parametreliReturnsuz(6);

// // 3- parametresizReturnlu
// function parametresizReturnlu() {
//     return "parametresiz Returnlu";
// }
// const data3 = parametresizReturnlu();
// console.log(data3);

// // 4- parametreliReturnlu
// function parametreliReturnlu(user) {
//     return "parametreli Returnlu: "+ user
// }
// const data4 = parametreliReturnlu("Java Öğreniyorum");
// console.log(data4);


//////////////////////////////////////////////

// // Normal Function 
// function normal() {
//     console.log("normal");
// }
// normal();

// // Anonymous Function 
// const anonymous = function () {
//     console.log("anonymous");
// }
// anonymous();

// // Arrow Function
// const arrow = () => {
//     console.log("arrow");
// }
// arrow();

/////////////////////////////////////////////
// conditional
let conditional = () => {
    let number = 10;
    if (number >= 5) {
        console.log("5'ten büyük");
    } else {
        console.log("5'ten Küçük");
    }

    let ternary = (number >= 5) ? "5'ten büyük" : "5'ten Küçük";
    console.log(ternary);
}
//conditional();

/////////////////////////////////////////////
// conditional
let conditional2 = () => {
    let number = 3;
    if (number == "1") {
        console.log("sayı 1");
    } else if (number === 2) {
        console.log("sayı 2");
    } else if (number === 3) {
        console.log("sayı 3");
    } else if (number === 4) {
        console.log("sayı 4");
    } else if (number === 5) {
        console.log("sayı 5");
    } else {
        console.log("1<=X<=5 dışındadır");
    }

    switch (number) {
        case 1:
            console.log("sayı 1");
            break;
        case 2:
            console.log("sayı 2");
            break;
        case 3:
            console.log("sayı 3");
            break;
        case 4:
            console.log("sayı 4");
            break;
        case 5:
            console.log("sayı 5");
            break;

        default:
            console.log("1<=X<=5 dışındadır");
            break;
    }
}
conditional2();

// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız)

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

/////////////////////////////////////////////
// Loop
// break return continue
// try-catch
// debug

/////////////////////////////////////////////
// Dizi

/////////////////////////////////////////////
// Object

/////////////////////////////////////////////
// callback, promise, asyn-await

