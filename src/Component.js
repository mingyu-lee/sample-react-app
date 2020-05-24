import React from "react";

function Component() {
    return (
        <div>
            <p>
                <span style={{fontWeight: 700, fontSize: '20px'}}>React의 Component(컴포넌트)</span><br/>
                개념적으로 컴포넌트는 JavaScript 함수와 같다. 임의의 입력(props)을 input하여 화면에 어떻게 보여야하는지를 설명하는 React Element를 반환한다..<br/>
                따라서 합성을 이용하여 “UI를 재사용할 수 있고 독립적인 단위로 쪼개어 생각”할 수 있게 한<br/>
                그래서 컴포넌트는 React.Component를 상속받아 정의하지만 컴포넌트 간에는 상속보다는 합성을 사용하길 권장합니다.<br/>
            </p>
            <p>
                * import React from "react"; 를 항상 써줘야 jsx가 이 Javascript 파일이 component임을 인식
            </p>
        </div>
    );
}

export default Component;
