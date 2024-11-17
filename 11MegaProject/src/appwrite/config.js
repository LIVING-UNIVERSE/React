import conf from "../conf/conf";
import { Client,Databases,Storage,Query, ID } from "appwrite";

export class Service{
    client= new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // database related services
    async createPost({title,slug,content,status,featuredImage,status, userID }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: createPost :: error" , error)
        }
    }
    
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("APPWRITE SERVICE :: updatePost :: error" , error)
        }
    }
    
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug
            )
            return true
        } catch (error) {
            console.log("APPWRITE SERVICE :: deletePost :: error" , error)
            return false
        }
    }
    
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                slug
            )
        }catch(error){
            console.log("APPWRITE SERVICE :: getPost :: error" , error)
            
        }
    }
    
    async getPosts( query = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDataBaseID,
                conf.appwriteCollectionID,
                query
            )
            return true
        } catch (error) {
            console.log("APPWRITE SERVICE :: getPosts :: error" , error)
            return false
        }
    }
    // storage related services 
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
            return true;
        } catch (error) {
            console.log("APPWRITE SERVICE :: uploadFile :: error" , error)
            return false
        }
    }

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileId
            )
        } catch (error) {
            console.log("APPWRITE  SERVICE :: deleteFile :: error ::", error)
            return false
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }
}

const service =  new Service();
export default service