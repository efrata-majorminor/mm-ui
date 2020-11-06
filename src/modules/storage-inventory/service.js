import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {RestService} from '../../utils/rest-service';
import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const serviceUriStorages = '/storages';  

export class Service extends RestService{
  
  constructor(http, aggregator, config, api) {
    super(http, aggregator, config, "master");
  }  
  
  getAllInventory(storageId, keyword)
  {
    var config = Container.instance.get(Config);
   // var endpoint = config.getEndpoint("inventory").client.baseUrl + 'inventories/monitoring/by-user/storages/' + storageId+ '/inventories?keyword=' + keyword; 
    var endpoint = config.getEndpoint("inventory").client.baseUrl + 'inventories/monitoring/by-user?storageId=' +storageId+ '&filter=' + keyword; 
    return super.get(endpoint);
  }
  
  getAllMovement(storageId, itemCode)
  {
   
    var config = Container.instance.get(Config);
    var endpoint = config.getEndpoint("inventory").client.baseUrl + 'inventories/monitoring/by-movements?storageId=' + storageId+'&itemCode='+itemCode;  
   
    return super.get(endpoint);
  }
   
}