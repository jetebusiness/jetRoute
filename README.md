# jetRoute - Simple Route Manager

> A simple jQuery route manager for fake SPA scripts, to be implemented in a fake SPA scenarios.

When you make a single script in webpack but you need to execute the scripts on exact pages, how do you do?

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/bloo_df/jquery-jetroute/master/dist/jquery.jetroute.min.js
[max]: https://raw.githubusercontent.com/bloo_df/jquery-jetroute/master/dist/jquery.jetroute.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jetroute.min.js"></script>
<script>
$.jetRoute.settings = {
    routes: {"[Custom Route Name]", "[Custom Route]"},
    routeType: ,
    cookieName: 
  };
  $(document).ready(function(){
      $.jetRoute("[Custom Route Name]", function (){ 
          
      });
  });
</script>
```

## Plugin Configuration
Default Configuration
```javascript
$.jetRoute.settings = {
    routes: {"[Custom Route Name]", "[Custom Route]"},
    routeType: "window"
  };
```
Cookie Based
```javascript
$.jetRoute.settings = {
    routes: {"[Custom Route Name]", "[Custom Route]"},
    routeType: "cookie",
    cookieName: "[Cookie Name]"
  };
```

Function Based
```javascript
$.jetRoute.settings = {
    routes: {"[Custom Route Name]", "[Custom Route]"},
    routeType: function(){
        return "[URL Route as Paths]"
    }
  };
```

## Plugin Usage
You can call the plugin everywhere. When you need to know if the route it's the one you are on pass the callback as "return true;". When you are using it at a $(document).ready(function(){}); you can pass the callback that will be executed if it's the route you are on.
```javascript
$.jetRoute("[Custom Route Name]", function (){ [Callback] });
```

## License

Apache 2.0 © Heitor Ramon Ribeiro
