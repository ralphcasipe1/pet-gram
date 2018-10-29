import { Request, Response } from 'express'
import PetType from '../models/PetType'

export default class PetTypeController {
  public index(_, response: Response) {
    return PetType.find({}, (error: Error, petTypes) => {
      if (error) {
        response.send(error)
      }
      response.send(petTypes)
    })
  }

  public show(request: Request, response: Response) {
    return PetType.findById(
      request.params.petTypeId, 
      (error: Error, petType) => {
        if (error) {
          response.send(error)
        }
        response.send(petType)
      })
  }

  public create(request: Request, response: Response) {
    return new PetType(request.body).save((error: Error, petType) => {
      if (error) {
        response.send(error)
      }

      response.send(petType)
    })
  }

  public update(request: Request, response: Response) {
    return PetType.findOneAndUpdate(
      { _id: request.params.petTypeId },
      request.body,
      { new: true },
      (error: Error, petType) => {
        if (error) {
          response.send(error)
        }
        response.send(petType)
      }
    )
  }

  public destroy(request: Request, response: Response) {
    return PetType.deleteOne(
      { _id: request.params.petTypeId },
      (error: Error) => {
        if (error) {
          response.send(error)
        }
        response.send({ message: 'Successfully deleted!' })
      }
    )
  }
}