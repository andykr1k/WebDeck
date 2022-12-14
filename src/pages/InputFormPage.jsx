import { Steps } from '../components/index'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function InputFormPage() {
    return (
    <div className='grid min-h-screen place-items-center bg-greenblue'>
        <Tabs isFitted variant='soft-rounded' colorScheme='green'>
        <div className='absolute top-0 left-0 right-0'>
        <TabList m='1em'>
            <Tab>Basic Information</Tab>
            <Tab>Education</Tab>
            <Tab>Work Experience</Tab>
            <Tab>Socials</Tab>
        </TabList>
        </div>
        <TabPanels>
            <TabPanel>
                <div class="lg:grid lg:grid-cols-6">
                    <main
                    aria-label="Main"
                    class="flex items-center justify-center lg:col-span-6"
                    >
                    <div class="max-w-xl lg:max-w-3xl">

                        <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-3">
                            <label
                            for="FirstName"
                            class="block text-sm font-medium text-gray-700"
                            >
                            First Name
                            </label>

                            <input
                            type="text"
                            id="FirstName"
                            name="first_name"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                            <label
                            for="LastName"
                            class="block text-sm font-medium text-gray-700"
                            >
                            Last Name
                            </label>

                            <input
                            type="text"
                            id="LastName"
                            name="last_name"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6">
                            <label for="Email" class="block text-sm font-medium text-gray-700">
                            Email
                            </label>

                            <input
                            type="email"
                            id="Email"
                            name="email"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6 flex items-center justify-center sm:gap-4">
                            <button
                            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white"
                            >
                            <ArrowForwardIcon />
                            </button>
                        </div>
                        </form>
                    </div>
                    </main>
                </div>
            </TabPanel>
            <TabPanel>
            <div class="lg:grid lg:grid-cols-6">
                    <main
                    aria-label="Main"
                    class="flex items-center justify-center lg:col-span-6"
                    >
                    <div class="max-w-xl lg:max-w-3xl">

                        <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-6">
                            <label
                            for="FirstName"
                            class="block text-sm font-medium text-gray-700"
                            >
                            School Name
                            </label>

                            <input
                            type="text"
                            id="FirstName"
                            name="first_name"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6 flex items-center justify-center sm:gap-4">
                            <button
                            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white"
                            >
                            <ArrowForwardIcon />
                            </button>
                        </div>
                        </form>
                    </div>
                    </main>
                </div>
            </TabPanel>
            <TabPanel>
            <div class="lg:grid lg:grid-cols-6">
                    <main
                    aria-label="Main"
                    class="flex items-center justify-center lg:col-span-6"
                    >
                    <div class="max-w-xl lg:max-w-3xl">

                        <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-6">
                            <label
                            for="FirstName"
                            class="block text-sm font-medium text-gray-700"
                            >
                            Work Name
                            </label>

                            <input
                            type="text"
                            id="FirstName"
                            name="first_name"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>

                        <div class="col-span-6 flex items-center justify-center sm:gap-4">
                            <button
                            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white"
                            >
                            <ArrowForwardIcon />
                            </button>
                        </div>
                        </form>
                    </div>
                    </main>
                </div>
            </TabPanel>
            <TabPanel>
            <div class="lg:grid lg:grid-cols-6">
                    <main
                    aria-label="Main"
                    class="flex items-center justify-center lg:col-span-6"
                    >
                    <div class="max-w-xl lg:max-w-3xl">

                        <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                        <div class="col-span-6 sm:col-span-6">
                            <label
                            for="FirstName"
                            class="block text-sm font-medium text-gray-700"
                            >
                            Linkedin
                            </label>

                            <input
                            type="text"
                            id="FirstName"
                            name="first_name"
                            class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                        </div>
                        
                        <div class="col-span-6 flex items-center justify-center sm:gap-4">
                            <button
                            class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white"
                            >
                            <ArrowForwardIcon />
                            </button>
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