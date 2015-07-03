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
* `yo cubixx:elementary`: Sets up a new WebPackage for a Elementary CubxPolymer -Component , generating all the boilerplate you need to get started.
* `yo cubixx:webutil`: Sets up a new WebPackage for a WebUtil (aka WebResource), generating all the boilerplate you need to get started.

## License
MIT <http://opensource.org/licenses/MIT>

## Releases
* Version 0.2.0 (2015-07-03): Extended `cubixx:webutil` | New `cubixx:elementary`
* Version 0.1.0 (2015-07-01): Basic implementation of `cubixx:webutil`