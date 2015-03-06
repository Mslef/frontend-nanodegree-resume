/*
Your resume should also console.log() information about click locations. On line 90 in helper.js, you’ll 
find a jQuery onclick handler that you’ll need to modify to work with the logClicks(x,y) function above it.

It’s possible to make additional information show up when you click on the pins in the map. 
Check out line 174 in helper.js and the Google Maps API to get started.


Additionnal interactivity (menu navigation, polymer components) 

Add custom CSS => CSS de page portfolio perso

*/

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
	}],  display :function () {
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

var projects = {
	"projects": [{
		"title": "Meme editor", 
		"dates": "string (works with a hyphen between them)",
		"description": "Cool little meme creator tool",
		"images": ["http://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg", "http://cdn.playbuzz.com/cdn/092bf6c5-3b6e-4001-8709-154e8a2640c7/82fab410-2978-44b0-bdc5-33dc4fd1118a.jpg"]
	},{"title": "Personal GitHub Page" ,
		"dates": "string (works with a hyphen between them)",
		"description": "Personnal portfolio page on GihHub Pages",
		"images": []
	}], display :function () {
		for (project in this.projects) {
			$('#projects').append(HTMLprojectStart);
			$('.project-entry:last').append(HTMLprojectTitle.replace('%data%', this.projects[project].title));
			$('.project-entry:last').append(HTMLprojectDates.replace('%data%', this.projects[project].dates));
			$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', this.projects[project].description));
			for(image in this.projects[project].images)	{
				$('.project-entry:last').append(HTMLprojectImage.replace('%data%', this.projects[project].images[image]));
			}
		}
	}
}

var education = {
	"schools": [{			
			"name": "Université de Montréal",
			"location": "Montreal",
			"degree": "Bachelor",
			"majors": ["History", "East-Asian Studies"],
			"dates": 14052010,
			"url": "http://www.umontreal.ca"
		}, {			
			"name": "Université de Montréal",
			"location": "Montreal",
			"degree": "Masters",
			"majors": ["International Studies"],
			"dates": 14052012,
			"url": "http://www.umontreal.ca"
		}, {
			"name": "Polytechnique Montreal",
			"location": "Montreal",
			"degree": "Bachelor",
			"majors": ["Software Engineering"],
			"dates": 14032013,
			"url": "http://www.polymtl.ca"
		}
	], "onlineCourses": [{
			"title": "Front End Web Design Nanodegree",
			"school": "Udacity",
			"date": 15042015,
			"url": "https://www.udacity.com/course/nd001"
		}, {
			"title": "Intro to Computer Science",
			"school": "Udacity",
			"date": 19082012,
			"url": "https://www.udacity.com/course/cs101"
		}, {
			"title": "Intro to the Design of Everyday Things",
			"school": "Udacity",
			"date": 19042014,
			"url": "https://www.udacity.com/course/design101"
		}, {
			"title": "How to Build a Startup",
			"school": "Udacity",
			"date": 21042014,
			"url": "https://www.udacity.com/course/ep245"
		}], display :function () {
			for (school in this.schools) {
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(HTMLschoolName.replace('%data%', this.schools[school].name));
				$('.education-entry:last').append(HTMLschoolDegree.replace('%data%', this.schools[school].degree));
				$('.education-entry:last').append(HTMLschoolDates.replace('%data%', this.schools[school].dates));
				$('.education-entry:last').append(HTMLschoolLocation.replace('%data%', this.schools[school].location));
				for(major in this.schools[school].majors)	
					$('.education-entry:last').append(HTMLschoolMajor.replace('%data%', this.schools[school].majors[major]))
			};

			$('#education').append(HTMLonlineClasses);	

			for (course in this.onlineCourses) {
				$('#education').append(HTMLschoolStart);
				$('.education-entry:last').append(HTMLonlineTitle.replace('%data%', this.onlineCourses[course].title));
				$('.education-entry:last').append(HTMLonlineSchool.replace('%data%', this.onlineCourses[course].school));
				$('.education-entry:last').append(HTMLonlineDates.replace('%data%', this.onlineCourses[course].date));
				$('.education-entry:last').append(HTMLonlineURL.replace('%data%', this.onlineCourses[course].url));

		}
	}
}


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);



