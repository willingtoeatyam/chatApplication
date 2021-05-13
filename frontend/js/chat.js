(() => {
    var socket = io();
    $('form').submit((e)=> {
        e.preventDefault();  //This stops the page from reloading(?)
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return true;
    })
})();