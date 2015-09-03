/*
 * grunt-notemplates
 * @version 0.0.1
 *
 * Copyright (c) 2015 The NoInfoPath Group, llc.
 * Licensed under the MIT license.
 */
module.exports = function(grunt) {

  'use strict';
  /*
   * @function noTemplates
   *
   * ## Parameters
   *
   * |Name|Type|Description|
   * |----|----|-----------|
   * |src|string|User defined single file or glob|
   * |dest|string||
   * |dest|string|className|
  */

  function noTemplates(src, dest, className){
       var nawFunctionStart = "function ",
           nawFunctionMiddle = "() { \n",
           nawFunctionEnd = "}",
           nawFinalTemplate = "",
           nawFinalTemplates = "";

       grunt.file.expand(src).forEach(function(dir){

           var nawTemplate = '',
               nawMinifiedTemplate = '',
               nawMinifiedTemplateSplit = '',
               nawConcat = '',
               nawClassName = className,
               nawTemplateName = ''
               ;

           if(dir.slice(-4) === "html"){
               nawTemplate = grunt.file.read(dir).toString();
               nawMinifiedTemplate = nawTemplate.trim();
               nawTemplateName = dir.substring((dir.indexOf("/") + 1),((dir.length) - 5));
               nawMinifiedTemplateSplit = nawMinifiedTemplate.split("\n");

               for(var l in nawMinifiedTemplateSplit){
                   var trimmed = nawMinifiedTemplateSplit[l].trim();
                       nawConcat = nawConcat + trimmed;
               }

               nawFinalTemplate = "\t" + "this." + nawTemplateName + "=" + "'" + nawConcat + "';";
               nawFinalTemplates = nawFinalTemplates + nawFinalTemplate + "\n";
           }
       });

       var nawImDoneWithThis = nawFunctionStart + className + nawFunctionMiddle + nawFinalTemplates + nawFunctionEnd;

    /*
     * Write contents(noImDoneWithThis) to the user's destination(dest)
    */
    grunt.file.write(dest, nawImDoneWithThis);
  }

  grunt.registerMultiTask('notemplates', 'The best Grunt plugin ever.', function() {

      /*
       * Grab all options specified by the user
       * var options = this.options();
      */
      var options = this.options();

      /*
       * User specified Source(src), Destination(dest), Starting comment syntax(start), Starting @ syntax(tableofconents)
      */
      noTemplates(options.src, options.dest, options.className);
  });
};
