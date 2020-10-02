import React from "react";

//image
import titleImg from '../../images/Q4/Title@2x.png'
import quiz from '../../images/Q4/Quiz.png'


import map from "../../images/Q4/Q4_map.png";

import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question4_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'네 번째 장소,'}
                title2={'남산의 양서류'}
                titleImg={titleImg}
                quizImg={quiz}
                question={'남산에 연못이 있다는 것을 알고 계셨나요? ' +
                '이곳은 가장 많은 양서류를 만날 수 있는 남산 ' +
                '생태 연못입니다. 어린 시절 올챙이와 개구리를 ' +
                '잡던 추억을 떠올리며(혹은 부모님께 들었던) 문제를 풀어봅시다.\n\n' +
                '남산에 서식하고 있는 개구리는 ' +
                '산개구리, 참개구리 그리고 ‘ _____ ’ 입니다. ' +
                '빈칸에 들어갈 개구리의 이름은 무엇일까요?'}
                hint={'[힌트] 위의 안내판을 잘 찾아보세요!'}
                map={map}
                mapText={'실개천을 따라 끝까지 걸어오면, 계단과 경사로가' +
                ' 보입니다. 경사로를 올라와 오른쪽으로 가다보면' +
                ' 조그만 연못에서 ‘남산에 양서류가 살아요’ \n' +
                '안내판이 있습니다.'}
                hintUrl={'/4hint'}
                url={'/4input'}
            />
        </>
    )

}

export default Question4_main;