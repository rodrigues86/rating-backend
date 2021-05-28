const dbService = require('./db.service')
const RateSchema = require('./../model/Rate')
const savedMessage = 'rate saved!'

exports.save = async saveObj => {
    try {
        console.info('saving...');
        const connDb = await dbService.connect();

        const RateModel = connDb.model('Rate', RateSchema);

        await RateModel.findOneAndUpdate({},
            saveObj,
            { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true })

        console.info(savedMessage);

        return savedMessage

    } catch (err) {
        console.error(err);
        throw err
    }
}