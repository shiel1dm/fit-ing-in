const mongoose = require('mongoose')

const schema = mongoose.Schema;

const WorkoutSchema = new schema({
  day:{
    type: Date,
    default: Date.now
  },

  exercises:[{
    type: {
      type: String,
      required: "Exercise is Required"
    },
    name:{
      type: String,
      trim: true,
      required: "Name is required"
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
    },
    distance:{
      type: Number
    }
  }]
})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;