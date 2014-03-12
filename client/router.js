// TODO: fuck port subscribe somewhere else
// Meteor.subscribe('transactions');

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
  
  this.route('block', {
    path: '/block/:_id',
    before: function(){
      return Meteor.subscribe('block',this.params._id);
    },
    data: function(){
      return {
        block: Blocks.findOne({ _id: this.params._id })
      }
    }
  });
  
  this.route('blocks', {
    path: '/blocks',
    before: function(){
      Session.set('blockLimit', 20);
    },
    action: function(){
      var blocksHandle;
      
      Deps.autorun(function(){
        var newBlocksHandle = Meteor.subscribe('blocks',Session.get('blockLimit'));
        if( blocksHandle ) blocksHandle.stop();
        blocksHandle = newBlocksHandle;
      });
      
      this.render();
    }
  });
  
  this.route('addressList', {
    path: '/address/list'
  });
  
  this.route('transactionsList', {
    path: '/tx/list',
    waitOn: function(){
      return Meteor.subscribe('transactions');
    },
    data: function(){
      return {
        txs: Transactions.find()
      };
    }
  });
  
  this.route('contract', {
    path: '/contract/:_id',
    before: function(){
      return Meteor.subscribe('contract',this.params._id);
    },
    data: function(){
      return {
        contract: Contracts.findOne({_id: this.params._id})
      };
    }
  });
  
  this.route('contracts', {
    path: '/contracts',
    before: function(){
      Session.set('contractLimit',20);
    },
    action: function(){
      var contractsHandler;
      
      Deps.autorun( function(){
        var newContractHandle = Meteor.subscribe('contracts',Session.get('contractLimit'));
        if( contractsHandler ) contractsHandler.stop();
        contractsHandler = newContractHandle;
      });
      
      this.render();
    }
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
  
  this.route('namingContract', {
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'contractdbNavi': {to: 'navi'}
    },
    path: '/dev/naming'
  });
  
  this.route('newName', {
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'contractdbNavi': {to: 'navi'}
    },
    path: '/dev/naming/new'
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
