import React from "react";

//image
import titleImg from '../../images/Q3/Title@2x.png'
import quiz from '../../images/Q5/Quiz@2x.png'
import quiz2 from '../../images/Q5/Quiz2@2x.png'


import map from "../../images/Q5/Q5_map.png";

import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question5_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'세 번째 장소,'}
                title2={'단풍이 드는 이유'}
                titleImg={titleImg}
                quizImg={quiz}
                quizImg2={quiz2}
                question={'아래의 그림에서 a, b를 유추하고, 남산공원에서 \'단푼이 드는 이유\'라는 안내판을 찾아보세요.\n이 안내판의 a번째 줄, b번째 단어는 무엇일까요?'}
                map={map}
                mapText={'연못 옆 계단을 내려와 경사길을 따라오세요.\n \'단풍이 드는 이유\'안내판을 찾아보세요!'}
                hintUrl={'/5hint'}
                url={'/3input'}
            />
        </>
    )

}

export default Question5_main;