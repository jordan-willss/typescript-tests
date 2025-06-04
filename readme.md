# Introduction

This is a repository which houses various different Typescript scenarios, using different branches to segment them. It is purely for educational purposes, and to offer opportunity to learn and practice Typescript.

## How to access lessons

As mentioned, each lesson lives on its own branch, each branch is configured similarly, and has the same setup instructions per branch.

To switch to a different lesson, you'll need to run the following command:

```
git checkout <branch>
```

Where `<branch>` is the name of the branch, with the `origin/` prefix, for example:

```
git checkout origin/fields-and-functions-lesson
```

The current list of available branches is:
* fields-and-functions-lesson
* fields-and-functions-lesson-hard

## Installation and running

Once you've switch to a branch, it's very quick to get it running!

Firstly, run the install command in the terminal (see Terminal menu):

```
npm install
```

And then, run the test command:

```
npm run test
```

Which should output some pass/fail logs, something like this:

```
✅ isEven(5) should be false
❌ getFullName should return full name
    Expected: Jane Doe, but got:
```

If you don't see something like this, contact Jordan Wills.

## Making and fixing tests

Now it's running, the final stage is to make the tests work.

To do this, navigate to the `main.ts` file in the `src` folder. This file is the _only_ file you should need to edit, unless otherwise stated.

Each `main.ts` example will have an example section at the top, followed by a practice section, both outlined with a comment. Finally, there are exports at the bottom. The _only_ section you'll need to edit is the practice section!