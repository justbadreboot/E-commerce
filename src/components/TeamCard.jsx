import { Link } from 'react-router-dom'
import fotoA from '../assets/img/FotoA.jpg'
import fotoD from '../assets/img/FotoD.png'


const TeamCard =()=>{

    const members =[
        {
            id:1,
            nombre:"Bryan Quisaguano",
            img:"",
            titulo:"Team Leader",
            descripcion:'Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?',
            fb:"",
            git:"https://github.com/BryanArmando",
            in:"",
            delay:''
        },
        {
            id:2,
            nombre:"Adrian Bastidas",
            img:fotoA,
            titulo:"Team Leader",
            descripcion:'Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?',
            fb:"",
            git:"https://github.com/Adrian-Bastidas",
            in:"",
            delay:'200'
        },
        {
            id:3,
            nombre:"Jonathan Sanchez",
            img:"",
            titulo:"Team Leader",
            descripcion:'Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?',
            fb:"",
            git:"https://github.com/jonato96",
            in:"",
            delay:'400'
        },
        {
            id:4,
            nombre:"Daniela Cisneros",
            img:fotoD,
            titulo:"Team Leader",
            descripcion:'Quae labore quia tempora dolor impedit. Possimus, sint ducimus ipsam?',
            fb:"",
            git:"https://github.com/DaniCis",
            in:"",
            delay:'600'
        },
    ]

    return( 
        <div class="pt-4">
            <div class="xl:container mx-auto px-6 md:px-12">
                <div class="mb-16 md:w-2/3 lg:w-1/2">
                    <h2 class="mb-4 text-2xl font-semibold text-gray-800 md:text-4xl">
                    Nuestro Equipo
                    </h2>
                    <p class="text-gray-600">
                    Tailus prides itself not only on award-winning technology, but also on the talent of its
                    people of some of the brightest minds and most experienced executives in business.
                    </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
                    {members.map(member =>(
                        <div class="p-4"
                            data-aos="fade-right"
                            data-aos-duration="1200" 
                            data-aos-delay={member.delay}>
                            <div class="mb-4 text-center opacity-90">
                                <div class="relative block">
                                    <img alt={member.nombre} src={member.img} class="mx-auto object-cover rounded-full h-40 w-40 "/>
                                </div>
                            </div>
                            <div class="text-center">
                                <p class="text-2xl text-gray-800 dark:text-white">
                                    {member.nombre}
                                </p>
                                <p class="text-xl font-light text-gray-500 dark:text-gray-200">
                                    {member.titulo}
                                </p>
                                <p class="md:max-w-xs py-4 font-light text-gray-500 text-md dark:text-gray-400">
                                    {member.descripcion}
                                </p>
                            </div>
                            <div class="flex items-center justify-between pt-8 mx-auto text-gray-500 border-t border-gray-200 w-44">
                                <Link to={member.fb}>
                                    <svg width="30" height="30" fill="currentColor" class="text-xl transition-colors duration-200 hover:text-primary-100" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                                        </path>
                                    </svg>
                                </Link>
                                <Link to={member.git}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="text-xl transition-colors duration-200 hover:text-primary-100" viewBox="0 0 1792 1792">
                                        <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                                        </path>
                                    </svg>
                                </Link>
                                <Link to={member.in}>
                                    <svg width="30" height="30" fill="currentColor" class="text-xl transition-colors duration-200 hover:text-primary-100" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                                        </path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>                                   
    )
}
export default TeamCard;