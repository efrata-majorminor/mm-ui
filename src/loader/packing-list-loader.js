import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

//const resource = 'docs/efr-pk/expedition';
const resource = 'pkpbj/by-user/expedition'

module.exports = function (keyword, filter) {

    var config = Container.instance.get(Config);
    //var endpoint = config.getEndpoint("merchandiser");
    var endpoint = config.getEndpoint("inventory");

    return endpoint.find(resource, { keyword: keyword })
        .then(results => {
            return results.data.map(spk => {
                spk.toString = function () {
                    return this.packingList
                }
                //console.log(spk.items);
                spk.quantity = spk.items.reduce((sum, curr) => sum + parseInt(curr.quantity), 0);
                console.log(spk);
                return spk;
            })
        });
}
