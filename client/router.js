Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: 'notFound',
  loadingTemplate: 'loading'
});

Router.map(function () {
  
  this.route('home', {
    path: '/'
  });
  
  this.route('addCmi', {
    path: '/add'
  });
  
  this.route('blocks', {
    path: '/blocks'
  });
  
  this.route('contracts', {
    path: '/contracts'
  });
  
});
