import axios from "axios";
import { useState } from "react"
import {FaEnvelope} from "react-icons/fa"


const ContactSection = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<any | Boolean>(null);
  const [message, setMessage] = useState("");
  const [formLoading, setFormLoading] = useState(false)


  const handleSubmit = async(e: any) => {
    e.preventDefault()
    try {
      setFormLoading(true)
      await axios.post("")
    } catch (error) {
      
    }finally{
      setFormLoading(false)
    }
  }

  const TeleDetails =()=> {
    return(
      <div className="flex flex-row gap-4 justify-start items-start">
        <div>
          <FaEnvelope size={35} />
        </div>
        <div>
          <h2>Phone Number</h2>
          <p>+(234)567890</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-contactbg bg-cover bg-center py-24">
        <div className="container">
          <div className="shadow-lg rounded-xl mx-24 px-12 py-20 bg-white grid grid-cols-1 md:grid-cols-2 justify-start items-center">
            <div>
              <p className="text-primary">Contact Us</p>
              <h3 className="text-2xl font-['800']">Get In Touch With Us</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero iste, eos veniam, fugit soluta quam illum rerum perferendis aliquid cumque animi sint consectetur, tenetur magnam eum doloremque amet fugiat! Architecto?</p>
              <div>
                <div>
                  <TeleDetails />
                </div>
              </div>
            </div>
            <div>
              <div className="bg-primary bg-opacity-60 px-4 py-12 rounded-xl">
                <div className="flex flex-col gap-1">
                  <label className="text-xl font-semibold">Full Name</label>
                  <input type="text" className="p-2 rounded outline-none" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xl font-semibold">Email Address</label>
                  <input type="text" className="p-2 rounded outline-none" value={email}  onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xl font-semibold">Phone Number</label>
                  <input type="number" className="p-2 rounded outline-none" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xl font-semibold">Message</label>
                  <textarea name="" id="" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full h-32 p-2 rounded-lg"></textarea>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded-xl" onClick={handleSubmit}>{formLoading ? "Submitting..." : "Send Message"}  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default ContactSection