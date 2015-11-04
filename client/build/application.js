(function() {

/*
 * This is an Ember Application (emberjs.com)
 * Ember uses jQuery (jquery.com) and Handlebars (handlebarsjs.com) - import them by that order!
 * Ember gives you a JS MVC Framework to develop ambitious web apps
 * The whole application is generated and minified using the Gruntfile.js
 */

/*
	Get our generated templates
*/


})();

(function() {

Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1;


  data.buffer.push("<div class=\"container\">\n      <!-- Static navbar -->\n      <div class=\"navbar navbar-default\" role=\"navigation\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"http://notifica.re\">Project name</a>\n          </div>\n          <div class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n              <li class=\"active\"><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li class=\"dropdown\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Dropdown <b class=\"caret\"></b></a>\n                <ul class=\"dropdown-menu\">\n                  <li><a href=\"#\">Action</a></li>\n                  <li><a href=\"#\">Another action</a></li>\n                  <li><a href=\"#\">Something else here</a></li>\n                  <li class=\"divider\"></li>\n                  <li class=\"dropdown-header\">Nav header</li>\n                  <li><a href=\"#\">Separated link</a></li>\n                  <li><a href=\"#\">One more separated link</a></li>\n                </ul>\n              </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li class=\"active\"><a href=\"./\">Default</a></li>\n              <li><a href=\"../navbar-static-top/\">Static top</a></li>\n              <li><a href=\"../navbar-fixed-top/\">Fixed top</a></li>\n            </ul>\n          </div><!--/.nav-collapse -->\n        </div><!--/.container-fluid -->\n      </div>\n	");
  stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
  if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
  data.buffer.push("\n	\n</div> <!-- /container -->");
  return buffer;
  
});

Ember.TEMPLATES["error"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container padding-for-fixed\">\n	<div class=\"span8 offset2\">\n		<div class=\"padded\">\n			<div class=\"login box\" style=\"margin-top: 80px;\">					\n				<div class=\"box-header\">\n					<span class=\"title\">Something went wrong :-( </span>\n				</div>\n				<div class=\"box-content padded\">\n					<div class=\"error-page\">\n						<h3><i class=\"icon-warning-sign\"></i>Notificare dashboard can't recognize this URL.</h3>\n						<p>If you think something is wrong, please create a support ticket at <a href=\"https://notificare.zendesk.com/anonymous_requests/new\">support@notifica.re</a>.</p>\n						<a href=\"/\" class=\"btn btn-blue\">Back to Sign in</a>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>");
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"jumbotron\">\n  <h1>Navbar example test</h1>\n  <p>This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p>\n  <p>\n    <a class=\"btn btn-lg btn-primary\" href=\"../../components/#navbar\" role=\"button\">View navbar docs &raquo;</a>\n  </p>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-lg-4\">\n    <img class=\"img-circle\" data-src=\"holder.js/140x140\" alt=\"140x140\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+\" style=\"width: 140px; height: 140px;\">\n    <h2>Heading</h2>\n    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details</a></p>\n  </div><!-- /.col-lg-4 -->\n  <div class=\"col-lg-4\">\n    <img class=\"img-circle\" data-src=\"holder.js/140x140\" alt=\"140x140\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+\" style=\"width: 140px; height: 140px;\">\n    <h2>Heading</h2>\n    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details</a></p>\n  </div><!-- /.col-lg-4 -->\n  <div class=\"col-lg-4\">\n    <img class=\"img-circle\" data-src=\"holder.js/140x140\" alt=\"140x140\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNDAiIGhlaWdodD0iMTQwIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI2VlZSI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjcwIiB5PSI3MCIgc3R5bGU9ImZpbGw6I2FhYTtmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtZmFtaWx5OkFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2RvbWluYW50LWJhc2VsaW5lOmNlbnRyYWwiPjE0MHgxNDA8L3RleHQ+PC9zdmc+\" style=\"width: 140px; height: 140px;\">\n    <h2>Heading</h2>\n    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>\n    <p><a class=\"btn btn-default\" href=\"#\" role=\"button\">View details</a></p>\n  </div><!-- /.col-lg-4 -->\n</div>");
  
});

Ember.TEMPLATES["maintenance"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container padding-for-fixed\">\n	<div class=\"span8 offset2\">\n		<div class=\"padded\">\n			<div class=\"login box\" style=\"margin-top: 80px;\">					\n				<div class=\"box-header\">\n					<span class=\"title\">Maintenance</span>\n				</div>\n				<div class=\"box-content padded\">\n					<div class=\"error-page\">\n						<h3><i class=\"icon-warning-sign\"></i>Our platform is currently undergoing scheduled maintenance.</h3>\n						<p>Please come back later or create a support ticket at <a href=\"https://support.notifica.re/\">support.notifica.re</a>.</p>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>");
  
});

