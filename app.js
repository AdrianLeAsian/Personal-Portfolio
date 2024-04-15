const observer = new IntersectionObserver((entires) =>{
	entries.foreEach((entry) =>{
		console.log(entry)
		if (entry.isIntersecting){
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	})
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));