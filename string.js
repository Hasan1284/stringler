// // // /** Strings

// // // const firstName = "Hasan"
// // // const lastName = "Aslan"
// // // const age = 35;
// // // let hobbies = "sinema,spor,kitap,yazılım"
// // // let val;


// // // // split meto ile stringin içindeki birden fazla verilen öğeyi ayırıp arraya çeviriyor
// // // val = hobbies.split(",");

// // // // String concatenation birleştirme işlemi



// // // val = firstName + " " + lastName;
// // // val = "Hasan";
// // // val += " Aslan";

// // // val = "Benim adım"+ firstName+ " "+ "ve yaşım " + age + " burda yaşıyorum" 

// // // // string concat 
// // // val = firstName.concat(",",lastName);

// // // // string uppercase- lowercase

// // // //val = val.toUpperCase();

// // // // string replace karakter değiştirmek istersek kulanılıyor
// // //  val = " "+val.replace("Hasan","yılmaz"); 
// // // // string trim metodu 
// // // // val = val.trim();

// // // //val = val.toLowerCase();
// // // // val = val.indexOf("a");
// // // //val = val[1];
// // // // string length
// // // //val = val.length;

// // // // substring stringden karakter çıkarma
// // // // val = val.substring(2,6);
// // // // slice 

// // // // val = val.slice(4);




// // // console.log(val);
// // // console.log(typeof val);


// // // // Template literals

// // // const fullName = "Sena Turan";
// // // const city = "kocaeli";
// // // const yearOfBirth = 1999;

// // // let val;


// // // /**val = "my name is "+fullName+
// // //        " I am "+ (2018-yearOfBirth)+" years old "+"and I live in "+city;
       


// // // val = 'my name is ${fullName} I am ${(2018-yearOfBirth>=18)} years old and I live in ${city}';



// // // console.log(val);


// // // // diziler  arrays

// // // let names = ['çınar','sena','ada','yigit'];
// // // let years = [2017,1999,2012,2010]
// // // let mix = ['sadık','turan',1983,null,undefined,['sinema','kitap']];

// // // console.log(names.length);
// // // console.log(names);
// // // console.log(typeof names);
// // // console.log(years);
// // // console.log(mix);



// // // var arr = ["bmw","mersedes","opel","mazda"];
// // // // var arr2 = new Array("bmw","mersedes","opel","mazda")

// // // console.log(arr);
// // // // console.log(arr2);

// // // console.log(arr.length);

// // // console.log(arr[0]);
// // // console.log(arr[arr.length-1]);

// // // // arr[4] = 'Renault';
// // // arr[arr.length] = "renault";

// // // arr.push("toyota");
// // // arr.sort();

// // // console.log(arr);
// // // */
// // // // switch statements

// // // let category = 'beyaz esya';

// // // switch(category){
// // //        case 'telefon':
// // //               console.log('telefon kategorisi');
// // //        break;
              
// // //        case 'bilgisayar':
// // //               console.log('bilgisayar kategorisi');
// // //        break;

// // //        default:
// // //               console.log('yanlış kategori');

// // // 

// // let day;

// // //console.log(new Date().getDay())
// // switch(new Date().getDay()){
// //        case 3:
// //               day = 'çarşamba';
// //        break;
// //        case 4:
// //               day = 'persembe';
// //        break;
// //        case 5:
// //               day = 'cuma';
// //        break;
// //        case 6:
// //               day = 'cumartesi';
// //        break;
// //        case 0:
// //               day = 'pazar';
// //        break;

// // }

// // console.log('bugun günlerden ' + day)

// // kosul ifadeleri ve uygulamaları

// // 20/04/2017 tarihinde trafige cıkan arasıda bakım uyarılarını

// // 1. bakım :1 .yıl
// // 2. bakım : 2. yıl
// // 3. bakım : 3. yıl

// var trafigeCikis = new Date('04/20/2019');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();
// var trafiktekiGun =Math.floor(trafiktekiMs/(1000*60*60*24));

// if(trafiktekiGun<365){
//        console.log('1.servis bakım süresi geldi');
// }else if(trafiktekiGun>365 && trafiktekiGun<=365*2){
//        console.log('2.servis bakım süresi geldi');
// }else if(trafiktekiGun>365*2 && trafiktekiGun<=365*3){
//        console.log('3.servis bakım süresi geldi');
// }else{
//        console.log('bilinmeyen bir süre')
// }


// console.log(trafiktekiGun);

var result = prompt('who is there?');

if(result == 'cancel'){
       console.log('cancelled');
}else if(result == 'Admin'){
       console.log('welcome admin');

       var password = prompt('enter your code: ');

       if(password == 'cancel'){
              console.log('cancelled');
       }else if(password == '1234'){
              console.log('welcome Admin');
       }else{
              console.log('wrong password');
       }

}else{
       console.log('ı dont now you');
}


