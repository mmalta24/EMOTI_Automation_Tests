module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      title: {
        type: String,
        required: [true, "Please provide a title!"],
        unique: true,
      },
      level: {
        type: String,
        required: [true, "Please provide a level!"],
        enum: {
          values: ["Fácil", "Médio", "Difícil"],
          message: "{VALUE} is not a valid type! Try Fácil, Médio or Difícil.",
        },
      },
      questions: {
        type: Array,
        required: [true, "Please provide a questions!"],
        validate: {
          validator: function (v) {
            return v.length !== 0;
          },
          message: "Questions cannot be empty!",
        },
      },
      caseIMG: { type: String, required: [true, "Please provide a caseIMG!"] },
      description: {
        type: String,
        required: [true, "Please provide a description!"],
      },
      category: {
        type: String,
        required: [true, "Please provide a category!"],
      },
      author: { type: String, required: [true, "Please provide a author!"] },
    },
    { timestamps: false, versionKey: false }
  );
  const Activity = mongoose.model("activities", schema);
  return Activity;
};
