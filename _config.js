var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://reyhana:reyhana@cluster01.eeqsz5n.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://reyhana:reyhana@cluster01.eeqsz5n.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://reyhana:reyhana@cluster01.eeqsz5n.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
