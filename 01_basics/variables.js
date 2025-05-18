console.log("This section is dedicated to constabt and variables");

const accountId = 12345
const accountIdentity = "Can't change"
let accountName = "Sakshi Jain"
var accountCity = "Delhi"
let accountNumber = 456789
accountBank = "SBI"
let accountType

//print values
console.table([accountId, accountIdentity, accountName, accountCity, accountNumber, accountBank, accountType])

//change values
accountID = 12345
console.log(accountId)

accountName = "Sakshi"
accountCity = "Mumbai"
accountNumber = 123456
accountBank = "HDFC"
accountType = "Normal"
console.table([accountId, accountIdentity, accountName, accountCity, accountNumber, accountBank, accountType])

//don't use var for defining as it doesn't support scoping. Let is encouraged for the same reason.
//declaring variables without any identifier is also discouraged like we did for accountType as it becomes a global variable