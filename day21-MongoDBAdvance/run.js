// example of how to run aggregation pipeline
[
  {
    $match: {
      "company.phone": { $regex: "^\\+1 \\(940\\)" }
    }
  },
  {
    $count: "usersWithSpecialPhoneNumber"
  }
]
// done all the work of today in browser itself
