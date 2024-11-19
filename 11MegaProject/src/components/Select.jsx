import React,{useId, forwardRef} from 'react'

function Select({
    label,
    className="",
    options,
    ...props
},ref) {

  const id = useId()
  return (
    <div className='w-full'>
        {label && <label
            htmlFor={id} className=""
        />}
        <select className={`px-3 py-2 rounded-lg bg-white 
        text-black outline-none focus:bg-gray-50
        duration-200 border border-gray-200 w-full  ${className}`} 
        id={id}
        {...props} 
        ref={ref}
        >
             {options?.map((option)=>(
                <options key={option} value={option}>
                    {option}
                </options>
             ))}  
        </select>
    </div>
  )
}

export default forwardRef(Select)