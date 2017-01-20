var signin = function() {
  // search the db for a particular users
  // if !found, send back a 401 not found status code
  // if found: hash the pw attempt against the stored pw
    // if matched, redirect to landing page/dashboard and authenticate
    // if mismatched, send back to login page
}

var signup = function() {
  // we'll be given some obj with data to be parsed and entered into the db.
  // check if the provided username exists in the db
    // if found: send back an error
    // if !found: register the user into TWO tables,
        // the general user table and the dog/walker table
        // the user table will take a hashed version of the desired pw.
}
