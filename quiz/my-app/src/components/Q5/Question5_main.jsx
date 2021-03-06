import React from "react";

//image
import titleImg from '../../images/Q5/Title@2x.png'
import quiz from '../../images/Q5/Quiz@2x.png'
import quiz2 from '../../images/Q5/Quiz2@2x.png'


import map from "../../images/Q5/Q5_map.png";

import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question5_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'다섯 번째 장소,'}
                title2={'단풍이 드는 이유'}
                titleImg={titleImg}
                quizImg={quiz}
                quizImg2={quiz2}
                question={'추석을 맞이하여, 남산공원에서 가을의 정취를 ' +
                '만끽하고 계신가요? 남산의 단풍은 아름답기로' +
                ' 유명합니다. 혹시 단풍이 드는 이유가 ' +
                '뭔지 아시나요?\n' +
                '아래 마방진에서 a, b를 유추하고, 남산공원에서 ' +
                '‘단풍이 드는 이유’ 라는 안내판을 찾아보세요. ' +
                '이 안내판의 a번째 줄, b번째 단어는 무엇일까요?'}
                map={map}
                mapText={'연못 옆 계단을 내려와 경사길을 따라오세요.\n \'단풍이 드는 이유\'안내판을 찾아보세요!'}
                hintUrl={'/5hint'}
                url={'/5input'}
            />
        </>
    )

}

export default Question5_main;