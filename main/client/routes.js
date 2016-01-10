angular.module("portfolio")
	.config(function ($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state("home", {
				url: "/home",
				templateUrl: "html/home/home.html",
				controller: "homeCtrl"
			})
			
			.state("aboutme", {
				url: "/aboutme",
				templateUrl: "html/aboutMe/aboutMe.html",
				controller: "aboutMeCtrl"
			})
			
			.state("portfolio", {
				url: "/portfolio",
				templateUrl: "html/portfolio/portfolio.html",
				controller: "portfolioCtrl"
			})
			
			.state("contact", {
				url: "/contact",
				templateUrl: "html/contact/contact.html",
				controller: "contactCtrl"
			});

	
		$urlRouterProvider.otherwise("/home");
		
	});