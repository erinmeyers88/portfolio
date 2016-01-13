angular.module("portfolio")
	.config(function ($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "features/home/home.html",
				controller: "homeCtrl"
			})
			
			.state("aboutme", {
				url: "/aboutme",
				templateUrl: "features/aboutMe/aboutMe.html",
				controller: "aboutMeCtrl"
			})
			
			.state("portfolio", {
				url: "/portfolio",
				templateUrl: "features/portfolio/portfolio.html",
				controller: "portfolioCtrl"
			})
			
			.state("contact", {
				url: "/contact",
				templateUrl: "features/contact/contact.html",
				controller: "contactCtrl"
			});

	
		$urlRouterProvider.otherwise("/home");
		
	});