import { Link } from "react-router-dom";
import NavBar from "../../Main/NavBar";
import Footer from "../../Main/Footer";

const Select = () => {
    return (
        <>
        <main className="sm:h-screen bg-neutral-600 font-[Pretendard]">
        <NavBar />
        
        {/* Button Wrapper */}
        <div className="top-[140px] sm:pt-[20px] min-w-full h-[615px] sm:h-[500px] flex justify-center relative bg-neutral-100 text-white font-bold text-[30px] sm:text-[45px]">
          <div className="w-[390px] sm:w-[1000px] h-full relative p-[20px] flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* 임산부 요가 */}
          <Link to="/SelectCare/Yoga">
              <button className="text-left w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] bg-neutral-400 rounded-[20px] shadow border-4">
                임산부<br />
                요가
                
              </button>
            </Link>

          {/* 노인 스트레칭 */}
          <Link to="/SelectCare/Stretching">
              <button className="text-left w-[200px] sm:w-[240px] h-[180px] sm:h-[324px] p-[20px] bg-neutral-400 rounded-[20px] relative shadow border-4">
                  노인<br />
                  스트레칭
                
              </button>
            </Link>

          </div>
        </div>

    {/* Footer */}
      <Footer />
        </main>
       
        </>
    );
};

export default Select;