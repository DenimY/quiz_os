import React from "react";

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
                question={'반갑게 지저귀는 새들의 인사를 들으면서 즐겁게 산책중이신가요? 조용히 귀를 기울여보시면, 남산에 사는 다양한 새소리를 들을 수 있습니다.' +
                '남산에서 관찰되는 천연기념물 야생조류를 황조롱이와 \'____\'입니다. 빈칸에 들어갈 이름은 무엇일까요?'}
                hint={'[힌트] 위의 안내판을 잘 찾아보세요!'}
                map={map}
                mapText={'유아숲체험원과 화장실을 지나 \n\'남산에서 관찰된 야생조류\'안내판을 찾아을 수 있습니다.'}
                ArUrl={true}
                url={'/3input'}
            />
        </>
    )

}

export default Question3_main;