import Link from 'next/link';

const BottonAdmin = () => {
    return (
        <div className='flex gap-2 uppercase'>
            <Link href='/BrandList' className='bg-[#15335D] w-28 h-10 rounded-md text-white flex items-center justify-center'>
               List Brand
            </Link>
            <Link href='/CategoryList' className='bg-[#15335D] w-40 h-10 rounded-md text-white flex items-center justify-center'>
                List Category
            </Link>
            <Link href='/ProductList' className='bg-[#15335D] w-40 h-10 rounded-md text-white flex items-center justify-center'>
            List Product
            </Link>
            <Link href='/ReviewList' className='bg-[#15335D] w-28 h-10 rounded-md text-white flex items-center justify-center '>
                List Review
            </Link>
        </div>
    );
};

export default BottonAdmin;
