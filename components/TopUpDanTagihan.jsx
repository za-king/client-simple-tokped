import Pulsa from "./Pulsa";
import PaketData from "./PaketData";
import Listrik from "./Listrik";
const TopUpDanTagihan = (props) => {
  
  return (
    <>
      <div className="h-36 w-[95%] mt-4 border shadow-md rounded-lg grid grid-rows-3">
        <div className="grid grid-cols-4 border-b-2 justify-items-center items-center text-base text-gray-600">
          <div>pulsa</div>
          <div>paket data</div>
          <div>flight</div>
          <div>listrik</div>
        </div>
        <div className="row-span-2"><Pulsa/></div>
      </div>
    </>
  );
};

export default TopUpDanTagihan;
