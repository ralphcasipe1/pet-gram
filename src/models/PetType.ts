import * as mongoose from 'mongoose'

const Schema = mongoose.Schema

const PetTypeSchema = new Schema({
  pets: [{
    pet: { type: Schema.Types.ObjectId, ref: 'Pet' },
  }],
  name: {
    type: String,
    required: 'Enter a name'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('PetType', PetTypeSchema)