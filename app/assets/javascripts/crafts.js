// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// fileChange() is triggered when the file input is changed
function fileChange(){
	// file is the file input's current selection. This may be a file the user chooses, or no file
    var file = document.getElementById("fileForUpload").files[0];

	if (file) {
	    var reader = new FileReader();
	    reader.readAsText(file, "UTF-8");
	    reader.onload = function (evt) {
	        document.getElementById("notice").innerText = 'Your file has been proccessed';
	    	console.log('Your file has been proccessed');
	    	// Set the hidden input equal to the file's content
	        document.getElementById('craft_craft_file').value = reader.result;
	        // Set the craft name input to the craft file without extension
	    	document.getElementById('craft_name').value = file.name.replace('.craft','');
	    }
	    reader.onerror = function (evt) {
	        document.getElementById("notice").innerText = "error reading file";
	    }
	}
}

function downloadCraft(craftId) {
	var promise = $.get(window.location.origin + '/crafts/' + craftId + '.json', function( data ) {
  		console.log( data );
  		return data;
	});
	promise.done(function(data){
		console.log('promise is done, returned: ' + data.name)
		var fileName = data.name + '.craft';
		console.log('now downloading ' + fileName);
		var blob = new Blob([data.craft_file], {type: "text/plain;charset=utf-8"});
		saveAs(blob, fileName);
	})
	promise.fail(function(data){
		console.warn('something went wrong: ' + data);
	})
}

