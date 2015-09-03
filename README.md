# grunt-notemplates

## Overview - What this actually does...

The following slice of code is the final result that notemplates outputs. It allows for the user to split up html fragments in separate html files and concat them into one file, which contains a user defined class that has properties hanging off of it with each html fragment.

### Sample Directory and File Contents

#### Directory
```
|---Src
    |---template1.html
    |---template2.html
    |---template3.html
```

#### File Contents

##### Template 1
```html
<div id="fragment1">
</div>
```

##### Template 2
```html
<div id="fragment2">
</div>
```

##### Template 3
```html
<div id="fragment3">
</div>
```

### Final Result

```js
function templates() {
	this.template1='<div id="fragment1"></div>';
	this.template2='<div id="fragment2"></div>';
	this.template3='<div id="fragment3"></div>';
}
```

### Installation

```
npm install grunt-notemplates --save-dev
```

### NpmTask

```js
grunt.loadNpmTasks('grunt-notemplates');
```

## Example:

```js
grunt.initConfig({
  notemplates: {
      test: {
          options: {
              src: 'src/**/*.html',
              dest: 'dist/templates.js',
              className: "templates"
          }
      }
  }
});

loadNpmTasks('grunt-notemplates');
```

### notemplates Task
Run this task with the `grunt notemplates` command.

#### Options

##### src
Type: `String or Glob`

The file path of the source file.

##### dest
Type: `String`

The file path for the destination of the output file. Which will be a js file.

##### className
Type: `String`

User defined class name.

# Release History:
- 2015-09-03 v0.0.3 Fixed case where folders were inside folders and the template name contained `/`, which errored out in jshint.
- 2015-09-03 v0.0.2 Refactored code to remove an if statement that wasn't needed and logic that could instead be solved with indexOf statements.
- 2015-09-03 v0.0.1 Initial Release
