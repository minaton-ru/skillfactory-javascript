function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

/*метод, который возвращает или изменяет html-содержимое выбранных элементов*/
jQuery.prototype.html = function(somehtml){
    this.each(element => element.innerHTML = somehtml)
  return this;
}

/*метод, который возвращает или изменяет текст выбранных элементов*/
jQuery.prototype.text = function(sometext){
    this.each(element => element.innerText = sometext)
  return this;
}