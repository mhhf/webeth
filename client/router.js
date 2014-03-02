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
  
  this.route('addressList', {
    path: '/address/list'
  });
  
  this.route('contracts', {
    path: '/contracts'
  });
  
  this.route('dev', {
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'contractdbNavi': {to: 'navi'}
    },
    path: '/dev'
  });
  
  this.route('browseContractsDb', {
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'contractdbNavi': {to: 'navi'}
    },
    path: '/contractsdb/browse'
  });
  
  this.route('login', { });
  this.route('signUp', { });
  
  
  this.route('userSettings', { 
    path: '/user/settings',
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'userSideBar': {to: 'navi'}
    }
  });
  this.route('userAddress', { 
    path: '/user/address',
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'userSideBar': {to: 'navi'}
    }
  });
  
  this.route('userContracts', { 
    path: '/user/contracts',
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'userSideBar': {to: 'navi'}
    }
  });
  
  
});
