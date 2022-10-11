import {CityType} from "../02/02_02";
import {addMoneyToBudget, creteMessage, repairHouses, toFireStaff, toHireStaff} from "./03";

let city: CityType
beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildetAt: 2012,
                repaired: false,
                address: {number: 100, street: {title: 'White Street'}}
            },
            {
                buildetAt: 2008,
                repaired: false,
                address: {number: 100, street: {title: 'Happy Street'}}
            },
            {
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

test('Budget should be changed for HOSPITAL', ()=>{
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000)
    expect(city.governmentBuildings[1].budget).toBe(500000)
})
test('Budget should be changed for FIE-STATION', ()=>{
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('Houses should be repaired', ()=>{
    repairHouses(city.houses[1]);

    expect(city.houses[1].repaired).toBe(true)

})

test('staff should be incresed', ()=>{
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180)

})

test('staff should be repaired', ()=>{
    toHireStaff(city.governmentBuildings[0], 20);
    toHireStaff(city.governmentBuildings[1], 300);

    expect(city.governmentBuildings[0].staffCount).toBe(220)
    expect(city.governmentBuildings[1].staffCount).toBe(1300)

})

test('Greeting message should be correct', ()=>{
    const message = creteMessage(city)

    expect(message).toBe('Hello New York citizens. I want you be happy. All 1000000 people')

})



