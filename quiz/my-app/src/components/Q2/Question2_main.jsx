import React, {useState, useEffect} from "react";

//image
import titleImg from '../../images/Q2/Title@2x.png'
import quiz from '../../images/Q2/Quiz@2x.png'


import map from "../../images/Q2/Quiz@2x.png";

import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question1_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'두 번째 장소,'}
                title2={'8도 소나무 단지'}
                titleImg={titleImg}
                quizImg={quiz}
                question={'아래의 물음표에 들어가는 글자를\n' +
                '유추해보세요. 그리고 \'정이품송 맏아들나무\'\n' +
                '안내판을 찾은 후, 안내판에 물음표가 들어가 \n' +
                '단어를 찾아 입력하세요(세글자)'
                }
                map={map}
                hintUrl={'/2/hint'}
                url={'/2/input'}
            />
        </>
    )

}

export default Question1_main;