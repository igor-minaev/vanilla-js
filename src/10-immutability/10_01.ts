export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}
export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = { id: number, title: string };
export type WithCompaniesType = {
    companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    //copy.hair = u.hair / power
    return copy

}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {...u.address, city: city}
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {...u.address, house: house}
    }
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptopName: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptopName}
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        books: [...u.books, book]
    }
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {
        ...u, books: u.books.map(b => b === oldBook ? newBook : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookForDelete: string) {
    return {
        ...u, books: u.books.filter(b => b !== bookForDelete)
    }
}

export const updateCompanyTitle = (u: WithCompaniesType, id: number, newTitle: string) => (
    {
        ...u, companies: u.companies.map(c => c.id === id ? {...c, title: newTitle} : c)
    }
)

export const updateCompanyTitle2 = (companies: { [key:string]:Array<CompanyType> }, userName: string, companyId: number, newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => companyId === c.id ? {...c, title: newTitle} : c)


    return companyCopy
}