# Code7
``frontend challenge`` [ - Menu](https://github.com/carlitoshxcx/code7-frontend-challenge/tree/master/)


---

### Ng Movies

#### I didn't receive the file `FILMES.json`, so then I work with IMDB.

1. Add these [bookmarklet](https://github.com/carlitoshxcx/code7-frontend-challenge/tree/master/ng-movies/bookmarklet/copy-top-rated-movies-on-imdb.js) to bookmarks with this name: `Get Movies IDs`.

	```
	javascript: (function () { 
		moviesId = []; 
		document.querySelectorAll('#main > div > span > div > div > div.lister > table > tbody')[0].children.forEach(td => { 
			moviesId.push(td.children[1].children[0].href.split('/')[4]);
		});
		alert("Go to window console and type: copy(moviesId)"); 
	})();
	```

2. Access [IMDB Top Movies](https://www.imdb.com/chart/top/) and click on `Get Movies IDs` bookmark to get movies list.

3. Access browser console and type: `copy(moviesId)`.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.


#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
