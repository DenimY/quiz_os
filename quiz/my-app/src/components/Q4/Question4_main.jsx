import React from "react";

//image
import titleImg from '../../images/Q2/Title@2x.png'
import quiz from '../../images/Q4/Quiz.png'


import map from "../../images/Q4/Q4_map.png";

import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question4_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'두 번째 장소,'}
                title2={'남산의 양서류'}
                titleImg={titleImg}
                quizImg={quiz}
                question={' 남산의 연못에서 서식하고 있는 개구리는  산개구리, 참개구리 그리고 \'_____\'입니다. 빈칸에 들어갈 개구리의 이름은 무엇일까요?(네 글자)\n'}
                hint={'[힌트] 위의 안내판을 잘 찾아보세요!'}
                map={map}
                mapText={'실개천을 따라 걸어오세요. 계단 위 연못 근처에 \'남산의 양서류가 살아요\' 안내판을 찾아보세요!'}
                url={'/2input'}
            />
        </>
    )

}

export default Question4_main;