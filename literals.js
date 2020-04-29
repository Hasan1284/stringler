// objeckt literals
let val;
let person = {
    firstName : 'hasan',
    lastName : 'aslan',
    age : 7,
    hobbies : ["music", 'game'],
    adress : {
        city : 'izmir',
        country : 'türkiye',
    },
    getBirthYear : function(){
        return 2018- this.age;
    }
};

val = person;
val = person.firstName;
val = person.lastName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[2];
val = person.adress
val = person.adress.city
val = person.adress['city'];
val = person.getBirthYear();




console.log(person);
console.log(typeof person);
 
let people = [
    {firstName: 'çınar',lastName: 'turan'}
    {firstName: 'sena',lastName: 'turan'}
    {firstName: 'seda',lastName: 'turan'}
]


val = people[2];
val = people[2].firstName;

for(let i =0; i<people.length;i++){
    console.log(people[i].firstName);

}

console.log(val);
console.log(typeof people);