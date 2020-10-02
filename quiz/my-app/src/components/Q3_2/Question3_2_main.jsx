import React from "react";

//image
import titleImg from '../../images/Q3/Title@2x.png'
import BtnAR from '../../images/Q3_2/AR@2x.png'


import QuestionTemplate from '../defaultTemplate/QuestionTemplate'

const Question3_2_main = () => {

    return (
        <>
            <QuestionTemplate
                title={'돌발 문제!'}
                title2={'멸종위기동물'}
                titleImg={titleImg}
                // quizImg={quiz}
                question={'지금은 천연기념물 2종만 남아있지만, 예전에는\n' +
                '남산에 더욱 다양한 새소리를 들을 수 있었다고 \n' +
                '합니다. 자연을 아끼고 보호한다면, 후손들은 \n' +
                '더욱 아름다운 남산을 볼 수 있을 것입니다.\n' +
                '\n' +
                'AR을 활용하여 다른 멸종위기 동물들은 \n' +
                '무엇이 있는지 확인해보세요. 이 중 멸종위기인 \n' +
                '조류를 확인하고, 이 조류는 어디에 서식하는지 \n' +
                '확인해보세요!\n'}
                hint={'*구글과 유플러스가 공동으로 멸종위기 동물에 대한 \n' +
                '경각심을 알리고 보다 생생하게 볼 수 있도록 복원했습니다. \n' +
                '**넘어가기 버튼을 누르면 바로 다음 문제로 이동합니다.\n '}
                url={'/3_2input'}
                nexturl={'/4'}
                BtnAR={BtnAR}
            />
        </>
    )

}

export default Question3_2_main;