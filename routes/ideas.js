const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

// Get all ideas
router.get("/", async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
  //res.json({ success: true, data: ideas });
});

// Get single idea
router.get("/:id", async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Add an idea
router.post("/", async (req, res) => {
  //res.send("Post success");
  //console.log(req.body);
  // const idea = new Idea({
  //   text: req.body.text,
  //   tag: req.body.tag,
  //   username: req.body.username,
  // });

  // try {
  //   const savedIdea = await idea.save();
  //   res.json({ success: true, data: savedIdea });
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json({ success: false, error: "Something went wrong" });
  // }
  //const job = await Job.create(req.body);
  try {
    const savedIdea = await Idea.create(req.body);
    res.json({ success: true, data: savedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Update idea
router.put("/:id", async (req, res) => {
  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          text: req.body.text,
          tag: req.body.tag,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedIdea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

// Delete idea
router.delete("/:id", async (req, res) => {
  try {
    await Idea.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: {} });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: "Something went wrong" });
  }
});

module.exports = router;
