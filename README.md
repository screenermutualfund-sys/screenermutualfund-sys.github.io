# IPCS Website Project

This project is a React application built with Vite. It is hosted directly from the **`main`** branch on GitHub Pages.

## Deployment Strategy (Updated)

We have switched to a `docs/` folder deployment strategy. This means the built website lives in the `docs` folder of the `main` branch, rather than a separate `gh-pages` branch.

### Configuration Changes
1.  **Build Output**: `vite.config.js` is set to output built files to `docs/` instead of `dist/`.
2.  **Logo/Images**: The logo is placed in the `public/` directory (`public/logo.svg`) and accessed via absolute path (`/logo.svg`) to ensure it loads correctly in production.
3.  **Routing**: We use `HashRouter` to prevent 404 errors on GitHub Pages.

### How to Update the Website

To publish changes, follow this simple workflow:

1.  **Make Changes**: Edit your code in the `src` folder.
2.  **Build**: Run the build command to update the `docs` folder.
    ```bash
    npm run build
    ```
3.  **Push**: Commit and push everything to GitHub.
    ```bash
    git add .
    git commit -m "Your update message"
    git push origin main
    ```

**That's it!** GitHub Pages will detect the changes in the `docs` folder and update the site automatically.

## GitHub Pages Settings
Ensure your repository settings are configured as follows:
- **Source**: Deploy from a branch
- **Branch**: `main`
- **Folder**: `/docs`

## Development Commands

- `npm run dev`: Starts the local development server.
- `npm run build`: Compiles the project to the `docs` folder.
