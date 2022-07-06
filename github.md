Steps to save to github from local 
1.	“Git init –b main” initializes local directory as a git repository
2.	“git add .” adds all the files from repository (the “.”)
3.	“git commit –m “comment title” –m ”comment body”” commits (locks in) the files/changes of the local git repository
4.	“gh repo create” creates the repo on GitHub
a.	“Push an existing local repository to GitHub” select option when prompted 
b.	Follow rest of prompts

“git checkout –b <branch name>” creates and checks out new branch

Github pages deployement
1.	“npm install gh-pages --save-dev” installs dependencies 
2.	Add homepage property to package.json (under “name” per https://www.freecodecamp.org/news/deploy-a-react-app-to-github-pages/)
a.	“homepage”: “ https://{Github-username}.github.io/{Github-repo-name}”
3.	Add deploy scripts to package.json (above “start” ) (see https://create-react-app.dev/docs/deployment/)
a.	“predeploy”: “npm run build”,
b.	“deploy”: “gh-pages -d build”,
4.	“npm run deploy” creates gh-pages branch in repo
5.	Set source on github repo to gh-pages branch
6.	Add/commit/push from local 


Commits that include changes in a single topic 
•	Use staging area to select files, parts of files, for a commit
Ex: git status will show all files that have been modified
o	git add css/general.css adds just the css file
o	git diff index.html  shows all changes in the file
o	git add –p index.html  -p means patch level
	git will move through each hunk of changes and ask y/n 
o	git status will show what’s going to be in the commit and what isn’t
•	Commit message
o	Subject : concise summary of what happened
o	Body: more detail
	What is different than before
	What is reason for change
	Anything to watch out for/ particularly interesting
o	Use ‘git commit’ only ( not ‘git commit –m’)
	Will bring up window to write message
•	Subject
•	blank line
•	Body
•	Make a written best practice to branch “Branch Workflow”
o	Always be integrating
	Few branches
	Small commits
•	Can’t risk big commits where things are always being integrated
	HIGH quality testing and QA standards
o	State, Release, Feature Branches
	Different branches for different jobs
o	Types of Branches
	Long Running
•	Every project has one “Main”
•	All LR B exist throughout complete lifecycle
o	Integration (i.e Develop, Staging) Branches
•	Commits only make it to LR B through integration, Merge /Rebase
o	No untested code in the main branch
	Short Running Branch
•	Features, bug fix, experiment,
•	Based on long running branch
•	After its tested, merged rebased , it can be deleted
•	2 strategies
o	GitHub Flow
	Simple/lean: Only one LRB “Main”
•	Feature & bug fix branches as needed
o	GitFlow
	More structure and rules
	2 long running:  Main and Develop
•	Develop starts new releases, features come off develop
•	Once change is integrated, it is merged into Main
	Short lived features releases hotfixes all come off Develop
•	Pull Requests
o	Allow us to communicate and review code
	Invites a review before changes are merged into main
o	Allows us to contribute to others code
	Forks us a clone, allows us to change, open pull request
	Owner will review
o	“git branch test” creates a new branch called test
o	“git push –set -upstream origin test”
	Changed updated into out origin on the clone
	Then create pull request to owner of original and they can review
•	Merge Conflicts
o	When integrating changes from different source
	merge, rebase, pull, cherry-pick, stash apply
o	Git will notify immediately  in the situation
	Merge will fail
o	Git Status will also show the conflict “unmerged paths”
o	“git merge--abort” or “git rebase --abort”  to UNDO conflict and start over
	Even after attempting to fix the conflict
•	How a merge & rebase works
o	Merge looks for three commits
	Common ancestor
	End points of branch to be merged (other two)
	“Fastward merge” joins branches so they share the same history, not common
	Merge commit, git creates a new commit to outline differences between them, most common
•	Created by git automatically, just connects two branches
o	Rebase – straight line of commits
	“git rebase branch-B”’
	Git removes all commits between commits to be merged
	Git merges branches to one common brance
	Git adds “rebases” all the removed commits as a new branch
	(Eg C1 – C2 – C4 –C4)
	Only for cleaning up local branch history, before adding to team branch
