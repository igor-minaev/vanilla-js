import {CityType} from "../02/02_02";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                id: 1,
                buildetAt: 2012,
                repaired: false,
                address: {number: 100, street: {title: 'White Street'}}
            },
            {
                id: 2,
                buildetAt: 2008,
                repaired: false,
                address: {number: 100, street: {title: 'Happy Street'}}
            },
            {
                id: 3,
                buildetAt: 2020,
                repaired: false,
                address: {number: 101, street: {title: 'Happy Street'}}
            },
        ],
        governmentBuildings: [
            {
                type: 'HOSPITAL', budget: 200000, staffCount: 200,
                address: {
                    street: {
                        title: 'Central Str'
                    }
                }
            },
            {
                type: 'FIRE-STATION', budget: 500000, staffCount: 1000,
                address: {
                    street: {
                        title: 'South Str'
                    }
                }
            }
        ],
        citizensNumber: 1000000
    }
})

test('list of streets titles of government buildings',()=>{
    let streetsNames=getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)

    expect(streetsNames.length).toBe(2)
    expect(streetsNames[0]).toBe('Central Str')
    expect(streetsNames[1]).toBe('South Str')
})

test('list of streets titles ',()=>{
    let streets=getStreetsTitlesOfHouses(city.houses)

    expect(streets.length).toBe(3)
    expect(streets[0]).toBe('White Street')
    expect(streets[1]).toBe('Happy Street')
    expect(streets[2]).toBe('Happy Street')
})

test('create greeting messages for streets',()=>{
    let messages=createMessages(city.houses)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello guys from White Street')
    expect(messages[1]).toBe('Hello guys from Happy Street')
    expect(messages[2]).toBe('Hello guys from Happy Street')
})
