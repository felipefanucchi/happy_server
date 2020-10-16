import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage';

export default {
    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        } = request.body;
    
        const orphanagesRepository = getRepository(Orphanage);
    
        const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends
        });
    
        try {
            await orphanagesRepository.save(orphanage);
        } catch (error) {
            return response
                .status(500)
                .json({message: error.message})
        }
    
        return response
            .status(201)
            .json(orphanage)
    },

    async index(_, response: Response) {
        const orphanagesRepository = getRepository(Orphanage);

        try {
            const orphanages = await orphanagesRepository.find();
            return response
                .json(orphanages);
        } catch (error) {
            return response
                .status(500)
                .json({message: error.message});
        }
        
    },

    async show(request: Request, response: Response) {
        const {id} = request.params;
        const orphanagesRepository = getRepository(Orphanage);

        try {
            const orphanages = await orphanagesRepository.findOneOrFail(id);
            return response.json(orphanages);
        } catch (error) {
            return response
                .status(500)
                .json({message: error.message}); 
        }
    }
}