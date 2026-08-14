# React Site Editing Tip Sheet

We are modifying the React site `vinas1.github.io`.

## Core Rule
Be terse. Do not overthink. Use searXNG mcp to do a search, use the broswer to make sure vinas1.github.io looks right.

### Files/directories to EDIT

Primary application source:

- `src/portfolio.js` — main portfolio content: Hero, Skills, Experience, Projects, Achievements, Contact
- `src/components/` — reusable React components
- `src/containers/` — section-specific React components
  - `src/containers/workExperience/` — Experience
  - `src/containers/projects/` — Projects
  - `src/containers/contact/` — Contact
- `src/assets/images/` — images
- `src/assets/icons/` — SVG/icons
- `src/components/footer/Footer.js` — Footer
- `public/` — only when the requested change specifically concerns static/public assets or HTML metadata

### DO NOT EDIT

Never manually edit generated or dependency files:

- `build/` — generated production output
- `build/static/` — generated assets
- `node_modules/` — installed dependencies

Do not manually modify generated files to fix a source problem. Change the source and rebuild.

Normally do not modify:

- `package-lock.json`
- `package.json`

Only modify `package.json` when a dependency or npm script genuinely needs to change. If dependencies change, allow npm to update `package-lock.json`.

## Before Editing

1. Inspect the repository structure.
2. Search `src/` for the existing text/component/data related to the requested change.
3. Determine the smallest source file(s) that should be changed.
4. Do not create duplicate components, data, or content if an existing implementation can be updated.
5. Do not touch unrelated files.

Useful searches:

```bash
grep -Rni "search text" src
grep -Rni "footer" src
grep -Rni "assets/images" src
```

## Editing Strategy

Make the **smallest possible change** that satisfies the request.

Prefer:
- editing existing data in `src/portfolio.js`
- editing the existing component responsible for the section
- adding assets under `src/assets/`
- reusing existing patterns/components

Do not:
- rewrite the project structure
- regenerate the application unnecessarily
- modify `build/` directly
- modify `node_modules/`
- change configuration merely to make an unrelated edit work
- upgrade packages unless explicitly required

## Verify

After editing:

Requirement:
npm install gh-pages --save-dev
package.json is set to deploy to the gh-pages branch using "deploy": "gh-pages -d build"

```bash
git status
git diff
npm run build # Verify build passes locally before committing
npm start # Test the site locally
npm run deploy # deploy the changes to the gh-pages repo for the github pipeline to deploy
```

The production build must succeed before committing.

If the build fails:
1. Read the actual error.
2. Identify the source file and line causing it.
3. Fix the source.
4. Run `npm run build` again.
5. Repeat until the build succeeds.

Do not work around build errors by editing generated `build/` files.

## Final Change Review

Before committing:

```bash
npm run build
npm start # check the local version of the site at http://localhost:3030
npm run deploy                      # Run your deployment script
```

Confirm:
- Only intended files changed.
- No `node_modules/` changes.
- No unintended `build/` changes.
- No unrelated formatting or refactoring.
- The requested behavior/content is actually implemented.

## Release

Once the build succeeds and the diff is clean:

```bash
git add <only-intended-files>
git commit -m "Update portfolio"
git push
```

**Do not use `git add .` unless you have first inspected `git status` and confirmed every changed file belongs in the commit.**

**Never treat `build/` as source code. `npm run build` generates it.**