// -----------------------Intersection Types---------------------------

// type Admin = {
//   name: string
//   privileges: string[]
// }
// type Employee = {
//   name: string;
//   startDate: Date;
// }

// interface Admin {
//   name: string;
//   privileges: string[]
// }
// interface Employee {
//   name: string
//   startDate: Date
// }

// type ElevatedEmployee = Admin & Employee
// interface IElevatedEmployee extends Employee, Admin { }

// const e1: IElevatedEmployee = {
//   name: 'Anton',
//   privileges: ['drop-all'],
//   startDate: new Date()

// }

// ----------------Type Guards----------------------------------
// type ComplexType = string | number

// function combine(a: ComplexType, b: ComplexType) {
//   return a + b
// }        // ERROR

// function combine(a: ComplexType, b: ComplexType) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString()
//   }
//   return a + b;
// }

// ---------------------Type Guards--------------------------------
// type Admin = {
//   name: string
//   privileges: string[]
// }
// type Employee = {
//   name: string
//   startDate: Date
// }

// type UnknownObject = Employee | Admin;
// function showFields(e1: UnknownObject) {
//   console.log(e1.name)
//   if ('privileges' in e1) {
//     console.log(e1.privileges)
//   }
//   if ('startDate' in e1) {
//     console.log(e1.startDate)
//   }
// }

// --------------------------------------------------------------
// class Car {
//   drive() {
//     console.log('Driving...');
//   }
// }
// class Truck {
//   drive() {
//     console.log('Driving a truck')
//   }
//   loadCargo(amount: number) {
//     console.log('Loading cargo...' + amount)
//   }
// }
// type Vehicle = Car | Truck;
// const v1 = new Car();
// const v2 = new Truck();
// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000)
//   }
// }
// useVehicle(v1)
// useVehicle(v2)

// ----------------------------TYPE CASTING---------------------------
// const input = <HTMLInputElement>document.getElementById('input Email')!;
// const input = document.getElementById('inputEmail')

// if (input) {
//   (input as HTMLInputElement).value = 'test@test.ts'

// }

// --------------------------INDEX PROPERTIES----------------------
// interface Person {
//   name: string
//   [y: string]: string
// }
// const user: Person = {
//   name: 'Alex',
//   gender: 'Man',
//   country: "Ukraine"
// }

// --------------------OPTIONAL CHAINING---------------------
// interface Person {
//   name: string
//   additionInfo?: {
//     someInfo: string
//   }
// }

// const user: Person = {
//   name: 'Alex'
// }
// console.log(user?.additionInfo?.someInfo)

// -------------------Nullish Coalescing------------------------------
// const userInput = ''
// let store = userInput || 'DEFAULT'
// console.log(store)
// store = userInput ?? "default"
// console.log(store)

// --------------------function overloads--------------------------------
// type Combinable = string | number;
// function add(a: number, b: number): number
// function add(a: string, b: string): number
// function add(a: string, b: number): string
// function add(a: number, b: string): string
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString()
//   }
//   return a + b
// }

type AdminType = {
  type: 'admin'
  name: string
}

type UserType = {
  type: 'user'
  name: 'string'
}

function checkUser(name: string, type: 'admin'): AdminType
function checkUser(name: string, type: 'user'): UserType
function checkUser(name: string, type: 'admin' | 'user') {
  if (type === 'admin') {
    return {
      name,
      type: 'admin'
    }
  }

  return {
    name,
    type: 'user'
  }
}

const user = checkUser('Nikita', 'user')
const admin = checkUser('Tonya', 'admin')

