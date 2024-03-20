import axios from 'axios';
import { ApiResponse } from '../model/model';
import { User } from '../model/model';

export default class DataService {
  private readonly baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async getUser(userId: string): Promise<ApiResponse<User>> {
    try {
        const headers = {
            'X-Api-Key': 'iXcC81MmVW8ZZy06X80uJA==lhCdBcWDvFNyKtWT',
            'Content-Type': 'application/json', 
          };
      const response = await axios.get(`${this.baseUrl}/${userId}`,{headers});
      return { data: response.data, status: response.status, statusText: response.statusText };
    } catch (error) {
    
      throw new Error('Failed to fetch user data');
    }
  }
}
