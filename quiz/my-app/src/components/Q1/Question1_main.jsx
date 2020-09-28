import React, {useState, useEffect} from "react";

//image
import titleImg from '../../images/Q1/Title@2x.png'
import quiz from '../../images/Q1/Quiz@2x.png'


import map from "../../images/Q1/Q1_map.png";

import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question1_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'첫 번째 장소,'}
                title2={'야생화공원'}
                titleImg={titleImg}
                quizImg={quiz}
                question={'야생화공원의 길을 걸으며 주변에\n' +
                '어떤 야생화가 있는지 둘러보세요.\n' +
                '그리고 다음 식물의 이름을 찾아보세요'}
                hint={'[힌트] 공원의 안의 팻말들을 잘 찾아보세요'}
                map={map}
                mapText={'육교를 건너 남산공원으로 진입 후, 체육시설과 지압보도를 지나 야생화공원으로 들어가세요!'}
                url={'/1/input'}
                url={'/1input'}
            />
        </>
    )

}

export default Question1_main;