// Backbone.Models
// User model.
window.Pool = Backbone.Model.extend({
	urlRoot: '/pools',
	idAttribute: "_id",

	defaults: {
		isWarn  : 0,
		msg     : '',
		password: '',
		username: '',
		salt	: '',
		_id		: null
	}
});
// User collection.
window.PoolList = Backbone.Collection.extend({
	url   : '/pools',
	model : Pool
});