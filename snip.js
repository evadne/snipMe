	
	
	
	
	
	
	
	
	
	if (!Array.prototype.map) Array.prototype.map = function(callbackFunction) {

		if (typeof callbackFunction != "function") throw new TypeError();

		var results = [];
		var thisObject = arguments[1] || this;
		
		for (var i in this)
		if (i in this)
		results.push(callbackFunction.call(thisObject, this[i], i, this));

		return results;
	
	}





	if (!Array.prototype.find) Array.prototype.find = function(object) {

		mono.log("finding", object);

		for (var i = 0; i < this.length; i++) if (this[i] == object) return i;
		
		return undefined;
	
	}
	
	
	
	
	
	mono.localize = {
	
		options: {
		
			"locales": ["zh-tw", "en-us"],
			"separator": " — "
		
		},
	
		setOptions: function(options) {
			
			mono.log("options pre set", this.options);
			mono.localize.options = $.extend(true, this.options, options);
			mono.log("options set", this.options);
			
		},
		
		localize: function(object) {
		
			$(object).text(mono.localize._work($(object).text(), navigator.language));
			
		},

		_work: function(text, locale) {
		
			return (text.split(mono.localize.options.separator) || [])[mono.localize.options.locales.find(locale)] || text;
			
		}

	};
	
	$(document).ready(function() {
		
		mono.localize.setOptions({
		
			locales: ['en-us', 'zh-tw'],
			separator: " — "
		
		});
		
		$(document).find("span").each(function() {
			
			mono.localize.localize(this);
				
		});
		
	});
	
	
	
	
	