import React, {useState, useEffect} from "react";

//image
import titleImg from '../../images/Q3/Title@2x.png'
import quiz from '../../images/Q3/Quiz@2x.png'


import map from "../../images/Q3/Q3_map.png";

import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question3_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'세 번째 장소,'}
                title2={'남산의 야생조류'}
                titleImg={titleImg}
                quizImg={quiz}
                question={'남산에서 관찰되는 천연기념물 야생조류는\n' +
                '황조룡이와 \'____\'입니다. 빈칸에 들어갈 조류의\n' +
                '이름은 무엇일까요?'}
                hint={'[힌트] 위의 안내판을 잘 찾아보세요!'}
                map={map}
                mapText={'유아숲체험원과 화장실을 지나 \n\'남산에서 관찰된 야생조류\'안내판을 찾아보세요!'}
                ArUrl={true}
                url={'/3/input'}
            />
        </>
    )

}

export default Question3_main;