/*eslint-env browser*/

function tellFortune(numChildren, partnerName, location, jobTitle) {
    "use strict";
    window.document.write("You will be a " + jobTitle +
                 " in " + location +
                 ", and married to " + partnerName +
                 " with " + numChildren + " kids." + "<br>");
}
tellFortune(2, "Alice", "Denver, CO", "janitor");
tellFortune(5, "John", "Phoenix, AZ", "judge");
tellFortune(0, "Pat", "Seattle, WA", "fisherman");