/*eslint-disable strict */ //Disable because jquery needs to be global
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
    render: function(){
        return (
            <div>
                <Header/>
                <div className="container-fluid">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;