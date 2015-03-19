
var fn = {
    ready: function(){
        alert("=)");
        document.addEventListener("deviceready", fn.init(), false);
        
    },
    init: function(){   
        alert("2");
        $('#contact').tap(fn.activa);
        $('#pony').tap(fn.beep);
        $('#rosas').tap(fn.notifica);
        
    },
    activa:function(){
    alert("3");
    // Vibrate for 3 seconds
    navigator.vibrate(3000);
 
   },

   beep: function() {
    navigator.notification.beep(5);
   },

   notifica:function() {
    navigator.notification.alert(
        'We are the champions',
        alerta,
        'Pobre pequeño',
        'Terminado...'
    );
   },

   alerta:function() {
    alert("Hola pony");
   }
};



$(fn.ready);



