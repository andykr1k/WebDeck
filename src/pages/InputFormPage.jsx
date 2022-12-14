import { Steps } from '../components/index'
import { ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Textarea, Progress, Button } from '@chakra-ui/react'
import { generateWebsites } from '../functions/generateWebsites'

export default function InputFormPage() {

    const [Fname, setFname] = useState("");
    const [Lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [college, setCollege] = useState("");
    const [major, setMajor] = useState("");
    const [currentAttend, setCurrentAttend] = useState("");
    const [current, setCurrent] = useState("");
    const [description, setDescription] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [company, setCompany ] = useState("");

    return (
    <div className='grid min-h-screen place-items-center bg-greenblue'> 
        <div className='fixed bottom-0 left-0 z-10 p-10'>
            <a href='/'>
                <motion.button whileHover={{scale:1.2}} className='bg-raisin p-4 rounded-md' >
                    <ArrowBackIcon color='red.600'/>
                </motion.button>
            </a>
        </div>   
        <Tabs isFitted variant='soft-rounded' colorScheme='green'>
            <div className='absolute top-0 left-0 right-0 z-10'>
            <TabList m='1em'>
                <Tab>Basic</Tab>
                <Tab>Education</Tab>
                <Tab>Work</Tab>
                <Tab>Socials</Tab>
            </TabList>
            </div>
            <TabPanels>
                <TabPanel>
                    <div className="lg:grid lg:grid-cols-6">
                        <main
                        aria-label="Main"
                        className="flex items-center justify-center lg:col-span-6"
                        >
                        <div className="max-w-xl lg:max-w-3xl">

                            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label
                                for="FirstName"
                                className="block text-sm font-medium text-gray-700"
                                >
                                First Name
                                </label>

                                <input
                                onChange={ (e) => setFname(e.target.value) }
                                type="text"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label
                                for="LastName"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Last Name
                                </label>

                                <input
                                onChange={ (e) => setLname(e.target.value) }
                                type="text"
                                id="LastName"
                                name="last_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>

                            <div className="col-span-6">
                                <label for="Email" className="block text-sm font-medium text-gray-700">
                                Email
                                </label>

                                <input
                                onChange={ (e) => setEmail(e.target.value) }
                                type="email"
                                id="Email"
                                name="email"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            </form>
                        </div>
                        </main>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="lg:grid lg:grid-cols-6">
                        <main
                        aria-label="Main"
                        className="flex items-center justify-center lg:col-span-6"
                        >
                        <div className="max-w-xl lg:max-w-3xl">

                            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-6">
                                <label
                                for="FirstName"
                                className="block text-sm font-medium text-gray-700"
                                >
                                College
                                </label>

                                <input
                                onChange={ (e) => setCollege(e.target.value) }
                                type="text"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <label
                                for="FirstName"
                                className="block text-sm font-medium text-gray-700"
                                >
                                What is your major?
                                </label>

                                <input
                                onChange={ (e) => setMajor(e.target.value) }
                                type="text"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <label
                                for="FirstName"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Are you attending this college currently? (Yes/No)
                                </label>

                                <input
                                onChange={ (e) => setCurrentAttend(e.target.value) }
                                type="text"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            </form>
                        </div>
                        </main>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="lg:grid lg:grid-cols-6">
                        <main
                        aria-label="Main"
                        className="flex items-center justify-center lg:col-span-6"
                        >
                        <div className="max-w-xl lg:max-w-3xl">

                            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-6">
                                <label
                                for="FirstName"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Company
                                </label>

                                <input
                                onChange={ (e) => setCompany(e.target.value) }
                                type="text"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <label
                                for="FirstName"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Are you currently working here? (Yes/No)
                                </label>

                                <input
                                onChange={ (e) => setCurrent(e.target.value) }
                                type="text"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <label
                                for="FirstName"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Description
                                </label>

                                <Textarea
                                onChange={ (e) => setDescription(e.target.value) }
                                type="text"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            </form>
                        </div>
                        </main>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="fixed bottom-0 right-0 p-10">
                                <motion.button
                                onClick={() => (generateWebsites(Fname, Lname, email))}
                                whileHover={{scale:1.2}} 
                                className='bg-lblue p-4 rounded-md'
                                >
                                <ArrowForwardIcon color='green.600' />
                                </motion.button>
                            </div>
                <div className="lg:grid lg:grid-cols-6">
                        <main
                        aria-label="Main"
                        className="flex items-center justify-center lg:col-span-6"
                        >
                        <div className="max-w-xl lg:max-w-3xl">

                            <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-6">
                                <label
                                for="FirstName"
                                className="block text-sm font-medium text-gray-700"
                                >
                                Linkedin
                                </label>

                                <input
                                onChange={ (e) => setLinkedin(e.target.value) }
                                type="text"
                                id="FirstName"
                                name="first_name"
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                />
                            </div>
                            </form>
                        </div>
                        </main>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>        
    </div>
    )
}