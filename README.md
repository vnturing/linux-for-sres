# Linux for Aspiring Platform Engineers and SREs

A short, sequential course in static HTML. No build step and no server code.

## Deploy on GitHub Pages
1. Create a repository and push the contents of this folder to the `main` branch.
2. In the repository, open Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", select `main` and `/ (root)`, and save.
3. After a minute the site is live at `https://<user>.github.io/<repo>/`. All links are relative, so it works under a project subpath.

`.nojekyll` is included so GitHub serves the files as they are. The course loads Google Fonts and the Mermaid library from CDNs; the text stays readable if they are blocked, but diagrams will show as plain text.

## Layout
- `index.html`: course map
- `lessons/`: twelve lessons, each ending in quizzes
- `reference/`: printable cheat sheets, triage flows, glossary
- `assets/`: shared stylesheet, script, and the sample log used in lesson 10
- `MISSION.md`, `RESOURCES.md`, `GLOSSARY.md`, `NOTES.md`, `learning-records/`: the teaching workspace files

Progress ticks on the course map are stored in the browser's local storage only.
