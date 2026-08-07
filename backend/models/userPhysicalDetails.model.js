import { mongoose, Schema } from "mongoose";



const physicalDetailSchema = new Schema({

    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    BMI: {
        type: Number,
        required: true
    },
    currentIssues: {
        type: String,
        required: true
    },
    pastIssue: {
        type: String,
        required: true
    },
    profession: {
        type: String,
        required: true
    },
    sleepHours: {
        type: Number,
        required: true
    },
    dietDetails: {
        type: String,
        required: true
    },
    workOutAvailability: {
        type: String,
        required: true,
        enum: {
            values: ['daily', 'weekly'],
            message: '{value} is not a valid option'
        }
    },
    workOutTiming: {
        type: String,
        required: true,
        enum: {
            values: ['morning', 'afternoon', 'evening'],
            message: '{value} is not a valid timing slot'
        }
    }

})

physicalDetailSchema.methods.calculateBMI= async function (weight, height ) {
    const bmi = weight/ height**2
    return bmi
}



export const UserPhysicalDetail = new mongoose.model("PhysicalDetailSchema", physicalDetailSchema)