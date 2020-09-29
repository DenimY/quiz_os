import React from "react";

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
                question={'우측 위에 있는 \'위치보기\'를 눌러 지도를 확인하고 야생화공원으로 가세요.' +
                ' 야생화공원에 잇는 식물들은 아름답지만 이름은 낯설 것입니다. 그 중 아래 팻말을 찾고, 아래 식물의 이름을 찾아주세요.'}
                hint={'\<과명 | 두릅나무과 송악송> '}
                map={map}
                mapText={'육교를 건너 남산공원으로 진입 후, 체육시설과 지압보도를 지나 야생화공원으로 들어가세요!'}
                url={'/1input'}
            />
        </>
    )

}

export default Question1_main;