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