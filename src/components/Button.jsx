const Button = ({ styles, content }) => {
  return (
    <button
      type="button"
      className={`${styles} bg-blue-gradient rounded-lg px-6 py-4 font-poppins text-[18px] font-medium text-primary outline-none transition-all duration-200 hover:brightness-125`}
    >
     {content}
    </button>
  )
}

export default Button
