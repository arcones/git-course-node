# Lab4

> Same folder as lab3

# Github start up
1. Following GH instructions after creating a new repository
    1. **`git remote add origin git@github.com:arcones/test-node.git`**
        1. [Docs](https://git-scm.com/docs/git-remote)
        1. Explain the `remote` concept
        1. Explain `origin` concept
    1. `git branch -M main`
    1. **`git push -u origin main`**
        1. [Docs](https://git-scm.com/docs/git-push)
        1. Visualize the results in Github
            1. Commit history
            1. Branches/tags
    1. Create branch in my local `git switch -c feature/allow-decimals`
        1. Add changes required
        1.  `git status` + `git diff ` +  `git commit -am "Allow float operations"`
        1. **`git log`** -> It will appear origin too
        1. Do `git status` and emphasize the output (no origin mentioning)
        1. `git push --set-upstream origin feature/allow-decimals`
            1. Mention short form `-u`
            1. Verify with `git branch --remotes` or the short version `git branch -r`
            1. Mention new output of the `git status`
        1. Show GH updates
            1. Branches count
            1. Highlight about the new branch and "Compare & pull request"
                1. Explain what is a "pull request" or "merge request"
            1. Do the PR with proper title / description
            1. Do a review:
                1. Input comments/suggestions in the PR
                1. Resolve conversations
                1. Merge pull request
                1. Check commit history on main in GH
            1. In local, `git switch main`
            1. `git status` -> Will not show the changes in main local
            1. **`git fetch`**
                1. [Docs](https://git-scm.com/docs/git-fetch)
                1. New commits and branches from remote
            1. Repeat `git status` in main
            1. **`git pull`**
                1. [Docs](https://git-scm.com/docs/git-pull)
                1. Mention that here a conflict can happen (same conditions as before)
                1. Usually we don't commit on main/master branch directly ever!!
    1. Mention that this is exactly the professional flow: 
        1. Clone repo 
        1. Create branch in my local copy of the repo
        1. Commit changes in my branch
        1. Upload my branch
        1. Create PR in the server
    1. Create a branch in GH directly
    1. Create a tag in local main: `git tag -a 1.1.0 -m "Calculator with decimals"`
        1. Explain semver update
        1. `git push origin TAB` -> `git push origin 1.1.0`
            1. Alternative `git push --tags` to upload all at onve
        1. Visualize in GH the results (tags, releases)