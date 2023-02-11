import AddessCard from "./cards/AddressCard"
import ProfileCard from "./cards/ProfileCard"

const Profile =() =>{

    return(
        <div className="font-poppins w-full p-8 mx-auto">
            <h1 className="mb-5 text-2xl font-bold text-gray-700">
                <span className="text-primary-100">Mi </span>Perfil </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8">
                <ProfileCard />
                <AddessCard />
            </div>
        </div>
    )

}
export default Profile