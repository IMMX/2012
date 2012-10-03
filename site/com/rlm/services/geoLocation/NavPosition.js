function initNav()
{
var succeed = function(obj) {
    navigator.geolocation.received = true;
    !navigator.geolocation.timedout?alert('GOT YAH'):alert('GOT YAH but user was to slow'); 
};
var failed  = function(obj) { 
    navigator.geolocation.received = true;
    !navigator.geolocation.timedout?alert('just failed'):alert('failed and user was to slow as well, tzz ._.'); 
};
var timedout    = function() {
    navigator.geolocation.timedout = true; // could be used for other callbacks to trace if its timed out or not
    !navigator.geolocation.received?alert('Request timed out'):null;    
}

// Extend geolocation object
if ( navigator.geolocation  ) {
    navigator.geolocation.retrievePermission = function retrievePermission(succeed,failed,options,timeout) {
        this.received = false;              // reference for timeout callback
        this.timedout = false;              // reference for other callbacks
        this.getCurrentPosition.apply(this,arguments);  // actual request

        // Trigger timeout with its function; default timeout offset 5000ms
        if ( timeout ) {
            setTimeout(timeout.callback,timeout.offset || 5000);
        }
    }

    // New location request with timeout callback
    navigator.geolocation.retrievePermission(succeed,failed,{},{
        offset: 10000, // miliseconds
        callback: timedout  
    });

// Awesome thingy is not implemented
} else {
    alert('geolocation is not supported');
}
}