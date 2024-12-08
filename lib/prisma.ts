// Importing the PrismaClient class from the "@prisma/client" package.
// This class allows us to interact with the database using Prisma.
import { PrismaClient } from "@prisma/client";

// Declaring a global variable to ensure we have a single instance of PrismaClient in our application.
// This is especially useful in a development environment where code can be hot-reloaded multiple times.
// - `declare global {}` is used to extend the global namespace in TypeScript.
// Example: By doing this, we can attach `prisma` to the global object so it doesn't get re-initialized.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient; // `var` is used to make it a global variable across the app.
}

// Defining a variable to hold the PrismaClient instance.
// Initially, this variable is undefined but will be assigned later based on the environment.
let prisma: PrismaClient;

/**
 * Checking the environment where the code is running:
 * - `process.env.NODE_ENV` is used to determine the current environment.
 * - Common environments:
 *   - "production": The app is running in a live production environment.
 *   - "development": The app is running locally during development.
 *   - "test": The app is being tested.
 *
 * Syntax:
 * - `if` condition is used to run specific code based on a condition.
 * - `else` runs when the `if` condition is false.
 */

// If the app is running in production:
if (process.env.NODE_ENV === "production") {
  // Create a new PrismaClient instance.
  prisma = new PrismaClient();
  // Why? In production, we usually create a single instance because the environment doesn't reload often.
} else {
  /**
   * If the app is NOT in production (e.g., in development):
   * We ensure that we create only one instance of PrismaClient, even if the app reloads multiple times.
   * This prevents issues like exhausting database connections.
   */

  // Check if a `prisma` instance doesn't already exist on the global object.
  if (!global.prisma) {
    // If not, create a new PrismaClient instance and attach it to `global.prisma`.
    global.prisma = new PrismaClient();
  }

  // Assign the global `prisma` instance to the local `prisma` variable.
  prisma = global.prisma;
}

// Export the `prisma` instance so it can be used in other files of the project.
// Syntax:
// - `export default` makes this instance the default export of this file.
// - Other files can then import it like this:
//   Example:
//   ```typescript
//   import prisma from "./path/to/this/file";
//   prisma.user.findMany(); // Use the Prisma client to interact with the "user" table.
//   ```
export default prisma;
