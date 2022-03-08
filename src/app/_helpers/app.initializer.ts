
declare const FB: any;

export function appInitializer() {
  return () => new Promise(resolve => {
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "103257502320861");
    chatbox.setAttribute("attribution", "biz_inbox");
        // wait for facebook sdk to initialize before starting the angular app
        window.fbAsyncInit = function() {
          FB.init({
            xfbml            : true,
            version          : 'v13.0'
          });
        };




        // load facebook sdk script
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/zh_TW/sdk/xfbml.customerchat.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
}
