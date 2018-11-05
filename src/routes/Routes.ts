import { Application, Response } from 'express'
import PetController from '../controllers/PetController'
import PetTypeController from '../controllers/PetTypeController'

export default class Routes {
  public petController: PetController = new PetController()
  public petTypeController: PetTypeController = new PetTypeController()

  public routes(app: Application): void {
    app.route('/')
      .get((request, response: Response) => 
        response.status(200).send({
          message: 'GET request successful'
        })
      )

    app.route('/pets')
      .get(this.petController.index)
      .post(this.petController.create)

    app.route('/pets/:petId')
      .get(this.petController.show)
      .put(this.petController.update)
      .delete(this.petController.destroy)
      
    app.route('/pet_types')
      .get(this.petTypeController.index)
      .post(this.petTypeController.create)

    app.route('/pet_types/:petTypeId')
      .get(this.petTypeController.show)
      .put(this.petTypeController.update)
      .delete(this.petTypeController.destroy)
  }
}