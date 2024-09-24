import React from 'react'
interface PopupProfileUpdateParam{
  setIsVisible:boolean
}

const PopupProfileUpdate: React.FC <PopupProfileUpdateParam>= ({setIsVisible}) =>  {
function close(){
  setIsVisible(false);
}
  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover backdrop-filter backdrop-brightness-75">
                <div className="absoluteopacity-80 inset-0 z-0 "></div>
                <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
                        <div>
                            <p className="text-sm text-gray-600">Password</p>
                            <input className="border-2 border-double rounded-tl rounded-br w-full h-10"/>
                        </div>
                        <div  className=' flex gap-2 justify-end'>
                                    <button type='button' className="text-indigo-600 text-sm font-semibold hover:underline">
                                        Update
                                    </button>
                                    <button type='button' className="text-indigo-600 text-sm font-semibold hover:underline">
                                        close
                                    </button>
                        </div>
                </div>
    </div>
  )
}

export default PopupProfileUpdate