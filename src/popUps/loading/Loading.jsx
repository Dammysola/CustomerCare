import style from "./Loading.module.css"

const Loading = () => {
  return (
    <div id={style.wrapper}>
        <div className={style.chaoticOrbit}></div>
    </div>
  )
}

export default Loading