import React, {useState, useEffect} from "react";

//image
import titleImg from '../../images/Q3/Title@2x.png'
// import quiz from '../../images/Q3_2/Quiz@2x.png'
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
                question={'AR을 활용하여 다른 멸종위기 동물들은\n' +
                '무엇이 있는지 확인해보세요.\n' +
                '그리고 이 중 멸종위기인 조류를 확인하고\n' +
                '이 조류는 어디에 서식하는지 맞춰보세요!'}
                url={'/3_2/input'}
                BtnAR={BtnAR}
            />
        </>
    )

}

export default Question3_2_main;