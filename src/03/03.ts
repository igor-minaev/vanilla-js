import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
    return a + b;
}

export function sum2(a: number, b: number) {
    return a + b;
}

export const addSkill =
    (student: StudentType, skill: string) => {
        student.technologies.push({
            id: new Date().getTime(),
            title: skill
        })
    }

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

export const repairHouses = (house: HouseType) => {
    house.repaired = true
}

export const toFireStaff = (governmentBuildings: GovernmentBuildingsType, staffCountToFire: number) => {
    governmentBuildings.staffCount -= staffCountToFire
}

export function toHireStaff(building: GovernmentBuildingsType, staffCountToHire: number) {
    building.staffCount += staffCountToHire
}

export function creteMessage(city: CityType){
return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} people`
}

