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
//conditional2();

// ÖDEV: 
// Kullanıcı tarafından girilen bir sayının negatif mi, pozitif mi ? bunu yazan JS code yazınız.
// (Dikkat: normal  function ile yazınız)

// Kullanıcı tarafından girilen bir sayının tek mi, çift mi olduğunu yazan JS code yazınız.
// (Dikkat:anonymous function ve ternary ile yazınız). 

let oddEvenCalculator = function () {
    let number = prompt('Bir Sayı Giriniz');
    if (number % 2 == 0) {//çift sayı
        console.log(number + " çift sayıdır");
    } else {
        console.log(number + " tek sayıdır");
    }
}
//oddEvenCalculator()

// Kullanıcıdan alınan sayıya göre Haftanın günlerini switch-case ile JS code yazınız?
// Örneğin: kullanıcı 1 girdi: 1=pazartesi yazacak

// debug
/////////////////////////////////////////////
// Loop
let loop = () => {
    console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10);
    // i++
    // ++i
    // i+=1;
    // i=i+1;

    // FOR
    let sum1 = 0;
    for (let i = 1; i <= 10; i++) {
        sum1 = sum1 + i;
    }
    // for(;;){}
    console.log("Toplam: " + sum1);


    // WHILE
    let sum2 = 0;
    let k = 1;
    while (k <= 10) {
        sum2 += k;
        k++;
    }
    // while(true){}
    console.log("Toplam: " + sum2);

    // DO-WHILE
    let sum3 = 0;
    let m = 1;
    do {
        sum3 += m;
        m++;
    } while (m <= 10);
    // while(true){}
    console.log("Toplam: " + sum3);
}
//loop()
//////////////////////////////////////////////////

// Exception Handling
// try-catch
let tryCatchFunction = () => {
    try {
        alertx("DEneme44");
    } catch (err) {
        //console.error(err);
        console.info(err.name);
        //console.log(err.message);
    } finally {
        console.log("db.close");
    }
    console.log("Son satır");

    throw "Hata var";
}
//tryCatchFunction()

/////////////////////////////////////////////////
// break: döngünün çalışmasına izin verme
// return: metotun çalışmasına izin verme
// continue: sadece bir seferlik o şartta çalışma

// return  : metotun çalışmasını durdurur
// break   : döngünün çalışmasını durdurur
// continue: sadece 1 kereye mahsus durur sonra devam eder.

// SORU 1<=userData<=50
// 1 ile Kullanıcı tarafından alınan bitiş sayısına kadar toplama yapan Algoritma örneği
// Örnek: 1<=user 1+2+3+...userdatası
// secret-Key kullanıcı eğer 44 girerse hiç bir işlem yapmadan sistemden çıkış sağlansın onunda haricinde sürekli işlem yapsın
// Eğer Bu sayılardan 7 sayıyı varsa bunu toplayama dahil etmesin (continue)
// Bu sayının en fazla 50'e kadar toplama yapabilir (break)
// bu sayılardan çift olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// bu sayılardan tek olanların kaç tane, sayıların kendisi ve toplamları nedir ?
// Dikkat: Bu algoritmayı Arrow Function ile yapalım.
// (Clean code kuralları çercevesinde ) algoritma yapan program ?

let examplesCommon = () => {

    let commonSum = 0;
    let oddSum = 0, oddCounter = 0, oddNumber = "";
    let evenSum = 0, evenCounter = 0, evenNumber = "";
    let user = Number(prompt("Lütfen sayı giriniz"));

    for (let i = 1; i <= user; i++) {
        if (user == 44) {
            console.log("Secret Key Çıkış yapılıyor");
            break;
        }

        if (user > 50) {
            console.log("50 sayısının üstünü toplama yapma");
            break;
        }

        if (i == 7) {
            console.log("7 toplamaya dahil etmiyorum.");
            continue;
        }

        // ÇİFT
        if (i % 2 == 0) {
            evenCounter++;
            evenSum += i;
            evenNumber = evenNumber + " " + i
        } else {

        }
        commonSum += i;
    } //end loop
    console.log("Genel toplam: " + commonSum);

    console.log("Çift toplam: " + evenSum);
    console.log("Çift adet sayısı: " + evenCounter);
    console.log("Çift sayılar: " + evenNumber);
}
//examplesCommon()

///////////////////////////////////////////////////////////////////////////////
// ÖDEV
// kullanıcıdan aldığımız isim soyisim (boşluk var)
// ilk karakter göstersin sonraki kelimeleri masking (maskeleme yapsın)
// eğer kullanıcı isim ve soyisimi ilk karakteri küçük girmişse büyük olsun mutlaka
// Hamit Mızrak
// H**** MIZ***
// ipucu: charAt, substring, indexOf, döngü, karar mekanizma

/////////////////////////////////////////////
// Dizi
let arrTuto = () => {
    let arr = [5, 3, 1, 2, 6, 7];
    arr[5] = 99;
    console.log(arr);
    console.log(arr[0]);
    console.log(arr[arr.length - 1]);
    //console.log(arr.length);
}
//arrTuto();

let arrFunctionRandom = () => {
    let temp = 0;
    let dizi = [];
    for (let i = 0; i < 5; i++) {
        temp = Math.round(Math.random() * 9 + 1);
        dizi[i] = temp;
    }
    return dizi;
}

let arrNewFunction = () => {
    let arr = arrFunctionRandom();
    console.log(arr);

    // arr.push(44);
    // arr.unshift(23);
    // arr.pop();
    // arr.shift();
    // arr.sort().reverse();

    for (let i = 0; i < arr.length; i++) {
        document.writeln(arr[i] + " ")
    }

    document.writeln("<br/>")
    for (let temp in arr) {
        document.writeln(temp);
    }

    document.writeln("<br/>")
    for (let temp of arr) {
        document.writeln(temp);
    }
}
//arrNewFunction()


/////////////////////////////////////////////
// Object

let objTuto = () => {
    let obje = {
        "name": "Hamit",
        "surname": "Mızrak",
        "fullName": function () {
            console.log(this.name + " " + this.surname);
        },
        "java": {
            "name": "JavaSe",
            "version": 21
        },
        "javaee": [],
    };
    console.log(obje.name.toUpperCase());
    console.log(obje.java.version);
    console.log(obje["java"]["version"]); //nested Object
    console.log(obje.fullName());

    // Object Literal
    obje.isLogin = "true";
    console.log(obje.isLogin);

    // JSON.parse,stringfy
    const objectToString=JSON.stringify(obje);
    const javaData=JSON.parse(objectToString).java.name;
    console.log(javaData);
}
objTuto();

/////////////////////////////////////////////
// callback, promise, asyn-await

