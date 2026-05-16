const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const Recommendation = require("./models/Recommendation");
const User = require("./models/User");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* MongoDB Connection */
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully 🚀");
  })
  .catch((error) => {
    console.log("MongoDB Connection Error:", error);
  });

/* Root Route */
app.get("/", (req, res) => {
  res.json({
    message: "AgriNova Backend Running Successfully 🚀"
  });
});

/* ========================= */
/* USER REGISTER ROUTE */
/* ========================= */

app.post("/api/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "User already exists"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const newUser = await User.create({

      name,
      email,
      password: hashedPassword

    });

    const token = jwt.sign(
      {
        id: newUser._id
      },
      "AGRINOVA_SECRET_KEY",
      {
        expiresIn: "7d"
      }
    );

    res.json({
      success: true,
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });

  } catch (error) {

    console.log("Register Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

/* ========================= */
/* USER LOGIN ROUTE */
/* ========================= */

app.post("/api/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        success: false,
        message: "Invalid Email"
      });

    }

    const isMatch =
      await bcrypt.compare(password, user.password);

    if (!isMatch) {

      return res.status(400).json({
        success: false,
        message: "Invalid Password"
      });

    }

    const token = jwt.sign(
      {
        id: user._id
      },
      "AGRINOVA_SECRET_KEY",
      {
        expiresIn: "7d"
      }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {

    console.log("Login Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

/* ========================= */
/* AI ASSISTANT ROUTE */
/* ========================= */

app.post("/api/ai-assistant", (req, res) => {

  const { question } = req.body;

  const lowerQuestion =
    question.toLowerCase();

  let reply =
    "I am still learning about agriculture. Please try another farming question.";

  if (
    lowerQuestion.includes("rice")
  ) {

    reply =
      "Rice grows best in clayey or loamy soil with high water availability.";

  }

  else if (
    lowerQuestion.includes("cotton")
  ) {

    reply =
      "Cotton grows well in black soil with warm temperatures and moderate rainfall.";

  }

  else if (
    lowerQuestion.includes("fertilizer")
  ) {

    reply =
      "Organic fertilizers improve soil fertility and long-term crop productivity.";

  }

  else if (
    lowerQuestion.includes("yellow leaves")
  ) {

    reply =
      "Yellow leaves may indicate nutrient deficiency, overwatering, or plant disease.";

  }

  else if (
    lowerQuestion.includes("weather")
  ) {

    reply =
      "Weather monitoring is essential for irrigation planning and disease prevention.";

  }

  res.json({
    reply
  });

});

/* ========================= */
/* WEATHER ROUTE */
/* ========================= */

app.get("/api/weather", (req, res) => {

  const weatherData = {
    city: "Chennai",
    temperature: 28,
    humidity: 65,
    condition: "Cloudy"
  };

  res.json(weatherData);
});

/* ========================= */
/* RECOMMEND ROUTE */
/* ========================= */

app.post("/api/recommend", async (req, res) => {

  try {

    const { soil, season, water } = req.body;

    let recommendation = "Maize 🌽";

    if (
      soil === "Loamy" &&
      season === "Summer" &&
      water === "High"
    ) {
      recommendation = "Rice 🌾";
    }

    else if (
      soil === "Black" &&
      season === "Winter"
    ) {
      recommendation = "Cotton 🌱";
    }

    else if (
      soil === "Sandy" &&
      water === "Low"
    ) {
      recommendation = "Millet 🌾";
    }

    const newRecommendation =
      await Recommendation.create({

        soil,
        season,
        water,
        recommendedCrop: recommendation

      });

    res.json({
      success: true,
      recommendedCrop: recommendation,
      data: newRecommendation
    });

  } catch (error) {

    console.log("Recommendation Error:", error);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });

  }

});

/* ========================= */
/* GET RECOMMENDATIONS */
/* ========================= */

app.get("/api/recommendations", async (req, res) => {

  try {

    const recommendations =
      await Recommendation.find().sort({
        createdAt: -1
      });

    res.json(recommendations);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Error Fetching Recommendations"
    });

  }

});

/* ========================= */
/* START SERVER */
/* ========================= */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});