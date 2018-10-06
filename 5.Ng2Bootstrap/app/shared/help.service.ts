export class HelpService {
    static $inject = ['$http']

    helpUrl: string = 'http://localhost:4000/help'
    
    constructor(private $http: ng.IHttpService) {
    }

    getHelp(): ng.IPromise<Help> {
        return this.$http.get<Help>(this.helpUrl).then(response=>response.data);
    }
}
