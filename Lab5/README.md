# Lab5


## Work with a repo not created by me
1. *Slide with repo address*
1. **`git clone git@github.com:arcones/test-node.git`**
    1. [Docs](https://git-scm.com/docs/git-clone)
1. `git switch -c feature/add-readme`
    1. Comment what to do in case we forget to create the branch before the commits
1. Add README.md
    1. Introduce a little markdown language # , ``
        > # Calculator
        > A simple node calculator capable of running operations with integer and floats.
        > ## How to run it
        > `node calculator.js` 
    1. `git status` + `git add README.md` + `git commit -m "Add basic documentation"` + `git push -u origin feature/add-readme`
    1. Talk about atomic commits / atomic branches / frequent commits (CICD)
    1. Open PR in GH and merge
        1. Show how the README is redenred
1. `node calculator.js` -> Lack of dependencies -> `pnpm install`
1. `git switch main`

## Forks
1. *Slide and fork explanation*
1. Show my fork https://github.com/arcones/pysradb
1. Show a PR between repos
1. Do a fork of https://github.com/arcones/test-node
1. Do some simple change in the README.md for example and create a PR between forks

## Rebase
1. In `test-node` local copy, create a branch `feature/several-commits-PR`
1. Opps! We didn't have main branch updated from here, so we will do: `git pull origin main` from the branch
1. As there are no conflicts, the changes are automatically integrated in my feature branch: `git log`
1. Add README change, status, add, staged diff and commit
1. Add another change in the code (adding new operation). Test it.
1. Status, add, staged diff and commit
1. Push my branch with all the changes: `git push -u origin feature/several-commits-PR`
1. Create PR: highlight:
    1. Merge commit: commits are moved to main with a specific commit for the merge
    1. Squash and merge: commits are combined in a single one that will go to main
    1. Rebase and merge: commits are moved to main without a specific commit for merge
1. Instead of PR in GH: do the rebase in local before
1. `git rebase -i main`
    1. Squash one: we cannot squash the first one!
    1. Reword other
1. `git push` -> Show error -> **`git push -f`**
    1. Warn about this command!
1. Check the changes now in the PR in GH
    1. Rebase and merge: show that there is no merge commit from this and from the previous there is
1. In local: **`git push --delete origin feature/several-commits-PR`**
1. `git branch` -> **`git branch --all`**
    1. Do a remote branch cleanup
1. `git fetch --prune` to sync in local
1. Branch cleanup in local: `git branch -d feature/add-readme feature/several-commits-PR`

## Remove file you accidentally added to git
1. **`git rm --cached -r node_modules`** if it is a directory you want to remove all
1. **`git rm --cached -i passwords.txt`** if it is a single file
