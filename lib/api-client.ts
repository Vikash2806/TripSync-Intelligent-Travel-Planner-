import axios from "axios";

// Exporting an `apiClient` object that is configured for making HTTP requests
// -----------------------------------------------------------------------------
// What is `export`?
// - Export allows us to share this code (the `apiClient`) with other parts of the project.
//
// Why use `axios.create`?
// - `axios.create` creates a custom version of `axios` with pre-defined settings (e.g., base URL).
// - This helps avoid repeating the same settings in every request.
//
// What is `baseURL`?
// - It is the starting URL used for all requests made by this `apiClient`.
// - Think of `baseURL` like the main street address. For example:
//   - If the baseURL is `/api`, any HTTP request will automatically begin with `/api`.
//   - `/api/users` becomes the full path for fetching user data.
//
// Example:
// If your website's backend API (where data is stored) is at `https://mywebsite.com/api`,
// you can set `baseURL` to `/api` to simplify requests like `/api/users`.

const apiClient = axios.create({
  baseURL: `/api`,
});

export default apiClient;
