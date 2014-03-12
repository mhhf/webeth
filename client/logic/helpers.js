Handlebars.registerHelper("formatTimestamp", function( timestamp ) {
  var date = new Date(timestamp*1000);
  var dateStr = dateFormat(date,'HH:MM:ss - dd-mm-yy'); 
  return dateStr;
});

Handlebars.registerHelper("timeSince", function( timestamp ) {
  var date = new Date(timestamp*1000);
  return timeSince(date);
});

function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}
