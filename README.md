# Yeoman generator for Cubixx-WebPackages


## Introduction
The generators provide a scaffolding using [Yeoman](http://yeoman.io) (a scaffolding tool for the web).
It lets you easily create and customize Cubixx (custom) web packages via the command line. This saves you time writing boilerplate code so you can start writing up the logic to your components straight away.

## Features
* Scaffolding Cubixx-WebPackages
* Prompting for the most important config-values
* Validation of user input values.


## Installation

1. The Yeoman package. Install it if it is not already on your system: `npm install -g yo`
2. Install the Yeoman generator for Cubixx-WebPackages: `npm install -g https://npm.webblebase.net:444/generator-cubixx/-/generator-cubixx-<version>.tgz`


## Scaffold a WebPackage

1. Make a new directory and cd into it: `mkdir -p my-project && cd $_`
2. Scaffold a new Cubixx-WebPackage: `yo cubixx:<generator>`

## Available Generators
* `yo cubixx`: Lists available generators.
* `yo cubixx:webapp`: Sets up a new WebPackage for a WebApplication , generating all the boilerplate you need to get started.
* `yo cubixx:compound`: Sets up a new WebPackage for a CompoundComponent.
* `yo cubixx:elementary`: Sets up a new WebPackage for a Elementary CubxPolymer -Component.
* `yo cubixx:webutil`: Sets up a new WebPackage for a WebUtil (aka WebResource).

## Use the IDE
The generated project comes with an **Integrated Development Environment (IDE)**. 

Some notes on how to deal with this: 

1. The IDE is part of your project, so we recommend to include the `ide` -subfolder into your _source-control-management_.
2. The IDE is yours. You are free to _modify structure and tasks to your needs_. 
3. The IDE is managed within a dedicated git-Repository. If you want to _stay up-to-date with the latest changes_, map the IDE-Git-Repo into your WebPackage-Project using the Git-Subtree-Feature (HowTo: [de](https://git-scm.com/book/de/v1/Git-Tools-Subtree-Merging)/[en](https://git-scm.com/book/en/v1/Git-Tools-Subtree-Merging))

## License
MIT <http://opensource.org/licenses/MIT>

## Releases
siehe [[Releases.md]]
