amf format serializer for USCO project

General information
-------------------
This repository contains both the:
- node.js version:
amf-serializer.js at the root of the project
- polymer.js/browser version which is a combo of
lib/amf-serializer.js (browserified version of the above)
amf-serializer.html


How to generate browser/polymer.js version (with require support):
------------------------------------------------------------------
Type: 

    browserify amf-serializer.js -r ./amf-serializer.js:amf-serializer -o lib/amf-serializer.js -x q -x jszip -x composite-detect -x three

then replace (manually for now) all following entries in the generated file:

  "composite-detect":"awZPbp","jszip":"5BB7bb","three":"Wor+Zu"

with the correct module names, ie:

   "composite-detect":"composite-detect","jszip":"jszip","three":"three"



