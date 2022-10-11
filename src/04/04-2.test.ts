import {CityType} from "../02/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04-2";

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

test('houses should be destroyed',()=>{
    demolishHousesOnTheStreet(city, 'Happy Street')

    expect(city.houses.length).toBe(1)
    expect(city.houses[0].id).toBe(1)
})

test('buildings with correct staff count',()=>{
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

    expect(buildings.length).toBe(1)
    expect(buildings[0].type).toBe('FIRE-STATION')
})