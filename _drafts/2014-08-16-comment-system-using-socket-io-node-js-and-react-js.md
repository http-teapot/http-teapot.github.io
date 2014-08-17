---
layout: post
permalink: comment-system-using-socket-io-node-js-and-react-js
title: Built a comment system using Socket.io, Node.js and React.js
date: 2014-08-16
---
A week or two ago I wanted to give [Socket.io](http://socket.io/) a try and learn how to work with [React.js](http://facebook.github.io/react/index.html).
It was also the opportunity to build a comment system with an infinite threaded conversation.

### Socket.io previous issues
The last time I worked with Socket.io there were memory issues.
Socket servers would replicate socket data to each other which would lead to major scaling problems.
You can find some information about scalability in Socket.io 1.0 in [the official blog](http://socket.io/blog/introducing-socket-io-1-0/#scalability).

### Node.js and Connect.js
Regarding Node.js, instead of using a MVC framework I decided to experiment with available packages and [Connect.js](https://github.com/senchalabs/connect#readme) at the core.
Connect.js ships with a very minimal set of packages and provides a system of middleware to plug in features like session cookies or asset delivery.
