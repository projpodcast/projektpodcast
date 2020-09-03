const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

mongoose
  .connect(
    `mongodb+srv://newsletter:${process.env.DB_PASS}@cluster0.mbwd4.gcp.mongodb.net/newsletter1?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
  )
  .then(() => console.log("Connected to database"))
  .catch(() => console.log("Failed to connect"));

const schema = new mongoose.Schema({
  email: { type: String, maxlength: 50, required: true, unique: true },
});

schema.plugin(uniqueValidator);

const Email = mongoose.model("Email", schema);

module.exports = (req, res) => {
  const email = req.body.email;

  const newEmail = new Email({ email });
  newEmail
    .save()
    .then(() => {
      res.json({});
    })
    .catch(() => {
      res.status(400).json({ error: "Error adding email" });
    });
};
