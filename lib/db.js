import { openDB } from "idb";

export const initDB = async () =>{
    return await openDB("MyDatabase",1,{
        upgrade(db){
            if(!db.objectStoreNames.contains("users")){
                db.createObjectStore("users",{keyPath:"id",autoIncrement:true});
            }
        },
    });
}