import { TestImg } from "../assets"
interface Testypes {

}
const TestimonyCard = ({}: Testypes) => {
  return (
    <div className="rounded-xl backdrop-blur-xl text-center shadow-lg p-8 relative flex flex-col justify-center items-center bg-white">

            <img src={TestImg} alt="" className=" absolute -top-14 rounded-full w-28 h-28" />
            <div className="pt-8">
                <p>Full Name</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis nobis facere cupiditate corporis hic, necessitatibus aspernatur numquam iusto, libero sapiente, velit maxime dicta architecto delectus sequi veritatis earum nihil quia.</p>

    </div>
  )
}

export default TestimonyCard