const mongoose = require('mongoose')
const CONST_SCHEMA_NAME = 'Rate'

const RateSchema = new mongoose.Schema({
    rate: { type: Number, enum: [1, 2, 3, 4, 5] },
    origin: { type: String, enum: ['IUPP', 'RW', 'WaitList', 'Other'] },
    app: { type: mongoose.Schema.ObjectId, ref: 'Apps' },
    venue: { type: mongoose.Schema.ObjectId, ref: 'Venues' },
    customer: { type: mongoose.Schema.ObjectId, ref: 'Customers' },
    note: { type: String },
    created_at: { type: Date, default: Date.now },
    expireAt: { type: Date, default: undefined }
},
    { collection: CONST_SCHEMA_NAME })

RateSchema.pre('save', function (next) {
    this.created_at = new Date()
    next()
})

module.exports = RateSchema;