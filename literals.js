// // objeckt literals
// let val;
// let person = {
//     firstName : 'hasan',
//     lastName : 'aslan',
//     age : 7,
//     hobbies : ["music", 'game'],
//     adress : {
//         city : 'izmir',
//         country : 'türkiye',
//     },
//     getBirthYear : function(){
//         return 2018- this.age;
//     }
// };

// val = person;
// val = person.firstName;
// val = person.lastName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[2];
// val = person.adress
// val = person.adress.city
// val = person.adress['city'];
// val = person.getBirthYear();




// console.log(person);
// console.log(typeof person);
 
// let people = [
//     {firstName: 'çınar',lastName: 'turan'}
//     {firstName: 'sena',lastName: 'turan'}
//     {firstName: 'seda',lastName: 'turan'}
// ]


// val = people[2];
// val = people[2].firstName;

// for(let i =0; i<people.length;i++){
//     console.log(people[i].firstName);

// }

// console.log(val);
// console.log(typeof people);

// objeck literal örnekleri

/**
 * Araç bilgileri
 * 
 * id: bmw116d_1234
 * model: 116d
 * yıl: 2015
 * renk : white
 * servis kayıtları
 * id : bmw116_1234_1 tarih : 30.01.2016 
 * km : 13000 toplam ücret : 900
 * 
 * servis detayı :
 * id : 1. işlem : yağ değişimi ücret : 300
 * id : 2. işlem : filtre değişimi ücret : 300
 * id : 3. işlem : fren hidroliği : 300
 * 
 * id : bmw116_1234_2 tarih : 10.01.2017 
 * km : 28000 toplam ücret : 1800
 * 
 * servis detayı :
 * id : 1. işlem : yağ değişimi ücret : 350
 * id : 2. işlem : filtre değişimi ücret : 350
 * id : 3. işlem : fren hidroliği : 300
 * id : 4. işlem : balata değişimi : 800
 */

 var aracBilgileri = {
     id : 'bmw116d_123',
     model : 'bmw 116d',
     yil :2015,
     renk : 'beyaz',
     servisKayıtları :[
         {
            id: 'bmw116d_123_1',
            tarih : '20.01.2016',
            km : '13000',
            ucret : 1800,
            detay : [
                { id : 'bmw116d_123_1_1', aciklama : 'yağ değişimi', ucret : 300},
                { id : 'bmw116d_123_1_2', aciklama : 'filtre değişimi', ucret : 300},
                { id : 'bmw116d_123_1_3', aciklama : 'fren hidroliği', ucret : 300}
            ]

         },
         {
            id: 'bmw116d_123_2',
            tarih : '10.01.2017',
            km : '28000',
            ucret : 900,
            detay : [
                { id : 'bmw116d_123_2_1', aciklama : 'yağ değişimi', ucret : 350},
                { id : 'bmw116d_123_2_2', aciklama : 'filtre değişimi', ucret : 350},
                { id : 'bmw116d_123_3_3', aciklama : 'fren hidroliği', ucret : 300},
                { id : 'bmw116d_123_3_4', aciklama : 'balata değişimi', ucret : 800}
            ]
          } 
        

]
}