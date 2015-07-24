(function ($) {
   var bg_element;
   var bg_settings;
   var bg_img_rotate_count = 0;
   $.fn.bgrotate = function( options ) {
      // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            images: "",
            interval: 7000
        }, options );
         bg_element = this; 
         bg_settings = settings;
         preloadimages(settings.images);
         return  rotateBackground(settings);

         function rotateBackground(settings){
            bg_element.css({
               backgroundImage: 'url(' + bg_settings.images[0] + ')',
            });
            bg_img_rotate_count++;
            setInterval(function(){
               bg_element.css({
                  backgroundImage: 'url(' + bg_settings.images[bg_img_rotate_count] + ')',
               });
               bg_img_rotate_count++;
               if (bg_img_rotate_count >= bg_settings.images.length){
                  bg_img_rotate_count = 0;
               }
            }, bg_settings.interval);
         };
         function preloadimages(arr){
            var newimages=[]
            var arr=(typeof arr!="object")? [arr] : arr //force arr parameter to always be an array
            for (var i=0; i<arr.length; i++){
                newimages[i]=new Image()
                newimages[i].src=arr[i]
         }
}
   };
}( jQuery ));
