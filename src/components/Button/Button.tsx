import React from 'react'
import '/src/main.css'

export interface ButtonProps {
   /**
    * Is this the principal call to action on the page?
    */
   type?: 'primary' | 'secondary'
   /**
    * What background color to use
    */
   textColor?: string
   /**
    * How large should the button be?
    */
   size?: 'small' | 'medium' | 'large'
   /**
    * Button contents
    */
   label: string
   /**
    * Optional click handler
    */
   onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

/**
 * Primary UI component for user interaction
 */
const Button = (props: ButtonProps) => {
   const { textColor, onClick, label, ...rest } = props

   return (
      <button
         {...rest}
         type='button'
         className={`
         transition-transform
         relative bg-blue-500 rounded-full py-1 px-2 
         hover:translate-x-1 hover:-translate-y-1
         after:w-full after:bg-black after:h-full after:absolute after:-left-1 after:top-1 after:-z-[1] after:rounded-full after:transition-transform
         hover:after:bg-gradient-to-br hover:after:from-rose-400 hover:after:via-fuchsia-500 hover:after:z-[-1] hover:after:to-indigo-500  hover:after:-translate-x-1 hover:after:translate-y-1
         `}
         onClick={onClick}
      >
         {label}
      </button>
   )
}

export default Button
