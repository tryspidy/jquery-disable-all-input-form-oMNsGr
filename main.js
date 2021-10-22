//In older versions you could use attr. 
//As of jQuery 1.6 you should use prop instead:
$("#target :input").prop("disabled", true);

//To disable all form elements inside 'target'. See :input:
//Matches all input, textarea, select and button elements.

//If you only want the <input> elements:
$("#target input").prop("disabled", true);