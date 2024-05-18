module.exports = {
  async up(db, client) {
    console.log("Initial migration ran successfully");
  },

  async down(db, client) {
    console.log("Initial migration rollback ran successfully");
  },
};
