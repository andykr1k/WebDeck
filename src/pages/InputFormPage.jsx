import { Steps } from '../components/index'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Textarea, Progress, Button } from '@chakra-ui/react'
import { generateWebsites } from '../functions/generateWebsites'

export default function InputFormPage() {

    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [college, setCollege] = useState("");
    const [major, setMajor] = useState("");
    const [currentAttend, setCurrentAttend] = useState("");
    const [current, setCurrent] = useState("");
    const [description, setDescription] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [company, setCompany ] = useState("");

    return (
    <div className='grid place-content-center min-h-screen bg-greenblue'> 
        <div className='fixed bottom-0 left-0 z-10 p-10'>
            <a href='/'>
                <motion.button whileHover={{scale:1.2}} className='bg-lblue p-4 rounded-md flex justify-center items-center gap-1 font-bold' >
                    {/*<ArrowBackIcon color='red.600'/>*/}
                    Home
                </motion.button>
            </a>
        </div>   
        <Tabs isFitted variant='soft-rounded' colorScheme='whiteAlpha'>
            <div className='absolute top-0 left-0 right-0 z-10'>
            <TabList m='1em'>
                <Tab>Basic</Tab>
                <Tab>Education</Tab>
                <Tab>Work</Tab>
                <Tab>Generate</Tab>
            </TabList>
            </div>
            <TabPanels>
                <TabPanel>
                    <div class="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
                        <form action="" class="space-y-4">
                        <div>
                            <label class="sr-only">Name</label>
                            <input
                            onChange={ (e) => setName(e.target.value) }
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Name"
                            type="text"
                            />
                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                            <label class="sr-only">Email</label>
                            <input
                                onChange={ (e) => setEmail(e.target.value) }
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Email address"
                                type="email"
                            />
                            </div>

                            <div>
                            <label class="sr-only">Phone</label>
                            <input
                                onChange={ (e) => setNumber(e.target.value) }
                                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Phone Number"
                                type="tel"
                            />
                            </div>
                        </div>

                        <div>
                            <label class="sr-only">Biography</label>
                            <textarea
                            onChange={ (e) => setBio(e.target.value) }
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder='Biography'
                            rows="8"
                            ></textarea>
                        </div>
                        <div>
                            <label class="sr-only">Linkedin</label>
                            <input
                            onChange={ (e) => setLinkedin(e.target.value) }
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Linkedin"
                            type="text"
                            />
                        </div>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                <form>
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        onChange={ (e) => setCollege(e.target.value) }
                        required 
                        />
                        <label 
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        University Name
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
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Major
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
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Are you currently attending?
                        </label>
                    </div>
                </form>
                </TabPanel>
                <TabPanel>
                <form>
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        onChange={ (e) => setCompany(e.target.value) }
                        required 
                        />
                        <label 
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Work Name
                        </label>
                    </div>
                    <div class="relative z-0 w-full mb-6 group">
                        <input 
                        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder=" "
                        onChange={ (e) => setDescription(e.target.value) }
                        required 
                        />
                        <label 
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Description
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
                        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Are you currently attending?
                        </label>
                    </div>
                </form>
                </TabPanel>
                <TabPanel>
                    <div className="grid place-items-center p-10">
                        <motion.button
                        onClick={() => (generateWebsites("Fname", "Lname", "email"))}
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 font-bold rounded-md'
                        >
                        Generate
                        </motion.button>
                        <motion.a
                        href="/src/backend/output/firstdesign/FirstDesign.html" 
                        download="FirstDesign"
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 m-1 font-bold rounded-md'
                        >
                        Download First Design
                        </motion.a>
                        <motion.a
                        href="/src/backend/output/seconddesign/SecondDesign.html" 
                        download="SecondDesign"
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 m-1 font-bold rounded-md'
                        >
                        Download Second Design
                        </motion.a>
                        <motion.a
                        href="/src/backend/output/thirddesign/ThirdDesign.html" 
                        download="ThirdDesign"
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 m-1 font-bold rounded-md'
                        >
                        Download Third Design
                        </motion.a>
                        <motion.a
                        href="/public/designs.zip" 
                        download="Designs"
                        whileHover={{scale:1.2}} 
                        className='bg-lblue p-4 m-1 font-bold rounded-md'
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