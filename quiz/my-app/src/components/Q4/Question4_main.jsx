import React, {useState, useEffect} from "react";

//image
import titleImg from '../../images/Q1/Title@2x.png'
import quiz from '../../images/Q1/Quiz@2x.png'


import map from "../../images/Q1/Quiz@2x.png";

import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question4_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'네 번째 장소,'}
                title2={'야생화공원'}
                titleImg={titleImg}
                quizImg={quiz}
                question={'야생화공원의 길을 걸으며 주변에\n' +
                '어떤 야생화가 있는지 둘러보세요.\n' +
                '그리고 다음 식물의 이름을 찾아보세요'}
                hint={'[힌트] 공원의 안의 팻말들을 잘 찾아보세요'}
                map={map}/>
        </>
    )

}

export default Question4_main;