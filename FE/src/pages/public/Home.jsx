import React from 'react'

const Home = () => {
  return (
    <div className="bg-white w-full">
      <div className="w-full h-fit relative">
        <img src="/banner.png" alt="banner"/>  
        <div className="absolute inset-0 flex flex-col gap-4 pt-12 items-center justify-center">
        <h1 className="text-5xl text-white ">Hãy tìm ngôi nhà mơ ước của bạn...</h1>
        <span className="text-white flex flex-col items-center text-lg">
          <span>Bạn có thể tìm thấy ngôi nhà mơ ước hoặc cơ hội đầu tư hấp dẫn thông qua lượng tin rao lớn, 
          uy tín về các loại hình bất động sản bán tại Việt Nam,</span>
          <span> bao gồm bán nhà riêng và các loại hình BĐS khác.</span>
          </span>
        </div>
        
      </div>
      <div> conntent</div>
    </div>
  )
}

export default Home