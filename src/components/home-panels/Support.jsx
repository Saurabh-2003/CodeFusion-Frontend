import {Tablet, Smartphone, Laptop} from 'lucide-react'

export default function Support ()   {
    return (
        <div className='pt-10 flex flex-col gap-6 text-stone-400 items-center justify-center'>
            <h3 className='text-[12px] font-bold '>Support across all devices</h3>
            <div className='flex gap-6 items-center justify-center'>
                <Smartphone size={50} className='cursor-pointer hover:text-emerald-600' />
                <Tablet size={50} className='cursor-pointer hover:text-emerald-600' />
                <Laptop size={60} className='cursor-pointer hover:text-emerald-600' />
            </div>
        </div>
    )
}