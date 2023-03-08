type Semester = "Ganjil" | "Genap"
type EntryYear = 2017 | 2018 | 2019 | 2020 | 2021 | 2022
type Department = "Teknik Informatika" | "Teknik PWK" | "Sistem Informasi"

interface Student {
    id: number,
    username: string,
    password: string,
    fullName: string,
    semester: Semester,
    address: string,
    phone: string,
    entryYear: EntryYear,
    department: Department
}

class StudentAccount {
    id: number
    username: string
    password: string
    fullName: string
    semester: Semester
    address: string
    phone: string
    entryYear: EntryYear
    department: Department

    constructor( username: string, password: string, fullName: string, semester: Semester, address: string, phone: string, entryYear: EntryYear, department: Department ){
        this.username = username
        this.password = password
        this.fullName = fullName
        this.semester = semester
        this.address = address
        this.phone = phone
        this.entryYear = entryYear
        this.department = department
    }
}