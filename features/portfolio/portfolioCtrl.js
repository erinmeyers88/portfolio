angular.module('portfolio')
    .controller('portfolioCtrl', function ($scope, $location) {


		$scope.portfolioData = [
		
			{
				title: "SkyNautilus",
				description: "A new spin on a flight search engine and travel planning.",
				features: ["Login with your Google account", "Search for a flight", "Modify your search", "Narrow down your search results", 'Save the itinerary to a "trip"', "View and edit saved trips"],
				technologies: ["AngularJS", "Node.js", "Express", "MongoDB", "Passport Google OAuth", "Google QPX API", "CSS"],
				thumbnail: "./shared/img/SkyNautilus.png",
				url: "http://www.skynautilus.com"
			},
			
			{
				title: "Kay Kennerty Realty",
				description: "A real estate agent website.",
				features: ["View Kay's experience", "View homebuying and area-specific resourses"],
				technologies: ["AngularJS", "CSS"],
				thumbnail: "./shared/img/kaykennerty.png",
				url: "http://www.danielkvincent.com"
			},
			
			
			{
				title: "Travel Tracker",
				description: "Log and map your world travels.",
				features: ["View country lists by region", "View country information", "Mark countries as visited", 'View your "travel stats"', "View your travels on a map"],
				technologies: ["AngularJS", "Google Maps API", "REST Countries API", "CSS"],
				thumbnail: "./shared/img/traveltracker.png",
				url: "http://erinmeyers88.github.io/TravelTrackerWithAngularMaterial/"
			},
				
			{
				title: "QuoteKeeper",
				description: "Keep a list of your favorite quotes.",
				features: ["Search quote text and authors", "Add a quote", "Remove a quote"],
				technologies: ["AngularJS", "Firebase", "Font Awesome", "CSS"],
				thumbnail: "./shared/img/quotekeeper.png",
				url: "http://erinmeyers88.github.io/Practice-Quotebook-Firebase/"
			},		
		];
		
		




		
		
    });