window.onload = function() {
	type("bug");
}

function type(t) {
	document.getElementById("recipe").innerHTML = "";
	buildEncounter(t);
	buildSimple(t);
   buildRelaxed(t);
  }


function buildEncounter(t) {
	document.getElementById("recipe").appendChild(Object.assign(document.createElement("div"),{id:"encounter2"}));
	document.getElementById("encounter2").appendChild(Object.assign(document.createElement("span"),{className:"title centerContent",innerText:"Encounter Power "+t.charAt(0).toUpperCase()+t.slice(1)+": Lv. 2"}));
   document.getElementById("encounter2").appendChild(Object.assign(document.createElement("span"),{className:"notes centerContent",innerText:recipe[t].encounter2.preset}));
   document.getElementById("encounter2").innerHTML += "<div id='recipeContainerE2' class='centerContent'><ul id='ingredients1'></ul></div>"

	recipe[t].encounter2.mainIng.forEach(function(i){
		ingredientCard(i, "ing", 1);
	});
	document.getElementById("recipeContainerE2").appendChild(Object.assign(document.createElement("div"),{innerText:"+",className:"sep"}));
   document.getElementById("recipeContainerE2").appendChild(Object.assign(document.createElement("ul"),{id:"seasoning1",}));
	recipe[t].encounter2.secondaryIng.forEach(function(i){
		ingredientCard(i, "seas", 1);
	});
}

function buildSimple(t) {
	document.getElementById("recipe").appendChild(Object.assign(document.createElement("div"),{id:"simpleShiny"}));
	document.getElementById("simpleShiny").appendChild(Object.assign(document.createElement("span"),{className:"title centerContent",innerText:"Sparkling, Title & Encounter "+t.charAt(0).toUpperCase()+t.slice(1)+": Lv. 3 (Quick Version)"}));
   document.getElementById("simpleShiny").appendChild(Object.assign(document.createElement("span"),{className:"notes centerContent",innerText:"A recipe that's easy to make, but requires 1x Salty Herba Mystica"}));
   document.getElementById("simpleShiny").innerHTML += "<div id='recipeContainerSS' class='centerContent'><ul id='ingredients2'></ul></div>"

	recipe[t].simpleShiny.mainIng.forEach(function(i){
		ingredientCard(i, "ing", 2);
	});
	document.getElementById("recipeContainerSS").appendChild(Object.assign(document.createElement("div"),{innerText:"+",className:"sep"}));
   document.getElementById("recipeContainerSS").appendChild(Object.assign(document.createElement("ul"),{id:"seasoning2",}));
	ingredientCard(recipe[t].simpleShiny.secondaryIng.hm1, "seas", 2);
	document.getElementById("seasoning2").appendChild(Object.assign(document.createElement("li"),{id:"opt2"}))
	recipe[t].simpleShiny.secondaryIng.hm2.forEach(function(i, index){
      let length = recipe[t].simpleShiny.secondaryIng.hm2.length
      if (length > 1) {
         if(index == 0) {
		      document.getElementById("opt2").innerHTML += "<img src="+ingredients[i].url+"><div class='ingName'>"+ingredients[i].name.replace(/ .*/,'')+"</div>";
         } else {
            document.getElementById("opt2").innerHTML += "<div class='smsep'>/</div><img src="+ingredients[i].url+"><div class='ingName'>"+ingredients[i].name.replace(/ .*/,'')+"</div>";
         }
      } else {
         document.getElementById("opt2").innerHTML += "<img src="+ingredients[i].url+"><div class='ingName'>"+ingredients[i].name+"</div>";
      }
	});
}

