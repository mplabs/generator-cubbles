## cubixx-coder-devtools

**DeveloperTools for Coders**


## How to include the DeveloperTools into your project
We recommend using the `git subtree` -feature to add and (if needed) to update the DeveloperTools. The basic principle is, that a 'copy' of this project will be part (a subtree) of your project-file-tree.
You find an overview on how to deal with git-subtrees at <http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/>.

We recommend the following steps:

1. Add this repo as a remote-repository to your project´s git config: 
    
        $ git remote add -f cubixx-coder-devtools https://pmt.incowia.de/webble/r/client/cubixx-coder-devtools.git
        
2.  Add the subtree: 
        
        # fetch the current state of the branch of your choice (here 'master')
        $ git fetch cubixx-coder-devtools master
        
        # create a folder 'devtools' and add all resources of the 'cubixx-coder-devtools' -remote´s 'master' -branch
        $ git subtree add --prefix devtools cubixx-coder-devtools/master --squash
        
3.  Later ... Update the subtree in case you´d like to merge in changes: 
        
        # fetch the current state
        $ git fetch cubixx-coder-devtools master
        
        # merge in the locally available updates
        $ git subtree merge --prefix devtools cubixx-coder-devtools/master --squash

3.  For IDE-Committers ... Pushing modifications from your subtree back to the upstream-repo is easy: 
        
        # fetch the current state
        $ git subtree push --prefix devtools cubixx-coder-devtools master
        
Note: For different _modelVersions_ of a WebPackage surely we need to provide related devtools-Versions. Maybe we manage this with different branches. So be sure to refer to the right branch when using the commands above.