const auth = require("./functionalities/auth");
const admin_activities = require("./functionalities/admin_activities");
const admin_profile = require("./functionalities/admin_profile");
const admin_manageUsers = require("./functionalities/admin_manageUsers");
const admin_manageActivities = require("./functionalities/admin_manageActivities");

// auth
auth.registerChild();
auth.registerTutor();
auth.registerTeacher();
auth.loginAdmin();
auth.loginTeacher();

// admin
admin_activities.filterByDifficultyEasy();
admin_activities.filterByDifficultyMedium();
admin_activities.filterByDifficultyHard();
admin_activities.filterByCategoryQuiz();
admin_activities.filterByCategoryRecognition();
admin_activities.filterByCategoryPersonalizedTutor();
admin_activities.filterByCategoryPersonalizedTeacher();
admin_activities.filterAndReset();
admin_activities.closeSidebar();
admin_profile.updatePicture();
admin_profile.updatePassword();
admin_manageUsers.filterByName();
admin_manageUsers.filterByTypeChild();
admin_manageUsers.filterByTypeTutor();
admin_manageUsers.filterByTypeTeacher();
admin_manageUsers.filterByTypeAdmin();
admin_manageUsers.createAdmin();
admin_manageUsers.seeUserData();
admin_manageUsers.blockUser();
admin_manageUsers.deleteUser();
admin_manageActivities.filterName();
admin_manageActivities.filterCategoryQuiz();
admin_manageActivities.filterDifficultyEasy();
admin_manageActivities.filterDifficultyMedium();
admin_manageActivities.filterDifficultyHard();
admin_manageActivities.addEmotion();
admin_manageActivities.deleteEmotion();
