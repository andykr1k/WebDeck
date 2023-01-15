import { Steps } from '../components/index'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Textarea, Progress, Button } from '@chakra-ui/react'
import { generateWebsites } from '../functions/generateWebsites'

export default function InputFormPage() {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [college, setCollege] = useState("");
    const [major, setMajor] = useState("");
    const [currentAttend, setCurrentAttend] = useState("");
    const [current, setCurrent] = useState("");
    const [role, setRole] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [company, setCompany ] = useState("");

    return (
    <div className='flex justify-center items-center min-h-screen bg-greenblue'> 
        <div className='fixed bottom-0 left-0 z-10 p-10 '>
            <a href='/'>
                <motion.button whileHover={{scale:1.2}} className='bg-lblue p-4 rounded-md flex justify-center items-center gap-1 font-bold shadow-raisin shadow-sm' >
                    {/*<ArrowBackIcon color='red.600'/>*/}
                    Home
                </motion.button>
            </a>
        </div>   
        <Tabs isFitted variant='soft-rounded' colorScheme='whiteAlpha'>
            <div className='absolute top-0 left-0 right-0 z-10 shadow-lg'>
            <TabList m='1em'>
                <Tab>Basic</Tab>
                <Tab>Education</Tab>
                <Tab>Work</Tab>
                <Tab>Generate</Tab>
            </TabList>
            </div>
            <TabPanels>
                <TabPanel>  
                <div class="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12 shadow-raisin shadow-md">
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"             onChange={ (e) => setFname(e.target.value) } placeholder=" " required />
                        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" onChange={ (e) => setLname(e.target.value) } placeholder=" " required />
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={ (e) => setEmail(e.target.value) } required />
                    <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-6 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={ (e) => setNumber(e.target.value) } required />
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>United States</option>
                            <option>Canada</option>
                            <option>France</option>
                            <option>Germany</option>
                        </select>
                    </div>
                </div>
                </div>
                </TabPanel>
                <TabPanel>
                <div class="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12 shadow-raisin shadow-md">
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        onChange={ (e) => setCollege(e.target.value) }
                        required 
                        />
                        <label 
                        class="peer-focus:font-medium absolute text-sm text-raisin/50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        College (Ex. UCLA)
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        onChange={ (e) => setMajor(e.target.value) }
                        required 
                        />
                        <label 
                        class="peer-focus:font-medium absolute text-sm text-raisin/50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Major (Ex. Business)
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        onChange={ (e) => setCurrentAttend(e.target.value) }
                        required 
                        />
                        <label 
                        class="peer-focus:font-medium absolute text-sm text-raisin/50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Currently attending?
                        </label>
                    </div>
                </div>
                </TabPanel>
                <TabPanel>
                <div class="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12 shadow-raisin shadow-md">
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        onChange={ (e) => setCompany(e.target.value) }
                        required 
                        />
                        <label 
                        class="peer-focus:font-medium absolute text-sm text-raisin/50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Company (Ex. Google)
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        onChange={ (e) => setRole(e.target.value) }
                        required 
                        />
                        <label 
                        class="peer-focus:font-medium absolute text-sm text-raisin/50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Position (Ex. Recruiter)
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        type="email" 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        onChange={ (e) => setCurrent(e.target.value) }
                        required 
                        />
                        <label 
                        class="peer-focus:font-medium absolute text-sm text-raisin/50 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Currently attending?
                        </label>
                    </div>
                </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid text-center">
                        <motion.button
                        onClick={() => (generateWebsites("Fname", "Lname", "email"))}
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 m-1 font-bold rounded-md shadow-md'
                        >
                        Generate
                        </motion.button>
                        <motion.a
                        href="/src/backend/output/firstdesign/FirstDesign.html" 
                        download="FirstDesign"
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 m-1 font-bold rounded-md shadow-md'
                        >
                        Download First Design
                        </motion.a>
                        <motion.a
                        href="/src/backend/output/seconddesign/SecondDesign.html" 
                        download="SecondDesign"
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 m-1 font-bold rounded-md shadow-md'
                        >
                        Download Second Design
                        </motion.a>
                        <motion.a
                        href="/src/backend/output/thirddesign/ThirdDesign.html" 
                        download="ThirdDesign"
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 m-1 font-bold rounded-md shadow-md'
                        >
                        Download Third Design
                        </motion.a>
                        <motion.a
                        href="/public/designs.zip" 
                        download="Designs"
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 m-1 font-bold rounded-md shadow-md'
                        >
                        Download ZIP
                        </motion.a>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>        
    </div>
    )
}