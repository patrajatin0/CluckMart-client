import FRONT_LOGO from "../assets/CluckMart_logo.png"
function Footer() {
    return (
        <div>
            <div className="bg-pink-500 p-2">
                <div className="flex justify-around py-8 border-b-2 border-gray-50 mb-6">
                    <div className="flex flex-row">
                        <img src={FRONT_LOGO} className="w-10 h-10" alt="" />
                        <p className="text-2xl text-gray-50 font-bold ">CluckMart</p>
                    </div>
                    <div>
                        <h3 className="text-gray-50">Contact Us</h3>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <i class="fa-solid fa-phone text-gray-50"></i>
                                <span className="text-gray-50">12345678</span>
                            </div>
                            <div className="flex items-center gap-2" >
                                <i class="fa-regular fa-envelope text-gray-50"></i>
                                <span className="text-gray-50">CluckMart@gmail.com</span>
                            </div>

                        </div>

                    </div>

                </div>
                <div className="flex justify-around mb-6">
                    <div className="text-gray-50">&copy; CluckMart. All right reserved.</div>
                    <div className="flex flex-row gap-2  ">
                        <i class="fa-brands fa-facebook text-gray-50 cursor-pointer"></i>
                        <i class="fa-brands fa-linkedin text-gray-50 cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Footer