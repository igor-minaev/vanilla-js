import {
    addNewBooksToUser,
    makeHairStyle,
    moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to mackbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        }
    }

    const upgradedUser = upgradeUserLaptop(user, 'Mackbook')

    expect(user).not.toBe(upgradedUser)
    expect(user.address).toBe(upgradedUser.address)
    expect(user.laptop).not.toBe(upgradedUser.laptop)
    expect(user.laptop.title).toBe('Zenbook')
    expect(upgradedUser.laptop.title).toBe('Mackbook')
})

test('upgrade house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(userCopy.address.house).toBe(99)

})


test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const readUser = addNewBooksToUser(user, 'ts')

    expect(user).not.toBe(readUser)
    expect(user.address).toBe(readUser.address)
    expect(user.laptop).toBe(readUser.laptop)
    expect(user.books).not.toBe(readUser.books)
    expect(readUser.books[4]).toBe('ts')
    expect(user.books.length).toBe(4)

})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const updateUserBook = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(updateUserBook)
    expect(user.address).toBe(updateUserBook.address)
    expect(user.laptop).toBe(updateUserBook.laptop)
    expect(user.books).not.toBe(updateUserBook.books)
    expect(updateUserBook.books[2]).toBe('ts')
})
test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const removeUserBook = removeBook(user, 'js')

    expect(user).not.toBe(removeUserBook)
    expect(user.address).toBe(removeUserBook.address)
    expect(user.laptop).toBe(removeUserBook.laptop)
    expect(user.books).not.toBe(removeUserBook.books)
    expect(removeUserBook.books[2]).toBe('react')
})

test('update name of company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Zenbook'
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}]
    }
    const updateCompanyUser = updateCompanyTitle(user, 1, "Epam") as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(updateCompanyUser)
    expect(user.address).toBe(updateCompanyUser.address)
    expect(user.laptop).toBe(updateCompanyUser.laptop)
    expect(user.companies).not.toBe(updateCompanyUser.companies)
    expect(updateCompanyUser.companies[0].title).toBe('Epam')
})

test('update company', () => {

    let companies = {
        'Dimych': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}]
    }

    const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'Epam')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('Epam')


})