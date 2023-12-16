import { TailSpin } from "react-loader-spinner";

function Loader() {
    return ( <div className=" w-fit h-[100px] text-center mx-auto m-80">
       <TailSpin
  height="120"
  width="120"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
 </div> );
}

export default Loader;