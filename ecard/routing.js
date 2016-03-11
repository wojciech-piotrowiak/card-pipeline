 Router.configure({
  layoutTemplate: 'bodyTemplate'
});

Router.route('/', function () {
 this.render('home', {to: 'internal'});
 } );
 
Router.route('/contact', function () {
 this.render('contact', {to: 'internal'});
 } );
 
Router.route('/projects', function () {
 this.render('projects', {to: 'internal'});
 } );
 
 Router.route('/diy', function () {
 this.render('diy', {to: 'internal'});
 } );
 
