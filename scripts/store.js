import item from './item.js';

const items = [];
const hideCheckedItems = false;

function findById(id) {
	return items.find(item => item.id === id);
}

const addItem = function(name) {
	try {
		item.validateName(name);
		// create a new item if name is valid
		items.push(item.create(name));
	} catch (error) {
		console.log(`Cannot add item: ${error.message}`);
	}
};

function findAndToggleChecked(id) {
	const item = findById(id);
	item.checked = !item.checked;
}

function findAndUpdateName(id, name) {
	try {
		//validate name
		item.validateName(name);
		findById(id).name = name;
		// update item name if name is valid
		//items.push(item.create(name));
	} catch (error) {
		console.log(`Cannot update name: ${error.message}`);
	}
}

function findAndDelete(id) {
	const choosenItem = findById(id);
	this.items = this.items.filter(item => item.id !== choosenItem.id);
}

function toggleCheckedFilter() {
	this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
	items,
	hideCheckedItems,
	findById,
	addItem,
	findAndToggleChecked,
	findAndUpdateName,
	findAndDelete,
	toggleCheckedFilter
};
