import React, {useState, useEffect} from "react";
import styled from 'styled-components'

import Question1 from './Question1'

// import

const MainComponentStyled = styled.div`
//height: 100%;

//.Cont {
//
//}

`

const MainComponent = () => {

    return (
        <MainComponentStyled>

            <Question1/>


            {/*<div className='cont-header'>*/}
            {/*    AR 퀘스트(1)*/}

            {/*    <div className='title'>*/}
            {/*        <div className='first'>*/}
            {/*            첫 번째 미션,*/}
            {/*        </div>*/}
            {/*        <div className='second'>*/}
            {/*            남산의 야생조류*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*/!*question image *!/*/}
            {/*<div className='cont-body'>*/}
            {/*    <img src=''>*/}
            {/*    </img>*/}
            {/*</div>*/}

            {/*/!*질문*!/*/}
            {/*<div>*/}

            {/*</div>*/}

            {/*<div className='footer'>*/}
            {/*    <input type='Button' className='btn-result' value='정답 입력하기'/>*/}

            {/*</div>*/}
        </MainComponentStyled>
    )


}

export default MainComponent;