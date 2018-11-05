import { Request, Response } from 'express'
import PetType from '../models/PetType'

export default class PetTypeController {
  public async index(_, response: Response) {
    const petTypes = await PetType.find()
    
    return response.send(petTypes)
  }

  public async show(request: Request, response: Response) {
    const petType = await PetType.findById(
      request.params.petTypeId, 
    )
    
    return response.send(petType)
  }

  public async create(request: Request, response: Response) {
    const petType = await new PetType(request.body).save()
    
    return response.send(petType)
  }

  public async update(request: Request, response: Response) {
    const petType = await PetType.findOneAndUpdate(
      { _id: request.params.petTypeId },
      request.body,
      { new: true },
    )

    return response.send(petType)
  }

  public async destroy(request: Request, response: Response) {
    await PetType.deleteOne(
      { _id: request.params.petTypeId }
    )

    return response.send({ message: 'Successfully deleted!' })
  }
}