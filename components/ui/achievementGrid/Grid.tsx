import { FC, ReactNode } from "react"
import s from "./Grid.module.css"


interface Props{
    children? : ReactNode[];
  }

const achievementGrid: FC<Props> = ({children}) => {

    return(
        <div className={s.root}>
            {children}
        </div>
    )
}

export default achievementGrid