// server/controllers/musicController.js

const axios = require("axios");

exports.generateMusic = async (req, res, next) => {
  const { prompt, modelVersion, outputFormat, normalizationStrategy } =
    req.body;

  // Basic validation
  if (!prompt || !modelVersion || !outputFormat || !normalizationStrategy) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const response = await axios.post(
      "https://api.replicate.com/v1/predictions",
      {
        version:
          "671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb",
        input: {
          prompt: prompt,
          model_version: modelVersion,
          output_format: outputFormat,
          normalization_strategy: normalizationStrategy,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REPLICATE_API_TOKEN}`,
          "Content-Type": "application/json",
          Prefer: "wait",
        },
      }
    );

    const { output } = response.data;

    if (!output) {
      throw new Error("No audio URL returned from MusicGEN API.");
    }

    res.status(200).json({ audioUrl: output });
  } catch (error) {
    console.error(
      "Error generating music:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to generate music." });
  }
};
