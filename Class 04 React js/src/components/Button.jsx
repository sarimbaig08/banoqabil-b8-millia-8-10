function Button(props){

    return(
<>
<button onClick={props.func}>{props.btnText}</button>
</>
    )
}

export default Button