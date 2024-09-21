mongoose.connect('mongodb://localhost:27017/video-platform', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const User = mongoose.model('User', new mongoose.Schema({
    username: String,
    password: String
}));

const Video = mongoose.model('Video', new mongoose.Schema({
    title: String,
    path: String,
    views: Number,
    likes: Number
}));
