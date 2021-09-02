# hello-heroku

- [ ] open vsCode
- [ ] open terminal ctrl+~
- [ ] check if git bash is default (ctrl+shift+p to open cmd pallete: "select default..." choose "git bash"
 - [ ] navigate to your workspace, e.g.: cd Desktop
- [ ] make your project root diretory: mkdir my-super-awesome-project-name
 - [ ] navigate to the new dir/: cd my-super-awesome-project-name
- [ ] initialize a Node.js project: $: npm init -y
- [ ] install express.js: $: install i express --save
 - [ ] create a new file $: touch index.js
 - [ ] open index.js in vsCode
 - [ ] create an express server (see the ghyt repo for the source code)
 - [ ] edit package.json:
...
"scripts": {
-        "test": "echo \"Error: no test specified\" && exit 1"
+        "test": "echo \"Error: no test specified\" && exit 1",
+       "start": "node index.js"
    },

...
 - [ ] create a .gitignore file: $: echo 'node_modules' >> .gitignore (//I think that'll do it, could be wrong)
- [ ]  initialize the local git repo: $: git init
 - [ ] head over to https://github.com
 - [ ] sign in (requires an active account)
 - [ ] create a new repo: name it something like: hello-heroku or node-on-heroku or whatever
 - [ ] do not check any defaults, just give it a name and create it.
- [ ]  follow the steps on the next screen to connect this remote repo to your local git repo
 - [ ] they give you something like this:
echo "# hello-heroku-or-whatever-you-named-it" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/{YOUR-USER-NAME}/{YOUR-REPO-NAME}.git
git push -u origin main
- [ ] but might need to make sure we know what we are doing
echo "# hello-heroku-or-whatever-you-named-it" >> README.md
- git init //we already did this
- git add README.md
+ git add . 
☝️ add everything, not just the readme

git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/{YOUR-USER-NAME}/{YOUR-REPO-NAME}.git
git push -u origin main

- [ ] nav to heroku
- [ ] log in
- [ ]on your dashboard, create a new app
- [ ]give it a unique name & create

❗ in deploy menu...

- [ ]deployment method: github

- [ ] in connect ot github, search for your REPO & locaate it j& connect it

- [ ] Automatic deploys > click Enable auto deply

- [ ] Manual deploy > Deploy branch