function buildRelaxed(t) {
   document.getElementById("recipe").appendChild(Object.assign(document.createElement("div"),{id:"relaxedShiny"}));
   document.getElementById("relaxedShiny").appendChild(Object.assign(document.createElement("span"),{className:"title centerContent",innerText:"Sparkling, Title & Encounter "+t.charAt(0).toUpperCase()+t.slice(1)+": Lv. 3 (Relaxed Version)"}));
   document.getElementById("relaxedShiny").appendChild(Object.assign(document.createElement("span"),{className:"notes centerContent",innerText:"A recipe with relaxed HM requirements."}));
   document.getElementById("relaxedShiny").innerHTML += "<div id='recipeContainerRS' class='centerContent'><ul id='ingredients3'></ul></div>"

   relaxedMain = recipe[t].relaxedShiny.mainIng;
   ["cucumber","pickle",relaxedMain,relaxedMain,relaxedMain].forEach(function(i){
		ingredientCard(i, "ing", 3);
   });
   document.getElementById("recipeContainerRS").appendChild(Object.assign(document.createElement("div"),{innerText:"+",className:"sep"}));
   document.getElementById("recipeContainerRS").appendChild(Object.assign(document.createElement("ul"),{id:"seasoning3",}));
   //document.getElementById("seasoning3").appendChild(Object.assign(document.createElement("li"),{innerHTML:"<div style='margin: 5px 0 5px 0; text-align: center' class='ingName'>Any 2 Herba Mystica EXCEPT<br>The Following Combinations</div>"}));
   document.getElementById("seasoning3").appendChild(Object.assign(document.createElement("li"),{innerHTML:"Any 2 Herba Mystica EXCEPT<br>The Following Combinations", className:"ingName",style:"align-self:center; padding-left: 5px;"}));
   document.getElementById("seasoning3").appendChild(Object.assign(document.createElement("li"),{id:"opt3"}))
   doNotUse(t);
}

function doNotUse(t) {
   let sweet = ingredients.sweetherbamystica;
   let sour = ingredients.sourherbamystica;
   let swsw = ["normal", "water", "fighting", "bug", "dragon", "fairy"];
   let soso = ["normal", "ice", "bug", "ghost", "dragon", "fairy"];
   document.getElementById("opt3").innerHTML += "<img src="+sweet.url+"></img><div class='ingName'>"+sweet.name.replace(/ .*/,'')+"</div><div class='smsep'>+</div>";
   document.getElementById("opt3").innerHTML += "<img src="+sour.url+"></img><div class='ingName'>"+sour.name.replace(/ .*/,'')+"</div>";

   if (swsw.includes(t)) {
      document.getElementById("seasoning3").appendChild(Object.assign(document.createElement("li"),{id:"opt4"}))
      document.getElementById("opt4").innerHTML += "<img src="+sweet.url+"></img><div class='ingName'>"+sweet.name.replace(/ .*/,'')+"</div><div class='smsep'>+</div>";
      document.getElementById("opt4").innerHTML += "<img src="+sweet.url+"></img><div class='ingName'>"+sweet.name.replace(/ .*/,'')+"</div>";
   }
   if (soso.includes(t)) {
      document.getElementById("seasoning3").appendChild(Object.assign(document.createElement("li"),{id:"opt5"}))
      document.getElementById("opt5").innerHTML += "<img src="+sour.url+"></img><div class='ingName'>"+sour.name.replace(/ .*/,'')+"</div><div class='smsep'>+</div>";
      document.getElementById("opt5").innerHTML += "<img src="+sour.url+"></img><div class='ingName'>"+sour.name.replace(/ .*/,'')+"</div>";
   }
   
}

