import { User } from "../model/model";

export default class UserTemplate{
    static render(userDetails:User):void{
        const username = document.getElementById("username") as HTMLSpanElement
        const name = document.getElementById("name") as HTMLSpanElement
        const email = document.getElementById("email") as HTMLSpanElement
        const birthday = document.getElementById("birthday") as HTMLSpanElement
        const address = document.getElementById("address") as HTMLSpanElement

        username.innerHTML = userDetails.username
        name.innerHTML = userDetails.name
        email.innerHTML = userDetails.email
        birthday.innerHTML = userDetails.birthday
        address.innerHTML = userDetails.address
    }
}