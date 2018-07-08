/*
write a function that returns a list a list of all the dupliate files
*/
function locateDuplicate() {
	let fileFolder = [];
	gatherFiles(rootFolder, fileFolder)
}


function gatherFiles(rootFolder, file = []) {
	let subFolder = rootFolder.children();
	for (let i = 0; i < subfolder.length; i++) {
		if (isFile(subFolder[i])) {
			file.push(subFolder[i])
		} else {
			findDuplicateFile(rootFolder[subfolder[i]], file)
		}
	}	
}

function isFile(file) {
	const set = new Set(['.txt', 'png'])
	file.name.splice(0, -4)
}


/*
>folder 
	>file
	>folder
		>file
		>folder
			>file
		>file
	>folder



*/