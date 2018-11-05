import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const Pet = new Schema({
  petType: { 
    type: 'ObjectId',
    ref: 'PetType',
    required: 'Enter the type of the pet'
  },
  name: {
    type: String,
    required: 'Enter a name'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('Pet', Pet)