﻿# HTML Signature Generator Boilerplate

This is a Boilerplate to Generator HTML 5 Mail Signature, you can use it for your company mails, forums...

[Try the latest working version online now!](https://protocolnebula.github.io/HTML-Signature-Generator-Boilerplate-JS/index.html)


## What necessities does it cover?

Ìf you have to make some (or many) signature to your Company workers, clients, etc... you can save
your time of repetitive tasks.

## How to configure?

1. Download the latest version from `master` (or clone repository).
2. Add your needed files (like images or documents) in `assets/`.
3. Duplicate `configurable_struct` to `configurable` folder and edit `configurable` folder files as your requirements.
4. Upload to any web server (necessary for `non-standalone` mode).

### Why duplicate configurable_struct?

This "feature" is to avoid lost `configurable` data on app update.

## How this help me? / How it works?

This will let to the end user to create him Signature using a simple `Web Form` (easy configuration).

You can create the signature filling form info and send a custom URL with all filled data (user can change it).

### There's more!

Imagine you change the custom signature and all users must change, in normal case you must generate it manually.

If you **save the link** sended to your end users, they will obtain again the updated signature!

## What can I do when the script is working?

- Generate the signature (even without server in standalone mode)
- Generate a stand-alone signature:
  - IMAGES will be included in the HTML as base64
  - Signature will be greater size, but if signature server down, signature will work
- Send the signature link already generated (user only need to copy/paste signature)

**IMPORTANT:** Note that you must configure new images with corresponding functions for `standalone mode` 
and currently `standalone` **not** support documents on html.

## Why vanilla javascript?

> Hey! This is not vanilla javascript! You use too much libraries!
> - Any developer

Well, this is a simple script that I started to wrote as `almost vanilla` [(check V1.0)](https://github.com/ProtocolNebula/HTML-Signature-Generator-Boilerplate-JS/tree/v1.0) almost for fun. Angular or similar will be too bigger and "hard" for this  simple script (well... it supposed to be simple in V1).

Create a small "vanilla" app with some external libraries can be funny, and I have curiosity about how work some libraries, so this project will morph in function of tests.

**Problem:** Currently most older browsers are not supported for pollifyll reasons (jQuery fix almost all).

**Problem 2:** This app has more features than the original design, so if V2 is launched, it will have some node.js requirements (like optional minify JS and other possible future requirements).

### Why you use Bootstrap? (which includes jQuery)

Well, is design related problems, I prefer to use an already beautifull CSS to increase speed development.

Note that, even `Bootstrap` includes `jQuery`, is not used in app components (it can be added in the future as retro-compatibilty).


# Thanks To

## JavaScript

- [mustache.js](https://github.com/janl/mustache.js) - HTML Template Processor
- [require.js](https://requirejs.org/) - Dinamically load JS
- [BootStrap](https://getbootstrap.com) - To provide a non-so-uggly interface

## Icons

- [Smashicons](https://www.flaticon.com/authors/smashicons)
- [Freepik](http://www.freepik.com)
- [Yannick](https://www.flaticon.com/authors/yannick)
