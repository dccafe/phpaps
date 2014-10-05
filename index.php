<?php

include 'models/User.php';

include_once 'views/header.php';

// Load Database
// TODO

// Check for existing products
// TODO

// Show available Bids
// TODO
foreach ($products as $item) {
  echo $item;
}

// Test suites
// testing the creation of a new user
$someone = new User('John Smith');
echo $someone;


include_once 'views/footer.php';

?>
