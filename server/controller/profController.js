exports.displayProf = function(req, res) {
  console.log('getting profile data!');
  console.log('req.body: ', req.body);

  var username = req.body.username;

  // search the db for a particular username
  new User({username: username})
  .fetch()
  .then(function(user) {
    if (!user) {
      // if !found, do... something?
      console.log('user not found!');
      res.redirect('/'); // PLACEHOLDER
      // res.send();  // should probably send something else
    } else {
      // if found: grab the user profile data
      var table = user.get('isDog')? 'dog' : 'walker';
      // build a knex query and search the appropriate table
      res.redirect('/'); // PLACEHOLDER
    }
  });
}
