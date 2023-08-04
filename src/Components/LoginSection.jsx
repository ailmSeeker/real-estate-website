import React from 'react'

const LoginSection = () => {
  return (
    <div>
<div className="z-50 left-0 top-0 flex min-h-[100vh] w-full items-center justify-center bg-slate-900 bg-opacity-50 py-5">
  <div className="max-h-full w-50 max-w-xl overflow-y-auto shadow sm:rounded-2xl bg-white">
    <div className="w-full">
      <div className="m-8 my-20 max-w-[350px] mx-auto">
        <div className="mb-2">
          <h1 className="mb-0 text-3xl font-extrabold text-center">Login</h1>
        </div>
        <div className="space-y-2">
        <form className='p-1'>
        <div className="flex flex-col my-2">
        <label className='p-0 w-full font-semibold text-2xl text-slate-600'>Enter your email / username</label>
        </div>
        <input type="text" className='w-[100%] p-2 rounded active:shadow-stone-400 active:bg-slate-100' placeholder="Email or Username ..." required/>
        <div className="flex flex-col my-2">
        <label>Enter your password</label>
        <input type="password" className='w-[100%] p-2 rounded active:shadow-stone-400 active:bg-slate-100' placeholder="Password" required/>
        </div>
        <button className="p-3 mt-7 bg-black rounded-full text-white w-full font-semibold">Login</button>
        </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default LoginSection
        //  {/* <button className="p-3 bg-white border rounded-full w-full font-semibold">Skip for now</button> */}