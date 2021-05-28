const RatingModel = require('@tagmedev/tagme-models').Rate;

exports.save = async saveObj => {
    try {
        return await RatingModel().findOneAndUpdate(
            {},
            saveObj,
            { new: true, upsert: true, runValidators: true, setDefaultsOnInsert: true }
        )
    } catch (err) {
        console.error(err);
    }
}