const { Schema, model, default: mongoose } = require('mongoose');
const Thought = require('./Thought');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true, trim: true},
    email: {
        type: String, 
        required: true, 
        unique: true, 
        validate: {
            validator: function(v) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
              },
              message: props => `${props.value} is not a valid e-mail!`
        }
    },
    thoughts: [Thought._id],
    friends: [this._id]
})