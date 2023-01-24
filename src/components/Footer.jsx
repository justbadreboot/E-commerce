import cara from '../assets/img/caraKm.png'

const Footer = () =>{
    return( 
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" class="w-full" viewBox="0 0 1367.743 181.155">
                <path
                class="fill-current text-gray-100 dark:text-gray-800"
                id="wave"
                data-name="wave"
                d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
                transform="translate(5 115)"
                ></path>
            </svg>
            <div class="bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent -pt-32">
                <div class="container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-400 md:px-12 lg:px-20">
                    <div class="grid grid-cols-8 gap-6 md:gap-0">
                        <div class="col-span-8 border-r border-gray-100 dark:border-gray-800 md:col-span-2 lg:col-span-3">
                            <div class="flex items-center justify-between gap-6 border-b border-white dark:border-gray-800 py-6 md:block md:space-y-6 md:border-none md:py-0" >
                                <img src={cara} alt="KrugerMed" class="w-40 dark:brightness-200 dark:grayscale" />
                                <div class="flex">
                                    <form action="">
                                        <label for="newsletter" class="text-lg font-semibold capitalize text-gray-900 dark:text-gray-200">Subscribe to our newsletter</label>
                                        <div class="relative mt-4 input-group">
                                            <input
                                                type="email"
                                                name="newsletter"
                                                id="newsletter"
                                                placeholder="Your email"
                                                class=" input input-bordered invalid:outline-none placeholder-gray-600 dark:placeholder-white rounded-3xl w-full bg-gray-100 dark:bg-gray-900 px-12 py-3 ring-1 ring-gray-200 dark:ring-gray-700 invalid:ring-red-400"
                                             />
                                            <button
                                                type="submit"
                                                title="Submit"
                                                class="btn absolute right-0 w-max rounded-r-3xl bg-primary py-3 px-3 text-center transition">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-8 md:col-span-6 lg:col-span-5">
                            <div class="grid grid-cols-2 gap-6 pb-24 sm:grid-cols-3 md:pl-16">
                                <div>
                                    <h6 class="text-lg font-medium text-gray-800 dark:text-gray-200">Company</h6>
                                    <ul class="mt-4 list-inside space-y-4">
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">About</a>
                                        </li>
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">Customers</a>
                                        </li>
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">Enterprise</a>
                                        </li>
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">Partners</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 class="text-lg font-medium text-gray-800 dark:text-gray-200">Products</h6>
                                    <ul class="mt-4 list-inside space-y-4">
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">About</a>
                                        </li>
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">Customers</a>
                                        </li>
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">Enterprise</a>
                                        </li>
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">Partners</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h6 class="text-lg font-medium text-gray-800 dark:text-gray-200">Resources</h6>
                                    <ul class="mt-4 list-inside space-y-4">
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">About</a>
                                        </li>
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">Customers</a>
                                        </li>
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">Enterprise</a>
                                        </li>
                                        <li>
                                            <a href="#" class="transition hover:text-cyan-600">Partners</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="flex justify-between border-t border-gray-100 dark:border-gray-800 py-4 pb-4 md:pl-8">
                                <span>&copy; KrugerMed - <span id="year">2023</span> </span>
                                <span>All rights reserved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer> 
    )

}
export default Footer;