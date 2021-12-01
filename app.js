(
    function () {
        'use strict';
        angular.module('ArticleApp', [])
            .controller('ArticleController', ArticleController)
            .service('ArticleService', ArticleService)
            .constant('ApiBasePath', "https://api.sampleapis.com");


        ArticleController.$inject = ['ArticleService'];
        function ArticleController(ArticleService) {
            var article = this;
            var promise = ArticleService.getMenuCategories();
            promise.then(
                function (response) {
                    article.categories = response.data;
                }
            )
                .catch(function (error) {
                    console.log("Something went terrbly wrong!!");
                });
        }
        ArticleService.$inject = ['$http', 'ApiBasePath']
        function ArticleService($http, ApiBasePath) {
            var service = this;

            service.getMenuCategories = function () {
                var response = $http(
                    {
                        method: "GET",
                        url: (ApiBasePath + "/futurama/characters")
                    }
                );
                return response;
            };
        }
    }
)()