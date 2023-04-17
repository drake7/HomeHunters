# Notion Link
https://www.notion.so/kumardeepak/Real-Estate-d3d1df72e8c64b64901b957af4e7ba96?pvs=4

# Figma Link
https://www.figma.com/file/2Rr11uKG1kM0heHp41a1rD/MovingManiacs?node-id=0%3A1&t=iCZMzApXbj45i77H-1

# HomeHunters
Search Property in Canada's  Map Based Real Estate Portal. Browse New projects, flats, ready to move apartments for rent.

# Setup SASS

1. Check if you have node `node -v` and `npm -v`
    - Ensure you have node: https://nodejs.org/en/download/
2. Check if you have sass in system `sass --version`
    - If not, install sass `npm install -g sass` 
     -- `-g` means global
3. Go to the '/frontend' directy `cd frontend`
3. In this directory, you can compile your sass files to turn into a sass file on the go using:
    `sass --watch src/styles/app.scss src/styles/style.css`
4. Read this documenation for nesting with sass: https://www.w3schools.com/sass/sass_nesting.php


# Git Commands

## Apply your change to your branch
1. `git add .` - This will stage all your changes
1.1. Check that files with the changes are in green `git status`
2. Commit message should be a statement that follows "This commit will...".
`git commit -m "add urls in tags"`
3. `git push`

## Getting the changes of everyone to show on ur file
1. Make sure the changes in your branch are saved, committed, and pushed. This is will ensure your changes are saved in the repository and that you won't lose it.
2. Go to main branch `git checkout main`
3. Pull the changes `git pull`
4. Go back to your branch `git branch <YOUR BRANCH NAME>`
5. Time to merge! `git merge main`


setting up .env file
This file helps us save sensitive information like api keys 
command:: "npm i do env in " in backend 
also do not forget to add in git ignore file // 
To use variable globally in the node environment just do this 
