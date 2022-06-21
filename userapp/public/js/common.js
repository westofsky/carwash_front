(function(){
	setScreenSize();
	
});

document.addEventListener("DOMContentLoaded", function(){
	setScreenSize();
	
	let topHeight;
	let main;
	let tabBarHeight;
	let articleGuide;
	let article;
	
	
	setArticleSize();
	
	
});

function setArticleSize() {
	topHeight = document.querySelector('#top').offsetHeight;
	main = document.querySelector('article');
	tabBarHeight = document.querySelector('#tabBar').offsetHeight;
	articleGuide = window.innerHeight - topHeight - tabBarHeight;
	article = document.querySelector('article')
	section = document.querySelectorAll('section');
	
	console.log(section.length);
	
	
//	if(main.offsetHeight < articleGuide){
//		main.style.height = `calc(100vh - ${topHeight}px - 70px + ${tabBarHeight}px)`;
//		article.style.paddingBottom = 0+'px';
//	} else {
//		main.style.height = `auto`;
//		article.style.paddingBottom = 200+'px';
//	}
	
	if(section.length <= 1) {
		for(let i=0; i<section.length; i++){
			section[i].style.height = 100+'%';
		}
	}
}


function setScreenSize() {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh' , `${vh}px`);
}



window.addEventListener('resize', () => {
	setScreenSize();
});


