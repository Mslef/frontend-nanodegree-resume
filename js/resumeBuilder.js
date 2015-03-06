var bio  = {
	"name" : "Marcel Lefebvre",
	"role" : "Front End Web Developer",
	"contacts" : {
		      "mobile": "514-342-3523",
		      "email": "marcel.lefebvre01@gmail.com" ,
		      "github": "https://github.com/Mslef",
		      "twitter": "https://twitter.com/mslef2030" ,
		      "location": "Montreal, Canada"
		  },
	"welcomeMessage": "Passionate about programming and UX | Creating awesome experiences for Web and Mobile!", 
	"skills": ["Python", "HTML", "CSS", "Javascript", "Jquery", "AJAX", "Bootstrap"],
	"biopic": "Images/ms.jpg",
	display: function(){
		
		$('#header').prepend(HTMLheaderRole.replace("%data%",this.role));
		$('#header').prepend(HTMLheaderName.replace("%data%",this.name));

		$('#topContacts').append(HTMLmobile.replace("%data%",this.contacts.mobile));
		$('#topContacts').append(HTMLemail.replace("%data%",this.contacts.email));
		$('#topContacts').append(HTMLtwitter.replace("%data%",this.contacts.twitter));
		$('#topContacts').append(HTMLgithub.replace("%data%",this.contacts.github));
		$('#topContacts').append(HTMLlocation.replace("%data%",this.contacts.location));
		
		//HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
		
		$('#header').append(HTMLbioPic.replace("%data%",this.biopic));
		$('#header').append(HTMLWelcomeMsg.replace("%data%",this.welcomeMessage));

		$('#header').append(HTMLskillsStart);
		for (skill in this.skills){
			$('#header').append(HTMLskills.replace("%data%",this.skills[skill]));
		}
	}
}


var work = {
	"jobs" : [{
		"employer": "Self Employed",
		"title": "Front End Web Developer",
		"location": "Montreal" ,
		"dates": "04-03-2015 -- current ",
		"description": "Coding various websites, extensive use of HTML5, CSS3, Bootstrap, Javascript, jQuery, AngularJS, Polyfills "
	}, {"employer": "Jukado",
		"title": "Logistics Manager",
		"location": "Montreal" ,
		"dates": "15-10-2013 -- 04-03-2015",
		"description": "Wharehouse and inventory management, shipping and receptions, optimizing order cycle"
	}, { "employer": "Canada Fighting",
		"title": "Sales Representative",
		"location": "Montreal",
		"dates": "15-10-2013  -- 04-03-2015",
		"description": "Sales to Mixed Martial Arts and boxing clubs"
	}
	],  display :function () {
		for (job in this.jobs) {
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(HTMLworkEmployer.replace('%data%', this.jobs[job].employer));
			$('.work-entry:last').append(HTMLworkTitle.replace('%data%', this.jobs[job].title));
			$('.work-entry:last').append(HTMLworkDates.replace('%data%', this.jobs[job].dates));
			$('.work-entry:last').append(HTMLworkLocation.replace('%data%', this.jobs[job].location));
			$('.work-entry:last').append(HTMLworkDescription.replace('%data%', this.jobs[job].description))
		}
	}

}


bio.display();
work.display();

$(".mapDiv").append(googleMap);

/*
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

$('#header').append(HTMLschoolName.replace('%data%', education.schoolName));
$('#header').append(HTMLschoolDegree.replace('%data%', education.schoolDegree));
$('#header').append(HTMLschoolDates.replace('%data%', education.schoolDates));
$('#header').append(HTMLschoolLocation.replace('%data%', education.schoolLocation));
$('#header').append(HTMLschoolMajor.replace('%data%', education.schoolMajor));



var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';


var HTMLworkStart = '<div class="work-entry"></div>';



var education = {
	"schools": [
		"UdemBac" :{			
			"name": "Université de Montréal"
			"location": "Montreal"
			"degree": "Bachelor"
			"majors": ["History", "East-Asian Studies"]
			"dates": 14052010
			"url": "http://www.umontreal.ca"
		}, "UdemMaster" :{			
			"name": "Université de Montréal"
			"location": "Montreal"
			"degree": "Masters"
			"majors": ["International Studies"]
			"dates": 14052012
			"url": "http://www.umontreal.ca"
		}, "Poly" : {
			"name": "Polytechnique Montreal"
			"location": "Montreal"
			"degree": "Bachelor"
			"majors": ["Software Engineering"]
			"dates": 14032013
			"url": "http://www.polymtl.ca"
		}
	]
	"onlineCourses": [
		"NanoUda":{
			"title": "Front End Web Design Nanodegree"
			"school": "Udacity"
			"date": integer (date finished)
			"url": string
		}, "IntroCS":{
			"title": "Intro to Computer Science"
			"school": "Udacity"
			"date": integer (date finished)
			"url": string
		}, "Design":{
			"title": string
			"school": "Udacity"
			"date": integer (date finished)
			"url": string
		}, "Startup":{
			"title": string
			"school": "Udacity"
			"date": integer (date finished)
			"url": string
		}]
	//display: function
}





var projects = [: array of objects with
      title: string 
      dates: string (works with a hyphen between them)
      description: string
      images: array with string urls
display: function

/*


The resume includes an interactive map. To add it, append the googleMap string to <div id=”mapDiv”>.


Your resume should also console.log() information about click locations. On line 90 in helper.js, you’ll 
find a jQuery onclick handler that you’ll need to modify to work with the logClicks(x,y) function above it.


It’s possible to make additional information show up when you click on the pins in the map. 
Check out line 174 in helper.js and the Google Maps API to get started.

Additionnal interactivity (menu navigation, polymer components) 

Add custom CSS => CSS de page portfolio perso

*/



/*
for (var item in bio) {
	console.log (('HTML' + item).replace('%data%', bio[item]));
	$('#header').append(('HTML' + item).replace('%data%', bio[item]));
}
*/


