import { Request, Response } from 'express'
import Pet from '../models/Pet'

export default class PetController {
  public async index(_, response: Response) {
    try {
      const pets = await Pet.find().populate('petType')
      return response.send(pets)
    } catch (error) {
      return response.send(error.message)
    }
  }

  public async show(request: Request, response: Response) {
    try {
      const pet = await Pet
        .findById(request.params.petId)
        .populate('petType')
      return response.send(pet)
    } catch (error) {
      return response.send(error.message)
    }
  }

  public async create(request: Request, response: Response) {
    try {
      const pet = await new Pet(request.body)
        .save()
      return response.send(pet)
    } catch (error) {
      return response.send(error)
    }
  }

  public async update(request: Request, response: Response) {
    try {
      const pet = await Pet.findOneAndUpdate(
        { _id: request.params.petId },
        request.body,
        { new: true }
      ) 
      return response.send(pet)
    } catch (error) {
      return response.send(error)
    }
  }

  public async destroy(request: Request, response: Response) {
    try {
      await Pet.deleteOne(
        { _id: request.params.petId }
      )
      return response.send({ message: 'Successfully deleted' })
    } catch (error) {
      return response.send(error)
    }
  }
}