# Lab2

## Commit hashes
1. Long version in `git log`
1. Short version, i.e, first 5 characters

## Revert a commit
### Soft revert
1. Let's do another change in the README.md
1. `git status`
1. `git diff`
1. `git commit -m "Update README.md"`
1. `git log`
1. **`git reset XXXX`** and tab button -> Go to the previous commit
    1. [Docs](https://git-scm.com/docs/git-reset)
    1. Explain HEAD concept
1. `git log`
1. `git status`
1. `git diff`
1. `git restore README.md`

### Hard revert
1. Let's do another change in the README.md
1. `git status`
1. `git diff`
1. `git commit -m "Update README.md"`
1. **`git reset --hard XXXX`**

## Faster commits
1. Let's do another change in the README.md
1. `git status`
1. `git commit -am "Update README.md"` (Idempotent)
1. Watch out! The first time you add a file, you need to `git add` explicly:
    1. Create a new file `echo "Esto es una prueba" >> prueba.txt`
    1. `git status`
    1. `git commit -am "Add new file"` fails
    1. `git add prueba.txt && git commit -am "Add new file"`

## Tags
1. Explain tags
    1. [Docs](https://git-scm.com/docs/git-tag)
    1. Repos have many commits but usually less tags
1. **`git tag`** -> The output will be empty
1. **`git tag -a 1.0 -m "Ready to deploy version"`**
1. `git tag`
1. `git log`
1. If we wanna move the tag to a differnt commit, not the HEAD
1. **`git tag -d 1.0`**
1. `git tag`
1. **`git tag -a 1.0.0 -m "Ready to deploy version" XXXX`**
    1. Explain that we can annotate tags or not
1. `git log`
1. `git tag`

## Semver
1. Meaning of each number
1. Version 0
1. `package.json` examples