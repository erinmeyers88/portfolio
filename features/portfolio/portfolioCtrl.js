angular.module('portfolio')
    .controller('portfolioCtrl', function ($scope, $location) {
		
		$scope.showInfo = false;

		$scope.portfolioData = [
			
			{
				title: "FamGraph",
				description: "Compelling visualizations of your family history data.",
				features: ["View interactive charts and manipulate data to learn more about your past", "Charts include: births per month, lifespan, nested family tree, and total living relatives", "Log in with your FamilySearch.org account (pending)"],
				technologies: ["D3.js", "AngularJS", "ES2015", "Node.js", "Express", "MongoDB", "Mongoose", "MongoLab", "FamilySearch.org API", "Stylus", "Gulp", "Underscore.js", "Font Awesome", "HTML", "CSS"],
				thumbnail: "./shared/img/famgraph.png",
				url: "http://famgraph.io"
			},
		
			{
				title: "SkyNautilus",
				description: "A new spin on a flight search engine and travel planning.",
				features: ["Log in with your Google account", "Search for a flight", "Modify your search", "Filter search results by city and airline", 'Save the itinerary to a "trip"', "View and edit saved trips"],
				technologies: ["AngularJS", "Node.js", "Express", "MongoDB", "Mongoose", "MongoLab", "Passport Google OAuth", "Google QPX API", "HTML", "CSS"],
				thumbnail: "./shared/img/SkyNautilus.png",
				url: "http://www.skynautilus.com"
			},
			
			{
				title: "Kay Kennerty Realty",
				description: "A real estate agent website.",
				features: ["View Kay's experience", "View homebuying and area-specific resourses"],
				technologies: ["AngularJS", "HTML", "CSS", "Font Awesome"],
				thumbnail: "./shared/img/kaykennerty.png",
				url: "http://www.danielkvincent.com"
			},
			
			
			{
				title: "Travel Tracker",
				description: "Log and map your world travels.",
				features: ["View country lists by region", "View country information", "Mark countries as visited", 'View your "travel stats"', "View your travels on a map"],
				technologies: ["AngularJS", "Google Maps API", "REST Countries API", "HTML", "CSS", "Angular Material"],
				thumbnail: "./shared/img/traveltracker.png",
				url: "http://erinmeyers88.github.io/TravelTrackerWithAngularMaterial/"
			},
				
			{
				title: "QuoteKeeper",
				description: "Keep a list of your favorite quotes.",
				features: ["Search quote text and authors", "Add a quote", "Remove a quote"],
				technologies: ["AngularJS", "Firebase", "HTML", "CSS", "Font Awesome"],
				thumbnail: "./shared/img/quotekeeper.png",
				url: "http://erinmeyers88.github.io/Practice-Quotebook-Firebase/"
			},		
		];
		
		




		
		
    });