Ember.TEMPLATES["server"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data
/**/) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container padding-for-fixed\">\n	<div class=\"span8 offset2\">\n		<div class=\"padded\">\n			<div class=\"login box\" style=\"margin-top: 80px;\">					\n				<div class=\"box-header\">\n					<span class=\"title\">Server unreachable</span>\n				</div>\n				<div class=\"box-content padded\">\n					<div class=\"error-page\">\n						<h3><i class=\"icon-warning-sign\"></i>MyApp is experiencing some technical issues.</h3>\n						<p>We are already aware of the problem by now and trying to come back online as soon as possible.</p>\n						<a href=\"/\" class=\"btn btn-blue\">Back</a>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</div>");
  
});

})();

(function() {

/*
  Creates a new instance of an Ember application and
  specifies what HTML element inside index.html Ember
  should manage for you.
*/
window.MyApp = Ember.Application.create({
	rootElement: window.TESTING ? '#qunit-fixture' : '#myapp',
	ready: function () {
		$("#loader").remove();
	}
});



/*
 * When running a test
 */
if (window.TESTING) {
  window.MyApp.deferReadiness();
}

/* 
 * Model layer. 
 * Ember.Object itself provides most of what
 * model layers elsewhere provide. Since TodoMVC
 * doesn't communicate with a server, plain
 * Ember.Objects will do.
*/
//require('app/models/notification');
//require('app/models/device');



/*
 * Views layer.
 * You'll notice that there are only a few views.
 * Ember accomplishes a lot in its templates and 
 * Views are only necessary if you have view-specific
 * programming to do. 
*/
//require('app/views/dashboard');


/*
 * Controller layer.
 * Controllers wrap objects and provide a place
 * to implement properties for display
 * whose value is computed from the content of the
 * controllers wrapped objects.
*/


})();

(function() {

MyApp.ApplicationController = Ember.Controller.extend({
    /**
     * Start here
     */
	start: function() {

        var options = {
            appName: 'Notificare HTML5 JS SDK',
            allowSilent: true,
            appVersion: '1.0',
            appKey: '1798db7916a4cf53bea00499d6d0b15ca5c8554e25c4fe56cfaea1b9b937764f',
            pushId: 'web.re.notifica.html5sdk',
            development: true
        };

        var instance = $('#myapp').notificare(options);

        $("#myapp").bind("notificare:didReceiveDeviceToken", function(event, data) {
            //instance.notificare("userId","userID");
            //instance.notificare("username","userName");
            instance.notificare("registerDevice",data);
        });

        $("#myapp").bind("notificare:didRegisterDevice", function(event, data) {
            //Here it's safe to register tags
            instance.notificare("addTags", ['one', 'two'], function(){
                instance.notificare("getTags", function(tags){
                    console.log(tags);
                });
            });

        });

        $("#myapp").bind("notificare:didFailToRegisterDevice", function(event, data) {
            //instance.notificare("registerDevice",data);
        });

        $("#myapp").bind("notificare:didReceiveNotification", function(event, data) {
            // data will be the notification object
        });


    }

}); 


})();

(function() {

/* 
 * States (i.e. Routes)
 * Handles serialization of the application's current state
 * which results in view hierarchy updates. Responds to
 * actions.
*/


})();

(function() {

MyApp.ApplicationRoute = Ember.Route.extend({
	setupController:function(controller, model) {
		Ember.run.later(function(){
			controller.start();
		}, 1000);
	}
});

})();

(function() {

/**
 * @fileoverview Routes for the Ember application
 * @author Joel Oliveira <joel@notifica.re>
 * @copyright 2013 Notificare B.V.
 */

/**
 * Route for application
 */
MyApp.IndexRoute = Ember.Route.extend({
	model: function(){
		return null;
	},
	setupController:function(controller, model) {

	}
});


})();

(function() {

MyApp.Router.map(function() {	
	this.route('error');
	this.route('maintenance');
	this.route('server', { path: '/server-error'});
});

MyApp.Router.reopen({
	handleURL: function (url) {
		try {
			return this._super(url);
		} catch (error) {
			if (error.message.match(/No route matched the URL/)) {
				return this._super('/error');
			}
		}
	}
});



//MyApp.Router.reopen({
//	location: 'history'
//});

})();