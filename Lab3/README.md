# Lab3

## Startup the project
1. `git init`
1. `pnpm init`
1. `git status`
1. `git add package.json`
1. `git commit -m "Initial commit"`
1. `git log`
1. `pnpm install commander`
1. `git status`
1. `echo "node_modules" >> .gitignore`
1. `git status`
1. `git add --all`
1. `git commit -m "Initialize node environment"`
1. `git log`
1. *Slides for branches explanation*
1. **`git branch`**
    1. [Docs](https://git-scm.com/docs/git-branch)
1. **`git switch --create feature/addition`**
    1. [Docs](https://git-scm.com/docs/git-switch)
    1. Mention `-c` option. And this usual way of short and long ways
    1. Mention to old `git checkout`
1. `git branch` -> Now the new branch appears!
1. Write iteration 1 with calculator (addition)
1. Test it with `node calculator.js xxx`
1. In the feature branch `git status` + `git add.. ` + `git diff --staged` + `git commit -m "Add calculator with addition operation"` + `git status` + `git log`
    1. Mention I can do a diff from a commit hash, from another branch, etc
1. `git switch main`
1. **`git merge feature/addition`**
    1. [Docs](https://git-scm.com/docs/git-merge)
    1. Mention the fast forward
    1. Mention this can be done between any couple of branches (not only master)
1. Repeat last 8 points for subtract operation:
    1. `git switch -c feature/subtraction`
    1. Write iteration 2 with calculator (addition)
    1. Test it with `node calculator.js xxx`
    1. In the feature branch `git status` + `git add.. ` + `git diff --staged` + `git commit -m "Add calculator with addition operation"` + `git status` + `git log`
    1. `git switch main`
    1. `git merge feature/addition`
        1. Emphasize the fast forward, this is because base branch has not conflicting changes
1. *Slides for conflict explanation*
1. Create a conflict on purpose:
    1. `git switch -c feature/multiplication`
    1. Write iteration 2 with calculator (addition) + Change how results are displayed in every operation
    1. Test it with `node calculator.js xxx`
    1. In the feature branch `git status` + `git add.. ` + `git diff --staged` + `git commit -m "Add calculator with addition operation"` + `git status` + `git log`
            1. Mention commit message short
    1. **`git switch -`**
    1. [BEFORE THE MERGE] To do a slight change in `main` like changing how the result of the operations appear
    1. In `main`branch: `git status` + `git commit -am "Add calculator with addition operation"` + `git log`
    1. Conflict! Do `git status` and fix it manually in master
    1. `git commit -am "Fix merge conflict"`
    1. `git status`
    1. `git log` will show:
        1. Commits from all branches
        1. And merge commit
1. Create another conflict on purpose and fix it the other way around:
    1. `git switch -c feature/division`
    1. Write iteration 2 with calculator (addition) + Change how results are displayed in every operation
    1. Test it with `node calculator.js xxx`
    1. In the feature branch `git status` + `git add.. ` + `git diff --staged` + `git commit -m "Add division operation"` + `git status` + `git log`
    1. **`git switch -`**
    1. [BEFORE THE MERGE] To do a slight change in `main` like changing how the result of the operations appear
    1. In `main`branch: `git status` + `git commit -am "Enhance output"` + `git log`
    1. `git merge main` and fix the conflict in the feature branch
    1. Conflict! Do `git status` and fix it manually in feature branch
    1. `git commit -am "Get latest main changes"`
    1. `git status`
    1. `git log` will show:
        1. Commits from all branches
        1. And merge commit
    1. `git switch -` and go back to main
    1. *Ask if there will be conflicts now* -> There will not be
    1. `git merge feature/division`
1. What can we do to prevent conflicts:
    1. Commit atommicity
    1. Frequent merges
    1. Short living branches
1. **`git branch -d xxx`** to remove the branches not needed anymore
1. Mention briefly branch naming
    1. main or master or trunk
    1. feature branches
    1. bugfix branches
1. `git tag -a 1.0.0 -m "Calculator for integer numbers"
