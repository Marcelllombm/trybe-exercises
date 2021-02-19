import styled from 'styled-components';

export const Wrapper = styled.section`
  width:100%;
  text-align:center;

  input{
    border:none;
    padding:10px;
    background-color:#CFCFCf;
    color:black;
    width:250px;
    font-size:1em;
  }
  button{
  margin-left:10px;
  padding:10px;
  background-color:#518555;
  border:none;
  border-radius:10px;
  font-size:1em;
  font-weight:bold;
  cursor:pointer;
  color:white;
 
  }
`;

export const WrapperList = styled.section`
width:500px;
margin: 0 auto; 
text-align:left;


ul{
  list-style-type:none;
}

li:nth-of-type(2n+1) {
  background-color:#EEEED1;
  margin: 0 10px;
  font-size:1em;
  padding:10px;
}


li:nth-of-type(2n) {
  background-color:#FFFFE0;
  margin: 0 10px;
  font-size:1em;
  padding:10px;
}

`;