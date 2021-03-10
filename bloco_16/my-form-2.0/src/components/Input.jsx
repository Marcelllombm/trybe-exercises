export function Input (props){
  return (
    <input style={{
      width: '100%', 
      padding:"10px 0",
      marginRight:"30px"}} 
      type={props.typeString} 
      maxLength={props.nubMax} 
      value={props.value}
     />
  );
}