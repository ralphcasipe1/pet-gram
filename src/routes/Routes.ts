import { Application, Response } from 'express'
import PetTypeController from '../controllers/PetTypeController'

export default class Routes {
  
  public petTypeController: PetTypeController = new PetTypeController()

  public routes(app: Application): void {
    app.route('/')
      .get((request, response: Response) => 
        response.status(200).send({
          message: 'GET request successful'
        })
      )

    app.route('/pet_types')
      .get(this.petTypeController.index)
      .post(this.petTypeController.create)

    app.route('/pet_types/:petTypeId')
      .get(this.petTypeController.show)
      .put(this.petTypeController.update)
      .delete(this.petTypeController.destroy)
  }
}