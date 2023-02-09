const DoctorCard =({doctor})=>{
    return(
        <>
            <div className="grid sm:grid-cols-3">
                <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                    <img
                    className="absolute object-cover w-full h-full rounded"
                    src={doctor.image}
                    alt={doctor.name}
                    />
                </div>
                <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                    <p className="text-lg font-bold">{doctor.name} {doctor.lastName}</p>
                    <p className="mb-6 text-xs text-gray-800">{doctor.specialty.name}</p>
                    <p className="mb-2 text-sm tracking-wide text-gray-800">{doctor.phone} </p>
                    <p className="mb-4 text-sm tracking-wide text-gray-800">{doctor.email} </p>
                </div>
            </div>
        </>
    )
}
export default DoctorCard;