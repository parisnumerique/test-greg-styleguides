'use strict';

var Cookies = require('js-cookie');

$(function () {
  // Open the notice if the cookie is not set
/**
 * Qualification utlisateur 
 * du 3975
 *
 */ 
var host = Cookies.get(Paris.config.cookies.le3975.host);
var wssoId = Cookies.get(Paris.config.cookies.le3975.wssoId);
if( wssoId != null ) {

    //--Récupération de l'url et du titre de la page 
	//--actuellement consulté par le TC.
	var url = document.location.href;
	var title = document.title;
	
	//--Envoi des informations au serveur du 3975
	//--à travers une image (création dynamique ce celle-ci)
	var imageObj = new Image();
	imageObj.src = "https://" + host + "/3975P12/mdp3975/agenteventservice?action=qualify&url=" + escape(url) + "&title=" + escape(title) + "&wssoID=" + wssoId;
}  
  
});
