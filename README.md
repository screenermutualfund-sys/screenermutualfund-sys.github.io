# IPCS Website Project

This project is a React application built with Vite. It is hosted on GitHub Pages.

## Deployment Workflow

This project uses a **manual deployment** strategy where the build process happens locally on your computer, and the resulting static files are pushed to a specific branch on GitHub for hosting.

### Step-by-Step Flow

#### 1. Local Build Process
When you run the command `npm run deploy`:

1.  **Build Command**: The script first runs `npm run build`.
2.  **Vite Compilation**: Vite takes all your source code (`src/`), React components, CSS, and images.
3.  **Optimization**: It compiles, minifies, and bundles them into efficient static files (HTML, CSS, JS).
4.  **Output**: These ready-to-serve files are placed into a local folder named `dist` (Distribution).

#### 2. The Deployment Tool (gh-pages)
After the build is complete, the `gh-pages` tool takes over:

1.  **Branch Switching**: It connects to your GitHub repository.
2.  **Upload**: It takes **only** the contents of the `dist` folder.
3.  **Push**: It forces these files into a special Git branch named `gh-pages`.
    *   *Note: This branch does not contain your source code (`src`), only the final built website.*

#### 3. GitHub Hosting
Once the files reach GitHub:

1.  **Detection**: GitHub's internal systems notice a new commit on the `gh-pages` branch.
2.  **Serving**: GitHub Pages automatically updates its web servers to serve the new `index.html` and assets from that branch.
3.  **Live**: Your changes become visible at https://screenermutualfund-sys.github.io/IPCS/ (or your custom domain).

## Development Commands

- `npm run dev`: Starts the local development server.
- `npm run build`: Compiles the project to the `dist` folder.
- `npm run deploy`: Builds the project AND uploads it to GitHub Pages.
