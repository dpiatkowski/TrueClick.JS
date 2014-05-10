# TrueClick.JS

Simple jQuery plugin providing events handlers for different types of mouse clicks or simply one single event for all types of clicks.

## Installation

TrueClick.JS requires only jQuery 1.7 (or newer), which has to be included on your page before the plugin.

## Usage

	$('someSelector').trueClick({ /* settings */ });

Where `settings` is an object with following properties:

* `leftClick` - handler for left mouse button clicks
* `rightClick` - handler for right mouse button clicks; if not defined, leftClick is used instead
* `middleClick` - handler for middle mouse button (usually scroll) clicks; if not defined, leftClick is used instead

## Browser compatibility

Plugin has been tested in following browsers:

* Google Chrome 25
* Mozilla Firefox 17
* Microsoft Internet Explorer 7

## Licence

The MIT License

Copyright (c) 2013 Damian Piątkowski

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the 'Software'), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT 
SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
