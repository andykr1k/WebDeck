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
    <div className='grid min-h-screen place-items-center bg-greenblue'> 
        <div className='fixed bottom-0 left-0 z-10 p-10'>
            <a href='/'>
                <motion.button whileHover={{scale:1.2}} className='bg-lblue p-4 rounded-md flex justify-center items-center gap-1 font-bold' >
                    <ArrowBackIcon color='red.600'/>
                    Back
                </motion.button>
            </a>
        </div>   
        <Tabs isFitted variant='soft-rounded' colorScheme='whiteAlpha'>
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
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                <div class="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
                        <form action="" class="space-y-4">
                        <div>
                            <label class="sr-only">University Name</label>
                            <input
                            onChange={ (e) => setCollege(e.target.value) }
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="University Name"
                            type="text"
                            />
                        </div>
                        <div>
                            <label class="sr-only">Major</label>
                            <input
                            onChange={ (e) => setMajor(e.target.value) }
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Major"
                            type="text"
                            />
                        </div>
                        <div>
                            <label class="sr-only">Current</label>
                            <input
                            onChange={ (e) => setCurrentAttend(e.target.value) }
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Are you currently attending?"
                            type="text"
                            />
                        </div>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                <div class="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
                        <form action="" class="space-y-4">
                        <div>
                            <label class="sr-only">Company Name</label>
                            <input
                            onChange={ (e) => setCompany(e.target.value) }
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Company Name"
                            type="text"
                            />
                        </div>
                        <div>
                            <label class="sr-only">Current</label>
                            <input
                            onChange={ (e) => setCurrent(e.target.value) }
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Are you currently working here?"
                            type="text"
                            />
                        </div>
                        <div>
                            <label class="sr-only">Description</label>
                            <textarea
                            onChange={ (e) => setDescription(e.target.value) }
                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Work Description"
                            type="text"
                            />
                        </div>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="fixed bottom-0 align-middle right-0 p-10">
                                <motion.button
                                onClick={() => (generateWebsites(Fname, Lname, email))}
                                whileHover={{scale:1.2}} 
                                className='bg-lblue p-4 font-bold rounded-md'
                                >
                                Generate
                                </motion.button>
                            </div>
                    <div class="rounded-lg bg-white p-8 lg:col-span-3 lg:p-12">
                        <form action="" class="space-y-4">
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
            </TabPanels>
        </Tabs>        
    </div>
    )
}