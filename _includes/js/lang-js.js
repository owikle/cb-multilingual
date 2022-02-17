// get site language, store in localStorage, or load from localStorage
var site_language = ""; 
if (localStorage.getItem("lang")) { 
    // get the value from local store
    site_language = localStorage.getItem("lang");
} else { 
    // set default value
    site_language = "eng";
    // set value in local store
    localStorage.setItem("lang","eng");
    // set default button to checked
    document.querySelector("#" + site_language).checked = true;
}

// show the default language
$("." + site_language).show();

// radio button selects language
$("input[name='lang_options']").change(function(){
    // hide the current language
    $("." + site_language).hide();
    // set the selected language
    site_language = this.value;
    // show the selected language
    $("." + site_language).show();
    // store the new selected language
    localStorage.setItem("lang", site_language);
});

// set selected button to checked
document.querySelector("#" + site_language).checked = true;

//document.querySelectorAll(".eng").forEach( node => node.classList.add("display-none"));
