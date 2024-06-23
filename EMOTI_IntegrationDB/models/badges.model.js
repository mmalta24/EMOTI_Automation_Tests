module.exports = (mongoose) => {
  const schema = mongoose.Schema(
    {
      badgeName: {
        type: String,
        required: [true, "Please provide a badgeName!"],
        unique: true,
      },
      badgeIMG: {
        type: String,
        required: [true, "Please provide a badgeIMG!"],
      },
      pointsNeeded: {
        type: Number,
        required: [true, "Please provide a pointsNeeded!"],
      },
      badgeEmotion: {
        type: String,
        required: [true, "Please provide a badgeEmotion!"],
      },
    },
    { timestamps: false, versionKey: false }
  );
  const Badge = mongoose.model("badges", schema);
  return Badge;
};
