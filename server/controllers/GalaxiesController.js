import { dbContext } from "../db/DbContext.js";
import { galaxiesService } from "../services/GalaxiesService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController{
    constructor(){
        super('api/galaxies/')
        this.router
            .get('', this.getGalaxies)
            .post('', this.createGalaxy)
    }

    async createGalaxy(req, res, next) {
        try {
            let galaxyData = req.body
            let galaxy = await galaxiesService.createGalaxy(galaxyData)
            return res.send(galaxy)
        } catch (error) {
            next(error)
        }
    }

    async getGalaxies(req, res, next){
        try {
            let galaxies = await galaxiesService.getGalaxies()
            return res.send(galaxies)
        } catch (error) {
            next(error)
        }
    }
}