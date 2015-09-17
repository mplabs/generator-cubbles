## ide4coders

**IDE - Integrated Development Cnvironment for Coders**


## How to include the IDE into your project
We recommend using the `git subtree` -feature to add and (if needed) to update the IDE. The basic principle is, that a 'copy' of this project will be part (a subtree) of your project-file-tree.
You find an overview on how to deal with git-subtrees at <http://blogs.atlassian.com/2013/05/alternatives-to-git-submodule-git-subtree/>.

We recommend the following steps:

1. Add this repo as a remote-repository to your project´s git config: 
    
        $ git remote add -f ide4coders https://pmt.incowia.de/webble/r/client/ide4coders.git
        
2.  Add the subtree: 
        
        # fetch the current state of the branch of your choice (here 'master')
        $ git fetch ide4coders master
        
        # create a folder 'ide' and add all resources of the 'ide4coders' -remote´s 'master' -branch
        $ git subtree add --prefix ide ide4coders/master --squash
        
3.  Later ... Update the subtree in case you´d like to merge in changes: 
        
        # fetch the current state
        $ git fetch ide4coders master
        
        # merge in the locally available updates
        $ git subtree merge --prefix ide ide4coders/master --squash

3.  For IDE-Committers ... Pushing modifications from your subtree back to the upstream-repo is easy: 
        
        # fetch the current state
        $ git subtree push --prefix ide ide4coders master
        
Note: For different _modelVersions_ of a WebPackage surely we need to provide related IDE-Versions. Maybe we manage this with different branches. So be sure to refer to the right branch when using the commands above.