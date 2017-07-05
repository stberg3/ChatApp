function authenticateMiddleware(){
  return function(req, res, next){
    if(req.isAuthenticated()){
      return next();
    }
    ers.redirect('/');
  }
}
