Router.map(function () {
  // get contract memory
  this.route('serverRoute', {
    where: 'server',
    path: '/api/get/cm/:_id',
    action: function () {
      var contract = Contracts.findOne({_id: this.params._id });
      console.log(this.request);
      
      this.response.writeHead(200, {'Content-Type': 'application/json'});
      this.response.end( JSON.stringify( contract ) );
      
    }
  });
});
