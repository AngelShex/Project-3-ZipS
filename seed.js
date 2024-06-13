import connection from "../connection.js";
import { User } from "../src/FackApis/CurrentUserData.js"; 

const ProfieImage = 'path_to_profile_image';
const CoverPhoto = 'path_to_cover_photo';

connection.on("error", (err) => {
  console.error("Connection error:", err);
});

connection.once("open", async () => {
  console.log("Connected to MongoDB");

  try {
    // Check if the 'users' collection already exists
    let userCheck = await connection.db
      .listCollections({ name: "users" })
      .toArray();
    
    if (userCheck.length > 0) {
      // Drop the 'users' collection if it exists
      await connection.db.dropCollection("users");
      console.log("Dropped existing 'users' collection");
    }

    // Define the data to be seeded
    const CurrentUser = [
      {
        id: 'me',
        name: 'Sasuke Uchiha',
        username: '@thebegjoker',
        ProfieImage: ProfieImage,
        CoverPhoto: CoverPhoto
      }
    ];

    // Insert data into the 'users' collection
    await User.collection.insertMany(CurrentUser);

    console.info("Seeding complete!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Exit the process once seeding is complete or if there was an error
    process.exit(0);
  }
});
