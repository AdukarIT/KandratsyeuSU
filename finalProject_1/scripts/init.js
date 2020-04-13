document.addEventListener('DOMContentLoaded', function(){

	function loadList(title) {
		let item_list = JSON.parse(localStorage.getItem(title));

		if (item_list == null) {
			item_list = [
				{
					img_path:'img/tar-tar.jpg', 
					type:'Сыр мягкий', 
					title:'Кремчиз', 
					subtitle:'тартар', 
					brand:'bonfesto', 
					description:'Прекрасно заменяет классический французский соус из желтка, растительного масла и зеленого лука.'
				},
				{
					img_path:'img/hren.jpg', 
					type:'Сыр мягкий',
					title: 'Кремчиз', 
					subtitle:'хрен', 
					brand:'bonfesto', 
					description:'Хорош для бутербродов с рыбой или мясом. Можно добавлять в салаты для пикантного вкуса.'
				},
				{
					img_path:'img/neopolitan.jpg',
					type:'Сыр мягкий', 
					title:'Кремчиз', 
					subtitle:'неополитанский', 
					brand:'bonfesto', 
					description:'Идеален для курицы, отлично сочетается  с говядиной в блюдах средиземноморской кухни.'
				},
				{
					img_path:'img/neopolitan.jpg',
					type:'Сыр мягкий', 
					title:'Кремчиз', 
					subtitle:'неополитанский', 
					brand:'bonfesto', 
					description:'Идеален для курицы, отлично сочетается  с говядиной в блюдах средиземноморской кухни.'
				},
				{
					img_path:'img/tar-tar.jpg', 
					type:'Сыр мягкий', 
					title:'Кремчиз', 
					subtitle:'тартар', 
					brand:'bonfesto', 
					description:'Прекрасно заменяет классический французский соус из желтка, растительного масла и зеленого лука.'
				}
			];
			for (let i = 0; i<item_list.length; i++) {
				item_list[i].id = i;
			}
			saveList('items', item_list);
			saveList('bonfesto', item_list);
		}

		return item_list;
	};

	function saveList (title, list) {
		localStorage.setItem(title, JSON.stringify(list));		
	};

	function createItem(obj) {
		let item = document.createElement('figure');
		item.classList.add('product-list-item');

		let item_image = document.createElement('img');
		item_image.setAttribute('src', obj.img_path);
		item.appendChild(item_image);

		let item_figcaption = document.createElement('figcaption');

		let item_type = document.createElement('span');
		item_type.textContent = obj.type;
		item_figcaption.appendChild(item_type);

		let item_link = document.createElement('a');
		let item_title = document.createElement('h3');
		item_title.textContent = obj.title;
		item_link.appendChild(item_title);
		item_link.appendChild(document.createElement('br'));
		let item_subtitle = document.createElement('span');
		item_subtitle.classList.add('product-list-item-name');
		item_subtitle.textContent = obj.subtitle;
		item_link.appendChild(item_subtitle);
		item_figcaption.appendChild(item_link);

		let item_brand = document.createElement('div');
		item_brand.classList.add('product-list-item-brand');
		let item_brand_img = document.createElement('img');
		item_brand_img.setAttribute('src', 'img/' + obj.brand + '_text.png');
		item_brand.appendChild(item_brand_img);
		item_figcaption.appendChild(item_brand);

		let item_description = document.createElement('p');
		item_description.textContent = obj.description;
		item_figcaption.appendChild(item_description);

		item.appendChild(item_figcaption);
		item.setAttribute('data-id', obj.id);

		let buttons = document.createElement('div');
		buttons.classList.add('buttons');

		let change_button = document.createElement('button');
		change_button.textContent = 'редактировать';
		change_button.addEventListener('click', function(e){
			e.preventDefault();
			productListSection.hidden = true;
			addProductSection.hidden = false;
			document.getElementsByName('product')[0].scrollIntoView({behavior:'smooth'});
			changeProduct(obj);
		});
		buttons.appendChild(change_button);

		let delete_button = document.createElement('button');
		delete_button.textContent = 'удалить';
		delete_button.addEventListener('click', function(e){
			e.preventDefault();
			if (confirm('Удалить продукт?')) {
			let list = loadList('items');
			list = list.filter(function(element){
				if (element.id != obj.id) {
					return element;
				}
			});
			saveList('items', list);
			buildWebProductList();
			};
		});
		buttons.appendChild(delete_button);

		item.appendChild(buttons);

		return item;
	};

	function createAdd() {
		let item_add = document.createElement('figure');
		item_add.classList.add('product-list-item');
		item_add.classList.add('product-list-item__add');
		let button = document.createElement('div');
		button.setAttribute('id', 'add-element-button');
		button.classList.add('product-list-item-add_button');
		let button_text = document.createElement('span'); 
		button_text.textContent = '+';
		button.appendChild(button_text);
		item_add.appendChild(button);

		button.addEventListener('click', function(){
			addProductSection.hidden = false;
			addProductSection.scrollIntoView({behavior: 'smooth'});
			newProduct();
		});

		return item_add;
	};


	function buildWebProductList() {
		let item_list = loadList('items');
		document.getElementsByClassName('product-list')[0].textContent = '';
		
		for (let i = 0; i < item_list.length; i++) {
			document.getElementsByClassName('product-list')[0].appendChild(createItem(item_list[i]));
		};
		document.getElementsByClassName('product-list')[0].appendChild(createAdd());
	};

	buildWebProductList();

	let addProductSection = document.getElementsByClassName('addProduct')[0];
	let productListSection = document.getElementsByClassName('product-list')[0];

	addProductSection.hidden = true;

	let form = document.forms.product;

	form.imgChoose.addEventListener('blur', function(e){
		e.preventDefault();
		if (form.imgChoose.value != '') {
			form.img.setAttribute('src', form.imgChoose.value);
		} else {
			form.img.setAttribute('src', 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg');
		};
	})

	


	function newProduct() {
		let addButton = document.getElementById('saveProduct');
		form.img.setAttribute('src', 'https://cs6.pikabu.ru/post_img/2015/07/04/10/1436029898_1190099444.jpg');
		function onclick(e){
			e.preventDefault();
			let item_list = loadList('items');
			let full_List = loadList('allBrands');
			let item = {
				img_path: form.imgChoose.value,
				type: form.type.value,
				title: form.title.value, 
				subtitle: form.subtitle.value, 
				brand: form.brand.value, 
				description: form.description.value
			}
			for (let i = 0; i<full_List.length; i++) {
				if (full_List[i].id!=i) {
					item.id = i;
				}
				if (i==full_List.length-1) {
					item.id = full_List.length;
				}
			}
			item_list.push(item);
			saveList('items', item_list);
			buildWebProductList();
			addProductSection.hidden = true;
			form.reset();
			document.getElementById(item.brand).click();
			addButton.removeEventListener('click', onclick);

		}
		addButton.addEventListener('click', onclick)
		let deleteButton = document.getElementById('deleteProduct');
		function dclick(e) {
			e.preventDefault();
			form.reset();
			addProductSection.hidden = true;
			deleteButton.removeEventListener('click', dclick);
			addButton.removeEventListener('click', onclick);
		};
		deleteButton.addEventListener('click', dclick);
	};


	function changeProduct(obj) {
		let form = document.forms.product;
		form.imgChoose.value = obj.img_path;
		form.type.value = obj.type;
		form.title.value = obj.title;
		form.subtitle.value = obj.subtitle;
		form.brand.value = obj.brand; 
		form.description.value = obj.description;
		form.img.setAttribute('src', obj.img_path);
		let addButton = document.getElementById('saveProduct');	
		addButton.removeEventListener('click', onclick);
		function onclick(e) {
			e.preventDefault();
			let item_list = loadList('items');
			let item = {
				img_path: form.imgChoose.value,
				type: form.type.value,
				title: form.title.value, 
				subtitle: form.subtitle.value, 
				brand: form.brand.value, 
				description: form.description.value,
				id: obj.id
			}
			for (var i = 0; i < item_list.length; i++) {
				if (item_list[i].id==obj.id) {
					item_list[i]=item;
				}
			}
			saveList('items', item_list);
			addProductSection.hidden = true;
			form.reset();
			productListSection.hidden = false;
			document.getElementById(item.brand).click();
			addButton.removeEventListener('click', onclick);
		}
		addButton.addEventListener('click', onclick);
		let deleteButton = document.getElementById('deleteProduct');
		function dclick(e) {
			e.preventDefault();
			form.reset();
			addProductSection.hidden = true;
			productListSection.hidden = false;
			deleteButton.removeEventListener('click', dclick);
			addButton.removeEventListener('click', onclick);
		};
		deleteButton.addEventListener('click', dclick);
	};
	
	let brands_list = ['allBrands', 'bonfesto', 'villmonte', 'cooKing'];
	for (var i = 2; i < brands_list.length; i++) {
		saveList(brands_list[i], []);
	}
	let last_brand = brands_list[0];
	saveList('allBrands', loadList('items'));
	document.getElementById('sortByBrands').addEventListener('click', function(e){
		let brandButton = e.target;
		while (brandButton.tagName!='LI'){
			brandButton = brandButton.parentNode;
		}
		brands_list.forEach(function(brand){
			if (brandButton.id==brand){
				brandButton.classList.add('active');
				if (brandButton.children[0].tagName=='IMG'){
					brandButton.children[0].setAttribute('src', 'img/'+brand+'_text.png');
				};
				saveBrandList(last_brand, loadList('items'));
				saveList('items', loadList(brand));
				buildWebProductList();
				last_brand = brand;
			} else {
				document.getElementById(brand).classList.remove('active');
				if (document.getElementById(brand).children[0].tagName=='IMG'){
					document.getElementById(brand).children[0].setAttribute('src', 'img/'+brand+'_text_dark.png');
				};
			}
		});
	});
	function saveBrandList(brand, list){
		saveList(brand, list.filter(function(item){
			if (item.brand==brand || brand=='allBrands') {
				return item;
			} 
		}));
		let another_items = [];
		if (brand=='allBrands') {
			another_items = list;
		} else { 
			another_items = list.filter(function(item){
				if (item.brand!=brand) {
					return item;
				} 
			});
		}
		if (brand == 'allBrands') {
			for (var i =1; i < brands_list.length; i++) {
				saveList(brands_list[i], another_items.filter(function(item){
				if (item.brand==brands_list[i]) 
					{
					return item;
					}
				}));
			}
		}
		if (another_items.length>0 && brand!='allBrands') {
			for (let i = 0; i < another_items.length; i++) {
				let list = loadList(another_items[i].brand);
				list.push(another_items[i]);
				saveList(another_items[i].brand, list);
			}
		}
		let full_List = [];
		for (let i = 1; i<brands_list.length; i++) {
			loadList(brands_list[i]).forEach(function(item){full_List.push(item)});
		}
		saveList('allBrands', full_List);
		
	}

})