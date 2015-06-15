var bio={
  "name":"Kyle Pearson",
  "role":"College Graduate",
  "contacts":
  {
    "mobile":"508-272-3428",
    "email":"kjpearson5@gmail.com",
    "github":"Pearson15",
    "twitter":"@tweets",
    "location":"Natick, MA"
  },
  "picture":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAJDAAAAJDY3YmVmNDYxLTQyYzctNDljMC1iMDkyLTA3MjkyNDQ0ZjM1MQ.jpg",
  "welcome_message":"This is me, Mothafuckas",
  "skills":["Java","JS","HTML","CSS","JIRA","Stata","MS Office","Quality Assurance"]
}


var work={
  "jobs":[
{
  "employer":"Eaton",
  "title":"Sales Clerk",
  "location":"Sherborn, MA",
  "dates":"2009-2011",
  "description":"Responsible for customer-facing and front-end operations including store inventory, cash register, daily store opening and closing, and overall customer service. Delivered prescriptions to customers throughout the Metrowest region."
},
{
  "employer":"Skinny's Fat Sandwiches",
  "title":"Front Store Operations",
  "location":"Oak Bluffs, MA",
  "dates":"2012",
  "description":"Responsible for overall customer experience and store’s front-end management including processing food orders, inventory control, and end-of-day store closing."
},
{
  "employer":"Mullen",
  "title":"QA Intern",
  "location":"Boston, MA",
  "dates":"2013",
  "description":"Responsible for testing custom-developed customer websites and landing pages across different hardware platforms, operating systems, and web browsers.  Identified software errors and usability issues, logged issues via JIRA, and ensured previously identified issues had been resolved with no new errors introduced. Participated in weekly team meetings, providing updates of the projects’ progress and open issues to the QA and development teams and the respective project manager.  Also coordinated testing and bug fixes via periodic conference calls with third party developers. Created new and updated existing process and testing documentation for Mullen’s newly formed QA department. As part of the Mullen internship project to develop creative solution to inspire a positive change in or around the workplace, my cross-functional team created a social-networking site that enabled Mullen employees to identify and connect with co-workers with similar interests."
},
{
  "employer":"University of Maryland",
  "title":"Research Assistant",
  "location":"College Park, MD",
  "dates":"2014",
  "description":"Assisted Dr. Padhi, visiting Assistant Professor of Finance at the University of Maryland, with research on the lending patterns of microfinance institutions (MFIs) in developing countries. Worked on small team to create detailed and aggregated SQL databases of MFI lending locations, history of lending practices, and demographic information. Analyzed data to identify correlations and trends to further explain how MFI’s lend in developing countries. Conducted weekly team status meetings to report progress, discuss and resolve open issues."
}
]
}

var education={
  "schools":[
  {
    "name":"University of Maryland",
    "city":"College Park, MD",
    "degree":"BA-Economics",
    "major":"Economics",
    "dates":"2011-2015",
    "url":"http://www.umd.edu/"
  }]

  /*"onlineCourses":[{
    "title":"Javascript, Crash Course",
    "school":"Udacity",
    "dates":2015,
    "url":"https://www.udacity.com/"
  }]*/
}

var projects = {
  "project":[
    {
    "title":"Sample Project 1",
    "dates":"2015",
    "description":"Testing out HTML/CSS",
    "images":[]
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedGit = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedEmail = HTMLemail.replace('%data%',bio.contacts.email);
var formattedMobile = HTMLmobile.replace('%data%',bio.contacts.mobile);
var formattedLocation = HTMLlocation.replace('%data%',bio.contacts.location);
var formattedPic = HTMLbioPic.replace("%data%",bio.picture);

$("#header").prepend([formattedRole]);
$("#header").prepend([formattedName]);
$("#topContacts").prepend([formattedLocation]);
$("#topContacts").prepend([formattedGit]);
$("#topContacts").prepend([formattedEmail]);
$("#topContacts").prepend([formattedMobile]);
$("#header").append([formattedPic]);

$("#header").append(HTMLskillsStart);

for(i=0; i<bio.skills.length; i++){
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
  $("#skills").append(formattedSkill);
}


function displayWork(){
  for (job in work.jobs) {
    $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace
    ('%data%', work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace
    ('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);


    var formattedDates = HTMLworkDates.replace
    ('%data%', work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace
    ('%data%', work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace
    ('%data%', work.jobs[job].description);

    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);

  }
}
displayWork();

function displayProjects(){
for (proj in projects.project){
  $("#projects").append(HTMLprojectStart);

  var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[proj].title);
  var formattedDates = HTMLprojectDates.replace("%data%",projects.project[proj].dates);
  var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[proj].description);

  $(".project-entry:last").append(formattedTitle);
  $(".project-entry:last").append(formattedDates);
  $(".project-entry:last").append(formattedDescription);
  }
}
displayProjects();

for (edu in education.schools){
  $("#education").append(HTMLschoolStart);

  var formattedName = HTMLschoolName.replace("%data%",education.schools[edu].name);
  $(".education-entry:last").append(formattedName);
  var formattedDate = HTMLschoolDates.replace("%data%",education.schools[edu].dates);
  $(".education-entry:last").append(formattedDate);
  var formattedCity = HTMLschoolLocation.replace("%data%",education.schools[edu].city);
  $(".education-entry:last").append(formattedCity);

  var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
  $(".education-entry:last").append(formattedDegree);


  $("#mapDiv").append(googleMap);

  //var formattedMajor = HTMLschoolMajor.replace("%data"),education.schools[edu].major);

  //$(".education-entry:last").append(formattedMajor);
}
