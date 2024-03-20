// import './style.css'
import DataService from './service/dataService';
import UserService from './service/userService';
import UserTemplate from './template/userTemplate';

const baseUrl = 'https://api.api-ninjas.com/v1';


const userService = new UserService(new DataService(baseUrl));

(async () => {
  try {
    const userId = "randomuser";
    const userDetails = await userService.getUserDetails(userId);
    if (userDetails) {
      console.log('User details:', userDetails);
      UserTemplate.render(userDetails)
    } else {
      console.log('Failed to retrieve user details.');
    }
  } catch (error) {
    console.error('Error fetching user details:', error);
  }
})();
