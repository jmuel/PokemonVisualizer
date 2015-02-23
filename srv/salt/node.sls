nodejs:
  pkgrepo:
    - managed
    - ppa: chris-lea/node.js
    - require_in: 
      - pkg: nodejs
  pkg:
    - latest
npm:
  pkg:
    - installed
git:
  pkg:
    - installed
