import * as React from 'react';

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export default function InputForm() {
    const [personalinfo, setPersonalinfo] = React.useState('{}')
    const [edinfo, setEdinfo] = React.useState('')
    const [expinfo, setExpinfo] = React.useState('')
    const [socialinfo, setSocialinfo] = React.useState('')

  return ( 
    <div class='p-10 w-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:space-x-2'>
    <div className='grid place-items-center'>
        <h2 className='text-greylight font-semibold'>Personal Information</h2>
        <textarea id='personal' value={personalinfo} onChange={(e) => setPersonalinfo(e.target.value)} className='border-2 rounded bg-transparent p-5 h-144 md:h-160 text-stone-900 dark:text-white' />
    </div>
    <div className='grid place-items-center'>
        <h2 className='text-greylight font-semibold'>Personal Information</h2>
        <textarea className='bg-transparent border' />
    </div>
    <div className='grid place-items-center'>
        <h2 className='text-greylight font-semibold'>Personal Information</h2>
        <textarea className='bg-transparent border' />
    </div>
    <div className='grid place-items-center'>
        <h2 className='text-greylight font-semibold'>Personal Information</h2>
        <textarea className='bg-transparent border' />
    </div>
    </div>
  );
}