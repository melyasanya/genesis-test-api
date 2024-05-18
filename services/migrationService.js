const migrateMongo = require("migrate-mongo");

const runMigration = async () => {
  try {
    const { db, client } = await migrateMongo.database.connect();
    const migrated = await migrateMongo.up(db, client);
    if (migrated.length > 0) {
      console.log("Migrations applied:", migrated);
    } else {
      console.log("No migrations needed");
    }
    client.close();
  } catch (error) {
    console.error("Error applying migrations:", error.message);
    process.exit(1);
  }
};

module.exports = runMigration;
