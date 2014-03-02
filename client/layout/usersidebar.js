Template.userSideBar.isActive = function( name ){
  return (Router.current() && Router.current().path.indexOf(name)==0)?'active':'';
}
