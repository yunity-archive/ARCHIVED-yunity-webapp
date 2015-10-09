import angular from 'angular';

/**
Sample usage:

(SearchService) => {
    SearchService.updateParams({
        categoryIds: [1, 4, 7],
        center: {lat: 40, lon: 10},
    });

    [searchList, searchMap] = SearchService.searchMapItems()
    searchList.then((data) => { ... });
    searchMap.then((data) => { ... });

    // OR...

    $q.all(SearchService.searchMapItems()).then(([listData, mapData]) => {
        updateList(listData);
        updateMap(mapData);
        // etc...
    })


}
*/

angular.module('yunity').factory(
    'SearchService',
    (yAPI) => {

        let params = {};

        let updateParams = (newParams) => {
            return angular.extend(params, newParams);
        };

        let searchMapItems = () => {
            let listPromise = yAPI.apiCall({
                uri: '/search',
                data: {
                    params: params,
                }
            });
            let mapPromise = yAPI.apiCall({
                uri: '/search/map',
                data: {
                    params: params,
                }
            });
            return [listPromise, mapPromise];
        }

        return {
            searchMap
        }
    })