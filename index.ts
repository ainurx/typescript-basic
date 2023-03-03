let firstName = 'ainur'
let age: number
age = 24

console.log(`Halo ${firstName}`)

// create interface to define key types for obj
interface User{
    id: number,
    fullName: string
}

const newUser: User = {
    id: 1,
    fullName: 'Ainur Rahmat'
} 

class UserAccount{
    id: number
    fullName: string
    
    constructor(id: number, fullName: string){
        this.id = id
        this.fullName = fullName
    }
}

const user: User = new UserAccount(1, "Viramelia")
console.log(user)

const createUser = (params: User): User =>{
    const newUser = {
        ...params
    }

    return newUser
}

console.log(createUser({id: 3, fullName: 'Gunso'}))

type Semester = "Ganjil" | "Genap"

let semester: Semester

semester = "Ganjil"
console.log(semester)