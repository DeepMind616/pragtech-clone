import { FC, ReactNode } from "react"
import s from "./WeveBuiltGrid.module.css"


interface Props{
    children? : ReactNode[] | ReactNode;
  }

const WeveBuiltGrid: FC<Props> = ({children}) => {

    return(
        <div className={s.root}>
            {children}
        </div>
    )
}
export default WeveBuiltGrid