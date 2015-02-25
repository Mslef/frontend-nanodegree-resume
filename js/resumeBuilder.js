var bio = {
	'headerName':'Marcel Lefebvre',
	'headerRole':'Front End Web Developer',
	'contacts':{
		'email':'marcel.lefebvre01@gmail.com',
		'github':'https://github.com/Mslef'
	},
	'bioPic':'Images/me.jpg',
	'WelcomeMsg':'Passionate about programming and UX | Creating awesome experiences for Web and Mobile!',
	'skills':['Python', 'HTML', 'CSS', 'Javascript', 'Jquery', 'AJAX', 'Bootstrap']
};

var education = {}
education.schoolName = 'Universite de Montreal';
education.schoolDegree = 'Bachelor';
education.schoolDates = '25-08-2007 -- 14-05-2010';
education.schoolLocation = 'Montreal';
education.schoolMajor = 'East-Asian Studies | Japanese Culture';

var work = {}
work['workEmployer'] = 'Jukado';
work['workTitle'] = 'Logistics Manager';
work['workDates'] = '15-08-2012 -- 01-03-2015';
work['workLocation'] = 'Montreal';

var projects{}
/*
for (var item in bio) {
	console.log (('HTML' + item).replace('%data%', bio[item]));
	$('#header').append(('HTML' + item).replace('%data%', bio[item]));
}
*/
$('#header').append(HTMLheaderName.replace('%data%', bio.headerName));
$('#header').append(HTMLheaderRole.replace('%data%', bio.headerRole));
$('#header').append(HTMLemail.replace('%data%', bio.contacts.email));
$('#header').append(HTMLbioPic.replace('%data%', bio.bioPic));
$('#header').append(HTMLWelcomeMsg.replace('%data%', bio.WelcomeMsg));
$('#header').append(HTMLschoolName.replace('%data%', education.schoolName));
$('#header').append(HTMLschoolDegree.replace('%data%', education.schoolDegree));
$('#header').append(HTMLschoolDates.replace('%data%', education.schoolDates));
$('#header').append(HTMLschoolLocation.replace('%data%', education.schoolLocation));
$('#header').append(HTMLschoolMajor.replace('%data%', education.schoolMajor));
$('#header').append(HTMLworkEmployer.replace('%data%', work.workEmployer));
$('#header').append(HTMLworkTitle.replace('%data%', work.workTitle));
$('#header').append(HTMLworkDates.replace('%data%', work.workDates));
$('#header').append(HTMLworkLocation.replace('%data%', work.workLocation));
