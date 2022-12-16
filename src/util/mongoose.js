
module.exports = {
    multipleToObj: (mongooseArr) => mongooseArr.map(data => data.toObject()),
    mongooseToObj: (mongoose) => {
        return mongoose ? mongoose.toObject : mongoose;
    }
}