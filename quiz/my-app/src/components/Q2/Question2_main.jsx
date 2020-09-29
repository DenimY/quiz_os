import React from "react";

//image
import titleImg from '../../images/Q2/Title@2x.png'
import quiz from '../../images/Q2/Quiz@2x.png'


import map from "../../images/Q2/Q2_map.png";

import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question1_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'두 번째 장소,'}
                title2={'8도 소나무 단지'}
                titleImg={titleImg}
                quizImg={quiz}
                question={'기품있는 8도 소나무 단지를 감상해보세요. 그리고 \'정이품송 맏아들나무\'를 만나게 된다면 안내판을 유심히 읽어보세요. ' +
                '이번 문제의 정답인 "■◆▲"는 정이품송의 기념비적인 의미를 나타내는 세 자리 글자 또는 숫자를 찾을 수 있습니다.'
                }
                map={map}
                mapText={'야생화공원의 길을 따라 8도 소나무 단지에서 \'정이품송 맏아들나무\'안내판을 찾아보세요! \n\'충청북도\'표지석(바닥) 옆에 있습니다'}
                hintUrl={'/2hint'}
                url={'/2input'}
            />
        </>
    )

}

export default Question1_main;