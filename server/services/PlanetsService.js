import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class PlanetsService {
    async editPlanets(planetId, planetsData) {
        const planet = await dbContext.Planets.findById(planetId)
        if(!planet){
            throw new BadRequest('Invalid planet Id')
        }
        
    }

    async createPlanet(planetData) {
        const planet = await dbContext.Planets.create(planetData)
        return planet
    }

    async getPlanets() {
        const planets = await dbContext.Planets.find()
        return planets
    }

}

export const planetsService = new PlanetsService()