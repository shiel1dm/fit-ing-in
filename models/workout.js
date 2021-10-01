const mongoose = require('mongoose')

const schema = mongoose.Schema;

const exercise = new schema({
  type: {
    type: String,
    unique: true,
    required: "String is Required"
  },
  name:{
    type: String,
    trim: true,
    required: "String is required"
  },
  duration:{
    type: Number,
    required: true
  },
  weight:{
    type: Number,
    required: true
  },
  reps:{
    type: Number,
    required: true
  },
  sets:{
    type: Number,
    required: true
  }
})

const Workout = mongoose.model("workout", exercise);
module.exports = Workout;