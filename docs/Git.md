# Git

## Undo last commit

[stack0verflow](http://stackoverflow.com/questions/927358/how-do-you-undo-the-last-commit)

```bash
$ git commit -m "Something terribly misguided"
$ git reset --soft HEAD~
# << edit files as necessary >>
$ git add new_file.md
$ git commit -c ORIG_HEAD
```