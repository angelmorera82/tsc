//TIPOS DE DATOS TYPE SCRIPT

//BASIC
let myTypeNumero: number = 40;
let myTypeString: string = "Angel";
let myTypeBooleando: boolean = true;


//ARRAY
let arrayNumber: number[] = [1,2,3];
//OTRA FORMA DE DECLARARLO
//let arrayNumber1: Array<number> = [1,2,3];

let arrayString: string[] = ["uno","dos","tres"];

let arrayAny: any[] = [1,"uno", true];

//TUPLE
let arrayTuple: [string, number, boolean] = ["uno" , 1 , true];

//TUPLE DE ARRAY
let tupleArray: [string , number][];

tupleArray = [
    ['uno' , 1],
    ['dos' , 2],
    ['tres' , 3]
]

//typescript asigna el nombre a una variable en dependencia del valor incial de la variable

let variable;

//en este caso le puedo asignar un numero ahora y un string luego

variable = 99;

variable = 'test';

//pero si inicializo la variabla

let variable2 = 'string';

//esto daria error
//variable2 = 99;


//COMPOSICION DE TIPOS



