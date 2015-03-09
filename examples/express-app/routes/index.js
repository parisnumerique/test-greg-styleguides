var express = require('express');
var router = express.Router();


var data = {
	"data": {
		"notice": {
			"modifiers": ["top", "blue", "buildings"],
			"closable": true
		},
		"quick_access": {
			"background": "../images/modules/quick-access/background.jpg",
			"search": {
				"input": {
					"placeholder": "Rechercher un service, une information..."
				},
				"submit": {
					"text": "Rechercher"
				},
				"around": {
					"text": "Autour de moi"
				}
			},
			"items": [{
				"href": "#",
				"text": "Inscription à la crèche"
			}, {
				"href": "#",
				"text": "Cours municipaux pour adultes"
			}, {
				"href": "#",
				"text": "État civil"
			}, {
				"href": "#",
				"text": "Encombrants"
			}, {
				"href": "#",
				"text": "Tennis"
			}, {
				"href": "#",
				"text": "Signalement"
			}, {
				"href": "#",
				"text": "Facil’familles"
			}, {
				"href": "#",
				"text": "Gardes d’enfants"
			}],
			"notice": {
				"modifiers": ["bottom transparent"],
				"closable": true,
				"block": "En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de Cookies pour vous proposer sed diam eget risus varius blandit sit amet non magna."
			}
		},
		"sections": {
			"heading": {
				"title": "Services et infos pratiques"
			},
			"list": {
				"items": [{
					"title": "Aides & démarches",
					"text": "Nullam id dolor id nibh ultricies vehicula ut id elit."
				}, {
					"title": "Culture & patrimoine",
					"text": "Sed posuere consectetur est at lobortis."
				}, {
					"title": "Déplacements & stationnement",
					"text": "Donec id elit non mi porta gravida at eget metus."
				}, {
					"title": "Emploi & formations",
					"text": "Sed posuere consectetur est at lobortis."
				}, {
					"title": "Environnement & espaces verts",
					"text": "Cras justo odio, dapibus ac facilisis in, egestas eget quam."
				}, {
					"title": "Famille & éducation",
					"text": "Donec ullamcorper nulla non metus auctor fringilla."
				}, {
					"title": "Innovation",
					"text": "Cras mattis consectetur purus sit amet fermentum."
				}, {
					"title": "Logement",
					"text": "Nullam quis risus eget urna mollis ornare vel eu leo."
				}, {
					"title": "Santé",
					"text": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
				}, {
					"title": "Social & solidarités",
					"text": "Maecenas sed diam eget risus varius blandit sit amet."
				}, {
					"title": "Sports & loisirs",
					"text": "Cras mattis consectetur purus sit amet fermentum."
				}, {
					"title": "Urbanisme",
					"text": "Nullam quis risus eget urna mollis ornare vel eu leo."
				}, {
					"title": "Associations",
					"text": "Sed posuere consectetur est at lobortis."
				}, {
					"text": "Vous cherchez autre chose ?",
					"modifiers": ["more"]
				}]
			}
		},
		"jumbotron": {
			"image": "../images/modules/jumbotron/image.jpg",
			"title": "À la une",
			"text": "Revivez Nuit Blanche en photos et vidéo"
		},
		"news": {
			"heading": {
				"title": "En ce moment",
				"link": "Voir toutes les actualités"
			},
			"list": {
				"modifiers": ["news-cards"],
				"items": [{
					"href": "#",
					"image": "../images/modules/news-card/image.jpg",
					"category": "Mobilité",
					"title": "Découvrez les neuf Autolib' customisées qui vont sillonner Paris"
				}, {
					"href": "#",
					"image": "../images/modules/news-card/image.jpg",
					"category": "Culture et patrimoine",
					"title": "Le 1er étage de la Tour Eiffel se refait une jeunesse"
				}, {
					"href": "#",
					"image": "../images/modules/news-card/image.jpg",
					"category": "Environnement",
					"title": "Vers un plan parisien de lutte contre le gaspillage alimentaire"
				}]
			}
		},
		"que_faire": {
			"background": "../images/modules/que-faire/que-faire-back-img.jpg",
			"logo": {
				"href": "#",
				"image": "../images/modules/que-faire/que-faire-img.png"
			},
			"items": [{
				"href": "#",
				"text": "Que faire à Paris ce week-end ?"
			}, {
				"href": "#",
				"text": "Autour de la FIAC du 23 au 26 octobre"
			}, {
				"href": "#",
				"text": "Capitaine Futur et le voyage extraordinaire"
			}]
		},
		"get_involved": {
			"heading": {
				"title": "Participez !",
				"link": {
					"href": "#",
					"text": "Accéder à l’espace participatif"
				}
			},
			"items": [{
				"href": "#",
				"image": "../images/modules/get-involved/get-involved-img1.png",
				"text": "Votez pour le budget participatif"
			}, {
				"href": "#",
				"image": "../images/modules/get-involved/get-involved-img2.png",
				"text": "E-pétition, prenez la main"
			}]
		},
		"gallery": {
			"heading": {
				"title": "Vu par les Parisiens"
			},
			"pictures_gallery_ugc": {
				"title": "Hashtags de la semaine :",
				"hashtags": [{
					"url": "#",
					"text": "automneàparis"
				}, {
					"url": "#",
					"text": "nuit_blanche"
				}],
				"items": [{
					"image": "../images/modules/pictures-gallery-ugc/pictures-gallery-img1.jpg",
					"text": "@user"
				}, {
					"image": "../images/modules/pictures-gallery-ugc/pictures-gallery-img2.jpg",
					"text": "@user"
				}, {
					"image": "../images/modules/pictures-gallery-ugc/pictures-gallery-img3.jpg",
					"text": "@user"
				}, {
					"image": "../images/modules/pictures-gallery-ugc/pictures-gallery-img4.jpg",
					"text": "@user"
				}, {
					"image": "../images/modules/pictures-gallery-ugc/pictures-gallery-img5.jpg",
					"text": "@user"
				}, {
					"image": "../images/modules/pictures-gallery-ugc/pictures-gallery-img6.jpg",
					"text": "@user"
				}]
			}
		},
		"connected": {
			"heading": {
				"title": "Restez connecté",
				"modifiers": ["white"]
			},
			"newsletter": {
				"title": "L’essentiel de Paris",
				"text": "Chaque semaine, recevez l’essentiel de Paris pour savoir tout ce qu’il se passe dans la capitale.",
				"placeholder": "Entrez votre courriel",
				"inputId": "newsletter-input",
				"submit": "Valider",
				"otherNewsletters": {
					"text": "Autres newsletters et alertes",
					"url": "#"
				}
			},
			"jecoute": {
				"title": "@Parisjecoute",
				"items": [{
					"question": {
						"user": "@juliechanal",
						"time": "9h30",
						"text": "Bonjour, est-ce que la piscine Joséphine Baker sera ouverte cet été ?"
					},
					"answer": {
						"user": "@Parisjecoute",
						"time": "10h11",
						"text": "Oui, la piscine reste ouverte cet été."
					}
				}, {
					"question": {
						"user": "@JuliePetrucci",
						"time": "10h20",
						"text": "Bjr, je loue un local commercial. Quelles sont les démarches pour peindre la façade d'une autre couleur et y peindre le logo ?"
					},
					"answer": {
						"user": "@Parisjecoute",
						"time": "10h50",
						"text": "bjr, il faut déposer une déclaration préalable au 6 promenade Claude Lévi-Strauss dans le 13e http://t.co/h2uYPqkEOx"
					}
				}, {
					"question": {
						"user": "@billy141512",
						"time": "11h02",
						"text": "Bonjour, à propos du plan qualité air à Paris, les motos de 2012 (donc 3*) seront-elles autorisées en 2020 ? Pas clair."
					},
					"answer": {
						"user": "@Parisjecoute",
						"time": "11h14",
						"text": "bonjour, les motos de classe 3 étoiles seront bien concernées par ces mesures de restriction."
					}
				}],
				"button": {
					"href": "#",
					"text": "Posez votre question !"
				}
			},
			"social": {
				"title": "Restez connecté",
				"items": [{
					"icon": "twitter",
					"count": "219 000",
					"subscribe": {
						"url": "#",
						"text": "S’abonner à @paris"
					}
				}, {
					"icon": "facebook",
					"count": "2 508 576",
					"subscribe": {
						"url": "#",
						"text": "Suivre la page Facebook"
					}
				}, {
					"icon": "instagram",
					"count": "16 449",
					"subscribe": {
						"url": "#",
						"text": "S’abonner sur Instagram"
					}
				}]
			}
		},
		"municipal_team": {
			"heading": {
				"title": "La Maire et ses adjoints",
				"link": {
					"href": "#",
					"text": "L’Hôtel de ville"
				},
				"modifiers": ["white"]
			},
			"img": {
				"src": "../images/modules/municipal-team/image.jpg",
				"alt": "La Maire et ses adjoints"
			},
			"intro": "Maecenas sed diam eget risus varius blandit sit amet non magna.",
			"text": "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna."
		},
		"header": {
			"title": "Paris",
			"h1": true,
			"languages": [{
				"abbr": "fr",
				"href": "/fr"
			}, {
				"abbr": "en",
				"href": "/en"
			}, {
				"abbr": "es",
				"href": "/es"
			}],
			"active_language": "fr",
			"search": {
				"visible": true
			},
			"marker": {
				"visible": true
			},
			"items": [{
				"href": "#",
				"text": "Services et infos pratiques"
			}, {
				"href": "#",
				"text": "L'Hôtel de ville"
			}, {
				"href": "#",
				"text": "Actualités"
			}],
			"participate": {
				"visible": true,
				"url": "#",
				"front": "Participez !",
				"back": "C'est à vous !"
			},
			"account": {
				"visible": true,
				"url": "#",
				"text": "Mon compte"
			}
		},
		"footer": {
			"logo": {
				"href": "#",
				"src": "../images/modules/footer/mairie-de-paris.png",
				"alt": "Logo de la Mairie de Paris"
			},
			"items": [{
				"href": "#",
				"text": "Visit Paris",
				"modifiers": ["footer-link-em"]
			}, {
				"href": "#",
				"text": "FAQ"
			}, {
				"href": "#",
				"text": "Newsletter"
			}, {
				"href": "#",
				"text": "Contact"
			}, {
				"href": "#",
				"text": "Presse"
			}, {
				"href": "#",
				"text": "Mentions légales"
			}, {
				"href": "#",
				"text": "Crédits"
			}, {
				"href": "#",
				"text": "Accessibilité"
			}]
		}
	}
};


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('templates/home/index', data);
});

module.exports = router;