const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: () => new Date(),
	},
	exercises: [{
		type: {
			type: String,
			trim: true,
			required: 'Enter exercise type',
		},
		duration: {
			type: Number,
			required: 'Enter the duration in minutes',
		},
		weight: {
			type: Number,
		},
		reps: {
			type: Number,
		},
		sets: {
			type: Number,
		},
		distance: {
			type: Number,
		},
	},
	],
},
{
	toJSON: {
		virtuals: true,
	},
},

);


workoutSchema.virtual('totalDUration').get(function () {
	return this.exercises.reduce((total, exercise) => {
		return total + exercise.duration;
	}, 0);
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;