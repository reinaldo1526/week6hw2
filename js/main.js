let person1 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[
        {
            oberwise:"Chocolate",
            dunkin:"Vanilla",
            culvers:"All of them",
            mcDonalds:"Sham-rock-shake",
            cupids_candies:"Chocolate Malt"
        }
    ]        
}

function fav_dishes(person1){
    for(let i = 0; i < 3; i++){
        console.log(Object.values(person1)[i])
    }
}



function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () =>{
        console.log(`This is  ${this.name} and he is  ${this.age} years old`)

    }

    this.addAge = () => {
        this.age++
    }
}

let carlos = new Person("Carlos", 21);
let brian = new Person("Brian", 22);

for(let i = 0; i < 3; i++){
    brian.addAge()
}
brian.printInfo()
carlos.printInfo()