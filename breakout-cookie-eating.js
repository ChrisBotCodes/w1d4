// cookie eat example

var cookiesEaten = 0;
var cookieInventory = 10;


// not as good:
//function eatCookie(inventory) {
  //other business logic about eating a cookie
  //return inventory - 1;
//}

function bakeCookie(inventory) {
  return inventory + 1;
}

// requires knowing the proper inputs and is accident prone:
// cookieInventory = eatCookie(cookieInventory)


function eatCookie() {
  cookiesEaten++;
  cookieInventory--;
}





