function BorderedImage(props) {
  return (
      <img src={require('./' + props.img_src)} alt={props.img_desc} width="100px" style ={
      {"border": "4px solid red"}
      }
      />
  )
}

export default BorderedImage;