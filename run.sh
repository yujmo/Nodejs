#!/bin/bash
while read line
do
      npm install $line
done < /Nodejs/install.txt
node /Nodejs/restful/server.js
