import styled from 'styled-components';


function Button(props) {
    const {text} = props;
    const Button = styled.button`
      background-color: #f1f1f1;
      color: #333;
      padding: 20px 20px;
      font-size: 16px;
      border-radius: 4px;
      cursor: pointer;
    `;


    return (
        <>
            <Button>
                {text}
            </Button>
        </>
    );
}

export default Button;
