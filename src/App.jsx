import ProfileCard from "./ProfileCard.jsx"
import userImage from  "./assets/Images/user.jpg"
import userImage2 from './assets/Images/user2.jpg'
import userImage3 from './assets/Images/user3.jpg'

function App() {

  return (
    <div>
      <ProfileCard 
      // image = {userImage}
      name = "Aisha Ahmed"
      image = {userImage}
      age = "30"
      location = "Wolverhampton, UK"
      jobtitle = "Network Engineer"
      hobbies = "Hiking and Photography"
      email = "aisha@gmail.com"
      bio = "Hiking, nature photography, and new recipes enthusiast. Tech DIYer with a passion for smart home projects and balance through yoga."
      />

      <ProfileCard 
      name = "John Smith"
      image = {userImage3}
      age = "28"
      location = "London, UK"
      jobtitle = "Software Developer"
      hobbies = "Cycling and Cooking"
      email = "john@gmail.com"
      // bio = "Cycling enthusiast who loves experimenting with recipes and exploring new cuisines. Avid gamer with a knack for coding and creating small apps."
      />

      <ProfileCard 
        name = "Emily Johnson"
        image = {userImage2}
        age = "25"
        location = "Bristol, UK"
        jobtitle = "Graphic Designer"
        hobbies = "Painting and Traveling"
        email = "emily.johnson@gmail.com"
        bio = "Passionate about painting and capturing travel experiences through art. Enjoys exploring new cultures and staying updated with design trends."
      />
    </div>
  )
}

export default App
