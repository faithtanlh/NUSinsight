const express = require("express");
const router = express.Router();
const {
  getSurveys,
  setSurvey,
  updateSurvey,
  submitSurvey,
  deleteSurvey,
  getFeedSurveys,
  getOtherUserSurveys,
  getSurveyToComplete,
  getDraftSurveys,
} = require("../controllers/surveyController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getSurveys).post(protect, setSurvey);
router.route("/:id").delete(protect, deleteSurvey);
router.route("/feed").get(protect, getFeedSurveys);
router.route("/other/:username").get(getOtherUserSurveys);
router.route("/submit").put(submitSurvey);
router.route("/complete/:id").get(getSurveyToComplete);
router.route("/draftSurveys").get(protect, getDraftSurveys);

module.exports = router;
