# Lab1

## First commit
1. Explain repository word
1. Show online docs as well as command line docs, i.e, `man git status`
1. **`git init`**
    1. When to do this command
    1. [Docs](https://git-scm.com/docs/git-init)
    1. Folder `.git`
1. Create README like this one
1. **`git status`**
    1. When to do this command
    1. [Docs](https://git-scm.com/docs/git-status)
1. **`git add README.md`**
    1. When to do this command
    1. [Docs](https://git-scm.com/docs/git-add)
    1. We're testing firstly with the README.md as an example of a file. But this git commands will apply to all source files of the code projects.
1. `git status`
1. **`git commit -m "Initial commit"`**
1. `git status`

## Second commit
1. Do a little change in the README.md
1. `git status`
1. **`git diff`**
    1. When to do this command (After first commit, always before add!!)
    1. [Docs](https://git-scm.com/docs/git-diff)
1. `git add README.md`
1. `git commit -m "Add information to README.md"`
1. `git status`
1. **`git log`**
    1. [Docs](https://git-scm.com/docs/git-log)
    1. Explain command output

## Add all and unstage
1. **`pnpm init`**
1. **`pnpm install commander`**
1. `git status`
1. **`git add --all`**
    1. Best practices regarding `git add --all`
1. **`git restore --staged node_modules`**
    1. [Docs](https://git-scm.com/docs/git-restore)
    1. Explain why this folder is not needed in .git
    1. Explain that depending on the project, some files are typically ignored
1. `git commit -m "Add pnpm files"`
1. `git status`
1. **Create .gitignore and add "node_modules"**
    1. The `node_modules` folder doesn't appear anymore in status output
1. `git diff`
1. `git add .gitignore`
1. `git commit -m "Add .gitignore"`
1. `git add README.md`
1. `git status`
1. Show online examples of .gitignore for different programming languages
    1. Explain comments in .gitignore

## Restore a file deleted
1. Restore helps extracting a file from the index (if I added by mistake). The command will be `git restore --staged xxx`
1. But also if I removed a file by mistake. Let's try:
    1. `rm README.md`
    1. `git status`
    1. `git restore README.md`
    1. Comment the difference between having or not the option `--staged` and try again adding the removal:
            1. `rm README.md`
            1. `git status`
            1. `git add --all`
            1. `git status`
            1. `git restore --staged README.md`
            1. `git status`
            1. `git restore README.md`

## Amend a commit message
1. Let's do another change in the README.md
1. `git status`
1. `git diff`
1. Let's add a commit message with a typo
1. `git commit -m "Uxxx README.md"`
1. `git log`
1. **`git commit --amend -m "Update README.md"`**
1. `git log`
