function validateName(name) {
	if (name === undefined || name === '') {
		throw new Error('Name must not be blank');
	}
}

function create(name) {
	return {
		id: cuid(),
		name: name,
		checked: false
	};
}

export default {
	validateName,
	create
};
