import { arrowUp } from "../assets"

const GetStarted = () => {
  return (
    <div className="flexCenter bg-blue-gradient h-[140px] w-[140px] cursor-pointer rounded-full p-[2px]">
      <div className="flexCenter h-full w-full cursor-pointer flex-col rounded-full bg-primary">
        <div className="flexStart">
          <p className="text-gradient font-poppins text-[18px] font-medium leading-[24px]">
            Schedule
          </p>
        </div>
        <p className="font-poppins text-[18px] font-medium leading-[24px]">
          <span>Time</span>
        </p>
        <img
          src={arrowUp}
          alt="arrow"
          className="mt-2 h-[23px] w-[23px] object-contain"
        />
      </div>
    </div>
  )
}

export default GetStarted
