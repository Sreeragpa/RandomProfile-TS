import DataService from "./dataService";
import { User } from "../model/model";

export default class UserService {
    private readonly dataService: DataService;
  
    constructor(dataService: DataService) {
      this.dataService = dataService;
    }
  
    async getUserDetails(userId: string): Promise<User | undefined> {
      try {
        const response = await this.dataService.getUser(userId);
        return response.data;
      } catch (error) {
        console.error('Error fetching user details:', error);
        return undefined; // Or throw a custom error for specific handling
      }
    }
  }
  