function ingredientCard(i, t, n) {
	let card = document.createElement("li")
	card.innerHTML = "<img src='"+ingredients[i].url+"'><div class='ingName'>"+ingredients[i].name+"</div>";
   if (t == "ing") {
	   document.getElementById("ingredients"+n).appendChild(card);
   } else {
      document.getElementById("seasoning"+n).appendChild(card);
   }
}


  const recipe = {
	"bug": {
	  "encounter2": {
		"preset": "Ultra Potato Salad Sandwich (#54)",
		"mainIng": [
		  "potatosalad",
		  "cucumber",
		  "redbellpepper",
		  "avocado",
		  "onion"
		],
		"secondaryIng": [
		  "mayonnaise"
		]
	  },
	  "simpleShiny": {
		"mainIng": [
		  "potatosalad"
		],
		"secondaryIng": {
		  "hm1": "saltyherbamystica",
		  "hm2": [
			"sweetherbamystica",
			"spicyherbamystica"
		  ]
		}
	  },
	  "relaxedShiny": {
		"mainIng": "cherrytomatoes"
	  }
	},
	"dark": {
	  "encounter2": {
		"preset": "Ultra Avocado Sandwich (#46)",
		"mainIng": [
		  "avocado",
		  "smokedfillet",
		  "tomato",
		  "lettuce"
		],
		"secondaryIng": [
		  "salt"
		]
	  },
	  "simpleShiny": {
		"mainIng": [
		  "smokedfillet"
		],
		"secondaryIng": {
		  "hm1": "saltyherbamystica",
		  "hm2": [
			"sweetherbamystica",
			"spicyherbamystica",
			"sourherbamystica"
		  ]
		}
	  },
	  "relaxedShiny": {
		"mainIng": "smokedfillet"
	  }
	},
	"dragon": {
	  "encounter2": {
		"preset": "Great Avocado Sandwich (#45)",
		"mainIng": [
		  "avocado",
		  "smokedfillet",
		  "tomato"
		],
		"secondaryIng": [
		  "salt"
		]
	  },
	  "simpleShiny": {
		"mainIng": [
		  "avocado"
		],
		"secondaryIng": {
		  "hm1": "saltyherbamystica",
		  "hm2": [
			"spicyherbamystica"
		  ]
		}
	  },
	  "relaxedShiny": {
		"mainIng": "avocado"
	  }
	},
   "electric": {
      "encounter2": {
        "preset": "(No Preset, Custom Only)",
        "mainIng": [
          "noodles",
          "noodles",
          "noodles",
          "noodles",
          "noodles",
          "noodles"
        ],
        "secondaryIng": [
          "wasabi"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "yellowbellpepper"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "spicyherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "yellowbellpepper"
      }
    },
    "fairy": {
      "encounter2": {
        "preset": "Ultra Ham Sandwich (#82)",
        "mainIng": [
          "pickle",
          "ham",
          "prosciutto",
          "jalapeno"
        ],
        "secondaryIng": [
          "mayonnaise",
          "mustard"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "tomato"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "spicyherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "tomato"
      }
    },
    "fighting": {
      "encounter2": {
        "preset": "Ultra Refreshing Sandwich (#70)",
        "mainIng": [
          "kiwi",
          "avocado",
          "pickle",
          "cherrytomatoes"
        ],
        "secondaryIng": [
          "marmalade",
          "salt"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "pickle"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "spicyherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "pickle"
      }
    },
    "fire": {
      "encounter2": {
        "preset": "(No Preset, Custom Only)",
        "mainIng": [
          "rice",
          "rice",
          "rice",
          "rice",
          "rice",
          "rice"
        ],
        "secondaryIng": [
          "oliveoil",
          "salt"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "basil"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "sweetherbamystica",
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "redbellpepper"
      }
    },
    "flying": {
      "encounter2": {
        "preset": "Great Egg Sandwich (#61)",
        "mainIng": [
          "egg",
          "cucumber",
          "redonion"
        ],
        "secondaryIng": [
          "salt",
          "mayonnaise"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "prosciutto"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "sweetherbamystica",
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "prosciutto"
      }
    },
    "ghost": {
      "encounter2": {
        "preset": "Great Vegetable Sandwich (#113)",
        "mainIng": [
          "greenbellpepper",
          "redonion",
          "cucumber",
          "tomato"
        ],
        "secondaryIng": [
          "vinegar",
          "oliveoil",
          "salt"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "redonion"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "redonion"
      }
    },
    "grass": {
      "encounter2": {
        "preset": "Great Klawf Stick Sandwich (#105)",
        "mainIng": [
          "klawfstick",
          "tomato",
          "lettuce"
        ],
        "secondaryIng": [
          "oliveoil",
          "salt",
          "wasabi"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "lettuce"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "lettuce"
      }
    },
    "ground": {
      "encounter2": {
        "preset": "Great Herbed-Sausage Sandwich (#29)",
        "mainIng": [
          "herbedsausage"
        ],
        "secondaryIng": [
          "ketchup",
          "mustard"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "ham"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "sweetherbamystica",
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "ham"
      }
    },
    "ice": {
      "encounter2": {
        "preset": "Ultra Sushi Sandwich (#150)",
        "mainIng": [
          "rice",
          "smokedfillet",
          "smokedfillet",
          "klawfstick",
          "watercress",
          "klawfstick"
        ],
        "secondaryIng": [
          "vinegar",
          "salt",
          "wasabi"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "klawfstick"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "klawfstick"
      }
    },
    "normal": {
      "encounter2": {
        "preset": "Ultra Curry-and-Rice-Style Sandwich (#34)",
        "mainIng": [
          "rice",
          "jalapeno",
          "tomato"
        ],
        "secondaryIng": [
          "currypowder",
          "mayonnaise"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "friedfillet"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "sweetherbamystica",
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "tofu"
      }
    },
    "poison": {
      "encounter2": {
        "preset": "Great Noodle Sandwich (#49)",
        "mainIng": [
          "noodles"
        ],
        "secondaryIng": [
          "oliveoil",
          "ketchup"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "noodles"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "sweetherbamystica",
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "greenbellpepper"
      }
    },
    "psychic": {
      "encounter2": {
        "preset": "(No Preset, Custom Only)",
        "mainIng": [
          "noodles",
          "noodles",
          "noodles",
          "noodles",
          "noodles",
          "noodles"
        ],
        "secondaryIng": [
          "vinegar"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "onion"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "onion"
      }
    },
    "rock": {
      "encounter2": {
        "preset": "Ultra BLT Sandwich (#74)",
        "mainIng": [
          "bacon",
          "lettuce",
          "tomato",
          "basil",
          "cheese"
        ],
        "secondaryIng": [
          "mayonnaise",
          "mustard"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "bacon"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "sweetherbamystica",
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "bacon"
      }
    },
    "steel": {
      "encounter2": {
        "preset": "Ultra Tower Sandwich (#146)",
        "mainIng": [
          "hamburger",
          "noodles",
          "potatosalad",
          "rice",
          "klawfstick",
          "tofu"
        ],
        "secondaryIng": [
          "oliveoil",
          "salt",
          "currypowder"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "hamburger"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "sweetherbamystica",
            "spicyherbamystica",
            "sourherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "hamburger"
      }
    },
    "water": {
      "encounter2": {
        "preset": "(No Preset, Custom Only)",
        "mainIng": [
          "rice",
          "rice",
          "rice",
          "rice",
          "rice",
          "rice"
        ],
        "secondaryIng": [
          "currypowder",
          "currypowder",
          "currypowder",
          "oliveoil"
        ]
      },
      "simpleShiny": {
        "mainIng": [
          "cucumber"
        ],
        "secondaryIng": {
          "hm1": "saltyherbamystica",
          "hm2": [
            "spicyherbamystica"
          ]
        }
      },
      "relaxedShiny": {
        "mainIng": "cucumber"
      }
    }
  }

  const ingredients = {
    "apple": {
       "name": "Apple",
       "url": "https://www.serebii.net/itemdex/sprites/sv/apple.png"
    },
    "avocado": {
       "name": "Avocado",
       "url": "https://www.serebii.net/itemdex/sprites/sv/avocado.png"
    },
    "bacon": {
       "name": "Bacon",
       "url": "https://www.serebii.net/itemdex/sprites/sv/bacon.png"
    },
    "banana": {
       "name": "Banana",
       "url": "https://www.serebii.net/itemdex/sprites/sv/banana.png"
    },
    "basil": {
       "name": "Basil",
       "url": "https://www.serebii.net/itemdex/sprites/sv/basil.png"
    },
    "bitterherbamystica": {
       "name": "Bitter Herba Mystica",
       "url": "https://www.serebii.net/itemdex/sprites/sv/bitterherbamystica.png"
    },
    "butter": {
       "name": "Butter",
       "url": "https://www.serebii.net/itemdex/sprites/sv/butter.png"
    },
    "cheese": {
       "name": "Cheese",
       "url": "https://www.serebii.net/itemdex/sprites/sv/cheese.png"
    },
    "cherrytomatoes": {
       "name": "Cherry Tomatoes",
       "url": "https://www.serebii.net/itemdex/sprites/sv/cherrytomatoes.png"
    },
    "chilisauce": {
       "name": "Chili Sauce",
       "url": "https://www.serebii.net/itemdex/sprites/sv/chilisauce.png"
    },
    "chorizo": {
       "name": "Chorizo",
       "url": "https://www.serebii.net/itemdex/sprites/sv/chorizo.png"
    },
    "creamcheese": {
       "name": "Cream Cheese",
       "url": "https://www.serebii.net/itemdex/sprites/sv/creamcheese.png"
    },
    "cucumber": {
       "name": "Cucumber",
       "url": "https://www.serebii.net/itemdex/sprites/sv/cucumber.png"
    },
    "currypowder": {
       "name": "Curry Powder",
       "url": "https://www.serebii.net/itemdex/sprites/sv/currypowder.png"
    },
    "egg": {
       "name": "Egg",
       "url": "https://www.serebii.net/itemdex/sprites/sv/egg.png"
    },
    "friedfillet": {
       "name": "Fried Fillet",
       "url": "https://www.serebii.net/itemdex/sprites/sv/friedfillet.png"
    },
    "greenbellpepper": {
       "name": "Green Bell Pepper",
       "url": "https://www.serebii.net/itemdex/sprites/sv/greenbellpepper.png"
    },
    "ham": {
       "name": "Ham",
       "url": "https://www.serebii.net/itemdex/sprites/sv/ham.png"
    },
    "hamburger": {
       "name": "Hamburger",
       "url": "https://www.serebii.net/itemdex/sprites/sv/hamburger.png"
    },
    "herbedsausage": {
       "name": "Herbed Sausage",
       "url": "https://www.serebii.net/itemdex/sprites/sv/herbedsausage.png"
    },
    "horseradish": {
       "name": "Horseradish",
       "url": "https://www.serebii.net/itemdex/sprites/sv/horseradish.png"
    },
    "jalapeno": {
       "name": "Jalapeno",
       "url": "https://www.serebii.net/itemdex/sprites/sv/jalapeno.png"
    },
    "jam": {
       "name": "Jam",
       "url": "https://www.serebii.net/itemdex/sprites/sv/jam.png"
    },
    "ketchup": {
       "name": "Ketchup",
       "url": "https://www.serebii.net/itemdex/sprites/sv/ketchup.png"
    },
    "kiwi": {
       "name": "Kiwi",
       "url": "https://www.serebii.net/itemdex/sprites/sv/kiwi.png"
    },
    "klawfstick": {
       "name": "Klawf Stick",
       "url": "https://www.serebii.net/itemdex/sprites/sv/klawfstick.png"
    },
    "lettuce": {
       "name": "Lettuce",
       "url": "https://www.serebii.net/itemdex/sprites/sv/lettuce.png"
    },
    "marmalade": {
       "name": "Marmalade",
       "url": "https://www.serebii.net/itemdex/sprites/sv/marmalade.png"
    },
    "mayonnaise": {
       "name": "Mayonnaise",
       "url": "https://www.serebii.net/itemdex/sprites/sv/mayonnaise.png"
    },
    "mustard": {
       "name": "Mustard",
       "url": "https://www.serebii.net/itemdex/sprites/sv/mustard.png"
    },
    "noodles": {
       "name": "Noodles",
       "url": "https://www.serebii.net/itemdex/sprites/sv/noodles.png"
    },
    "oliveoil": {
       "name": "Olive Oil",
       "url": "https://www.serebii.net/itemdex/sprites/sv/oliveoil.png"
    },
    "onion": {
       "name": "Onion",
       "url": "https://www.serebii.net/itemdex/sprites/sv/onion.png"
    },
    "peanutbutter": {
       "name": "Peanut Butter",
       "url": "https://www.serebii.net/itemdex/sprites/sv/peanutbutter.png"
    },
    "pepper": {
       "name": "Pepper",
       "url": "https://www.serebii.net/itemdex/sprites/sv/pepper.png"
    },
    "pickle": {
       "name": "Pickle",
       "url": "https://www.serebii.net/itemdex/sprites/sv/pickle.png"
    },
    "pineapple": {
       "name": "Pineapple",
       "url": "https://www.serebii.net/itemdex/sprites/sv/pineapple.png"
    },
    "potatosalad": {
       "name": "Potato Salad",
       "url": "https://www.serebii.net/itemdex/sprites/sv/potatosalad.png"
    },
    "potatotortilla": {
       "name": "Potato Tortilla",
       "url": "https://www.serebii.net/itemdex/sprites/sv/potatotortilla.png"
    },
    "prosciutto": {
       "name": "Prosciutto",
       "url": "https://www.serebii.net/itemdex/sprites/sv/prosciutto.png"
    },
    "redbellpepper": {
       "name": "Red Bell Pepper",
       "url": "https://www.serebii.net/itemdex/sprites/sv/redbellpepper.png"
    },
    "redonion": {
       "name": "Red Onion",
       "url": "https://www.serebii.net/itemdex/sprites/sv/redonion.png"
    },
    "rice": {
       "name": "Rice",
       "url": "https://www.serebii.net/itemdex/sprites/sv/rice.png"
    },
    "salt": {
       "name": "Salt",
       "url": "https://www.serebii.net/itemdex/sprites/sv/salt.png"
    },
    "saltyherbamystica": {
       "name": "Salty Herba Mystica",
       "url": "https://www.serebii.net/itemdex/sprites/sv/saltyherbamystica.png"
    },
    "smokedfillet": {
       "name": "Smoked Fillet",
       "url": "https://www.serebii.net/itemdex/sprites/sv/smokedfillet.png"
    },
    "sourherbamystica": {
       "name": "Sour Herba Mystica",
       "url": "https://www.serebii.net/itemdex/sprites/sv/sourherbamystica.png"
    },
    "spicyherbamystica": {
       "name": "Spicy Herba Mystica",
       "url": "https://www.serebii.net/itemdex/sprites/sv/spicyherbamystica.png"
    },
    "strawberry": {
       "name": "Strawberry",
       "url": "https://www.serebii.net/itemdex/sprites/sv/strawberry.png"
    },
    "sweetherbamystica": {
       "name": "Sweet Herba Mystica",
       "url": "https://www.serebii.net/itemdex/sprites/sv/sweetherbamystica.png"
    },
    "tofu": {
       "name": "Tofu",
       "url": "https://www.serebii.net/itemdex/sprites/sv/tofu.png"
    },
    "tomato": {
       "name": "Tomato",
       "url": "https://www.serebii.net/itemdex/sprites/sv/tomato.png"
    },
    "vinegar": {
       "name": "Vinegar",
       "url": "https://www.serebii.net/itemdex/sprites/sv/vinegar.png"
    },
    "wasabi": {
       "name": "Wasabi",
       "url": "https://www.serebii.net/itemdex/sprites/sv/wasabi.png"
    },
    "watercress": {
       "name": "Watercress",
       "url": "https://www.serebii.net/itemdex/sprites/sv/watercress.png"
    },
    "whippedcream": {
       "name": "Whipped Cream",
       "url": "https://www.serebii.net/itemdex/sprites/sv/whippedcream.png"
    },
    "yellowbellpepper": {
       "name": "Yellow Bell Pepper",
       "url": "https://www.serebii.net/itemdex/sprites/sv/yellowbellpepper.png"
    },
    "yogurt": {
       "name": "Yogurt",
       "url": "https://www.serebii.net/itemdex/sprites/sv/yogurt.png"
    }
 }