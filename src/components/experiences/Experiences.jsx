import React, { useState } from 'react'
import Experience from './Experience'

function Experiences({check}) {
   const [experience, setExperience] = useState([
    { index : 1,
      year : 2021 , 
      contents : 
      [ {title : '단국대학교 식품공학과 졸업'}, 
        {title : '방송통신대학교 컴퓨터과학과 입학'}, 
        {title : 'Java 기반 부트캠프 수료'}, 
        {title : '(주)팀스페이스팜 입사' , 
        detail : 
        (<p className={`${check? 'text-gray-400' : 'text-gray-700'} w-[90%]`}>
            <span className={`${check? 'text-gray-400' : 'text-g7ray-700'} italic`}> 2021.09 ~ 2023.10 ( 2년 1개월 )</span>
            <span className='h-2 block'></span>
            신규 서비스 스마트 쑥쑥의 프론트엔드 전 영역을 맡아서 개발했습니다.   
            <span className='h-1 block'></span>
            스마트 쑥쑥은 IoT 환경 센서 기반 농장 모니터링 및 데이터 기반 농업 솔루션을 제공하는 등 농가의 생산량 증진을 위한 종합 관리 서비스입니다.</p>)},]},
   {index : 2, 
    year : 2023 , 
    contents : 
    [{title : '(주)팀스페이스팜 퇴사'}]},
    { index : 3,
      year : 2024 , 
      contents : 
      [{title : '원티드 프리온보딩코스 수료'},
       {title : '항해99 리부트 캠프 수료'}]},
   ])

  return (
    <section className='pt-8'>
    <div className='container m-auto px-4'>
      <h2 className='text-2xl font-semibold'>Experience</h2>
      <div className={`mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full  before:bottom-24 before:w-1
      ${check? 'before:bg-white ' : 'before:bg-yellow-100'}`}>
        {experience.map((item, index)=> (
            <Experience key={index} experience={item} check={check}/>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Experiences
