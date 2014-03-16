Router.map( function(){
  
  this.route('dev', {
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'contractdbNavi': {to: 'navi'}
    },
    path: '/dev'
  });
  
  this.route('devContract', {
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'contractdbNavi': {to: 'navi'}
    },
    path: '/dev/contract',
    waitOn: function(){
      return Meteor.subscribe('code');
    },
    data: function(){
      return {
        contracts: Code.find()
      };
    }
  });
  
  this.route('devContractNew', {
    layoutTemplate: 'navlayout',
    yieldTemplates: {
      'contractdbNavi': {to: 'navi'}
    },
    path: '/dev/contract/new'
  });
  
  this.route('devContractFork', {
    layoutTemplate: 'navlayout',
    template: 'devContractNew',
    yieldTemplates: {
      'contractdbNavi': {to: 'navi'}
    },
    path: '/dev/contract/new/from/:_id',
    waitOn: function(){
      return Meteor.subscribe('code', this.params._id);
    },
    data: function(){
      var code = Code.findOne({ _id: this.params._id });
      
      return {
        name: code.name,
        code: code.code,
        desc: code.desc
      };
    }
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
  
});
