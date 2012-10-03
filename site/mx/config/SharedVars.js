var urlString = "hookda.com";

function Cat(name){
	this.name = name;
}
Cat.prototype.species  = 'Cat';
Cat.prototype.talk     = function(){ alert('Meow!'); };
Cat.prototype.callOver = function(){ alert(this.name+' ignores you'); };
Cat.prototype.pet      = function(){ alert('Purr!'); };