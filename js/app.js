let user_age = 19;
let is_subscribed = true;
if (user_age < 18 && is_subscribed === true) {
    console.log("The user is younger than 18 and is subscribed for the membership");
} else if (user_age > 18 && is_subscribed === true) {
    console.log("the user is older than 18 and is subscribed to the membership ");
} else if (user_age > 18 && is_subscribed === false) {
    console.log("The user is older than 18 and is not subscribed to the membership");
} else {
    console.log("The user is younger than 18 and is not subscribed to the membership");
}