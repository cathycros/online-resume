/* This file contains my data which will be dynamically loaded into the web page framework */

/*************************************************************/
/* JSON objects containing relevent data for the resume */
/*************************************************************/
/* 'bio' - contains personal and contact info */
var bio = {
	"name": "Cathy Crosman",
	"role": "Web Developer",
	"contacts": {
		"mobile": "+1 339 236 4412",
		"email": "crosmancathy@gmail.com",
		"github": "cathycros",
		"twitter": "@cathycros",
		"location": "Brockton, MA, USA"
	},
	"welcomeMessage": '"Millions saw the apple fall, but Newton asked why."  ~Bernard Baruch',
	// could list lots of skills so make sure they're in an array so we don't have to refactor the code every time we add a new one!
	"skills": [
		"Curiosity",
		"Patience",
		"Teaching & explaining",
		"All the usual tech languages and software"
	],
	"biopic": "images/pic.jpg",
	display: function() {
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", this.name);
		$("#header").prepend(formattedName);
		var formattedBiopic = HTMLbioPic.replace("%data%",this.biopic);
		$("#header").append(formattedBiopic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",this.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		// let's set the footer contact info at the same time as the top contact info
		var formattedContactsMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
		$("#topContacts").append(formattedContactsMobile);
		$("#footerContacts").append(formattedContactsMobile);
		var formattedContactsEmail = HTMLemail.replace("%data%",this.contacts.email);
		$("#topContacts").append(formattedContactsEmail);
		$("#footerContacts").append(formattedContactsEmail);
		var formattedContactsGithub = HTMLgithub.replace("%data%",this.contacts.github);
		$("#topContacts").append(formattedContactsGithub);
		$("#footerContacts").append(formattedContactsGithub);
		var formattedContactsTwitter = HTMLtwitter.replace("%data%",this.contacts.twitter);
		$("#topContacts").append(formattedContactsTwitter);
		$("#footerContacts").append(formattedContactsTwitter);
		var formattedContactsLocation = HTMLlocation.replace("%data%",this.contacts.location);
		$("#topContacts").append(formattedContactsLocation);
		$("#footerContacts").append(formattedContactsLocation);

		if (this.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < this.skills.length; i++) {
				var formattedSkill = HTMLskills.replace("%data%",this.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
	}
};

/* 'work' - information about each job to be listed on the resume */
var work = {
	"jobs": [
		{
			"employer": "BT Conferencing",
			"title": "Web Developer, Systems owner",
			"location": "Quincy, MA, USA",
			// I added a 'url' key/value pair to each job so that I could set the href on the employer
			"url": "http://www.btconferencing.com/",
			"dates": "2007 - present",
			"description": "Web developer, CMS system owner and developer, Web content manager"
		},
		{
			"employer": "Parker Hannifin",
			"title": "Programmer",
			"location": "Newton, MA, USA",
			"url": "http://www.parker.com/",
			"dates": "1998 - 2007",
			"description": "C, C++, and lots of JavaScript (back when there was no such thing as a 'JavaScript library' and online resources were few and far between)"
		},
		{
			"employer": "NORESCO/Equitable Resources Inc. (formerly Pequod Associates Inc.)",
			"title": "Systems & Network Manager, Office Manager",
			"location": "Boston, MA, USA",
			// if there's no url for the employer, be sure to include the '#' so we don't end up with an empty href tag
			"url": "#",
			"dates": "1993 - 1998",
			"description": "Hardware and network owner ('learn-as-you-go', and boy did I learn fast!), managed office, bookkeeper"
		}
	],
	display: function() {
		for (job in this.jobs) {
			$("#workExperience").append(HTMLworkStart);
			// here's where I replaced the "%url%" placeholder with the 'url' value from a job
			var formattedEmployer = HTMLworkEmployer.replace("%data%",this.jobs[job].employer).replace("%url%",this.jobs[job].url);
			var formattedTitle = HTMLworkTitle.replace("%data%",this.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%",this.jobs[job].dates);
			$(".work-entry:last").append(formattedDates);
			var formattedLocation = HTMLworkLocation.replace("%data%",this.jobs[job].location);
			$(".work-entry:last").append(formattedLocation);
			var formattedDescription = HTMLworkDescription.replace("%data%",this.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
};

/* 'projects' - information about projects which show my web developer skills */
var projects = {
	"projects": [
		{
			"title": "Online Resume",
			"dates": "2015",
			"description": "Online portfolio and resume - take a look around because this page IS the project!<br>Written with JavaScript, JQuery, JSON, Flex-box, and a simple responsive layout",
			"images": ["images/online-resume.png"]
		},
		{
			"title": "Orange Udacity Mug",
			"dates": "2015",
			"description": "Web page created from pdf mock, written using Bootstrap and optimized for responsiveness",
			"images": ["images/mock-to-web.png", "images/responsive-structure.png"]
		}
	],
	display : function() {
		for (project in this.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%",this.projects[project].title);
			$(".project-entry:last").append(formattedTitle);
			var formattedDates = HTMLprojectDates.replace("%data%",this.projects[project].dates);
			$(".project-entry:last").append(formattedDates);
			var formattedDescription = HTMLprojectDescription.replace("%data%",this.projects[project].description);
			$(".project-entry:last").append(formattedDescription);
			for (image in this.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%",this.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
};

/* 'education' - information about the schools I've attended and courses I've taken */
var education = {
	"schools": [
		{
			"name": "University of Massachusetts",
			"location": "Boston, MA, USA",
			"degree": "BA",
			"majors": ["English", "Psychology"],
			"dates": 1993,
			"url": "http://http://www.umb.edu/"
		},
		{
			"name": "Computer Learning Center",
			"location": "Somerville, MA, USA",
			"degree": "Certificate, Systems Approach to Programming",
			"majors": ["Programming"],
			"dates": 1998,
			"url": "#"
		}
	],
	/* I chose to write individual 'display' functions for the schools and online courses because it seemed more organized to me, and it was easier for me to work with */
	displaySchools: function () {
		for (school in this.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%",this.schools[school].name).replace("%url%",this.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%",this.schools[school].degree);
			var formattedNameDegree = formattedName + formattedDegree;
			$(".education-entry:last").append(formattedNameDegree);
			var formattedDates = HTMLschoolDates.replace("%data%",this.schools[school].dates);
			$(".education-entry:last").append(formattedDates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",this.schools[school].location);
			$(".education-entry:last").append(formattedLocation);
			for (major in this.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%",this.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	},
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/nd001"
		},
		{
			"title": "JavaScript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
		},
		{
			"title": "How to use Git and GitHub",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/viewer#!/c-ud775-nd"
		},
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/ud304-nd"
		}
	],
	/* My 'display' function for the online courses data */
	displayOnlineCourses: function () {
		if (this.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for (course in this.onlineCourses) {
				$("#education").append(HTMLschoolStart);
				var formattedTitle = HTMLonlineTitle.replace("%data%",this.onlineCourses[course].title).replace("%url%",this.onlineCourses[course].url);
				var formattedSchool = HTMLonlineSchool.replace("%data%",this.onlineCourses[course].school);
				var formattedTitleSchool = formattedTitle + formattedSchool;
				$(".education-entry:last").append(formattedTitleSchool);
				var formattedDates = HTMLonlineDates.replace("%data%",this.onlineCourses[course].dates);
				$(".education-entry:last").append(formattedDates);
				/* I chose note to display the formatted url as I think it detracts from the information being presented */
				/*  and the course title is clickable; however, the 2 lines below, if uncommented, would display the info */
				// var formattedUrl = HTMLonlineURL.replace("%data%",this.onlineCourses[course].url).replace("%url%",this.onlineCourses[course].url);
				// $(".education-entry:last").append(formattedUrl);
			}
		}
	},
	/* And a 'combined' display function to call the individual school and online courses display functions - this will simplify the call we need to make outside of the object to display the data on the web page */
	display: function () {
		this.displaySchools();
		this.displayOnlineCourses();
	}
};

/*************************************************************/
/* Function calls to write resume data from the JSON objects to the web page */
/*************************************************************/
//  I chose to locate them all in one place, rather than a function call after every JSON object, because it seems neater and more organized,
//   and is easier for me to work with
bio.display();
work.display();
projects.display();
education.display();

// add the google map to the page
$("#mapDiv").append(googleMap);