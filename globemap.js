var script = document.createElement('script');
script.type = 'text/javascript';
script.id = 'clstr_globe';
script.src = '//clustrmaps.com/globe.js?d=dK5jSPYRyZTlDciFh6PFE_lfAK3lqo-UbY6yJNY2sVg';

// Append the script to the 'visitormap' div, This means the script will be placed inside the visitormap div, after any other content that might be inside the div.
document.querySelector('.visitormap').appendChild(script);
