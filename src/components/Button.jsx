/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling



const Button = ({styles}) => (
   <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins 
   font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles} rounded-[10px]`}>
      Get Started
   </button>
  )


export default Button