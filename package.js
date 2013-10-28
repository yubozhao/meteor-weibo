Package.describe({
  summary: 'Wexin API integration'
});

Npm.depends({'weibo':'0.6.9'});

Package.on_use(function (api) {
  api.add_files('weibo.js', 'server');
  api.export('Weibo', 'server');
});
