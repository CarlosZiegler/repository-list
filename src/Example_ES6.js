// CLASSES IN JAVASCRIPT
// new Class
class List {
    constructor(){
        this.data = [];
    }
    add(data) {
        this.data.push(data);

        console.log(data);
    }
}

// New Class extends List
class TodoList extends List{

    constructor(){
        super();

        this.usuario= 'Carlos';

    }
    mostraUser(){
        //output:
        console.log(this.usuario);
    }

}
// new Object created
const MinhaLista =  new TodoList();

// event Onclick add new Object
document.getElementById("novotodo").onclick= function () {
    MinhaLista.add('novo todo');
    MinhaLista.mostraUser();
    //output:
    console.log(MinhaLista);
};

//METHOD STATIC
class Math {

    static summ(a,b){
        return a + b;
    }
}
//output:12
console.log(Math.summ(4,8));

//-------------------------------------------------------------------------

// CONST AND LET
// You can a value muter in Const
const usuario = {nome: "Diego"};
usuario.nome = "Cleiton";


//-------------------------------------------------------------------------

// Vectors: MAP

//new Vector
const arr = [1, 3,4,5,8,9];

//New Vector with return from .Map methode
const newArr = arr.map(function (item, index) {
    return item + index;
});

// Output[ 1, 4, 6, 8, 12, 14 ]
console.log(newArr);

//-------------------------------------------------------------------------

// Vectors: REDUCE
//new vector with total sum from Values
const sum = arr.reduce(function (total,next) {
    return total + next;
});
//output:30
console.log('Reduce = '+sum);

//-------------------------------------------------------------------------

// Vectors: Filter
// Return Item if return is True
const filter = arr.filter(function (item) {
    return item % 2 === 0;
});
//output:Array [ 4, 8 ]
console.log(filter);

//-------------------------------------------------------------------------

// Vectors: Find
// Return item case exists or undefined case not exists in Array
const find = arr.find(function (item) {
    return item === 4;
});
//output: 4
console.log(find);

//-------------------------------------------------------------------------

// arrow Function
const arrTest = [1,5,6,8,20];

const map= arrTest.map( item => item*2);
//output:Array(5) [ 2, 10, 12, 16, 40 ]
console.log(map);


//create a Function Test with arrow function
const teste = ()=>{
    return "Teste"
};

//function return a simple String
const teste2 =()=> 'teste';

//function return a Array
const teste3 = ()=> [1,2,3,4];

//Function return a Object
const teste4 = ()=> ({name : 'Carlos'});

//-------------------------------------------------------------------------

// Pattern Value in param
function summAB(a=0,b=6) {
    return a+b;
}
//output: 7
console.log(summAB(1));
//output: 6
console.log(summAB());

const summBA = (a=0, b=2) => a+b;
//output: 3
console.log(summBA(1));
//output: 2
console.log(summBA());

//-------------------------------------------------------------------------

//unstructuring

const user = {
    name: "Carlos",
    age : 34,
    adress: {
        city: 'Berlin',
        Street: 'Hofzeichendamm',
        num: 43,
    },
};
//output : Object { name: "Carlos", age: 34, adress: {…} }
console.log(user);

const {name , age , adress : {city}} = user;
//output: Carlos
console.log(name);
//output: 34
console.log( age);
//output: Berlin
console.log(city)

//unstructuring in Params
function userShow({name, age}){

    console.log(name, age);

}
//output: Carlos 34
userShow(user);

//-------------------------------------------------------------------------
//REST OPERATOR is a rest attributes from object saved

const user2 = {
    firstname: "Carlos",
    age : 34,
    firma: "Webziegler"
};

//save in firstname the name of user2 and the rest in rest variable:
const {firstname, ...rest } = user2;
//output:Carlos
console.log(firstname);
//output:Object { age: 34, firma: "Webziegler" }
console.log(rest);


//rest operator in Arrays
const array2 = [1,2,3,4,5];
const [a,b, ...c] = array2;
//output: 1
console.log(a);
//output: 26
console.log(b);
//output: [ 3, 4, 5 ]
console.log(c);

//rest operator in Params of Functions
function summ3(...params) {
    return params.reduce((total,next)=>total+next);
}
//output: 26
console.log(summ3(1,3,4,5,6,7))

//rest operator in Params of Functions
function summ4(a,b, ...params) {
    return a+b;
}
//output 4
console.log(summ4(1,3,4,5,6,7))



//-------------------------------------------------------------------------
//SPREAD OPERATOR is a join attributes from object saved

const arrOne = [1,2,3];
const arrTwo = [4,5,6];

const arraTree= [ ...arrOne, ...arrTwo];

//output:[ 1, 2, 3, 4, 5, 6 ]
console.log(arraTree);


const userOne = {
    firstname: "Carlos",
    age : 34,
    firma: "Webziegler"
};
//copy all Field and changeg field name for value = Gabriel
const userTwo =  {...userOne,firstname:'Gabriel'};
//output: { firstname: "Gabriel", age: 34, firma: "Webziegler" }
console.log(userTwo);



//-------------------------------------------------------------------------
//Templates Literals can you Variable and String concat.

const nameOne= "Carlos";
const ageOne= 34;
//output : My name is Carlos and my age is 34
console.log('My name is ' + nameOne+' and my age is' + ageOne );
//output: My name is Carlos and my age is 34
console.log(`My name is ${nameOne} and my age is ${ageOne}`);

//-------------------------------------------------------------------------
//Object Short Sintax

const lastname = 'Ziegler';
const ages = 34;

const superUser = {
    lastname,
    ages,
    firma: "Webziegler"
};

console.log(superUser);


// Path Organization

// SRC
// Public



