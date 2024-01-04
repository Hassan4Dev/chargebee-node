///<reference path='./../core.d.ts'/>
declare module 'chargebee' {
  export interface Entitlement {
    
    id:string;
    
    entity_id?:string;
    
    entity_type?:'charge' | 'addon' | 'addon_price' | 'plan_price' | 'plan';
    
    feature_id?:string;
    
    feature_name?:string;
    
    value?:string;
    
    name?:string;
  }
  export namespace Entitlement {
    export class EntitlementResource {  
      list(input?:ListInputParam):ChargebeeRequest<ListResponse>;
       
      create(input:CreateInputParam):ChargebeeRequest<CreateResponse>;
    }
    export interface ListResponse {  
       list:{entitlement:Entitlement}[];
       
       next_offset?:string;
    }
    export interface ListInputParam {
      [key : string]: any;  
      /**
        * @description The number of resources to be returned.

        */
        
      limit?:number;
       
      /**
        * @description Determines your position in the list for pagination. To ensure that the next page is retrieved correctly, always set \&#x60;offset\&#x60; to the value of \&#x60;next_offset\&#x60; obtained in the previous iteration of the API call.

        */
        
      offset?:string;
       
      /**
        * @description The &#x60;id&#x60; of the feature towards which this entitlement has been granted.

        */
        
      feature_id?:{in?:string,is?:string};
       
      /**
        * @description The &#x60;type&#x60; of the &#x60;entity&#x60; to which this entitlement belongs.

        */
        
      entity_type?:{in?:string,is?:'charge' | 'addon' | 'addon_price' | 'plan_price' | 'plan'};
       
      /**
        * @description The &#x60;id&#x60; of the &#x60;entity&#x60; to which this entitlement belongs.

        */
        
      entity_id?:{in?:string,is?:string};
    }
    export interface CreateResponse {  
       entitlement:Entitlement;
    }
    export interface CreateInputParam {
       
      action:Action;
       
      entitlements:{entity_id:string,entity_type?:'charge' | 'addon' | 'addon_price' | 'plan_price' | 'plan',feature_id:string,value?:string}[];
    }
    
  }
}